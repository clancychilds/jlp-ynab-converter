import React from 'react';
import { shallow } from 'enzyme';
import Introduction from 'components//Introduction.js';

describe('<Introduction />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Introduction />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "introduction-component"', () => {
      expect(component.hasClass('introduction-component')).to.equal(true);
    });
  });
});
