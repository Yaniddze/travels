import { FC, useState } from "react";
import { 
  TextField, 
  Select, 
  MenuItem, 
  Button, 
} from "@material-ui/core";
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { Travel, useTravels, useCurrentTravels, } from "../../hooks";

const Wrapper = styled.div`
  > div > * {
    width: 100%;
  }

  > * {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  > * {
    margin: 0 auto;
  }
  
  button {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }
`;

type FormType = {
  name: string,
  travel: string,
}

const initial: Travel = {
  name: '',
  difficult: '',
  region: '',
  dateEnd: new Date(),
  dateStart: new Date(),
  zoneCount: 0,
};

type TravelFormProps = {
  onAdd?: () => void;
}

export const TravelForm: FC<TravelFormProps> = ({
  onAdd,
}: TravelFormProps) => {
  const [currentTravel, setCurrentTravel] = useState<Travel>(initial);
  const { travels } = useTravels();
  const { addTravel } = useCurrentTravels();
  const {
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm<FormType>();

  const onTravelChange = (e: React.ChangeEvent<{
    name?: string | undefined;
    value: unknown;
  }>) => {
    setCurrentTravel(travels.find(x => x.name === e.target.value) || initial)
  }

  const onClick = (data: FormType) => {
    if (currentTravel.name !== '') {
      addTravel({ 
        username: data.name,
        name: currentTravel.name, 
        dateEnd: currentTravel.dateEnd,
        dateStart: currentTravel.dateStart,
        region: currentTravel.region,
        zoneCount: currentTravel.zoneCount,
        difficult: currentTravel.difficult,
      });
      reset();
      setCurrentTravel(initial);
      if (onAdd) onAdd();
    }
  }

  return (
    <Wrapper>
      <h2>
        Запись на путешествие
      </h2>
      <div>
        <Select
          label="Путешествие"
          value={currentTravel.name}
          onChange={onTravelChange}
          error={!!errors.travel}
          inputRef={register({
            required: true,
          })}
          name="travel"
        >
          <MenuItem value={''}>
            {""}
          </MenuItem>
          {
            travels.map(travel => (
              <MenuItem key={travel.name} value={travel.name}>
                {travel.name}
              </MenuItem>
            ))
          }
        </Select>
      </div>
      
      <div>
        <TextField 
          label="Сложность поездки"
          value={currentTravel.difficult}
          disabled
        />
      </div>
      
      <div>
        <TextField 
          label="Регион"
          value={currentTravel.region}
          disabled
        />
      </div>
      
      <div>
        <TextField 
          label="Количество зон"
          value={currentTravel.zoneCount}
          disabled
        />
      </div>
      
      <div>
        <TextField 
          label="Дата начала поездки"
          value={currentTravel.dateStart.toLocaleDateString('ru-RU')}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      <div>
        <TextField 
          label="Дата конца поездки"
          value={currentTravel.dateEnd.toLocaleDateString('ru-RU')}
          disabled
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      
      <div>
        <TextField 
          label="Ваше ФИО"
          error={!!errors.name}
          helperText={errors.name && "Это поле обязательно"}
          name="name"
          inputRef={register({
            required: true,
          })}
        />
      </div>
      
      <ButtonWrapper>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onClick)}
        >
          Записаться
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
}
