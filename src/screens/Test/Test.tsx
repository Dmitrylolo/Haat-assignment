// // import React from "react";
// // import { StyleSheet, TouchableOpacity, View } from "react-native";
// // import Animated, {
// //   interpolate,
// //   useAnimatedStyle,
// //   useSharedValue,
// //   withTiming,
// // } from "react-native-reanimated";

// // const colors = ["red", "green", "blue"];

// // const Test = () => {
// //   // const [zIndex, setZIndex] = React.useState(colors.map(() => 0));
// //   // const changezIndex = (index: number) => () => {
// //   //   setZIndex((prev) => {
// //   //     return prev.map((item, i) => (i === index ? 100 : 0));
// //   //   });
// //   // };

// //   const animation = useSharedValue(0);

// //   const anminate = (index: number) => () => {
// //     animation.value = withTiming(1, { duration: 1000 });
// //   };

// //   const zIndex = useAnimatedStyle(() => {
// //     return {
// //       zIndex: interpolate(animation.value, [0, 1], [0, 100]),
// //     };
// //   });

// //   return (
// //     <View style={styles.container}>
// //       {colors.map((color, index) => (
// //         <Animated.View
// //           style={index === 0 ? [zIndex, styles.animated] : styles.animated}
// //           key={index}
// //         >
// //           <TouchableOpacity
// //             style={[styles.button, { backgroundColor: color }]}
// //             onPress={anminate(index)}
// //           />
// //         </Animated.View>
// //       ))}
// //     </View>
// //   );
// // };

// // export default Test;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   animated: {
// //     marginBottom: -33,
// //   },
// //   button: {
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: 300,
// //     height: 200,
// //     borderColor: "red",
// //     borderWidth: 1,
// //   },
// // });

// import React, { useRef } from "react";
// import { Dimensions, StyleSheet, Text } from "react-native";
// import Animated, { useAnimatedStyle } from "react-native-reanimated";
// import Carousel from "react-native-reanimated-carousel";

// const CustomCarousel: React.FC<any> = ({
//   visibleCardIndices = 5,
//   obtainLogs,
//   learnerId,
//   academyId,
//   handleSwipedCarousel,
// }) => {
//   const homeworks = [
//     { id: 1, title: "Homework 1", description: "Description 1" },
//     { id: 2, title: "Homework 2", description: "Description 2" },
//     { id: 3, title: "Homework 3", description: "Description 3" },
//     // Uncomment these lines to test with more cards
//     { id: 4, title: "Homework 4", description: "Description 4" },
//     { id: 5, title: "Homework 5", description: "Description 5" },
//   ];
//   const screenWidth = Dimensions.get("screen").width;
//   const currentIndex = useRef(homeworks.length - 1 - 1);

//   return (
//     <Carousel
//       style={{
//         width: "100%",
//         height: 352,
//         alignItems: "flex-end",
//         justifyContent: "center",
//       }}
//       width={screenWidth - 40}
//       height={320}
//       windowSize={homeworks.length >= 5 ? 5 : homeworks.length}
//       pagingEnabled={true}
//       snapEnabled={false}
//       mode={"vertical-stack"}
//       autoFillData={true}
//       loop={true}
//       data={homeworks}
//       modeConfig={{
//         snapDirection: "right",
//         stackInterval: -40,
//         scaleInterval: 0.1,
//         opacityInterval: 0.01,
//         moveSize: screenWidth + 1000,
//       }}
//       defaultIndex={currentIndex.current}
//       customConfig={() => ({ type: "negative", viewCount: 3 })}
//       onProgressChange={(offsetProgress: number, absoluteProgress: number) => {
//         const absIndex = Math.floor(absoluteProgress);
//         const newIndex = homeworks.length - 1 - absIndex;

//         console.log("newIndex", newIndex);
//       }}
//       renderItem={({ index, item }) => {
//         const animatedStyle = useAnimatedStyle(() => {
//           const zIndex = homeworks.length - index; // Ensure the front card has the highest z-index
//           return {
//             zIndex,
//           };
//         });

//         return (
//           <Animated.View key={index} style={[styles.card, animatedStyle]}>
//             <Text>{item.title}</Text>
//           </Animated.View>
//         );
//       }}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   card: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//     backgroundColor: "#f2cfcf",
//     borderWidth: 1,
//   },
// });

// export default CustomCarousel;

import React from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";

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

const CarouselExample = () => {
  // const progress = useSharedValue<number>(3);
  // const baseOptions = {
  //   vertical: false,
  //   width: PAGE_WIDTH,
  //   height: 100,
  // } as const;
  // const [activeIndex, setActiveIndex] = React.useState(0);
  // console.log({ activeIndex });
  const ref = React.useRef<ICarouselInstance>(null);
  // console.log(ref);
  const defaultIndex = Math.floor(data.length / 2);
  // console.log({ defaultIndex });
  return (
    <View
      style={{
        alignItems: "center",
      }}
    >
      <Text>ZALUPA</Text>
      <Carousel
        ref={ref}
        style={{
          width: PAGE_WIDTH,
          height: 100,
          justifyContent: "center",
          borderBottomWidth: 1,
          borderBottomColor: "#0071fa",
        }}
        loop={false}
        width={40}
        height={100}
        autoPlay={false}
        data={data}
        defaultIndex={defaultIndex}
        layeringEffect={true}
        renderItem={({ item, animationValue, index }) => {
          // console.log(index, animationValue.value);

          return (
            <Item
              key={`govno-${index}`}
              animationValue={animationValue}
              image={item.image}
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

// export const SBItem: React.FC<any> = (props: any) => {
//   const {
//     style,
//     showIndex = true,
//     index,
//     pretty,
//     img,
//     testID,
//     ...animatedViewProps
//   } = props;
//   return (
//     <Animated.View testID={testID} style={{ flex: 1 }} {...animatedViewProps}>
//       <View style={[styles.imgContainer, style]}>
//         <Image key={index} style={styles.image} source={img} />
//       </View>
//     </Animated.View>
//   );
// };

const Item: React.FC<any> = (props) => {
  const { animationValue, image, onPress, index, zIndex } = props;

  const translateY = useSharedValue(0);

  const containerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      animationValue.value,
      [-1, 0, 1],
      [0.5, 1, 0.5],
      Extrapolation.CLAMP
    );

    const zIndex = Math.round(
      interpolate(animationValue.value, [-1, 0, 1], [0, 100, 0])
    );

    // console.log(index, zIndex);
    const isFocused = Math.abs(animationValue.value) < 0.5;

    const isCentered = Math.abs(animationValue.value) < 0.1; // Более строгое условие для центра

    return {
      opacity,
      // zIndex: isCentered ? 100 : 0, // Центральный элемент имеют самый высокий zIndex
      // elevation: isCentered ? 100 : 0, // Поддержка для Android
    };
  }, [animationValue]);

  const labelStyle = useAnimatedStyle(() => {
    // console.log({ isActive, index, value: animationValue.value });
    const scale = interpolate(
      animationValue.value,
      [-1, 0, 1],
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
    <View style={[, { zIndex: elevation, elevation }]}>
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
              marginHorizontal: -10,
            },
            containerStyle,
          ]}
        >
          <Animated.Image source={image} style={[styles.image, labelStyle]} />
        </Animated.View>
      </Pressable>
    </View>
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
    width: 120,
    height: 50,
    position: "absolute",
    borderRadius: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default CarouselExample;
