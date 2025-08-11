import React, { useEffect, useState } from 'react';
import { fetchSpells, updateSpell, deleteSpell } from '@/entities/Spells/model/spellsThunks';
import type { Spell, UpdateSpell } from '@/entities/Spells/types/spellsTypes';
import styles from './SpellsPage.module.scss';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import Loader from '@/features/Loader/ui/Loader';

const SpellsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: spells, loading } = useAppSelector((state) => state.spells);

  const [editingSpell, setEditingSpell] = useState<Spell | null>(null);
  const [editName, setEditName] = useState('');
  const [editDescription, setEditDescription] = useState('');
  

  useEffect(() => {
    dispatch(fetchSpells());
  }, [dispatch]);

  const handleEdit = (spell: Spell) => {
    setEditingSpell(spell);
    setEditName(spell.name);
    setEditDescription(spell.description || '');
  };

  const handleSave = async () => {
    if (!editingSpell) return;

    const spellData: UpdateSpell = {
      name: editName,
      description: editDescription,
    };

    try {
      await dispatch(updateSpell({ id: editingSpell.id, spellData })).unwrap();

      setEditingSpell(null);
      dispatch(fetchSpells());
    } catch (err: any) {
      alert('Ошибка при сохранении: ' + (err.message ?? JSON.stringify(err)));
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Удалить заклинание?')) {
      await dispatch(deleteSpell(id));
      dispatch(fetchSpells());
    }
  };

  if (loading) return <Loader />;

  return (
    <div className={styles.spellsPage}>
      <h2>Книга заклинаний</h2>
      <ul>
        {spells.map((spell) => (
          <li key={spell.id}>
            {editingSpell?.id === spell.id ? (
              <>
                <input
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  placeholder="Название"
                />
                <textarea
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  placeholder="Описание"
                />
                <button onClick={handleSave}>Сохранить</button>
                <button onClick={() => setEditingSpell(null)}>Отмена</button>
              </>
            ) : (
              <>
                <strong>{spell.name}</strong>
                <p>Инкантация: {spell.pronunciation}</p>
                <div className={styles.tags}>
                  {spell.Words?.map((w: any) => (
                    <span key={w.id} className={styles.tag}>
                      {w.word}
                    </span>
                  ))}
                </div>
                <p>Описание: {spell.description}</p>
                <div className={styles.actions}>
                  <button onClick={() => handleEdit(spell)}>Редактировать</button>
                  <button onClick={() => handleDelete(spell.id)}>Удалить</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpellsPage;
