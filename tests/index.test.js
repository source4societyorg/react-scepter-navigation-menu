import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { NavigationMenu } from '../src/index';

test('NavigationMenu renders without problems', () => {
  const mockComponent = ({ isHidden, isAnimating, reducerKey }) => <div>{reducerKey}: IsHidden={isHidden} isAnimating={isAnimating}</div>;
  mockComponent.propTypes = {
    isAnimating: PropTypes.bool,
    isHidden: PropTypes.bool,
    reducerKey: PropTypes.string,
  };
  shallow(
    <NavigationMenu
      isAnimating
      isHidden
      reducerKey={'mockReducerKey'}
      animationDuration={10}
    >
      <mockComponent />
    </NavigationMenu>
  );
});
