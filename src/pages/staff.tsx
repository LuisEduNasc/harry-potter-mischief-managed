import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getAllStaff } from '@/api';
import CharacterList from '@/components/characterList';
import { Character } from '@/types';

export const Staff: React.FC = () => {
  const { data, isFetching, isError } = useQuery<Character[]>({
    queryKey: ['all-staff'],
    queryFn: async () => getAllStaff(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  if (isError) {
    return <p>Error getting all staff</p>;
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
