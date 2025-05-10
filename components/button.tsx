import { Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  onPress?: (...args: unknown[]) => void;
};

export function Button({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={{ padding: 8 }} onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}
