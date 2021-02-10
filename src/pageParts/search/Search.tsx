import { FC } from "react";
import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  width: 100%;

  margin: 30px 0;

  > *:first-child {
    width: 100%;
  }
  
  > *:last-child {
    margin-left: 10px;
  }
`;

type FormType = {
  search: string,
}

export const Search: FC = () => {
  const {
    register,
    handleSubmit,
    errors,
  } = useForm<FormType>();

  const history = useHistory();

  const onClick = (data: FormType) => {
    history.replace(`/search?query=${data.search}`)
  };

  return (
    <Wrapper>

      <TextField 
        error={!!errors.search}
        helperText={errors.search && 'Это поле обязательно'}
        name="search"
        placeholder="Поиск..."
        inputRef={register({
          required: true,
        })}
      />

      <Button
        onClick={handleSubmit(onClick)}
        variant="contained"
        color="primary"
      >
        Поиск
      </Button>
      
    </Wrapper>
  );
}