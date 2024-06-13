import { useEffect, useRef } from "react";

const useWebSocket = (props: any) => {
    const { url, onMessage } = props;

    const ws = useRef<any>(null);

    useEffect(() => {
        ws.current = new WebSocket(url);

        ws.current.onopen = () => {
            console.log('Connected to WebSocket server');
        }

        ws.current.onmessage = (event: any) => {
            onMessage(event);
        }

        ws.current.onclose = () => {
            console.log("disconect ");
        }

        return () => {
            ws.current.close();
        }

    }, [url, onMessage])

    return ws.current;
}

export default useWebSocket;