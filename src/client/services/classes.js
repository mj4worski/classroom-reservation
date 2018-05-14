export const getClasses = () => {
  const url = new URL(`${SERVICE_URL}/classes`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.json())
    .catch(err => err);
};

export const getReservations = (className) => {
  const url = new URL(`${SERVICE_URL}/reservations?className=${className}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.text())
    .catch(err => err);
};

