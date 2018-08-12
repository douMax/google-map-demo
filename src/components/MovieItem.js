import React from 'react';
import { Image, Item } from 'semantic-ui-react';

const MovieItem = (props) => (
    <Item>
        <Item.Image size='tiny' src={props.image} />
  
        <Item.Content>
            <Item.Header as='a'>{props.title}</Item.Header>
            <Item.Meta>Runtime: {props.runtime}</Item.Meta>
            <Item.Description>{props.synopsis}</Item.Description>
        </Item.Content>
    </Item>
)
  
export default MovieItem