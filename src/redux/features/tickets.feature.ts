import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ITicket } from '../../models/ticket.model';
import { FilterSegments, OrderBy } from '../../models/filter.model';
import { ticketMock } from '../../data/ticket.mock';

interface ITicketsState {
  orderBy: OrderBy;
  filter: FilterSegments[];
  tickets: ITicket[];
}

const initialState: ITicketsState = {
  orderBy: OrderBy.Optimal,
  filter: [0],
  tickets: [ticketMock],
};

const ticketsFeature = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterSegments[]>) => {
      state.filter = action.payload;
    },
    setOrderBy: (state, action: PayloadAction<OrderBy>) => {
      state.orderBy = action.payload;
    },
    onLoadTickets: (state) => {
      state.tickets = [...state.tickets, ticketMock, ticketMock, ticketMock, ticketMock, ticketMock];
    },
  },
});

export const { setFilter, setOrderBy, onLoadTickets } = ticketsFeature.actions;

export const orderBySelector = (state: RootState) => state.tickets.orderBy;
export const filterSelector = (state: RootState) => state.tickets.filter;
export const ticketsSelector = (state: RootState) => state.tickets.tickets;

export default ticketsFeature.reducer;
