import { useState } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import type { Banner } from "./";
const BannerCarousel = ({ interval, banners }: Banner) => {
  const { width } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       setCurrentIndex((currentIndex + 1) % banners.length);
  //     }, interval);

  //     return () => clearInterval(intervalId);
  //   }, [banners, interval]);
  console.log(banners);
  return (
    <ScrollView
      style={[styles.container]}
      horizontal
      pagingEnabled
      contentOffset={{ x: currentIndex * width, y: 0 }}
    >
      {banners.map((banner, index) => (
        <View key={`bannaer-${index}`} style={[styles.banner, { width }]}>
          <Image source={banner} style={styles.bannerImage} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "green",
  },
  banner: {
    borderWidth: 1,
    borderColor: "red",
  },
  bannerImage: {
    resizeMode: "stretch",
    width: "100%",
  },
});

export default BannerCarousel;
