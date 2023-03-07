const setupComponent = require('./config/plop/component/prompt');
const setupStore = require('./config/plop/store/prompt');

module.exports = plop => {
  plop.setHelper(
    'upperCase',
    string => string.charAt(0).toUpperCase() + string.slice(1),
  );
  plop.setGenerator('components', setupComponent);
  plop.setGenerator('store', setupStore);
};
