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
    { name: 'Поездка 1', difficult: 'Легко', region: 'Москва', dateEnd: new Date(2021, 11, 11), dateStart: new Date(2022, 11, 21), zoneCount: 2 },
    { name: 'Поездка 2', difficult: 'Сложно', region: 'Челябинск', dateEnd: new Date(2021, 11, 21), dateStart: new Date(2022, 11, 30), zoneCount: 4 },
    { name: 'Поездка 3', difficult: 'Средне', region: 'Самара', dateEnd: new Date(2021, 11, 30), dateStart: new Date(2022, 12, 1), zoneCount: 3 },
    { name: 'Поездка 4', difficult: 'Сложно', region: 'Москва', dateEnd: new Date(2021, 12, 1), dateStart: new Date(2022, 12, 11), zoneCount: 5 },
    { name: 'Поездка 5', difficult: 'Легко', region: 'Челябинск', dateEnd: new Date(2021, 12, 11), dateStart: new Date(2022,12, 21), zoneCount: 7 },
    { name: 'Поездка 6', difficult: 'Сложно', region: 'Самара', dateEnd: new Date(2021, 12, 21), dateStart: new Date(2022,12, 30), zoneCount: 11 },
    { name: 'Поездка 7', difficult: 'Средне', region: 'Челябинск', dateEnd: new Date(2021, 12, 30), dateStart: new Date(2023,1, 1), zoneCount: 3 },
  ]);

  return {
    travels,
  }
}
