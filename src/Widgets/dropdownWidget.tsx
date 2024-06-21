import React, { useState, ReactNode } from 'react';

interface DropdownProps {
  title: string;
  children: ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4">
      <div 
        className="text-sm font-medium cursor-pointer flex justify-between items-center" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="mt-2 text-sm text-gray-700">
          {children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
