// export function getUser(id) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", `/api/user/${id}`)
//   xhr.send();
//   return new Promise((resolve, reject) => {
//     xhr.onload = function () {
//       if (xhr.status !== 200) {
//         return reject("Access Denied");
//       }
//       return resolve({data: xhr.response});
//     }
//   });
// }

const groups = {
    1: {
        id: 1,
        name: "admin"
    },
    2: {
        id: 2,
        name: "test"
    }
};

const users = {
    1: {
        id: 1,
        username: "admin",
        groups: [1, 2]
    }, 
    2: {
        id: 2,
        username: "scv",
        groups: [2]
    }
};

export function getUser(id) {
    return new Promise((resolve, reject) => setTimeout(() => users[id] ? resolve({
        user: users[id],
        groups: users[id].groups.map((el) => groups[el])
    }) : reject("Not found"), 500));
}

export function updateUser(user) {
    return new Promise(resolve => setTimeout(() => resolve(), 500));
}