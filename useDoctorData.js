// src/hooks/useDoctorData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useDoctorData = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://srijandubey.github.io/campus-api-mock/SRM-C1-25.json'
        );
        
        // Transform API data to match our expected structure
        const transformedDoctors = response.data.map(doctor => ({
          id: doctor.id || Math.random().toString(36).substring(2, 9),
          name: doctor.name || 'Unknown Doctor',
          name_initials: doctor.name_initials || '',
          photo: doctor.photo || '',
          introduction: doctor.doctor_introduction || '',
          specialties: doctor.specialities?.map(s => s.name) || [],
          experience: doctor.experience || 0,
          fees: doctor.fees || 0,
          video_consultation: doctor.video_consultation === true || false, // Force boolean
  in_clinic: doctor.in_clinic === true || false, // Force boolean
        }));
        
        setDoctors(transformedDoctors);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { doctors, loading, error };
};

export default useDoctorData;