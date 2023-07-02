export interface ITabs {
  tabs: { value: number; label: string }[];
  value: number;
  onChange: (value: number) => void;
}
