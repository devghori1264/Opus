import React from 'react';

const DomainSelection: React.FC = () => {
  return (
    <div>
      <h1>Select a Domain</h1>
      <select>
        <option value="ecommerce">Ecommerce</option>
        <option value="finance">Finance</option>
        <option value="health">Health</option>
        <option value="technology">Technology</option>
        <option value="media">Media and Streaming</option>
        <option value="education">Education</option>
        <option value="realestate">Real Estate</option>
        <option value="travel">Travel and Tourism</option>
        <option value="logistics">Logistics and Supply Chain</option>
        <option value="agriculture">Agriculture</option>
        <option value="manufacturing">Manufacturing</option>
      </select>
    </div>
  );
}

export default DomainSelection;
