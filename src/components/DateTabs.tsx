// components/Tabs.tsx
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
}

const DateTabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="rounded-lg flex max-h-[40px] border-2">
      <nav className="flex max-h-[40px] w-2/5 font-inter text-xs font-bold ">
        {tabs.map((tab, index) => (
          <a
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`cursor-pointer flex sm:px-4 text-center p-2 ${
              index !== 0 ? 'border-l-2' : ''
            } ${
              activeTab === tab.id
                ? 'bg-gray-200 text-gray-900'
                : 'text-gray-500'
            }`}
          >
            {tab.label}
          </a>
        ))}
      </nav>
    </div>

  );
};

export default DateTabs;
