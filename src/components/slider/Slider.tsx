import Carousel from 'react-material-ui-carousel';
import styled from 'styled-components';
import { Paper } from '@material-ui/core'
import { FC } from 'react';

const StyledItem = styled.div`
  position: relative;
  > h2 {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    margin-left: 20px;
  }

  > p {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 50px;
    z-index: 1;
    margin-left: 20px;
  }

  > img {
    width: 100%;
    height: 400px;
    filter: blur(5px);
    z-index: -1;
  }
`; 

type ItemType = { 
  name: string, 
  description: string, 
  image: string,
};

type SliderProps = {
  children?: never;
  items: ItemType[]
}

export const Slider: FC<SliderProps> = ({
  items,
}: SliderProps) => (
  <Carousel>
    {
      items.map( (item, i) => <Item key={i} name={item.name} description={item.description} image={item.image} /> )
    }
  </Carousel>
)

type ItemProps = {
  children?: never;
} & ItemType;

const Item: FC<ItemProps> = ({
  name, description, image,
}: ItemProps) =>(
  <Paper>
    <StyledItem>
      <h2>{name}</h2>
      <p>{description}</p>

      <img src={image} alt="carousel" />
    </StyledItem>
  </Paper>
)