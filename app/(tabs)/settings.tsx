import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { Button } from "@/components/button";

export default function Settings() {
  const router = useRouter();

  const signOut = () => {
    router.dismissAll();
  };

  const MenuItem = ({
    label,
    onPress,
  }: {
    label: string;
    onPress?: (...args: unknown[]) => void;
  }) => (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        paddingHorizontal: 8,
      }}
      onPress={onPress}
    >
      <Text>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      <View>
        <MenuItem
          label="Terms and Conditions"
          onPress={() => router.push("/terms")}
        />
        <MenuItem
          label="Privacy Policy"
          onPress={() => router.push("/privacy")}
        />
        <MenuItem
          label="Open Source Licenses"
          onPress={() => router.push("/open-source")}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
}
