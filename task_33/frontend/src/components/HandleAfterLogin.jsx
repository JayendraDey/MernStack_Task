import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

const HandleAfterLogin = ({ setIsAtenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get("https://mernstack-task-33-backend.onrender.com/auth/check", {
          withCredentials: true, // important for sending cookies
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
      }
    };

    checkAuth();
  }, [location.pathname, navigate, setIsAtenticated]);

  return null;
};

export default HandleAfterLogin;
