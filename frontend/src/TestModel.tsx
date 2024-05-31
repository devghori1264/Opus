import React, { useState } from 'react';
import axios from 'axios';

const TestModel: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [isTesting, setIsTesting] = useState<boolean>(false);

  const handleTestModel = async () => {
    try {
      setIsTesting(true);
      const response = await axios.get('http://localhost:4000/api/test');
      setTestResult(response.data.message);
    } catch (error) {
      setTestResult('Testing failed. Please try again.');
      console.error('Testing Error:', error);
    } finally {
      setIsTesting(false);
    }
  };

  return (
    <div>
      <h2>Model Testing</h2>
      <button onClick={handleTestModel} disabled={isTesting}>
        {isTesting ? 'Testing in progress...' : 'Run Test'}
      </button>
      <p>{testResult}</p>
    </div>
  );
};

export default TestModel;
