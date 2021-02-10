import { useState } from 'react';
import { Travel } from './useTravels';

type StoragedTravel = Travel & {
  username: string,
}

const getTravels = () => {
  const items = localStorage.getItem('cTravels');

  return JSON.parse(items || "[]");
}

const setLocalTravels = (travels: StoragedTravel[]) => {
  localStorage.setItem('cTravels', JSON.stringify(travels));
}

export const useCurrentTravels = () => {
  const [currentTravels, setCurrentTravels] = useState<StoragedTravel[]>(getTravels);

  const setTravels = (travels: StoragedTravel[]) => {
    setCurrentTravels(travels);
    setLocalTravels(travels);
  }

  return {
    travels: currentTravels,
    setTravels,
    addTravel: (travel: StoragedTravel) => {
      setTravels([...currentTravels, travel]);
    }
  }
}
