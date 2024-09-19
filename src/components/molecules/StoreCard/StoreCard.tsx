import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { useImageSource } from "@/hooks/images";
import { StoreBadges } from "@components/atoms/index";

interface StoreCardProps {
  store: Store;
}

const StoreCard: React.FC<StoreCardProps> = ({ store }) => {
  const statusColor = store.status === 2 ? "red" : "green";
  const imageSource = useImageSource(
    store.icon?.smallServerImage || store.icon?.serverImage
  );

  return (
    <View style={styles.storeCard}>
      <StoreBadges labels={store.labels} />
      <Image source={imageSource} style={styles.storeImage} />
      <Text style={styles.storeName}>{store.name}</Text>
      <Text style={styles.storeAddress}>{store.address}</Text>
      {store.rating && (
        <Text style={styles.storeRating}>
          ⭐ {store.rating.value} ({store.rating.numberOfRatings})
        </Text>
      )}
      <Text style={[styles.storeStatus, { color: statusColor }]}>
        {store.status === 2
          ? "Closed"
          : `Open until ${store.closestWorkingHour}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  storeCard: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 10,
    margin: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  storeImage: {
    width: 85,
    height: 85,
    marginBottom: 10,
    alignSelf: "center",
  },
  storeName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  storeAddress: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  storeRating: {
    fontSize: 12,
    color: "gray",
    marginBottom: 5,
  },
  storeStatus: {
    fontSize: 12,
  },
});

export default StoreCard;
