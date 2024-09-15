import { Text } from "react-native";

import { useTheme } from "@/theme";

import type { FC } from "react";
const TagsTitle: FC<{ title: string }> = ({ title }) => {
  const { fonts } = useTheme();
  return (
    <Text style={[fonts.size_16, fonts.bold, fonts.grayTextTitle]}>
      {title}
    </Text>
  );
};

export default TagsTitle;
