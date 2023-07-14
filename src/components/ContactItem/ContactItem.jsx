import React from 'react';
import { Item, Info, Name, Number, DeleteButton } from './ContactItem.styled';

const ContactItem = ({ name, number, onDelete }) => (
  <Item>
    <Info>
      <Name>{name}</Name>
      <Number>{number}</Number>
    </Info>
    <DeleteButton type="button" onClick={onDelete}>
      Delete
    </DeleteButton>
  </Item>
);

export default ContactItem;
