import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/home');
  }, [navigate]);

  return <div></div>;
};

export default Root;
