import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";

export default function App() {
  const courses = [
    {
      id: 1,
      name: "Name 1",
    },
    {
      id: 2,
      name: "Name 2",
    },
    {
      id: 3,
      name: "Name 3",
    },
    {
      id: 4,
      name: "Name 4",
    },
    {
      id: 5,
      name: "Name 5",
    },
    {
      id: 6,
      name: "Name 6",
    },
    {
      id: 7,
      name: "Name 7",
    },
    {
      id: 8,
      name: "Name 8",
    },
    {
      id: 9,
      name: "Name 9",
    },
  ];
  const onecourse = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  const listHeader = () => {
    return <Text style={styles.headerText}>Name List</Text>;
  };

  const itemSeparator = () => {
    return <View style={styles.separator} />;
  };

  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={listHeader}
        data={courses}
        renderItem={onecourse}
        ItemSeparatorComponent={itemSeparator}
        ListEmptyComponent={<Text>This is a flat list</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listHeader: {
    height: 55,
    alignItems: "center",

    justifyContent: "center",
  },
  headerText: {
    fontWeight: "600",
    fontSize: 26,
    color: "#2f3436",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    backgroundColor: "#574c4f",
  },
  name: {
    fontWeight: "600",
    fontSize: 20,
    marginLeft: 13,
    color: "white",
  },
  separator: {
    color: "#000000",
    margin: 10,
    height: 1,
    width: "100%",
    backgroundColor: "#ccc",
  },
});
