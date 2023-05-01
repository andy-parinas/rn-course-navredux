import {
    View,
    Text,
    Image,
    Pressable,
    StyleSheet,
    Platform,
} from "react-native";

export default function MealItem(props) {
    return (
        <View style={styles.mealItem}>
            <Pressable
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => [pressed && styles.pressed]}
            >
                <View style={styles.innerContainer}>
                    <Image
                        style={styles.imageStyle}
                        source={{ uri: props.imageUrl }}
                    />
                    <Text style={styles.title}>{props.title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailItem}>{props.duration}m</Text>
                    <Text style={styles.detailItem}>
                        {props.complexity.toUpperCase()}
                    </Text>
                    <Text style={styles.detailItem}>
                        {props.affordability.toUpperCase()}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        backgroundColor: "white",
        elevation: 4,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    imageStyle: {
        width: "100%",
        height: 200,
    },
    title: {
        margin: 8,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
    button: {
        flex: 1,
    },
    pressed: {
        opacity: 0.5,
    },
});
