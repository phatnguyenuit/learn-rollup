import sayHello from './modules/hello';
import _ from 'lodash';

const arr = _.concat([1, 2, 3], 4, [5]);
sayHello('Hello from Rollup and lodash: ' + arr);
