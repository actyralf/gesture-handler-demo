import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function AnimalsStack() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerTintColor: COLORS.primary,
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
        name="index"
        options={{
          title: "Animals (Screen)",
        }}
      />
      <Stack.Screen
        name="dogs"
        options={{
          title: "Dogs",
        }}
      />
      <Stack.Screen
        name="cats/index"
        options={{
          title: "Cats",
        }}
      />
      <Stack.Screen
        name="cats/[catid]/index"
        options={{
          title: "Cat Details",
        }}
      />
    </Stack>
  );
}
