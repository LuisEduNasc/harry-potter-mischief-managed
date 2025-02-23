import { useParams } from 'react-router-dom';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

import placeholderImage from '@/assets/default-avatar.jpg';
import { getCharacter } from '@/api';
import { Character } from '@/types';

export const CharacterDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isFetching, isError } = useQuery<Character[]>({
    queryKey: ['character'],
    queryFn: async () => getCharacter(id || ''),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  if (isError) {
    return <p>Error getting the character</p>;
  }

  if (isFetching) {
    return <p>Fetching...</p>;
  }

  if (!data?.length) {
    return (
      <p className='text-center text-gray-600 mt-10'>Character not found.</p>
    );
  }

  const character = data[0];

  return (
    <div className='min-h-screen bg-gray-100 p-4 md:p-8'>
      <div className='max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden'>
        <img
          src={character.image || placeholderImage}
          alt={character.name}
          className='w-full h-64 object-cover'
        />
        <div className='p-6'>
          <h1 className='text-2xl font-bold text-gray-800'>{character.name}</h1>
          <p className='text-gray-600'>{character.actor}</p>

          {character.alternate_names?.length > 0 && (
            <p className='mt-2 text-sm text-gray-500'>
              Also known as: {character.alternate_names.join(', ')}
            </p>
          )}

          <div className='mt-4 space-y-2'>
            <p>
              <span className='font-semibold'>House:</span> {character.house}
            </p>
            <p>
              <span className='font-semibold'>Date of Birth:</span>{' '}
              {character.dateOfBirth || 'Unknown'}
            </p>
            <p>
              <span className='font-semibold'>Ancestry:</span>{' '}
              {character.ancestry || 'Unknown'}
            </p>
            <p>
              <span className='font-semibold'>Patronus:</span>{' '}
              {character.patronus || 'None'}
            </p>
            <p>
              <span className='font-semibold'>Eye Color:</span>{' '}
              {character.eyeColour || 'Unknown'}
            </p>
            <p>
              <span className='font-semibold'>Hair Color:</span>{' '}
              {character.hairColour || 'Unknown'}
            </p>
          </div>

          <div className='mt-4'>
            <h3 className='text-lg font-semibold'>Wand</h3>
            <p>
              <span className='font-semibold'>Wood:</span>{' '}
              {character.wand?.wood}
            </p>
            <p>
              <span className='font-semibold'>Core:</span>{' '}
              {character.wand?.core}
            </p>
            <p>
              <span className='font-semibold'>Length:</span>{' '}
              {character.wand?.length} inches
            </p>
          </div>

          <p className='mt-4'>
            <span className='font-semibold'>Hogwarts Role:</span>{' '}
            {character.hogwartsStudent
              ? 'Student'
              : character.hogwartsStaff
              ? 'Staff'
              : 'None'}
          </p>

          <p className='mt-4'>
            <span className='font-semibold'>Status:</span>{' '}
            {character.alive ? 'Alive' : 'Deceased'}
          </p>
        </div>
      </div>
    </div>
  );
};
