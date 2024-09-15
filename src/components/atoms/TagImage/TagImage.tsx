import React, { FC } from "react";
import { View } from "react-native";

import { getImageURI } from "@/helpers/images";
import { useTheme } from "@/theme";

import ImageVariant from "../ImageVariant/ImageVariant";
import DummyTagImage from "./DummyTagImage";

const TagImage: FC<{ image?: string | null }> = ({ image }) => {
  const { layout, components } = useTheme();

  const [imageError, setImageError] = React.useState(false);
  const uri = getImageURI(image);

  const renderImage = React.useMemo(() => {
    if (!uri || imageError) return <DummyTagImage />;
    return (
      <ImageVariant
        source={uri}
        onError={() => setImageError(true)}
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
