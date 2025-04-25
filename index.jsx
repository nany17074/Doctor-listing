import ConsultationFilter from './ConsultationFilter';
import SpecialtyFilter from './SpecialtyFilter';
import SortFilter from './SortFilter';

const FilterPanel = ({
  consultationMode,
  onConsultationModeChange,
  selectedSpecialties,
  onSpecialtiesChange,
  sortBy,
  onSortChange
}) => {
  return (
    <div className="filter-panel">
      <ConsultationFilter
        mode={consultationMode}
        onChange={onConsultationModeChange}
      />
      <SpecialtyFilter
        selectedSpecialties={selectedSpecialties}
        onChange={onSpecialtiesChange}
      />
      <SortFilter sortBy={sortBy} onChange={onSortChange} />
    </div>
  );
};

export default FilterPanel;