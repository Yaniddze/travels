import { FC, useState } from "react";
import { Dialog } from '@material-ui/core';
import styled from 'styled-components';

import {
  Sales,
  Search,
} from '../pageParts';

import {
  TravelForm,
} from '../components';

const DialogContent = styled.div`
  margin: 20px;
  padding: 20px;
`;

const MainPageWrapper = styled.div`
  display: flex;
  > * {
    margin: 0 auto;
    width: 80%;
  }
`;

export const MainPage: FC = () => { 
  const [open, setOpen] = useState(false);

  return (
    <MainPageWrapper>
      <Dialog 
        open={open}
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      >
        <DialogContent>
          Поездка добавлена
        </DialogContent>
      </Dialog>
      <div>
        <Search />
        <div>
          <h2>Акции</h2>
          <Sales />
        </div>
        <TravelForm 
          onAdd={() => setOpen(true)}
        />
      </div>
    </MainPageWrapper>
  );
}