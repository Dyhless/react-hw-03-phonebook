import React from 'react';
import { Wrapper, Input } from './Filter.styled';

const Filter = ({ filter, onChangeFilter }) => (
  <Wrapper>
    Filter contacts by name:
    <Input type="text" value={filter} onChange={onChangeFilter} />
  </Wrapper>
);

export default Filter;
