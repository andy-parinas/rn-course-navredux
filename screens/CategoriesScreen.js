import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        const pressHandler = () => {
            navigation.navigate("MealsOverview", {
                categoryId: itemData.item.id,
            });
        };

        return (
            <CategoryGridTile
                onSelect={pressHandler}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        );
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item, index) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
            style={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
