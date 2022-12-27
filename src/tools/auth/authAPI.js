// export function login(data) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "/api/login")
//   xhr.send(JSON.stringify(data));
//   return new Promise((resolve, reject) => {
//     xhr.onload = function () {
//       if (xhr.status !== 200) {
//         return reject("Login or password incorrect");
//       }
//       return resolve({data: xhr.response});
//     }
//   });
// }

const me = {
  id: 1,
  username: "admin",
  admin: true
};

export function login(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.login === "admin" && data.password === "admin") {
        return resolve(me);
      }
      return reject("Login or password incorrect");
    }, 500);
  });
}

export function logout() {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "/api/login")
  xhr.send();
  return new Promise((resolve, reject) => {
    xhr.onload = function () {
      if (xhr.status !== 200) {
        return reject({status: xhr.status});
      }
      return resolve();
    }
  });
}
