import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { Asset } from "expo-asset";
import { readAsStringAsync } from "expo-file-system";

export default function ShowText() {
  const [content, setContent] = useState("");

  const getContent = async () => {
    try {
      const path = `@/assets/privacy.txt`;
      const nodeRequire = require(path);
      const asset = Asset.fromModule(nodeRequire);
      await asset.downloadAsync();
      if (asset.localUri) {
        const content = await readAsStringAsync(asset.localUri);
        console.log(content);
        setContent(content);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getContent();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        name="privacy"
        options={{
          title: "Privacy Policy",
        }}
      />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 8 }}>
        <Text>{content}</Text>
      </ScrollView>
    </View>
  );
}
