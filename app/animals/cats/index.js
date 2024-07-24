import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../styles/gobalStyles";

export default function CatsPage() {
  return (
    <>
      <Text style={globalStyles.heading}>I am the cats page</Text>
      <Link style={globalStyles.paragraph} href="/animals/cats/3">
        Gypsie Details
      </Link>
      <Link style={globalStyles.paragraph} href="/animals/cats/5">
        Ginger Details
      </Link>
      <Link style={globalStyles.paragraph} href="/animals/cats/7">
        Marty Details
      </Link>
    </>
  );
}
