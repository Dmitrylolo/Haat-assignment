import React, { FC } from "react";
import { View } from "react-native";

import { useTheme } from "@/theme";
import { useImageSource } from "@hooks/images";

import ImageVariant from "../ImageVariant/ImageVariant";
import DummyTagImage from "./DummyTagImage";

const TagImage: FC<{ image?: string | null }> = ({ image }) => {
  const { layout, components } = useTheme();

  const [imageError, setImageError] = React.useState(false);
  const uri = useImageSource(image);
  const renderImage = React.useMemo(() => {
    if (!uri || imageError) return <DummyTagImage testID="tag-image" />;
    return (
      <ImageVariant
        testID="tag-image"
        source={uri}
        onError={(er) => {
          setImageError(true);
          console.log(er);
        }}
        style={components.tagImage}
        resizeMode="contain"
      />
    );
  }, [uri, imageError]);

  return (
    <View
      style={[layout.justifyCenter, layout.itemsCenter, components.tagImage]}
    >
      {renderImage}
    </View>
  );
};

export default TagImage;
