const mapTimeStringToDateObject = (key, value) => {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return new Date(value);
  }
  return value;
};

const buildUrlWithQueryParams = (url, parameters = {}) => {
  let qs = '';
  Object.keys(parameters).forEach((key) => {
    const value = parameters[key];
    qs += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
  });
  if (qs.length > 0) {
    qs = qs.substring(0, qs.length - 1);
    return `${url}?${qs}`;
  }

  return url;
};

export const getReservationsByClassName = (className) => {
  const url = buildUrlWithQueryParams(`${SERVICE_URL}/reservations/${className}`, {
    classroomName: className,
  });
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

export const getReservationsAssigneToUser = (userId) => {
  const url = buildUrlWithQueryParams(`${SERVICE_URL}/reservations`, {
    userId,
  });
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
