import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Landing() {
  const router = useRouter();
  const goToTabs = () => router.replace("/(tabs)");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Go to tabs" onPress={goToTabs} />
    </View>
  );
}
