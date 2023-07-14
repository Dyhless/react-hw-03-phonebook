import React from 'react';
import {
  List,
  ListItem,
  ContactInfo,
  Name,
  Number,
  DeleteButton,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, number }) => (
      <ListItem key={id}>
        <ContactInfo>
          <Name>{name}</Name>
          <Number>{number}</Number>
        </ContactInfo>
        <DeleteButton type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </DeleteButton>
      </ListItem>
    ))}
  </List>
);

export default ContactList;
