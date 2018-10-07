const mapTimeStringToDateObject = (key, value) => {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
};

export const getReservationsByClassName = (className) => {
  const url = new URL(`${SERVICE_URL}/reservations/${className}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.text())
    .then(resAsText => JSON.parse(resAsText, mapTimeStringToDateObject))
    .catch(err => err);
};

export const getReservationsByClassNameAndDate = (className, date) => {
  const url = new URL(`${SERVICE_URL}/reservations/${className}/${date}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.text())
    .then(resAsText => JSON.parse(resAsText, mapTimeStringToDateObject))
    .catch(err => err);
};

export const makeReservation = (reservation, sucess = () => {}, error = () => {}) => {
  const url = new URL(`${SERVICE_URL}/reservations`);
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  }).then((res) => {
    if (res.status === 200) {
      sucess();
    } else {
      error();
    }
  }).catch(err => error(err));
};
