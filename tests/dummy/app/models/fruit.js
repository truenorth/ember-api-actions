// BEGIN-SNIPPET fruit-model
import { collectionAction, memberAction, serializeAndPush } from '@1024pix/ember-api-actions';
import Model, { attr } from '@ember-data/model';

function mergeAttributes(attributes) {
  const payload = this.serialize();
  payload.data.attributes = Object.assign(payload.data.attributes || {}, attributes);
  return payload;
}
const Fruit = Model.extend({
  name: attr('string'),
  ripen: memberAction({ path: 'doRipen' }),
  info: memberAction({ path: 'info', type: 'get' }),
  ripenAll: collectionAction({ path: 'ripenEverything' }),
  getFresh: collectionAction({ path: 'fresh', type: 'get' }),
  eat: memberAction({
    path: 'doEat',
    before: mergeAttributes,
    after: serializeAndPush
  }),
  eatAll: collectionAction({
    path: 'doEatAll',
    before: mergeAttributes,
    after: serializeAndPush
  })
});

Fruit.reopenClass({
  juiceAll: collectionAction({
    path: 'doJuiceAll',
    before: mergeAttributes,
    after: serializeAndPush
  })
});

export default Fruit;
// END-SNIPPET
