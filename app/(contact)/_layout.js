import { Stack } from "expo-router";
import { COLORS } from "../../styles/constants";

export default function ContactStack() {
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
        name="contact"
        options={{
          title: "Contact",
        }}
      />
    </Stack>
  );
}
