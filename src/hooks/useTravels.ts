import { useState, useEffect } from 'react';
import { observable, action, makeObservable, autorun } from 'mobx';

export type Travel = {
  name: string,
  difficult: string,
  region: string,
  dateStart: Date,
  dateEnd: Date,
  zoneCount: number,
}

class Storage {
  public travels: Travel[] = [
    { name: 'Поездка 1', difficult: 'Легко', region: 'Москва', dateEnd: new Date(), dateStart: new Date(), zoneCount: 2 },
  ];

  constructor() {
    makeObservable(this, {
      travels: observable,
    })
  }
}

const inst = new Storage();

export const useTravels = () => {
  const [travels, setTravels] = useState(inst.travels);

  useEffect(autorun(() => {
    setTravels(inst.travels);
  }));

  return {
    travels,
  }
}
