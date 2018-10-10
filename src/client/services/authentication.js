export const login = (user) => {
  const url = new URL(`${SERVICE_URL}/users/login`);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    credentials: 'include',
    body: JSON.stringify(user),
  }).then(res => res.json())
    .catch(err => err);
};

export const registration = (user) => {
  const url = new URL(`${SERVICE_URL}/users/registration`);
  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    credentials: 'include',
    body: JSON.stringify(user),
  }).then(res => res.json())
    .catch(err => err);
};

export const loginRememberMe = () => {
  const url = new URL(`${SERVICE_URL}/users/rememberMe`);
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
  }).then(res => res.json())
    .catch(err => err);
};

export const logout = () => {
  const url = new URL(`${SERVICE_URL}/users/logout`);
  return fetch(url, {
    method: 'GET',
    credentials: 'include',
  }).then(res => res.status)
    .catch(err => err);
};
