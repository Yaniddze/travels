import { FC } from "react";
import { useLocation } from "react-router-dom";
import { useTravels } from "../hooks";

export const SearchPage: FC = () => {
  const { travels } = useTravels();
  const { search } = useLocation();

  const query = search.slice(7);

  const travelsToShow = travels
    .filter(x => x.name.trim().toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()))
    .map((travel, i) => (
    <div key={i}>
      {travel.name}
    </div>
  ));
  
  return (
    <div style={{ margin: '30px', fontSize: '1.5rem' }}>
      <div style={{ marginBottom: '30px' }}>
        {`Поиск по запросу: ${query}`}
      </div>
      <div>
        { travelsToShow.length > 0 ? travelsToShow : 'Ничего не найдено' }
      </div>
    </div>
  )
}