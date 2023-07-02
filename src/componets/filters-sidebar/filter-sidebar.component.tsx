import React from 'react';
import './filter-sidebar.styles.scss';
import { RowCheckboxComponent } from '../row-checkbox/row-checkbox.component';
import { IFilterSidebar } from './filter-sidebar.model';
import { FilterSegments } from '../../models/filter.model';

export const FilterSidebarComponent = ({ items, value, onChange }: IFilterSidebar) => {
  const onValueChange = (item: FilterSegments) => {
    const index = value.indexOf(item);

    if (index !== -1) {
      onChange([...value.slice(0, index), ...value.slice(index + 1)]);
    } else {
      onChange([...value, item]);
    }
  };

  return (
    <div className="filter-sidebar">
      <div className="filter-sidebar__title">КІЛЬКІСТЬ ПЕРЕСАДОК</div>
      {items.map((item) => (
        <RowCheckboxComponent<FilterSegments>
          key={item.value}
          value={item.value}
          isActive={value.includes(item.value)}
          label={item.label}
          onChange={onValueChange}
        />
      ))}
    </div>
  );
};
