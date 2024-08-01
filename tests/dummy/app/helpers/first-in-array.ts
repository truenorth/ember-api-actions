import { helper } from '@ember/component/helper';
import { isArray } from '@ember/array';

function firstInArray([array]) {
  return isArray(array) ? array[0] : undefined;
}

export default helper(firstInArray);
