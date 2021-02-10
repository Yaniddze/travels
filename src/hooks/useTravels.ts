import { useState } from 'react';

export type Travel = {
  name: string,
  difficult: string,
  region: string,
  dateStart: Date,
  dateEnd: Date,
  zoneCount: number,
};


export const useTravels = () => {
  const [travels, setTravels] = useState([
    { name: 'Поездка 1', difficult: 'Легко', region: 'Москва', dateEnd: new Date(), dateStart: new Date(), zoneCount: 2 },
  ]);

  return {
    travels,
  }
}
