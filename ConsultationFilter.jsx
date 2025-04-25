import { CONSULTATION_MODES } from '../../utils/constants';

const ConsultationFilter = ({ mode, onChange }) => {
  return (
    <div className="filter-section">
      <h4 className="filter-header" data-testid="filter-header-moc">
        Consultation Mode
      </h4>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="consultation-mode"
            checked={mode === CONSULTATION_MODES.VIDEO}
            onChange={() => onChange(CONSULTATION_MODES.VIDEO)}
            data-testid="filter-video-consult"
          />
          Video Consult
        </label>
        <label>
          <input
            type="radio"
            name="consultation-mode"
            checked={mode === CONSULTATION_MODES.CLINIC}
            onChange={() => onChange(CONSULTATION_MODES.CLINIC)}
            data-testid="filter-in-clinic"
          />
          In Clinic
        </label>
      </div>
    </div>
  );
};

export default ConsultationFilter;