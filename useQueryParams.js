import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useQueryParams = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const paramsObj = {};
    
    params.forEach((value, key) => {
      paramsObj[key] = value;
    });

    setQueryParams(paramsObj);
  }, [location.search]);

  const updateQueryParams = (newParams) => {
    const params = new URLSearchParams(location.search);
    
    Object.entries(newParams).forEach(([key, value]) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    navigate(`?${params.toString()}`, { replace: true });
  };

  return { queryParams, updateQueryParams };
};

export default useQueryParams;