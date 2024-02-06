export default function getCalendar(date) {
  let arr = [];
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const firsDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    daysInMonth
  ).getDay();

  for (let i = 1; i <= daysInMonth; i++) {
    arr.push(i);
  }

  if (!firsDay) {
    for (let i = 0; i <= 5; i++) {
      arr.unshift(
        new Date(date.getFullYear(), date.getMonth(), 0 - i).getDate()
      );
    }
  } else {
    for (let i = 0; i < firsDay - 1; i++) {
      arr.unshift(
        new Date(date.getFullYear(), date.getMonth(), 0 - i).getDate()
      );
    }
  }

  if (lastDay) {
    let count = 1;
    for (let i = lastDay; i < 7; i++) {
      arr.push(count);
      count++;
    }
  }

  const chunkedArray = [];

  for (let i = 0; i < arr.length; i += 7) {
    const chunk = arr.slice(i, i + 7);
    chunkedArray.push(chunk);
  }
  return chunkedArray
}

