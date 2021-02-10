import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core'
import { FC } from 'react';

type SliderProps = {
  children?: never;
  items: { name: string, description: string }[]
}

export const Slider: FC<SliderProps> = ({
  items,
}: SliderProps) => (
  <Carousel>
    {
      items.map( (item, i) => <Item key={i} name={item.name} description={item.description} /> )
    }
  </Carousel>
)

type ItemProps = {
  children?: never;
  name: string;
  description: string;
}

const Item: FC<ItemProps> = ({
  name, description
}: ItemProps) =>(
  <Paper>
    <h2>{name}</h2>
    <p>{description}</p>

    <Button className="CheckButton">
      Check it out!
    </Button>
  </Paper>
)