import API from "../../app/api"
import { fetchData } from "../list/listAPI"

// export async function fetchItem(id) {
//     const res = await fetchData();
//     return res[id];
// }

export async function fetchItem(id) {
    return (await API.get(`/task/${id}`)).data;
}

export function updateItemAPI(item) {
    console.log("item", item);
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
}