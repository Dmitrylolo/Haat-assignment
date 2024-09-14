import { MqttConfig } from "@d11/react-native-mqtt";

export const mqttConfig: MqttConfig = {
    clientId: process.env.MQTT_CLIENT_ID!,
    host: process.env.MQTT_HOST!,
    port: +process.env.MQTT_PORT!,
    options: {
        username: process.env.MQTT_USERNAME!,
        password: process.env.MQTT_PASSWORD!,
        cleanSession: true,
        enableSslConfig: true,
        keepAlive: 60,
        autoReconnect: true,
        retryCount: 3,
    },
};

console.log('mqttConfig', mqttConfig);