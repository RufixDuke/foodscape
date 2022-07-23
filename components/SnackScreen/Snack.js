import { View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const Snack = ({ food, navigation }) => {
    const [fav, setFav] = useState(false);

    // let price = parseInt(food.social_rank.toFixed().toString() + "0") * 5;
    let price = (parseInt(food.recipe_id) / 9).toFixed(2);

    return (
        <View style={styles.wrapper}>
            <Image
                source={{ uri: food.image_url }}
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 91,
                    height: 91,
                    borderRadius: 45.5,
                }}
            />
            <View>
                <View style={styles.details}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "row",
                            justifyContent: "space-between",
                            position: "relative",
                        }}
                    >
                        <Text
                            style={{
                                color: "#F27C28",
                                fontSize: 18,
                                fontWeight: "900",
                            }}
                        >
                            {food.publisher.slice(0, 15) + "..."}
                        </Text>
                        <Pressable
                            onPress={() => setFav(!fav)}
                            style={{ marginRight: 28 }}
                        >
                            <Image
                                source={
                                    fav
                                        ? require("../../assets/icons/heart-filled.png")
                                        : require("../../assets/icons/heart.png")
                                }
                                style={{
                                    position: "absolute",
                                    width: 24,
                                    height: 19,
                                }}
                            />
                        </Pressable>
                    </View>

                    <Text style={{ fontSize: 12, marginTop: 7 }}>
                        {food.title.slice(0, 33) + "..."}
                    </Text>
                    <Text
                        style={{
                            color: "#2A2A2A",
                            fontSize: 18,
                            fontWeight: "900",
                            marginTop: 7,
                            letterSpacing: 0.7,
                        }}
                    >
                        #{price}
                    </Text>

                    <View style={styles.btns}>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            <Pressable
                                style={{
                                    marginRight: 5,
                                    backgroundColor: "#FDFDFD",
                                    padding: 8,
                                    borderRadius: 6,
                                }}
                                onPress={() => console.log("Addition....")}
                            >
                                <Image
                                    source={require("../../assets/icons/minus-filled.png")}
                                    style={{ width: 15, height: 15 }}
                                />
                            </Pressable>
                            <Text style={{ fontWeight: "700" }}> 1 </Text>
                            <Pressable
                                style={{
                                    marginLeft: 5,
                                    backgroundColor: "#FDFDFD",
                                    padding: 8,
                                    borderRadius: 6,
                                }}
                            >
                                <Image
                                    source={require("../../assets/icons/plus-filled.png")}
                                    style={{ width: 15, height: 15 }}
                                />
                            </Pressable>
                        </View>

                        <Pressable
                            style={({ pressed }) => [
                                {
                                    flexDirection: "row",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    backgroundColor: pressed
                                        ? "#F8BE94"
                                        : "#F27C28",
                                    paddingHorizontal: 18,
                                    paddingVertical: 10,
                                    borderRadius: 8,
                                },
                            ]}
                            onPress={() =>
                                navigation.navigate("FoodDetails", {
                                    recipeID: food.recipe_id,
                                    price,
                                    title: food.title,
                                    publisher: food.publisher,
                                    social: food.social_rank,
                                    image: food.image_url,
                                })
                            }
                        >
                            <Text
                                style={{
                                    color: "#FAFAFA",
                                    fontWeight: "700",
                                    fontSize: 15,
                                }}
                            >
                                Order
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
        marginHorizontal: 22,
        paddingVertical: 20,
        borderRadius: 10,
        position: "relative",
        marginVertical: 10,
        paddingLeft: 10,
        paddingRight: 25,
    },
    details: {
        marginLeft: 20,
        position: "relative",
        width: 180,
    },
    btns: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
});

export default Snack;
