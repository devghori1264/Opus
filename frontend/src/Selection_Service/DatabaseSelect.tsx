import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const DatabaseSelection: React.FC = () => {
  const [databases, setDatabases] = useState<string[]>([]);
  const [selectedDatabases, setSelectedDatabases] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const domain = queryParams.get('domain');
  const services = queryParams.get('services');

  useEffect(() => {
    const fetchDatabases = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/databases?domain=${domain}`);
        setDatabases(response.data);
      } catch (error) {
        console.error('Error fetching databases:', error);
      }
    };

    if (domain) {
      fetchDatabases();
    }
  }, [domain]);

  const handleSelectDatabase = (database: string) => {
    setSelectedDatabases(prev => {
      if (prev.includes(database)) {
        return prev.filter(db => db !== database);
      } else {
        return [...prev, database];
      }
    });
  };

  const handleNext = () => {
    if (selectedDatabases.length > 0) {
      navigate(`/train?domain=${domain}&services=${services}&databases=${selectedDatabases.join(',')}`);
    } else {
      alert('Please select at least one database');
    }
  };

  return (
    <div>
      <h2>Select Databases for {domain}</h2>
      <ul>
        {databases.map(database => (
          <li key={database} onClick={() => handleSelectDatabase(database)}>
            {database} {selectedDatabases.includes(database) ? '(Selected)' : ''}
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default DatabaseSelection;
