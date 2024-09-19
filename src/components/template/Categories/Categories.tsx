import { FC } from "react";
import { StyleSheet, View } from "react-native";

import { MarketVerticalCategory } from "@/components/organisms";
import SuggestedRestaurants from "@/components/organisms/SuggestedRestaurants";

const Categories: FC<{ categories: Category[] }> = ({ categories }) => {
  return (
    <View>
      {categories.map((category, index) =>
        category.elementType === "SuggestedMarketsCategory" ? (
          <View key={`category-${category.id}-${index}`}>
            <SuggestedRestaurants restaurants={category.stores} />
          </View>
        ) : (
          <View key={`category-${category.id}-${index}`}>
            <MarketVerticalCategory category={category} />
          </View>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  columnWrapper: {
    justifyContent: "space-between",
  },
});

export default Categories;
