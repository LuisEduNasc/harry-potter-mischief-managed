import CharacterList from '@/components/characterList';
import { useFavorites } from '@/hooks/favorites';

export const Favorites: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <>
      <CharacterList characters={favorites || []} />
    </>
  );
};
