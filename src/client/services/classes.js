export const getClasses = () => {
  const url = new URL(`${SERVICE_URL}/classes`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
};

export const updateClass = (classroom) => {
  const url = new URL(`${SERVICE_URL}/classes`);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    credentials: 'include',
    body: JSON.stringify({ classroom }),
  }).then(res => res.status)
    .catch(err => err);
};
