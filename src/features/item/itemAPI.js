import API from "../../app/api"

export async function fetchItem(id) {
    return (await API.get(`/task/${id}`)).data;
}

export async function updateItemAPI(item) {
    let itemToSend = {...item};
    delete itemToSend.id;
    await API.put(`/task/${item.id}`, itemToSend);
}