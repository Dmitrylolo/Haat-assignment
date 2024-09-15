import { View } from "react-native";

import { useTheme } from "@/theme";

const TagSeparator = () => {
  const { gutters } = useTheme();
  return <View style={gutters.marginHorizontal_12} />;
};

export default TagSeparator;
