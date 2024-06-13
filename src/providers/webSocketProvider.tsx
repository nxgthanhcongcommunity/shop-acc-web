import { ReactNode, useEffect, useRef, useState } from "react";
import WebSocketContext from "./webSocketContext";
import { useSelector } from "../stores/hooks";
import { RootState } from "../stores";

interface IWebSocketProvider {
    children: ReactNode;
}

const WebSocketProvider = (props: IWebSocketProvider) => {
    const { children } = props;
    const [ws, setWs] = useState<WebSocket | null>(null);
    const wsRef = useRef<WebSocket | null>(null);

    const auth = useSelector((state: RootState) => state.auth);


    useEffect(() => {
        if (auth.entity == null) return;

        // if (("" + accountCode).length == 0) return;
        const connect = () => {
            const socket = new WebSocket("ws://localhost:4004/?accountCode=" + auth.entity?.code); //+ accountCode USR-QDGVLE

            socket.onopen = () => {
                console.log("ws conected");
            }

            socket.onclose = () => {
                console.log('ws disconnected, retrying...');
                setTimeout(connect, 1000);  // Reconnect after 1 second
            }

            socket.onmessage = (event) => {
                console.log('ws message received:', event.data)
            }

            wsRef.current = socket;
            setWs(socket);
        }

        connect();

        return () => {
            if (wsRef.current) {
                wsRef.current.close();
            }
        }

    }, [auth.entity]) //accountCode

    return (
        <WebSocketContext.Provider value={{ ws }}>
            {children}
        </WebSocketContext.Provider>
    )

}

export default WebSocketProvider;