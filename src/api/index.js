export const apiGet = url => () => fetch(url).then(v => v.json());

export const apiPut = (url, id, customer) => () =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(customer),
    headers: new Headers({ "Content-Type": "application/json" })
  }).then(data => data.json);
