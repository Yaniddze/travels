import { useState, useEffect } from 'react';
import { observable, action, makeObservable, autorun } from 'mobx';
import { Travel } from './useTravels';

type StoragedTravel = Travel & {
  name: string;
}

class Storage {
  public travels: StoragedTravel[] = [];

  public setTravels = (newTravels: StoragedTravel[]) => {
    this.travels = newTravels;
  } 

  constructor() {
    makeObservable(this, {
      travels: observable,
      setTravels: action,
    })
  }
}

const inst = new Storage();

export const useCurrentTravels = () => {
  const [currentTravels, setCurrentTravels] = useState(inst.travels);

  useEffect(() => autorun(() => {
    setCurrentTravels(inst.travels);
  }), []);

  return {
    travels: currentTravels,
    setTravels: inst.setTravels.bind(inst),
    addTravel: (travel: StoragedTravel) => {
      inst.setTravels([...currentTravels, travel]);
    }
  }
}
