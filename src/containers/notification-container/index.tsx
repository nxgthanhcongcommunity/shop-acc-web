// components/NotificationComponent.js
import React, { useState } from 'react';
import { useWebSocket } from '../../hooks';

const NotificationComponent = () => {
    const [notifications, setNotifications] = useState<any>([]);

    const accountCode = "USR-QDGVLE";
    const wsUrl = `ws://localhost:4004?accountCode=${accountCode}`;

    useWebSocket({
        url: wsUrl,
        onMessage: (event: any) => {

            console.log(event)

            // const message = JSON.parse(event.data);

            // if (message.type === 'balanceUpdate' && message.userId === userId) {
            //     setNotifications((prevNotifications: any) => [
            //         ...prevNotifications,
            //         `Balance updated to ${message.newBalance}`,
            //     ]);
            // }

        },
    });

    return (
        <div className="notification-container">
            {/* {notifications.map((notification, index) => (
                <div key={index} className="notification">
                    {notification}
                </div>
            ))} */}
        </div>
    );
};

export default NotificationComponent;
