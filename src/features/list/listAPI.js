// export function fetchData(where = {}) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", "/api/")
//   xhr.send(where);
//   return new Promise((resolve, reject) => {
//     xhr.onload = function () {
//       if (xhr.status != 200) {
//         return reject({status: xhr.status});
//       }
//       return resolve({data: xhr.response});
//     }
//   });
// }

const tasks = {
  1: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "1.jpg"
  },
  2: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "2.jpeg"
  },
  3: {
    description: "test",
    taskname: "test",
    status: "test",
    image: "3.jpg"
  },
};

export function fetchData(where = {}) {
  console.log(where);
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: tasks}), 500);
  });
}