import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Character } from '@/types';
import placeholderImage from '@/assets/default-avatar.jpg';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/hooks/favorites';

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const navigate = useNavigate();
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const handleNavigateToCharacter = (id: string) => {
    navigate(`/character/${id}`);
  };

  const isFavorite = (id: string) => {
    const favorite = favorites.find((char) => char.id === id);
    return favorite;
  };

  const handleFavoriteClick = (character: Character) => {
    if (isFavorite(character.id)) {
      removeFavorite(character.id);
    } else {
      addFavorite(character);
    }
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4'>
      {characters.map((character) => (
        <Card
          key={character.id}
          className='shadow-lg hover:shadow-xl transition-shadow cursor-pointer'
          onClick={() => handleNavigateToCharacter(character.id)}
        >
          <CardHeader className='relative'>
            <Avatar className='w-24 h-24 mx-auto'>
              <img
                src={character.image || placeholderImage}
                alt={character.name}
                className='rounded-full'
              />
            </Avatar>
            <CardTitle className='text-center mt-4'>{character.name}</CardTitle>
            <Button
              variant='ghost'
              className='absolute top-[-15px] right-2 z-10 cursor-pointer'
              onClick={(event) => {
                event.stopPropagation();
                handleFavoriteClick(character);
              }}
            >
              <Heart fill={isFavorite(character.id) ? '#000' : '#FFF'} />
            </Button>
          </CardHeader>
          <CardContent className='text-center'>
            <p className='text-sm text-muted-foreground'>
              House: {character.house || 'Unknown'}
            </p>
            <p className='text-sm text-muted-foreground'>
              Ancestry: {character.ancestry || 'Unknown'}
            </p>
            <p className='text-sm text-muted-foreground'>
              Patronus: {character.patronus || 'None'}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default CharacterList;
