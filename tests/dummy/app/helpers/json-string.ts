import Helper from '@ember/component/helper';
import Ember from 'ember';

const { HTMLBars } = Ember as any;

export function jsonString([param]: [any]): string {
  return JSON.stringify(param);
}

const forExport = Helper?.helper(jsonString) || HTMLBars?.makeBoundHelper?.(jsonString);

export default forExport;
