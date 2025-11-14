import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";

const statuses = [
  { id: "0", name: "My Status", lastUpdate: "Tap to add status", isMine: true },
  { id: "1", name: "Pawan Kalyan", lastUpdate: "Today, 8:45 PM", isview:false},
  { id: "2", name: "Chandra Babu Naidu", lastUpdate: "Today, 8/21/25",isview:false },
  { id: "3", name: "Trump", lastUpdate: "Today, 9/24/25", isview:false },
  { id: "4", name: "Modi", lastUpdate: "Today, 9:07 PM" , isview:true},
  { id: "5", name: "veedu yevadu", lastUpdate: "Yesterday", isview:true },
];

export default function StatusScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <FlatList
        data={statuses}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.statusItem}>
            <View
              style={[
                styles.avatar,
                { borderColor: item.isMine ? "#ccc" : "#25D366" },
                { borderColor: item.isview ? "#ccc" : "#5325d3ff" },
              ]}
            >
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                {item.name[0]}
              </Text>
            </View>
            <View style={styles.statusInfo}>
              <Text style={styles.statusName}>{item.name}</Text>
              <Text style={styles.statusTime}>{item.lastUpdate}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  statusItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderWidth: 2,
  },
  statusInfo: { flex: 1 },
  statusName: { fontWeight: "bold", fontSize: 16 },
  statusTime: { color: "#555", marginTop: 3, fontSize: 12 },
});
