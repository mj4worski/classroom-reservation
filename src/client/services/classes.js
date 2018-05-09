const getClasses = () => {
  const url = new URL(`${SERVICE_URL}/classes`);
  return fetch(url, {
    method: 'GET',
    headers: new Headers(),
  }).then(res => res.json())
    .catch(err => err);
};

export default getClasses;
