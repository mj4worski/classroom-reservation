export const getClasses = () => {
  const url = new URL(`${SERVICE_URL}/classes`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.json())
    .then(response => ({ response }))
    .catch(error => ({ error }));
};
