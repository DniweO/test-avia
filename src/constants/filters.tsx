import { FilterSegments } from '../models/filter.model';

export interface IBaseFilter {
  label: string;
  value: FilterSegments;
}

export const BASE_FILTERS: IBaseFilter[] = [
  {
    label: 'Всі',
    value: 'all',
  },
  {
    label: '1 пересадка',
    value: 1,
  },
  {
    label: '2 пересадки',
    value: 2,
  },
  {
    label: '2 пересадки',
    value: 2,
  },
  {
    label: '3 пересадки',
    value: 3,
  },
];
