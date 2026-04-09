export type MacroTarget = {
  id: string;
  label: string;
  value: number;
  goal: number;
  color: string;
};

export type Meal = {
  id: string;
  title: string;
  subtitle: string;
  kcal: number;
};

export const tabs = ["Today", "History", "Foods", "Settings"] as const;

export const dailySummary = {
  caloriesLeft: 1500,
  dailyGoal: 2000,
  progress: 0.75,
  macros: [
    {
      id: "protein",
      label: "Protein",
      value: 80,
      goal: 120,
      color: "bg-emerald-500",
    },
    {
      id: "carbs",
      label: "Carbs",
      value: 200,
      goal: 250,
      color: "bg-lime-500",
    },
    { id: "fat", label: "Fat", value: 50, goal: 70, color: "bg-cyan-500" },
  ] as MacroTarget[],
};

export const meals: Meal[] = [
  {
    id: "1",
    title: "Oatmeal with berries",
    subtitle: "2% Milk · Almonds",
    kcal: 380,
  },
  {
    id: "2",
    title: "Grilled Chicken Salad",
    subtitle: "Whole Wheat Bread · Olive Oil Dressing",
    kcal: 450,
  },
];
