import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { fetchWords } from '@/entities/Words/model/wordsThunks';
import { createSpell } from '@/entities/Spells/model/spellsThunks';
import { createSpellComponent } from '@/entities/SpellComponents/model/spellComponentsThunks';
import type { Word } from '@/entities/Words/types/wordsTypes';
import { SpellSchema, type CreateSpell } from '@/entities/Spells/types/spellsTypes';
import WordItem from '@/features/SpellGenerator/ui/WordItem/WordItem';
import DropZone from '@/features/SpellGenerator/ui/DropZone/DropZone';
import styles from './HomePage.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import Loader from '@/features/Loader/ui/Loader';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { words } = useAppSelector((state) => state.words);
  const { loading } = useAppSelector((state) => state.spells);

  const [selectedComponents, setSelectedComponents] = useState<{
    prefix: Word | null;
    root: Word | null;
    suffix: Word | null;
  }>({
    prefix: null,
    root: null,
    suffix: null,
  });

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    dispatch(fetchWords());
  }, [dispatch]);

  const handleDrop = (word: Word, position: 'prefix' | 'root' | 'suffix') => {
    if (word.type !== position && word.type !== 'word') {
      alert('Эта часть не подходит для выбранной позиции!');
      return;
    }
    setSelectedComponents((prev) => ({ ...prev, [position]: word }));
  };

  const handleCreate = async () => {
    if (!selectedComponents.prefix && !selectedComponents.root && !selectedComponents.suffix) {
      alert('Добавьте хотя бы одну часть заклтинания!');
      return;
    }

    const parts = [
      selectedComponents.prefix,
      selectedComponents.root,
      selectedComponents.suffix,
    ].filter(Boolean);
    const generatedPronunciation = parts.map((w) => w!.word).join('');
    const generatedName = name || parts.map((w) => w!.meaning).join(' ');

    const spellData: CreateSpell = {
      Words: parts,
      name: generatedName,
      description,
      pronunciation: generatedPronunciation,
    };

    try {
      const spellResponse = await dispatch(createSpell(spellData));
      const spell_id = SpellSchema.parse(spellResponse.payload).id;

      if (selectedComponents.prefix) {
        await dispatch(
          createSpellComponent({
            spell_id,
            word_id: selectedComponents.prefix.id,
            position: 'prefix',
          }),
        );
      }
      if (selectedComponents.root) {
        await dispatch(
          createSpellComponent({
            spell_id,
            word_id: selectedComponents.root.id,
            position: 'root',
          }),
        );
      }
      if (selectedComponents.suffix) {
        await dispatch(
          createSpellComponent({
            spell_id,
            word_id: selectedComponents.suffix.id,
            position: 'suffix',
          }),
        );
      }

      setIsLoader(true);
      setTimeout(() => {
        setIsLoader(false);
      }, 2000)

      setSelectedComponents({ prefix: null, root: null, suffix: null });
      setName('');
      setDescription('');
    } catch (error) {
      console.error('Ошибка изобретения заклинания!');
    }
  };

  const prefixes = words.filter((w) => w.type === 'prefix' || w.type === 'word');
  const roots = words.filter((w) => w.type === 'root' || w.type === 'word');
  const suffixes = words.filter((w) => w.type === 'suffix' || w.type === 'word');

  if (isLoader) {
    return <Loader />;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.homePage}>
        <h2>Время магии</h2>
        <div className={styles.wordsContainer}>
          <div>
            <h3>Префиксы</h3>
            {prefixes.map((word) => (
              <WordItem key={word.id} word={word} />
            ))}
          </div>
          <div>
            <h3>Корни</h3>
            {roots.map((word) => (
              <WordItem key={word.id} word={word} />
            ))}
          </div>
          <div>
            <h3>Суффиксы</h3>
            {suffixes.map((word) => (
              <WordItem key={word.id} word={word} />
            ))}
          </div>
          <div className={styles.form}>
            <DropZone
              position="prefix"
              onDrop={handleDrop}
              selectedWord={selectedComponents.prefix}
            />
            <DropZone position="root" onDrop={handleDrop} selectedWord={selectedComponents.root} />
            <DropZone
              position="suffix"
              onDrop={handleDrop}
              selectedWord={selectedComponents.suffix}
            />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Название заклинания"
            />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Описание"
            />
            <button
              className={styles.createButton}
              type="button"
              onClick={handleCreate}
              disabled={loading}
            >
              Сварить
            </button>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default HomePage;
