import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function Animation1Stack() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTitleStyle: {
          color: COLORS.text,
          fontSize: 20,
        },
        contentStyle: {
          paddingHorizontal: 20,
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen
        name="animation1"
        options={{
          title: "Animation 1",
        }}
      />
    </Stack>
  );
}
