import { moduleForComponent, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-foo', 'Integration | Component | x-foo', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-foo}}`);

  assert.equal(find('').textContent.trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-foo}}
      template block text
    {{/x-foo}}
  `);

  assert.equal(find('').textContent.trim(), 'template block text');
});
