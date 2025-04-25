import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useDoctorData from '../hooks/useDoctorData';
import useQueryParams from '../hooks/useQueryParams';
import { filterDoctors, sortDoctors } from '../utils/filterUtils';
import AutocompleteSearch from '../components/AutocompleteSearch';
import FilterPanel from '../components/FilterPanel';
import DoctorList from '../components/DoctorList';

const DoctorListingPage = () => {
  const { doctors, loading, error } = useDoctorData();
  const { queryParams, updateQueryParams } = useQueryParams();
  const [searchTerm, setSearchTerm] = useState(queryParams.name || '');
  const [suggestions, setSuggestions] = useState([]);

  // Parse query params
  const consultationMode = queryParams.mode || '';
  const selectedSpecialties = queryParams.specialties
    ? queryParams.specialties.split(',')
    : [];
  const sortBy = queryParams.sort || '';

  useEffect(() => {
    if (searchTerm.length > 0 && doctors.length > 0) {
      const matches = doctors
        .filter(doctor =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map(doctor => doctor.name);
      setSuggestions([...new Set(matches)]); // Remove duplicates
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, doctors]);

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    updateQueryParams({ name: value || undefined });
  };

  const handleSearchSelect = (value) => {
    setSearchTerm(value);
    updateQueryParams({ name: value });
    setSuggestions([]);
  };

  const handleConsultationModeChange = (mode) => {
    updateQueryParams({ 
      mode: mode || undefined,
      // Reset other filters if needed
      ...(mode === 'video' ? { specialties: undefined } : {})
    });
  };

  const handleSpecialtiesChange = (specialties) => {
    updateQueryParams({ 
      specialties: specialties.length ? specialties.join(',') : undefined 
    });
  };

  const handleSortChange = (sort) => {
    updateQueryParams({ sort: sort || undefined });
  };

  // Apply filters and sorting
  const filteredDoctors = filterDoctors(doctors, {
    name: searchTerm,
    mode: consultationMode,
    specialties: selectedSpecialties.join(',')
  });

  const sortedDoctors = sortDoctors(filteredDoctors, sortBy);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="doctor-listing-page">
      <div className="search-container">
        <AutocompleteSearch
          value={searchTerm}
          onChange={handleSearchChange}
          onSelect={handleSearchSelect}
          suggestions={suggestions}
        />
      </div>
      <div className="content-container">
        <FilterPanel
          consultationMode={consultationMode}
          onConsultationModeChange={handleConsultationModeChange}
          selectedSpecialties={selectedSpecialties}
          onSpecialtiesChange={handleSpecialtiesChange}
          sortBy={sortBy}
          onSortChange={handleSortChange}
        />
        <DoctorList doctors={sortedDoctors} />
      </div>
    </div>
  );
};

export default DoctorListingPage;