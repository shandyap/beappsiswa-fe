import React, { useState } from 'react';

const TabNavigation = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div className="tab-system">
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

export default TabNavigation;