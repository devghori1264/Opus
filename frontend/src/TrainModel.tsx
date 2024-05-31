import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

const TrainModel: React.FC = () => {
  const [trainingStatus, setTrainingStatus] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const domain = queryParams.get('domain');
  const services = queryParams.get('services');
  const databases = queryParams.get('databases');

  useEffect(() => {
    const trainModel = async () => {
      try {
        setIsLoading(true);
        const response = await axios.post('http://localhost:4000/api/train', { domain, services, databases });
        setTrainingStatus(response.data.message);
      } catch (error) {
        console.error('Training Error:', error);
        setError('Training failed. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    trainModel();
  }, [domain, services, databases]);

  const handleTestModel = () => {
    navigate('/test');
  };

  return (
    <div>
      <h2>Model Training</h2>
      {isLoading ? (
        <p>Training in progress...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <p>{trainingStatus}</p>
      )}
      {trainingStatus && !isLoading && (
        <button onClick={handleTestModel}>Test Model</button>
      )}
    </div>
  );
};

export default TrainModel;
