export const Filter = ({ changeFilter, title, filter }) => {
  console.log(filter);
  return (
    <div>
      <p>{title}</p>
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="Search"
        onChange={changeFilter}
      />
    </div>
  );
};
