import React from 'react';
import { useDrop } from 'react-dnd';
import type { Word } from '@/entities/Words/types/wordsTypes';
import styles from './DropZone.module.scss';

const ItemTypes = {
  WORD: 'word',
};

type DropZoneProps = {
  position: 'prefix' | 'root' | 'suffix';
  onDrop: (word: Word, position: 'prefix' | 'root' | 'suffix') => void;
  selectedWord: Word | null;
};

const DropZone = ({ position, onDrop, selectedWord }: DropZoneProps): React.JSX.Element => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.WORD,
    drop: (item: { word: Word }) => onDrop(item.word, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={styles.dropZone}
      style={{ backgroundColor: isOver ? '#eee' : '#fff' }}
    >
      {position.toUpperCase()}:{' '}
      {selectedWord ? `${selectedWord.word} (${selectedWord.type})` : 'Перетащите слово сюда'}
    </div>
  );
};

export default DropZone;
