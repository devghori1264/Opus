import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const ServiceSelection: React.FC = () => {
  const [services, setServices] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const domain = new URLSearchParams(location.search).get('domain');

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:4000/api/services');
      setServices(response.data);
    };

    fetchServices();
  }, []);

  const handleSelectService = (service: string) => {
    setSelectedServices(prev => {
      if (prev.includes(service)) {
        return prev.filter(s => s !== service);
      } else {
        return [...prev, service];
      }
    });
  };

  const handleNext = () => {
    if (selectedServices.length > 0) {
      navigate(`/databases?domain=${domain}&services=${selectedServices.join(',')}`);
    } else {
      alert('Please select at least one service');
    }
  };

  return (
    <div>
      <h2>Select Services for {domain}</h2>
      <ul>
        {services.map(service => (
          <li key={service} onClick={() => handleSelectService(service)}>
            {service} {selectedServices.includes(service) ? '(Selected)' : ''}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default ServiceSelection;
