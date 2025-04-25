import { SORT_OPTIONS } from '../../utils/constants';

const SortFilter = ({ sortBy, onChange }) => {
  return (
    <div className="filter-section">
      <h4 className="filter-header" data-testid="filter-header-sort">
        Sort By
      </h4>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === SORT_OPTIONS.FEES}
            onChange={() => onChange(SORT_OPTIONS.FEES)}
            data-testid="sort-fees"
          />
          Fees (Low to High)
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            checked={sortBy === SORT_OPTIONS.EXPERIENCE}
            onChange={() => onChange(SORT_OPTIONS.EXPERIENCE)}
            data-testid="sort-experience"
          />
          Experience (High to Low)
        </label>
      </div>
    </div>
  );
};

export default SortFilter;