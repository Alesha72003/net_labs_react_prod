import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const WebSocketPath = "/ws";

const WebSocketContext = createContext();

export function WebSocketProvider({children}) {
    [WebSocket, SetWebSocket] = useState(null);
    useEffect(() => {
        const location = useLocation();
        const wsConnectString = `ws://${location.origin}${WebSocketPath}`;
        const WebSocketObject = new WebSocket(wsConnectString);
        WebSocketObject.onopen = () => {
            SetWebSocket(WebSocketObject);
        };
    });

    return (
        <WebSocketContext.Provider value={WebSocket}>
            {children}
        </WebSocketContext.Provider>
    );
}

export function useWebSocket() {
    return useContext(WebSocketContext);
}