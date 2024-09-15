import React, { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Pressable,
  StyleSheet,
} from "react-native";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";

import { ImageVariant } from "@/components/atoms";
import { Brand } from "@/components/molecules";
import { SafeScreen } from "@/components/template";
import { useTheme } from "@/theme";
import { fetchOne } from "@/services/api/users";

import { isImageSourcePropType } from "@/types/guards/image";

import SendImage from "@/theme/assets/images/send.png";
import ColorsWatchImage from "@/theme/assets/images/colorswatch.png";
import TranslateImage from "@/theme/assets/images/translate.png";
import { subscriptionConfig } from "../../services/mqtt/mqttUtils";
import { initializeMqttClient } from "../../services/mqtt/createMqtt";
import { useEventListeners } from "../../services/mqtt/useEventListeners";
import { MqttClient } from "@d11/react-native-mqtt/dist/Mqtt/MqttClient";
import { mqttConfig } from "../../services/mqtt/mqttConstants";
import { RoundButton } from "./Button";

function Example() {
  const [mqttClient, setClient] = React.useState<MqttClient | undefined>(
    undefined,
  );

  useEventListeners(mqttClient);

  React.useEffect(() => {
    initializeMqttClient(mqttConfig).then((client) => {
      if (client) {
        setClient(client);
      }
    });
  }, []);

  const connectMqtt = React.useCallback(
    () => (mqttClient ? mqttClient.connect() : null),
    [mqttClient],
  );

  const subscribeMqtt = React.useCallback(
    () => (mqttClient ? mqttClient.subscribe(subscriptionConfig) : null),
    [mqttClient],
  );

  const disconnectMqtt = React.useCallback(
    () => (mqttClient ? mqttClient.disconnect() : null),
    [mqttClient],
  );

  const removeMqtt = React.useCallback(() => {
    if (mqttClient) {
      mqttClient.remove();
      setClient(undefined);
    }
  }, [mqttClient]);

  const getConnectionStatus = React.useCallback(() => {
    const connectionStatus = mqttClient
      ? mqttClient.getConnectionStatus()
      : null;
    console.log(`::MQTT connectionStatus:${connectionStatus}`);
  }, [mqttClient]);

  return (
    <View style={styles.container}>
      <RoundButton
        onPress={connectMqtt}
        backgroundColor={"#118a7e"}
        buttonText="Connect Mqtt"
        disabled={!mqttClient}
      />
      <RoundButton
        onPress={getConnectionStatus}
        backgroundColor={"#1f6f78"}
        buttonText="Connection Status"
        disabled={!mqttClient}
      />
      <RoundButton
        onPress={subscribeMqtt}
        backgroundColor={"#7fa99b"}
        buttonText="Subscribe Mqtt"
        disabled={!mqttClient}
      />
      <RoundButton
        onPress={disconnectMqtt}
        backgroundColor={"#ff5959"}
        buttonText="Disconnect Mqtt"
        disabled={!mqttClient}
      />
      <RoundButton
        onPress={removeMqtt}
        backgroundColor={"red"}
        buttonText="Remove Mqtt"
        disabled={!mqttClient}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D3D3D3",
  },
});

export default Example;
