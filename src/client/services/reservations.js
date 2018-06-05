export const getReservations = (className) => {
  const url = new URL(`${SERVICE_URL}/reservations?className=${className}`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.text())
    .catch(err => err);
};

export const makeReservation = (reservation) => {
  const url = new URL(`${SERVICE_URL}/reservations`);
  return fetch(url, {
    method: 'POST',
    headers: new Headers(),
    body: reservation,
  }).then(res => res.statusCode === 200)
    .catch(err => err);
};
