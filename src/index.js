import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { propTypes, defaultProps, mapStateToProps } from './props';

export class NavigationMenu extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { isHidden, isAnimating, reducerKey, animationDuration } = this.props;
    return <children isHidden={isHidden} isAnimating={isAnimating} reducerKey={reducerKey} animationDuration={animationDuration} />;
  }
}

export const withConnect = connect(mapStateToProps);
NavigationMenu.defaultProps = defaultProps;
NavigationMenu.propTypes = propTypes;
export default compose(
  withConnect,
)(NavigationMenu);
