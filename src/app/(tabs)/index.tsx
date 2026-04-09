import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={() => (
          <View className="flex-1 bg-amber-200">
            <Text>Header</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View className="flex-1 bg-green-200">
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default index;
