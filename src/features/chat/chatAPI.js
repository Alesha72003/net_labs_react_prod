import { chatAPI } from "../../app/api"


const messages_probka = [
    {
        id: 1,
        text: 'peepee',
        from: {
            id: 1,
            username: "alesha"
        },
        to: {
            id: 2,
            username: "scv"
        }
    },
    {
        id: 2,
        text: 'poopoo',
        from: {
            id: 2,
            username: "scv"
        },
        to: {
            id: 1,
            username: "alesha"
        }
    }
];

export async function getMessages(id) {
    return (await chatAPI.get(`/chat/${id}`)).data;
}

export async function sendMessage(message) {
    let messageToSend = {text: message.text};
    return (await chatAPI.post(`/chat/${message.to}`, messageToSend)).data;
}