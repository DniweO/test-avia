import { FilterSegments } from '../../models/filter.model';

export interface IFilterSidebar {
  items: { label: string; value: FilterSegments }[];
  value: FilterSegments[];
  onChange: (value: FilterSegments[]) => void;
}
