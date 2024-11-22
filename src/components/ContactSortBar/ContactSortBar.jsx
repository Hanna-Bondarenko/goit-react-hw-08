import { useDispatch } from "react-redux";
import { changeSortType } from "../../redux/filters/slice";
import css from "./ContactSortBar.module.css";

const ContactSortBar = ({ options = [], onChange }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value;
    dispatch(changeSortType(value));
    if (onChange) onChange(value);
  };

  return (
    <div className={css.wrapper} aria-labelledby="sort-label">
      <label id="sort-label" className={css.label}>
        Sort contacts
      </label>
      <select
        aria-label="Sort contacts"
        className={css.select}
        name="sort"
        defaultValue="default"
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ContactSortBar;
