import React from 'react';
import { shallow } from 'enzyme';
import ReduxApp from 'components//ReduxApp.js';

describe('<ReduxApp />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<ReduxApp />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "reduxapp-component"', () => {
      expect(component.hasClass('reduxapp-component')).to.equal(true);
    });
  });
});
