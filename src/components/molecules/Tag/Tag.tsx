import { TouchableOpacity } from "react-native";

import { TagImage, TagName } from "@/components/atoms";

import type { FC } from "react";
const Tag: FC<{ tag: Tag }> = ({ tag }) => {
  return (
    <TouchableOpacity style={{ width: 88, alignContent: "center" }}>
      <TagImage image={tag.images.serverImage} />
      <TagName name={tag.name} />
    </TouchableOpacity>
  );
};

export default Tag;
