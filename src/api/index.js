export const apiGet = url => () => fetch(url).then(v => v.json());

export const apiPut = (url, id, customer) => () =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(customer),
    headers: new Headers({ "Content-Type": "application/json" })
  }).then(data => data.json());

export const apiPost = (url, customer) => () =>
  fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(customer),
    headers: new Headers({ "Content-Type": "application/json" })
  }).then(data => data.json());

export const apiDelete = (url, id) => () =>
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: new Headers({ "Content-Type": "application/json" })
  })
    .then(data => data.json())
    .then(r => {
      return id;
    });
