import { expect } from 'chai';
import { describeComponent, it } from 'ember-mocha';
import { findAll } from 'ember-native-dom-helpers';

describeComponent('x-foo', 'Unit | Component | x-foo',
  {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar'],
    unit: true
  },
  function() {
    it('renders', function() {
      // creates the component instance
      let component = this.subject();
      // renders the component on the page
      this.render();
      expect(component).to.be.ok;
      expect(findAll('')).to.have.length(1);
    });
  }
);
