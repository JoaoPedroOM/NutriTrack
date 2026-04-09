import { Text, View } from "react-native";
import type { MacroTarget } from "../../constants/data";

type NutritionSummaryProps = {
  caloriesLeft: number;
  dailyGoal: number;
  progress: number;
  macros: MacroTarget[];
};

export function NutritionSummary({
  caloriesLeft,
  progress,
  macros,
}: NutritionSummaryProps) {
  const progressPercent = Math.round(progress * 100);

  const size = 148;
  const borderW = 10;
  const inner = size - borderW * 2;

  return (
    <View className="px-5">
      <View className="flex-row items-center">
        <View
          className="items-center justify-center rounded-full"
          style={{ width: size, height: size }}
        >
          <View
            className="absolute bg-green-100 rounded-full"
            style={{ width: inner, height: inner }}
          />
          <View
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              borderWidth: borderW,
              borderTopColor: progress >= 0.125 ? "#16a34a" : "#bbf7d0",
              borderRightColor: progress >= 0.375 ? "#16a34a" : "#bbf7d0",
              borderBottomColor: progress >= 0.625 ? "#16a34a" : "#bbf7d0",
              borderLeftColor: progress >= 0.875 ? "#16a34a" : "#bbf7d0",
              transform: [{ rotate: "-45deg" }],
            }}
          />
          <View className="items-center justify-center z-10">
            <Text className="font-sans-bold text-black text-center text-[9px] px-2">
              {progressPercent}% of daily goal
            </Text>
            <Text className="font-sans-extrabold text-slate-950 text-[30px] leading-[36px] mt-0.5">
              {caloriesLeft}
            </Text>
            <Text className="font-sans-medium text-slate-500 text-xs text-center">
              kcal left
            </Text>
          </View>
        </View>

        <View className="ml-5 flex-1 justify-center gap-2.5">
          {macros.map((macro) => {
            const pct = Math.min(100, Math.round((macro.value / macro.goal) * 100));
            return (
              <View key={macro.id}>
                <View className="flex-row items-center justify-between">
                  <Text className="font-sans-semibold text-slate-700 text-sm">
                    {macro.label}
                  </Text>
                  <Text className="font-sans-medium text-slate-500 text-xs">
                    {macro.value}g / {macro.goal}g
                  </Text>
                </View>
                <View className="mt-1 rounded-full bg-slate-200 h-[5px]">
                  <View
                    className={`${macro.color} rounded-full h-[5px]`}
                    style={{ width: `${pct}%` }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
