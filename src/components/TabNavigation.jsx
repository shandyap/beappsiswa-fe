import React, { useState } from 'react';
import PropTypes from 'prop-types';


const TabNavigation = ({ tabs, variant }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    
    <div className={`tab-system ${variant}`}>
      <div className="tab-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {activeContent}
      </div>
    </div>
  );
};

TabNavigation.propTypes = {
  tabs: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(['beasiswa', 'perlombaan']),
};

TabNavigation.defaultProps = {
  variant: 'beasiswa', 
};

export default TabNavigation;