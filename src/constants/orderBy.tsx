import { OrderBy } from '../models/filter.model';

export interface IOrderByItem {
  label: string;
  value: OrderBy;
}

export const BASE_ORDER_BY: IOrderByItem[] = [
  {
    label: 'Найдешевший',
    value: OrderBy.Price,
  },
  {
    label: 'Найшвидший',
    value: OrderBy.Speed,
  },
  {
    label: 'Оптимальний',
    value: OrderBy.Optimal,
  },
];
