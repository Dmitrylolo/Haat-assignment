import React from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { SuggestedCard } from "@/components/molecules";
import { useImageSource } from "@/hooks/images";
import { useTheme } from "@/theme";

interface SuggestedRestaurantsProps {
  restaurants: StoreElement[];
}

const SuggestedRestaurants: React.FC<SuggestedRestaurantsProps> = ({
  restaurants,
}) => {
  const { fonts } = useTheme();
  const renderRestaurant = ({ item }: { item: StoreElement }) => {
    const backgroundImageSource = useImageSource(
      item.backgroundImage?.serverImage
    );

    return (
      <View style={styles.restaurantCard}>
        <ImageBackground
          source={backgroundImageSource}
          style={styles.backgroundImage}
        >
          <LinearGradient
            colors={[
              "rgba(0, 0, 0, 0)",
              "rgba(0, 0, 0, 0.5)",
              "rgba(0, 0, 0, 0.9)",
            ]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            locations={[0, 0.295, 1]}
            style={styles.gradientOverlay}
          />
          <View
            style={{
              flex: 1,
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <View style={styles.overlay}>
              <Text
                style={[
                  styles.restaurantName,
                  fonts.size_32,
                  fonts.whiteOpacity70,
                ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.restaurantDescription,
                  fonts.size_14,
                  fonts.whiteOpacity70,
                ]}
              >
                {item.subTitle}
              </Text>
            </View>
            <SuggestedCard images={item.foregroundImage} />
          </View>
        </ImageBackground>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.storeId.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  restaurantCard: {
    marginBottom: 10,
    borderRadius: 12,
    overflow: "hidden",
    height: 250,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  gradientOverlay: {
    width: "100%",
    height: "100%",
    // justifyContent: "flex-end",
    position: "absolute",
  },
  overlay: {
    alignItems: "center",
  },
  restaurantName: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  restaurantDescription: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
  },

  foregroundImageContainer: {
    marginRight: 5,
  },
  foregroundImage: {
    width: 85,
    height: 62,
    borderRadius: 5,
  },
});

export default SuggestedRestaurants;
