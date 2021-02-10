import { FC } from "react";
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { useCurrentTravels } from "../hooks";

const TravelWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  > *:last-child {
    margin-left: auto;
  }
`;

export const MyBookingPage: FC = () => {
  const { travels, setTravels } = useCurrentTravels();

  const travelsToShow = travels
    .map((travel, i) => (
      <TravelWrapper key={i}>
        <div>
          {`${travel.name} в ${travel.region}. ${travel.username}`}
        </div>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => {
            setTravels(travels.filter(x => x.name !== travel.name));
          }}
        >
          Удалить
        </Button>
      </TravelWrapper>
    ));

  return (
    <div style={{ margin: '30px', fontSize: '1.5rem' }}>
      {travelsToShow.length > 0 ? travelsToShow : 'У вас нет записей'}
    </div>
  )
}