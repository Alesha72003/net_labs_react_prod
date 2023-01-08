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

export function getMessages(id) {
    return new Promise((resolve) => setTimeout(() => resolve(messages_probka), 500));
}

export function sendMessage(message) {
    return new Promise(resolve => setTimeout(() => resolve(), 500));
}