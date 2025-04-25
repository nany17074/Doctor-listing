import { SPECIALTIES } from '../../utils/constants';

const SpecialtyFilter = ({ selectedSpecialties, onChange }) => {
  const handleSpecialtyChange = (specialty) => {
    const newSpecialties = selectedSpecialties.includes(specialty)
      ? selectedSpecialties.filter(s => s !== specialty)
      : [...selectedSpecialties, specialty];
    onChange(newSpecialties);
  };

  return (
    <div className="filter-section">
      <h4 className="filter-header" data-testid="filter-header-speciality">
        Speciality
      </h4>
      <div className="checkbox-group">
        {SPECIALTIES.map((specialty) => (
          <label key={specialty}>
            <input
              type="checkbox"
              checked={selectedSpecialties.includes(specialty)}
              onChange={() => handleSpecialtyChange(specialty)}
              data-testid={`filter-specialty-${specialty.replace('/', '-')}`}
            />
            {specialty}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyFilter;