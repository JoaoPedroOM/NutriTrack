import { Text, View } from "react-native";

type MealCardProps = {
  title: string;
  subtitle: string;
  kcal: number;
};

export function MealCard({ title, subtitle, kcal }: MealCardProps) {
  const items = subtitle.split("·").map((s) => s.trim()).filter(Boolean);

  return (
    <View className="bg-white rounded-2xl p-4 mb-2.5 shadow-sm shadow-slate-200">
      <Text className="font-sans-semibold text-slate-950 text-base mb-1">
        {title}
      </Text>
      <View className="flex-row justify-between items-end">
        <View>
          {items.map((item, idx) => (
            <Text
              key={idx}
              className="font-sans-medium text-slate-500 text-sm leading-5"
            >
              {item}
            </Text>
          ))}
        </View>
        <Text className="font-sans-semibold text-slate-950 text-sm">
          {kcal} kcal
        </Text>
      </View>
    </View>
  );
}
