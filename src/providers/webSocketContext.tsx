import { createContext, useContext } from "react";

interface IWebSocketContext {
    ws: WebSocket | null;
}

const WebSocketContext = createContext<IWebSocketContext | undefined>(undefined);

export const useWebSocket = (): WebSocket | null => {

    const context = useContext(WebSocketContext);
    if (context == null) {
        throw new Error("useWebSocket must have a websocket Provider");
    }

    return context.ws;
}

export default WebSocketContext;