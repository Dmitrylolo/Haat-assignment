import { ListRenderItem, TouchableOpacity } from "react-native";

import { TagImage, TagName } from "@/components/atoms";

const Tag: ListRenderItem<Tag> = ({ item }) => {
  return (
    <TouchableOpacity
      testID="tag-item"
      style={{ width: 88, alignContent: "center" }}
    >
      <TagImage image={item.images?.serverImage} />
      <TagName name={item.name} />
    </TouchableOpacity>
  );
};

export default Tag;
