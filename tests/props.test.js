import PropTypes from 'prop-types';
import { propTypes, defaultProps, mapStateToProps } from '../src/props';

test('propTypes are set properly', () => {
  expect(propTypes).toEqual({
    isHidden: PropTypes.bool,
    isAnimating: PropTypes.bool,
    className: PropTypes.string,
  });
});

test('defaulProps are set properly', () => {
  expect(defaultProps).toEqual({
    className: '',
  });
});

test('mapStateToProps creates a structured selector from the HOC states', () => {
  const mockReducerKey = 'mockReducerKey';
  const mockIsHidden = false;
  const mockIsAnimating = true;
  const mockState = {
    mockReducerKey: {
      isHidden: mockIsHidden,
      isAnimating: mockIsAnimating,
    },
  };
  const mockProps = { reducerKey: mockReducerKey };
  const mockMakeSelectIsHidden = (reducerKey) => {
    expect(reducerKey).toEqual(mockReducerKey);
    return () => mockIsHidden;
  };
  const mockMakeSelectIsAnimating = (reducerKey) => {
    expect(reducerKey).toEqual(mockReducerKey);
    return () => mockIsAnimating;
  };
  expect(mapStateToProps(mockState, mockProps, mockMakeSelectIsHidden, mockMakeSelectIsAnimating)()).toEqual({
    isHidden: mockIsHidden,
    isAnimating: mockIsAnimating,
  });
});

