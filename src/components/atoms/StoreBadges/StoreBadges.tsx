import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface BadgesProps {
  labels?: Labels[];
}

const StoreBadges: React.FC<BadgesProps> = ({ labels }) => {
  if (!labels?.length) return null;

  let badgeStyle = styles.defaultBadge;

  // switch (labellabelType) {
  //   case 'FREE':
  //     badgeStyle = styles.freeBadge;
  //     break;
  //   case 'DISCOUNT':
  //     badgeStyle = styles.discountBadge;
  //     break;
  //   // Добавьте другие типы, если необходимо
  //   default:
  //     badgeStyle = styles.defaultBadge;
  // }

  return (
    <View style={styles.badgesContainer}>
      {labels.map((label, index) => (
        <View key={`badge-${index}`} style={badgeStyle}>
          <Text style={styles.badgeText}>{label.text}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  badgesContainer: {
    flexDirection: "row",
    marginBottom: 8,
  },
  defaultBadge: {
    backgroundColor: "#FF0000",
    padding: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  freeBadge: {
    backgroundColor: "#00FF00", // Пример цвета для "FREE"
    padding: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  discountBadge: {
    backgroundColor: "#FFA500", // Пример цвета для "DISCOUNT"
    padding: 4,
    borderRadius: 4,
    marginRight: 5,
  },
  badgeText: {
    color: "#FFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default StoreBadges;
