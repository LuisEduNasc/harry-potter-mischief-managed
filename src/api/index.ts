import { Character } from '@/types';

const getData = async (path = '') => {
  const url = `${import.meta.env.VITE_APP_BASE_URL}/${path}`;
  const res = await fetch(url);
  const json = await res.json();

  return json;
};

export const getAllCharacters = async (): Promise<Character[]> => {
  return getData('characters');
};

export const getCharacter = async (id: string): Promise<Character[]> => {
  return getData(`character/${id}`);
};

export const getAllStudents = async (): Promise<Character[]> => {
  return getData('characters/students');
};

export const getAllStaff = async (): Promise<Character[]> => {
  return getData('characters/staff');
};
