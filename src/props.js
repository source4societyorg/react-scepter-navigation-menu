import PropTypes from 'prop-types';
import { valueOrDefault } from '@source4society/scepter-utility-lib';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsHidden, makeSelectIsAnimating } from '@source4society/react-scepter-navigation-hoc';
export const propTypes = {
  isHidden: PropTypes.bool,
  isAnimating: PropTypes.bool,
  className: PropTypes.string,
};
export const defaultProps = {
  className: '',
};
export const mapStateToProps = (state, ownProps, injectedMakeSelectIsHidden, injectedMakeSelectIsAnimating) => {
  const makeSelectIsHiddenSelector = valueOrDefault(injectedMakeSelectIsHidden, makeSelectIsHidden);
  const makeSelectIsAnimatingSelector = valueOrDefault(injectedMakeSelectIsAnimating, makeSelectIsAnimating);
  return createStructuredSelector({
    isHidden: makeSelectIsHiddenSelector(ownProps.reducerKey),
    isAnimating: makeSelectIsAnimatingSelector(ownProps.reducerKey),
  });
};
