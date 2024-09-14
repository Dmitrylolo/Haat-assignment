import { SubscribeMqtt } from "@d11/react-native-mqtt";

export const subscriptionConfig: SubscribeMqtt = {
    topic: process.env.MQTT_TOPIC!,
    qos: +process.env.MQTT_QOS!,
    onEvent: (payload) => {
        console.log('Received message:', payload);
    },
    onSuccess: (ack) => {
        console.log('Subscription success:', ack);
    },
    onError: (error) => {
        console.log('Subscription error:', error);
    },
};