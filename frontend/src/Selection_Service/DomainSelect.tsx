import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DomainSelection: React.FC = () => {
  const [domains, setDomains] = useState<string[]>([]);
  const [selectedDomain, setSelectedDomain] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDomains = async () => {
      const response = await axios.get('http://localhost:4000/api/domains');
      setDomains(response.data);
    };

    fetchDomains();
  }, []);

  const handleSelectDomain = (domain: string) => {
    setSelectedDomain(domain);
  };

  const handleNext = () => {
    if (selectedDomain) {
      navigate(`/services?domain=${selectedDomain}`);
    } else {
      alert('Please select a domain');
    }
  };

  return (
    <div>
      <h2>Select a Domain</h2>
      <ul>
        {domains.map(domain => (
          <li key={domain} onClick={() => handleSelectDomain(domain)}>
            {domain}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default DomainSelection;
