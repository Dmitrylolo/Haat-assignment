import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { StoreList } from "@organisms/index";

interface MarketVerticalCategoryProps {
  category: Category;
}

const MarketVerticalCategory: React.FC<MarketVerticalCategoryProps> = ({
  category,
}) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <View style={styles.categoryContainer}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{category.name}</Text>
        {category.stores.length > 8 && (
          <TouchableOpacity onPress={() => setShowAll(!showAll)}>
            <Text style={styles.viewAll}>View all</Text>
          </TouchableOpacity>
        )}
      </View>
      <StoreList
        stores={showAll ? category.stores : category.stores.slice(0, 4)}
      />
      {!showAll && category.stores.length > 8 && (
        <TouchableOpacity
          onPress={() => setShowAll(true)}
          style={styles.showMoreButton}
        >
          <Text style={styles.showMoreText}>Show more</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    padding: 10,
  },
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "#FF0000",
  },
  showMoreButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 1,
  },
  showMoreText: {
    color: "#FF0000",
  },
});

export default MarketVerticalCategory;
