import { useImageSource } from "@/hooks/images";
import Carousel, {
  ICarouselInstance,
} from "@lib/react-native-reanimated-carousel";
import React from "react";
import { Dimensions, Pressable, StyleSheet, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const { width: PAGE_WIDTH } = Dimensions.get("window");

interface ImageData {
  id: number;
  image: number;
  zIndex: number;
}
const data: ImageData[] = [
  { id: 2, image: require("@/mock/assets/Banner.png"), zIndex: 0 },
  { id: 3, image: require("@/mock/assets/Banner.png"), zIndex: 0 },
  { id: 4, image: require("@/mock/assets/Banner.png"), zIndex: 100 },
  { id: 5, image: require("@/mock/assets/Banner.png"), zIndex: 0 },
  { id: 1, image: require("@/mock/assets/Banner.png"), zIndex: 0 },
];

const CarouselExample = (props) => {
  const ref = React.useRef<ICarouselInstance>(null);
  const defaultIndex = Math.floor(data.length / 2);
  return (
    <View
      style={{
        alignItems: "center",
        borderWidth: 1,
        borderColor: "red",
        height: 120,
        marginBottom: 10,
      }}
    >
      <Carousel
        ref={ref}
        style={{
          width: 400,
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#0071fa",
        }}
        loop={false}
        width={60}
        height={120}
        autoPlay={false}
        data={props.images}
        defaultIndex={defaultIndex}
        layeringEffect={true}
        renderItem={({
          item,
          animationValue,
          index,
        }: {
          item: any;
          animationValue: any;
          index: number;
        }) => {
          const image = useImageSource(
            item.serverImage || item.smallServerImage
          );
          return (
            <Item
              key={`govno-${index}`}
              count={props.images.length}
              animationValue={animationValue}
              image={image}
              index={index}
              zIndex={item.zIndex}
              onPress={() =>
                ref.current?.scrollTo({
                  count: animationValue.value,
                  animated: true,
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const Item: React.FC<any> = (props) => {
  const { animationValue, image, onPress, index, zIndex } = props;

  const translateY = useSharedValue(0);
  const inputRange = [
    Math.round(-props.count / 2),
    0,
    Math.round(props.count / 2),
  ];
  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    return {
      opacity,
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    // console.log({ isActive, index, value: animationValue.value });
    const scale = interpolate(
      animationValue.value,
      inputRange,
      [1, 1.25, 1],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ scale }, { translateY: translateY.value }],
    };
  }, [animationValue, translateY]);

  const onPressIn = React.useCallback(() => {
    translateY.value = withTiming(-10, { duration: 250 });
  }, [translateY]);

  const onPressOut = React.useCallback(() => {
    translateY.value = withTiming(0, { duration: 250 });
  }, [translateY]);

  console.log(index, animationValue.value, zIndex);
  const elevation = index === 2 ? 100 : 0;
  return (
    // <View style={{ zIndex }}>
    <Pressable
      onPress={() => {
        // console.log(index, animationValue.value);
        onPress();
      }}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[
          {
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          },
          containerStyle,
        ]}
      >
        <Animated.Image
          source={image}
          style={[styles.image, labelStyle]}
          resizeMode={"stretch"}
          borderRadius={10}
          width={100}
        />
      </Animated.View>
    </Pressable>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 109,
    height: 92,
    position: "absolute",
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CarouselExample;
