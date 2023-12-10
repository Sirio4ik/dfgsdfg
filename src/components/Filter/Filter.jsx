import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { filterContacts } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      <span className={css.labelText}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="filter"
        value={filter}
        placeholder="Enter contact name"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
};
