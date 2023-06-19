import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { Title, Input, FilterWrapper } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilterChange = event => dispatch(setFilter(event.target.value));

  return (
    <FilterWrapper>
      <Title>Find a contact</Title>
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFilterChange}
      />
    </FilterWrapper>
    //ww
  );
};