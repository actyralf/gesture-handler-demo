// app/contact.js
import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../styles/gobalStyles";

export default function ContactPage() {
  return (
    <>
      <Text style={globalStyles.heading}>I am the contact page</Text>
    </>
  );
}
