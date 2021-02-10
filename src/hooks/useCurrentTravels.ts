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

function onlyUnique(value: any, index: any, self: any[]) {
  return self.findIndex(x => x.name === value.name) === index;
}

export const useCurrentTravels = () => {
  const [currentTravels, setCurrentTravels] = useState<StoragedTravel[]>(getTravels);

  const setTravels = (travels: StoragedTravel[]) => {
    const travelsToReplace = travels.filter(onlyUnique);
    setCurrentTravels(travelsToReplace);
    setLocalTravels(travelsToReplace);
  }

  return {
    travels: currentTravels,
    setTravels,
    addTravel: (travel: StoragedTravel) => {
      setTravels([...currentTravels, travel]);
    }
  }
}
