import React from 'react';
import { useDrag } from 'react-dnd';
import type { Word } from '@/entities/Words/types/wordsTypes';
import styles from './WordItem.module.scss';

const ItemTypes = {
  WORD: 'word',
};

type WordItemProps = {
  word: Word;
};

const WordItem = ({ word }: WordItemProps): React.JSX.Element => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.WORD,
    item: { word },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} className={styles.wordItem} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <div>
        {word.word} ({word.type})
      </div>
      <div className={styles.wordDetails}>
        <p>Значение: {word.meaning}</p>
        <p>Язык: {word.language}</p>
        <p>Категория: {word.category}</p>
      </div>
    </div>
  );
};

export default WordItem;
