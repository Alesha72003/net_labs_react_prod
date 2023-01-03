import { fetchData } from "../list/listAPI"

export async function fetchItem(id) {
    const res = await fetchData();
    return res.data[id];
}

export function updateItemAPI(item) {
    console.log("item", item);
    return new Promise((resolve) => setTimeout(() => resolve(), 500));
}