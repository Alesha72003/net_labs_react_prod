import { fetchData } from "../list/listAPI"

export async function fetchItem(id) {
    const res = await fetchData();
    return res.data[id];
}