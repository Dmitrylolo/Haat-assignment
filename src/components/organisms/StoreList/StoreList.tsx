import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import StoreCard from "@molecules/StoreCard";

interface StoreListProps {
  stores: CategoryStore[];
}

const StoreList: React.FC<StoreListProps> = ({ stores }) => {
  const extendedStores: CategoryStore[] =
    stores.length % 2 !== 0
      ? [...stores, { storeId: -1, isPlaceholder: true } as StoreElement]
      : stores;

  return (
    <FlatList
      data={extendedStores}
      renderItem={({ item }) =>
        "isPlaceholder" in item ? (
          <View style={styles.placeholder} />
        ) : (
          <View style={styles.itemContainer}>
            <StoreCard store={item as Store} />
          </View>
        )
      }
      keyExtractor={(item, index) =>
        "isPlaceholder" in item
          ? `placeholder-${index}`
          : item.storeId.toString()
      }
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      showsVerticalScrollIndicator={false}
      scrollEnabled={false}
    />
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "flex-start",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  placeholder: {
    flex: 1,
    margin: 5,
  },
});

export default StoreList;
