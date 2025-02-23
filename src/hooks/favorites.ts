import { Character } from '@/types';
import { useState, useEffect } from 'react';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem('favorites') || '[]'
    );
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (character: Character) => {
    if (!favorites.some((char) => char.id === character.id)) {
      const newFavorites = [...favorites, character];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const removeFavorite = (characterId: string) => {
    const newFavorites = favorites.filter((char) => char.id !== characterId);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  return { favorites, addFavorite, removeFavorite };
};
