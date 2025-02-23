import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getAllCharacters } from '@/api';
import CharacterList from '@/components/characterList';
import { Character } from '@/types';

export const Home: React.FC = () => {
  const { data, isFetching, isError } = useQuery<Character[]>({
    queryKey: ['all-characters'],
    queryFn: async () => getAllCharacters(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  if (isError) {
    return <p>Error getting all characters</p>;
  }

  if (isFetching) {
    return <p>Fetching...</p>;
  }

  return (
    <>
      <CharacterList characters={data || []} />
    </>
  );
};
