import React from 'react';
import './tabs.styles.scss';
import { ITabs } from './tabs.model';

export const TabsComponent = ({ tabs, value, onChange }: ITabs) => {
  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <div
          key={tab.value}
          className={`tabs__item ${tab.value === value && 'active'}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
};
