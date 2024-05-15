import Pretender from 'pretender';

// @ts-ignore
export default function setupPretender(hooks) {
  // @ts-ignore
  hooks.beforeEach(function(this) {
    this.server = new Pretender();
  });

  // @ts-ignore
  hooks.afterEach(function(this) {
    this.server.shutdown();
  });
}
