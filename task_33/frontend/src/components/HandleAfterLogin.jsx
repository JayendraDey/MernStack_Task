import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const HandleAfterLogin = ({ setIsAtenticated, setAuthChecked }) => {
  const location = useLocation();
  const navigate = useNavigate();
const URL = "https://mernstack-task-33-backend.onrender.com";
  const url2 = "http://localhost:5500";

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${URL}/auth/check`, {
          withCredentials: true,
        });

        if (res.data.success) {
          setIsAtenticated(true);
          if (['/', '/login', '/signup'].includes(location.pathname)) {
            navigate('/home', { replace: true });
          }
        } else {
          setIsAtenticated(false);
          if (!['/login', '/signup'].includes(location.pathname)) {
            navigate('/login', { replace: true });
          }
        }
      } catch (err) {
        setIsAtenticated(false);
        if (!['/login', '/signup'].includes(location.pathname)) {
          navigate('/login', { replace: true });
        }
      } finally {
        setAuthChecked(true); 
      }
    };

    checkAuth();
  }, [location.pathname, navigate, setIsAtenticated, setAuthChecked]);

  return null;
};

export default HandleAfterLogin;
