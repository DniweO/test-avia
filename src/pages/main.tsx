import React from 'react';
import { HeaderComponent } from '../componets/header/header.component';
import { FilterSidebarComponent } from '../componets/filters-sidebar/filter-sidebar.component';
import { BASE_ORDER_BY } from '../constants/orderBy';
import { TabsComponent } from '../componets/tabs/tabs.component';
import { TicketItemComponent } from '../componets/ticket-item/ticket-item.component';
import { ButtonComponent } from '../componets/button/button.component';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterSelector,
  onLoadTickets,
  orderBySelector,
  setFilter,
  setOrderBy,
  ticketsSelector,
} from '../redux/features/tickets.feature';
import { BASE_FILTERS } from '../constants/filters';
import { FilterSegments } from '../models/filter.model';

export const MainPage: React.FC = () => {
  const tickets = useSelector(ticketsSelector);
  const orderBy = useSelector(orderBySelector);
  const filters = useSelector(filterSelector);
  const dispatch = useDispatch();

  const onChangeTab = (value: number) => dispatch(setOrderBy(value));
  const onChangeFilter = (value: FilterSegments[]) => dispatch(setFilter(value));
  const onLoadMore = () => dispatch(onLoadTickets());

  return (
    <div className="app">
      <div className="container">
        <HeaderComponent />
      </div>
      <div className="container">
        <div className="sidebar-column">
          <FilterSidebarComponent items={BASE_FILTERS} value={filters} onChange={onChangeFilter} />
        </div>
        <div className="content-column">
          <TabsComponent value={orderBy} tabs={BASE_ORDER_BY} onChange={onChangeTab} />
          {tickets.map((item) => (
            <TicketItemComponent key={item.airlines} ticket={item} />
          ))}
          <ButtonComponent label="Показати ще 5 квитків" onClick={onLoadMore} />
        </div>
      </div>
    </div>
  );
};
