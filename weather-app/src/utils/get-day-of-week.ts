export const getDayOfWeekString = (dateString: string) => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date = new Date(dateString);
  const dayOfWeekIndex = date.getDay();

  return daysOfWeek[dayOfWeekIndex];
};
