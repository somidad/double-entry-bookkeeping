import { Tabs } from "expo-router";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const ICON_SIZE = 28;

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Index",
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={ICON_SIZE} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
