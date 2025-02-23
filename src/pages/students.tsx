import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { getAllStudents } from '@/api';
import CharacterList from '@/components/characterList';
import { Character } from '@/types';

export const Students: React.FC = () => {
  const { data, isFetching, isError } = useQuery<Character[]>({
    queryKey: ['all-students'],
    queryFn: async () => getAllStudents(),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60,
  });

  if (isError) {
    return <p>Error getting all students</p>;
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
