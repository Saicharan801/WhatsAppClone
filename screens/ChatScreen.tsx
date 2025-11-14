import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/MainNavigator"; // 👈 import param list

// ✅ Type for navigation
type ChatScreenNavProp = StackNavigationProp<RootStackParamList, "chats">;

const chats = [
  { id: "1", name: "Pawan Kalyan", lastMessage: "fast ga veli og chudu", time: "8:45 PM" },
  { id: "2", name: "Chandra Babu Naidu", lastMessage: "Ap lo Company petandi", time: "8/21/25" },
  { id: "3", name: "Trump", lastMessage: "India ki visa epinchu bro", time: "9/24/25" },
  { id: "4", name: "Modi", lastMessage: "Trump ki visa evanu ani cheppu", time: "9:07 PM" },
  { id: "5", name: "veedu yevadu", lastMessage: "Bro nanu gurthu patav aa?", time: "Yesterday" },
  { id: "6", name: "Rajamouli", lastMessage: "SSMB29 April 12 2027 relese", time: "8/20/25" },
];

export default function ChatsScreen() {
  const navigation = useNavigation<ChatScreenNavProp>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>WhatsApp</Text>
        <View style={styles.headerIcons}>
          <Ionicons name="qr-code-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <Ionicons name="camera-outline" size={24} color="black" style={{ marginRight: 15 }} />
          <MaterialIcons name="more-vert" size={24} color="black" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#555" style={{ marginRight: 10 }} />
        <TextInput placeholder="Ask Meta AI or Search" style={{ flex: 1 }} />
      </View>

      {/* Chats List */}
      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => navigation.navigate("Chat", { name: item.name })}
          >
            <View style={styles.avatar}>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>{item.name[0]}</Text>
            </View>
            <View style={styles.chatInfo}>
              <View style={styles.chatRow}>
                <Text style={styles.chatName}>{item.name}</Text>
                <Text style={styles.chatTime}>{item.time}</Text>
              </View>
              <Text style={styles.lastMessage}>{item.lastMessage}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: { fontSize: 24, fontWeight: "bold", color: "#075E54" },
  headerIcons: { flexDirection: "row", alignItems: "center" },

  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    paddingHorizontal: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    height: 40,
  },

  chatItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#25D366",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  chatInfo: { flex: 1, justifyContent: "center" },
  chatRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  chatName: { fontWeight: "bold", fontSize: 16 },
  chatTime: { fontSize: 12, color: "#555" },
  lastMessage: { color: "#555", marginTop: 3 },
});
