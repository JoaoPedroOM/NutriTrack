import { Text, TouchableOpacity, View } from "react-native";

type SectionTabsProps = {
  tabs: readonly string[];
  activeTab: string;
  onSelect: (tab: string) => void;
};

export function SectionTabs({ tabs, activeTab, onSelect }: SectionTabsProps) {
  return (
    <View className="flex-row border-b border-slate-200 bg-white pt-2">
      {tabs.map((tab) => {
        const active = tab === activeTab;
        return (
          <TouchableOpacity
            key={tab}
            onPress={() => onSelect(tab)}
            className={`flex-1 items-center py-2.5 border-b-2 -mb-px ${active ? "border-emerald-600" : "border-transparent"
              }`}
          >
            <Text
              className={`text-xs font-sans-semibold tracking-widest ${active ? "text-emerald-600" : "text-slate-400"
                }`}
            >
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
