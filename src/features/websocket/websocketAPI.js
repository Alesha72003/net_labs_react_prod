const websocketPath = "/ws"

export function connectWebSocket() {
    return new Promise((resolve) => {
        const ws = new WebSocket(`wss://${window.location.host}${websocketPath}`);
        ws.onload = () => {
            resolve(ws);
        };
    });
}