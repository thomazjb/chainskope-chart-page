import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Tab {
  id: string;
  label: string;
}

const DateTabs = () => {
  const tabs = [
    { id: 'Custom', label: 'Custom' },
    { id: 'Yesterday', label: 'Yesterday' },
    { id: 'Today', label: 'Today' },
    { id: '7D', label: '7D' },
    { id: '30D', label: '30D' },
    { id: '3M', label: '3M' },
    { id: '6M', label: '6M' },
    { id: '12M', label: '12M' },
    { id: '24M', label: '24M' },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [tabWidths, setTabWidths] = useState<number[]>([]);

  useEffect(() => {
    const calculateTabWidths = () => {
      const widths = tabs.map((tab) => {
        const element = document.getElementById(`tab-${tab.id}`);
        return element ? element.scrollWidth : 0;
      });
     
    };

    calculateTabWidths();
    window.addEventListener('resize', calculateTabWidths);

    return () => {
      window.removeEventListener('resize', calculateTabWidths);
    };
  }, [tabs]);

  return (

      <nav className={`flex max-h-[40px] font-inter text-xs font-bold rounded-lg border-[1px] w-3/6`}>
        {tabs.map((tab, index) => (
          <Link
            href="#"
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer flex sm:px-4 text-center p-2 ${
              index !== 0 ? 'border-l-2' : ''
            } ${
              activeTab === tab.id
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-500'
            }`}
            style={{ flex: `0 0 ${tabWidths[index]}px` }}
            id={`tab-${tab.id}`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
  );
};

export default DateTabs;
