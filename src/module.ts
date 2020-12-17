import { ComponentClass } from 'react';

// Angular pages
import { ExampleConfigCtrl } from './legacy/config';
import { AppPlugin, AppRootProps } from '@grafana/data';
import { ExampleRootPage } from './ExampleRootPage';
import { ExampleAppSettings } from './types';

import 'antd/dist/antd.less';

// Legacy exports just for testing
export {
  ExampleConfigCtrl as ConfigCtrl,
};

export const plugin = new AppPlugin<ExampleAppSettings>()
  .setRootPage((ExampleRootPage as unknown) as ComponentClass<AppRootProps>);
