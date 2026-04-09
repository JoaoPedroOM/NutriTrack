import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { dailySummary, meals, tabs } from "../../../constants/data";
import { MealCard } from "../../components/MealCard";
import { NutritionSummary } from "../../components/NutritionSummary";
import { SectionTabs } from "../../components/SectionTabs";
import { TodayHeader } from "../../components/TodayHeader";

export default function TodayScreen() {
  const [activeTab, setActiveTab] = useState("Today");

  return (
    <SafeAreaView className="flex-1 bg-slate-50">
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>

        <View className="bg-green-100 rounded-b-3xl pb-6">
          <TodayHeader />
          <NutritionSummary
            caloriesLeft={dailySummary.caloriesLeft}
            dailyGoal={dailySummary.dailyGoal}
            progress={dailySummary.progress}
            macros={dailySummary.macros}
          />
        </View>

        <SectionTabs
          tabs={tabs}
          activeTab={activeTab}
          onSelect={setActiveTab}
        />
        <View className="mx-4 mt-5">
          <Text className="font-sans-bold text-slate-950 text-base mb-3">
            MEALS
          </Text>

          {meals.map((meal) => (
            <MealCard
              key={meal.id}
              title={meal.title}
              subtitle={meal.subtitle}
              kcal={meal.kcal}
            />
          ))}
          <TouchableOpacity className="bg-white rounded-2xl py-5 mb-2.5 items-center justify-center shadow-sm shadow-slate-200">
            <View className="w-11 h-11 rounded-full bg-emerald-600 items-center justify-center mb-2">
              <Feather name="plus" size={22} color="#ffffff" />
            </View>
            <Text className="font-sans-semibold text-slate-700 text-sm">
              Add Meal
            </Text>
          </TouchableOpacity>
        </View>
        <View className="mx-4 mt-2">
          <TouchableOpacity className="bg-emerald-600 rounded-full py-4 items-center justify-center">
            <Text className="font-sans-bold text-white text-sm tracking-widest">
              LOG FOOD
            </Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
