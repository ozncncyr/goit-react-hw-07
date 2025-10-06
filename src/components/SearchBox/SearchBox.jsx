import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeFilter,
  selectNameFilter,
} from "../../redux/reducers/filtersSlice";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleChange = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={style.searchBox}>
      <input
        className={style.input}
        type="text"
        name="filter"
        placeholder="Search by name or number"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
