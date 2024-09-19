import { Text, View } from "react-native";

import { useTheme } from "@/theme";

import type { FC } from "react";
const TagName: FC<{ name: string }> = ({ name }) => {
  const { fonts, layout } = useTheme();

  return (
    <View style={layout.flex_1} testID="tag-name-wrapper">
      <Text
        testID="tag-name"
        style={[
          fonts.bold,
          fonts.size_14,
          fonts.alignCenter,
          fonts.alignVerticalCenter,
          fonts.grayTextBody,
          layout.flex_1,
        ]}
      >
        {name}
      </Text>
    </View>
  );
};

export default TagName;
