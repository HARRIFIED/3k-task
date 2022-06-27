import React, { useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  Animated
} from "react-native";

const { height, width } = Dimensions.get(
  Platform.OS === "android" ? "screen" : "window"
);
// console.log(width, height)
const pages = [
    {
       id: 1, 
      image: require("../../assets/Coins.png"),
      title: "Hello",
      subtitle: require("../../assets/suntitle.png"),
    },
    {
        id: 2,
      image: require("../../assets/Coins.png"),
      title: "Hello",
      subtitle: require("../../assets/suntitle.png"),
    },
    {
        id:3,
      image: require("../../assets/Coins.png"),
      title: "Hello",
      subtitle: require("../../assets/suntitle.png"),
    },
];

export default function OnBoarding({ navigation }) {
    const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <View
      style={{
        height,
        width,
        backgroundColor: "#F5F5F5",
      }}
    >
      <View
        style={{
          marginTop: height / 8.160,
        }}
      >
        <TouchableOpacity>
            <Image
            source={require("../../assets/icons/Vector.png")}
            style={{
                width: 12.73,
                height: 12.73,
                resizeMode: "contain",
                left: 31,
                tintColor: "black",
            }}
            />
        </TouchableOpacity>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false}
          )}
          scrollEventThrottle={16}
          style={{
            marginTop: height / 14.111,
          }}
        >
          {pages.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width,
                }}
              >
                <Animated.View 
                    style={{ 
                        width: width / 1.51, 
                        height: height / 3.193, 
                        left: width / 4.56, 
                        right: width / 6.201
                    }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      resizeMode: "contain",
                    }}
                  />
                </Animated.View>
                <View
                  style={{
                    // position: 'absolute',
                    width: width / 1.2587,
                    height: height / 10.56,
                    left: width / 8.182,
                    // top: 385
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Mulish",
                      fontSize: 24,
                      lineHeight: 36,
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#080D45",
                      letterSpacing: -0.16,
                    }}
                  >
                    3KLE invests your money intelligently in stocks
                  </Text>
                </View>
                <View
                  style={{
                    // position: 'absolute',
                    width: width / 1.2328,
                    height: height / 18.53659,
                    left: width / 8.781,
                    // top: 385
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Mulish",
                      fontSize: 14,
                      lineHeight: 21,
                      textAlign: "center",
                      fontWeight: "400",
                      color: "#333333",
                      letterSpacing: -0.233684,
                    }}
                  >
                    Build, perserve and manage your family wealth with stocks
                    investment
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={{flexDirection: 'row'}}>
            {pages.map((item, index) => {
                const backgroundColor = scrollX.interpolate({
                    inputRange: [
                        width*(index-1),
                        width*(index),
                        width*(index+1),

                    ],
                    outputRange: ['#C9C9CA', '#7F18D0', '#C9C9CA'], 
                    extrapolate: 'clamp'
                })
                
                return (
                <Animated.View key ={index} style ={{
                    width: width / 72,
                    height: width / 72,
                    borderRadius: 20,
                    left: width / 2.1,
                    top: 15,
                    backgroundColor,
                    marginHorizontal: 3,
                    // opacity
                }} 
                />
                )
            })}
        </View>
        <TouchableOpacity 
            style={{
                width: width - 33, 
                height: height / 15.2,
                borderRadius: 6,
                backgroundColor: '#7F18D0',
                left: width / 17,
                top: 30,
                justifyContent: 'center'
            }}
            onPress={() =>navigation.navigate('Home')}
        >
            <View style={{

            }}>
                <Text style={{ 
                    fontFamily: 'Mulish',
                    fontWeight: '700',
                    fontSize: 16,
                    lineHeight: 20,
                    textAlign: "center",
                    color: '#FFFFFF',
                }}>Get started</Text>
            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
