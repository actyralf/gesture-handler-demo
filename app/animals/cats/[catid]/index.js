import { View, Text } from "react-native";
import { Link } from "expo-router";
import { globalStyles } from "../../../../styles/gobalStyles";
import { useLocalSearchParams } from "expo-router";

const cats = [
  {
    id: "5",
    name: "Ginger",
    age: 5,
  },
  {
    id: "3",
    name: "Gypsie",
    age: 6,
  },
];

export default function CatsDetailsPage() {
  const { catid } = useLocalSearchParams();

  const foundCat = cats.find((cat) => {
    return cat.id === catid;
  });

  if (!foundCat) {
    return (
      <>
        <Text style={globalStyles.heading}>Cat not found</Text>
      </>
    );
  }

  return (
    <>
      <Text style={globalStyles.heading}>Hello, I am {foundCat.name}</Text>
      <Text style={globalStyles.heading}>I am {foundCat.age} years old</Text>
    </>
  );
}
