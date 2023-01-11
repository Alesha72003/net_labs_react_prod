const websocketPath = "/ws"

export function connectWebSocket() {
    return new Promise((resolve) => {
        const ws = new WebSocket(`ws://${window.location.host}${websocketPath}`);
        ws.onopen = () => {
            resolve(ws);
        };
    });
}