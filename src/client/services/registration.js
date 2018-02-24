const registration = (user) => {
  const url = new URL(`${SERVICE_URL}/registration`);
  const body = Object
    .keys(user)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(user[key])}`)
    .join('&');
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
    credentials: 'include',
  }).then(res => res.status)
    .catch(err => err);
};

export default registration;
