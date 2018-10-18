import { moduleForComponent, test } from 'ember-qunit';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('foo/bar-baz', 'helper:foo/bar-baz', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{foo/bar-baz inputValue}}`);

  assert.equal(find('').textContent.trim(), '1234');
});
