import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "@/components/button";

export default function Landing() {
  const router = useRouter();
  const goToTabs = () => router.push("/(tabs)");

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Sign in" onPress={goToTabs} />
    </View>
  );
}
