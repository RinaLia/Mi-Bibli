export const Request = (url, method, body = null) => {
  // const headers = new Headers();
  // headers.append("Authorization", "Bearer".concat(token));

  const req = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (body !== null) req.body = JSON.stringify(body);

  return fetch(url, req).then((data) => data.json());
};
export const url = `http://localhost:5000/`;
