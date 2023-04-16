import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Button from '.';

test('should match with snapshot', () => {
  const comp = render(<Button />);
  expect(comp).toMatchSnapshot();
});

test('should render content correctly', () => {
  const testContent = 'test';
  const comp = render(<Button content={testContent} />);
  const buttonText = comp.getByTestId('button-content').children[0];
  expect(buttonText).toBe(testContent);
});

test('should triger onPress', () => {
  const mockFunction = jest.fn();
  const comp = render(<Button onPress={mockFunction} />);

  const buttonTouchable = comp.getByTestId('onpress-trigger');
  fireEvent(buttonTouchable, 'press');

  expect(mockFunction).toBeCalled;
});
