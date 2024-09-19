import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const CONTAINER_WIDTH = SCREEN_WIDTH;
const ITEM_WIDTH = 109; // Ширина центрального изображения
const ITEM_SPACING = ITEM_WIDTH * 0.6; // Расстояние между центрами изображений

const CENTRAL_IMAGE_SIZE = { width: 109, height: 92 };
const SIDE_IMAGE_SIZE = { width: 80, height: 78 };
const OUTER_IMAGE_SIZE = { width: 76, height: 62 };
const VERTICAL_OFFSET = 20; // Вертикальное смещение центрального изображения

const image = require("@/mock/assets/Banner.png");
const IMAGES: string[] = [image, image, image, image, image, image];

interface RenderItemInfo
  extends Omit<ListRenderItemInfo<string>, "separators"> {}

const Carousel: React.FC = () => {
  const scrollX = useSharedValue(0);
  const scrollViewRef = useRef<Animated.ScrollView>(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollX.value = event.contentOffset.x;
    },
  });

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: ITEM_SPACING * 2, animated: false });
  }, []);

  const renderItem = ({ item, index }: RenderItemInfo) => {
    const inputRange = [
      (index - 2) * ITEM_SPACING,
      (index - 1) * ITEM_SPACING,
      index * ITEM_SPACING,
      (index + 1) * ITEM_SPACING,
      (index + 2) * ITEM_SPACING,
    ];

    const animatedStyle = useAnimatedStyle(() => {
      const scale = interpolate(
        scrollX.value,
        inputRange,
        [0.7, 0.8, 1, 0.8, 0.7],
        Extrapolate.CLAMP
      );
      const translateY = interpolate(
        scrollX.value,
        inputRange,
        index === 2
          ? [-VERTICAL_OFFSET, 0, VERTICAL_OFFSET, 0, -VERTICAL_OFFSET]
          : [10, 5, 0, 5, 10],
        Extrapolate.CLAMP
      );
      const opacity = interpolate(
        scrollX.value,
        inputRange,
        [0.5, 0.8, 1, 0.8, 0.5],
        Extrapolate.CLAMP
      );
      const zIndex = interpolate(
        scrollX.value,
        inputRange,
        index === 0
          ? 1
          : index === IMAGES.length - 1
          ? 2
          : index === 2
          ? 10
          : index === 1 || index === IMAGES.length - 2
          ? 5
          : 3,
        Extrapolate.CLAMP
      );

      return {
        transform: [{ scale }, { translateY }],
        opacity,
        zIndex: Math.round(zIndex),
      };
    });

    return (
      <Animated.View style={[styles.itemContainer, animatedStyle]}>
        <Image source={item} style={styles.image} resizeMode="contain" />
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        decelerationRate="fast"
        snapToInterval={ITEM_SPACING}
        contentContainerStyle={styles.scrollViewContent}
      >
        {IMAGES.map((image, index) => (
          <View
            key={index}
            style={[
              styles.itemWrapper,
              {
                zIndex:
                  index === 0
                    ? 1
                    : index === IMAGES.length - 1
                    ? 2
                    : index === 2
                    ? 10
                    : index === 1 || index === IMAGES.length - 2
                    ? 5
                    : 3,
              },
            ]}
          >
            {renderItem({ item: image, index })}
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: CENTRAL_IMAGE_SIZE.height + VERTICAL_OFFSET * 2,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollViewContent: {
    alignItems: "center",
    paddingHorizontal: (SCREEN_WIDTH - ITEM_WIDTH) / 2,
  },
  itemWrapper: {
    width: ITEM_SPACING,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: ITEM_WIDTH,
    height: CENTRAL_IMAGE_SIZE.height + VERTICAL_OFFSET * 2,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default Carousel;
