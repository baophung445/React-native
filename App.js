import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Senior: Phùng Chí Bảo </Text>
      <Text>Skill: React, Angular, Vuejs, React navive, Nodejs </Text>
      <Text>Salary: 40.000.000đ </Text>
      <Text>Try editing me! 🎉</Text>
      <StatusBar style="auto" />

      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
