export const filterDoctors = (doctors, filters) => {
  let filtered = [...doctors];

  // Filter by name
  if (filters.name) {
    filtered = filtered.filter(doctor =>
      doctor.name.toLowerCase().includes(filters.name.toLowerCase())
    );
  }

  // Filter by consultation mode
  if (filters.mode === 'video') {
    filtered = filtered.filter(doctor => doctor.video_consultation === true);
  } else if (filters.mode === 'clinic') {
    filtered = filtered.filter(doctor => doctor.in_clinic);
  }

  // Filter by specialties
  if (filters.specialties) {
    const specialties = filters.specialties.split(',');
    filtered = filtered.filter(doctor =>
      specialties.some(spec => doctor.specialties.includes(spec))
    );
  }

  return filtered;
};

export const sortDoctors = (doctors, sortBy) => {
  const sorted = [...doctors];

  if (sortBy === 'fees') {
    sorted.sort((a, b) => a.fees - b.fees);
  } else if (sortBy === 'experience') {
    sorted.sort((a, b) => b.experience - a.experience);
  }

  return sorted;
};