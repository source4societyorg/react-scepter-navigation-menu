import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { propTypes, defaultProps, mapStateToProps } from './props';

export class NavigationMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isHidden, isAnimating, reducerKey, animationDuration, children } = this.props;
    return React.cloneElement(children, { isHidden, isAnimating, reducerKey, animationDuration });
  }
}

export const withConnect = connect(mapStateToProps);
NavigationMenu.defaultProps = defaultProps;
NavigationMenu.propTypes = propTypes;
export default compose(
  withConnect,
)(NavigationMenu);
