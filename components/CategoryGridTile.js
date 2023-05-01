import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

export default function CategoryGridTile(props) {
    return (
        <View
            style={{
                ...styles.container,
                ...{ backgroundColor: props.color },
            }}
        >
            <Pressable
                android_ripple={{ color: "lightgray" }}
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.pressed,
                ]}
                onPress={props.onSelect}
            >
                <View style={styles.innerContainer}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
        elevation: 4,
        backgroundColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowRadius: 5,
    },
    innerContainer: {
        flex: 1,
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    button: {
        flex: 1,
    },
    pressed: {
        opacity: 0.5,
    },
});
