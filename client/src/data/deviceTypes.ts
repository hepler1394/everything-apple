/* Shared shape for a device in a history timeline (watch, iPod, …). */
export interface DeviceModel {
  id: string;
  name: string;
  year: number;
  highlight: string;
  priceLabel: string;
  specs: { label: string; value: string }[];
  tags?: string[];
  isNew?: boolean;
}
