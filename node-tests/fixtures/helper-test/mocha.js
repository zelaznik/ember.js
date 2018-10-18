import { expect } from 'chai';

import { describeComponent, it } from 'ember-mocha';
import { find } from 'ember-native-dom-helpers';
import hbs from 'htmlbars-inline-precompile';

describeComponent('foo/bar-baz', 'helper:foo/bar-baz',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#foo/bar-baz}}
      //     template content
      //   {{/foo/bar-baz}}
      // `);
      this.set('inputValue', '1234');

      this.render(hbs`{{foo/bar-baz inputValue}}`);

      expect(find('').textContent.trim()).to.equal('1234');
    });
  }
);

