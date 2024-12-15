import React from 'react';
import '../styles/SectionTabs.css';

function SectionTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { label: 'All', dropdown: [] },
    {
      label: 'Collections',
      dropdown: ['Seasonal Collection'],
    },
    {
      label: 'Series',
      dropdown: ['Newfoundland Christmas Series', 'Mummers Series'],
    },
    {
      label: 'Medium',
      dropdown: ['Prints', 'Originals', 'Handcrafted'],
    },
    {
      label: 'Size',
      dropdown: ['8x8', '8x10', '12x12', '11x14', '16x20'],
    },
  ];

  return (
    <div className="section-tabs">
      {tabs.map((tab) => (
        <div key={tab.label} className="tab">
          <div className="tab-header">
            <button
              type="button"
              className={`tab-button ${activeTab === tab.label ? 'active' : ''}`}
              onClick={() => {
                if (tab.dropdown.length === 0) {
                  setActiveTab(tab.label); 
                }
              }}
            >
              {tab.label}
            </button>
          </div>
          {tab.dropdown.length > 0 && (
            <div className="static-dropdown">
              {tab.dropdown.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`dropdown-item ${activeTab === item ? 'active' : ''}`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default SectionTabs;



