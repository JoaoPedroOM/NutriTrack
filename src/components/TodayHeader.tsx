import { Text, View } from "react-native";

export function TodayHeader() {
  return (
    <View className="flex-row items-center justify-center pt-5 pb-10">
      <Text className="font-sans-extrabold text-slate-950 text-2xl tracking-tight">
        NutriTrack 🍃
      </Text>
    </View>
  );
}
