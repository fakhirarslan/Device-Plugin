import { AppRootProps } from '@grafana/data';
import { Device } from './Device';

export type PageDefinition = {
  component: React.FC<AppRootProps>;
  icon: string;
  id: string;
  text: string;
};

export const pages: PageDefinition[] = [
  {
    component: Device,
    icon: 'file-alt',
    id: 'b',
    text: 'Devices',
  },
];
