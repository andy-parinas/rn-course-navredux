import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverview from "./screens/MealsOverview";
import MealDetailScreen from "./screens/MealDetailScreen";
import IconButton from "./components/IconButton";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Favorites" component={FavoriteScreen} />
        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        contentStyle: {
                            // backgroundColor: "#24180f",
                            // paddingHorizontal:
                            //     Dimensions.get("screen").width > 375 ? 50 : 20,
                        },
                        headerRight: () => {
                            return <IconButton />;
                        },
                    }}
                >
                    <Stack.Screen
                        name="CategoriesDrawer"
                        component={DrawerNavigator}
                        // options={{
                        //     title: "Meal Categories",
                        // }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={MealsOverview}
                        // options={({route, navigation}) => {
                        //     const { categoryId } = route.params;
                        //     const category = CATEGORIES.find()
                        //     return {
                        //         title: "Meals Overview",
                        //     }

                        // }}
                    />
                    <Stack.Screen
                        name="MealDetail"
                        component={MealDetailScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    container: {},
});
