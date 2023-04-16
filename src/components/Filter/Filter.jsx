import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'store/filterSlice';
import css from './Filter.module.css';

const Filter = ({}) => {
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const onFilterHandler = event => {
    dispatch(filterContacts(event.target.value));
  };

  return (
    <label className={css.form__text}>
      Find contacts by Name
      <input
        className={css.form__input}
        type="text"
        onChange={onFilterHandler}
        value={filter}
      />
    </label>
  );
};

export default Filter;
