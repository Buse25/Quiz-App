// src/component/dropdown/DropDown.jsx
import React from 'react';
import './DropDown.css';

export default function DropDown({ data, value, onChange }) {
  return (
    <div className="dropdown">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {data.map((dt, i) => (
          <option key={i} value={dt}>
            {dt}
          </option>
        ))}
      </select>
    </div>
  );
}
