import React from 'react';

const Input = ({ label, name, type, value, onChange, placeholder, className = '' }) => {
  return (
    <div className={className}>
      <label className="block text-gray-700 mb-2 font-semibold">{label}</label>
      <input
        type={type || "text"}
        name={name}
        value={value || ""}
        onChange={onChange}
        className="w-full p-2 border rounded-md"
        placeholder={placeholder || ""}
      />
    </div>
  );
};

export default Input;