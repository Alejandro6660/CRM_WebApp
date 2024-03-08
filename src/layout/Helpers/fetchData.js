export const fetchData = (
  url,
  method = "GET",
  body = null,
  jwtToken = null
) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : null,
  };

  if (jwtToken) {
    options.headers.Authorization = `Bearer ${jwtToken}`;
  }

  const promise = fetch(url, options)
    .then((response) => response.json())
    .then((data) => data);
  return getSuspender(promise);
};

const getSuspender = (promise) => {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "succes";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "error":
        throw response;
      default:
        throw response;
    }
  };

  return { read };
};
