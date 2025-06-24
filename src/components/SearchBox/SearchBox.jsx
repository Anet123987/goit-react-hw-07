import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.name);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor="search" className={css.label}>Find contact by name</label>
      <input
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
        className={css.input}
        placeholder="Enter name to search..."
      />
    </div>
  );
};

export default SearchBox;
