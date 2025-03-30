export const initializeTimes = () => [
    "12:00", "12:30", "13:00", "13:30",
    "18:00", "18:30", "19:00", "19:30"
];

export const timesReducer = (state, action) => {
  switch (action.type) {
      case "UPDATE_TIMES":
          return initializeTimes();
      default:
          return state;
  }
};