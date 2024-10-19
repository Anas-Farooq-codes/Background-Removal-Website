import React from 'react';

const TabComponent = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex justify-around border-b border-gray-300 mb-6 mx-4">
      <button
        className={`py-2 px-4 w-full text-center transition-colors duration-200 ${
          activeTab === 'people' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'
        }`}
        onClick={() => onTabChange('people')}
      >
        People
      </button>

      <button
        className={`py-2 px-4 w-full text-center transition-colors duration-200 ${
          activeTab === 'animal' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'
        }`}
        onClick={() => onTabChange('animal')}
      >
        Animal
      </button>

      <button
        className={`py-2 px-4 w-full text-center transition-colors duration-200 ${
          activeTab === 'thing' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'
        }`}
        onClick={() => onTabChange('thing')}
      >
        Thing
      </button>

      <button
        className={`py-2 px-4 w-full text-center transition-colors duration-200 ${
          activeTab === 'graphics' ? 'text-purple-600 border-b-2 border-purple-600' : 'text-gray-600 hover:text-purple-600'
        }`}
        onClick={() => onTabChange('graphics')}
      >
        Graphics
      </button>
    </div>
  );
};

export default TabComponent;
