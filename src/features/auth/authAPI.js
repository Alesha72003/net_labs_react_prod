export function login(login, password) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/login")
  xhr.send({login, password});
  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.status != 200) {
        return reject({status: xhr.status});
      }
      return resolve({data: xhr.response});
    }
  });
}

export function logout() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/login")
  xhr.send();
  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.status != 200) {
        return reject({status: xhr.status});
      }
      return resolve();
    }
  });
}
