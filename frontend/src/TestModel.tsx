import React, { useState } from 'react';
import axios from 'axios';

const TestModel: React.FC = () => {
  const [testResult, setTestResult] = useState<string>('');

  const handleTestModel = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/test');
      setTestResult(response.data.message);
    } catch (error) {
      console.error('Testing Error:', error);
    }
  };

  return (
    <div>
      <h2>Model Testing</h2>
      <button onClick={handleTestModel}>Run Test</button>
      <p>{testResult}</p>
    </div>
  );
};

export default TestModel;
