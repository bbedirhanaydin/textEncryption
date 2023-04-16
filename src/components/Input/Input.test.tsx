import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react-native';
import Input from '.';

test('should match with snapshot input', () => {
  const comp = render(<Input />);
  expect(comp).toMatchSnapshot();
});

test('should control onChangeText', () => {
  const mockFunction = jest.fn();
  const comp = render(<Input onChangeText={mockFunction} />);

  const inputChange = comp.getByTestId('input-test');
  fireEvent(inputChange, 'onChange');

  expect(mockFunction).toBeCalled;
});
