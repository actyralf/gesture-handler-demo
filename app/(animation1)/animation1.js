// app/contact.js
import { View, StyleSheet, Button } from "react-native";
import { globalStyles } from "../../styles/gobalStyles";
import { COLORS } from "../../styles/constants";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export default function ContactPage() {
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);
  const previousTranslationX = useSharedValue(0);
  const previousTranslationY = useSharedValue(0);
  const scale = useSharedValue(1);
  const previousScale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translationX.value },
      { translateY: translationY.value },
    ],
  }));

  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = e.scale * previousScale.value;
    })
    .onEnd(() => {
      previousScale.value = scale.value;
    });

  const dragGesture = Gesture.Pan()
    .onUpdate((e) => {
      translationX.value =
        e.translationX / scale.value + previousTranslationX.value;
      translationY.value =
        e.translationY / scale.value + previousTranslationY.value;
    })
    .onEnd(() => {
      previousTranslationX.value = translationX.value;
      previousTranslationY.value = translationY.value;
    });

  const composedGesture = Gesture.Simultaneous(pinchGesture, dragGesture);

  return (
    <>
      <View style={styles.container}>
        <GestureDetector gesture={composedGesture}>
          <Animated.View style={[styles.circle, animatedStyle]} />
        </GestureDetector>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: "100%",
    backgroundColor: COLORS.primary,
  },
});
