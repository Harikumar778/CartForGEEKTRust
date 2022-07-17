function Filters() {
  return (
    <div>
      <span>
        <input type="radio" name="group1" />
        <label htmlFor="group1">Ascending</label>
      </span>
      <span>
        <input type="radio" name="group1" />
        <label htmlFor="group1">Descending</label>
      </span>
      <span>
        <input type="radio" name="group1" />
        <label htmlFor="group1">All</label>
      </span>
      <button>Clear</button>
    </div>
  );
}

export default Filters;
