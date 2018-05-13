export const prepareWeeks = (month) => {
  const weeks = [];
  const currentMonth = month.clone();
  const weekForProcess = month.clone().startOf('month').day('Sunday');
  while (
    currentMonth.year() > weekForProcess.year() ||
    weekForProcess.month() <= currentMonth.month()
  ) {
    weeks.push(weekForProcess.clone());
    weekForProcess.add(1, 'w');
    if (currentMonth.year() < weekForProcess.year()) {
      break;
    }
  }
  return weeks;
};
