import { useRouter } from "expo-router";
import { Button, Text, TouchableOpacity, View } from "react-native";

export default function Settings() {
  const router = useRouter();

  const signOut = () => {
    router.dismissAll();
  };

  const MenuItem = ({ label }: { label: string }) => (
    <TouchableOpacity
      style={{
        paddingVertical: 16,
        paddingHorizontal: 8,
      }}
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
        <MenuItem label="Terms and Conditions" />
        <MenuItem label="Privacy Policy" />
        <MenuItem label="Open Source Licenses" />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button title="Sign out" onPress={signOut} />
      </View>
    </View>
  );
}
