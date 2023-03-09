import systemRouter from './system';
import homeRouter from './home';
import componentsRouter from './components';
import linkRouter from './link';
export const children = [
  ...homeRouter,
  ...systemRouter,

  ...componentsRouter,
  ...linkRouter,
];
