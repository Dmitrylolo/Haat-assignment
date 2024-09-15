import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import { TagSeparator, TagsTitle } from "@/components/atoms";
import { Tag } from "@/components/molecules";
import { useTheme } from "@/theme";

import type { FC } from "react";
import type { TagsProps } from "./Tags.types";
const Tags: FC<TagsProps> = ({ tags: { title, tags: data } }) => {
  const { gutters } = useTheme();
  return (
    <View style={gutters.padding_16}>
      <TagsTitle title={title} />
      <FlatList
        style={gutters.marginTop_16}
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Tag tag={item} />}
        ItemSeparatorComponent={TagSeparator}
        horizontal
      />
    </View>
  );
};
export default Tags;
