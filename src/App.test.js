import { render, screen } from '@testing-library/react';
import BookingForm from '../src/pages/BookingForm';
import { initializeTimes, timesReducer } from './utils/utils';


test('Renders the BookingForm heading', () => {

  const mockAvailableTimes = ["12:00", "13:00", "14:00"];
  const mockUpdateTimes = jest.fn(); 

  render(<BookingForm availableTimes={mockAvailableTimes} updateTimes={mockUpdateTimes} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});


test("initializeTimes should return the correct initial available times", () => {
  const expectedTimes = ["12:00", "12:30", "13:00", "13:30", "18:00", "18:30", "19:00", "19:30"];
  const result = initializeTimes();

  expect(result).toEqual(expectedTimes);
});


test("updateTimes should return the same available times as the initial state", () => {
  const initialState = initializeTimes();
  const action = { type: "UPDATE_TIMES", date: "2025-04-01" };

  const newState = timesReducer(initialState, action);

  expect(newState).toEqual(initialState);
});
