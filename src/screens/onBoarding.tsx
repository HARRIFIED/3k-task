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
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue as RF} from "react-native-responsive-fontsize";
import { useFonts } from 'expo-font';

const { height, width } = Dimensions.get(
  "window"
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
          marginTop: hp(14),
        }}
      >
        <TouchableOpacity>
            <Image
            source={require("../../assets/icons/Vector.png")}
            style={{
                width: wp(3.536),
                height: hp(1.675),
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
            marginTop: hp(7.0867),
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
                        width: wp(66.225), 
                        height: hp(32.318), 
                        left: wp(21.93), 
                        right: wp(16.13)
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
                    
                    // bottom: height / 10.56,
                    bottom: 3,
                    
                    // top: 385
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Mulish",
                      fontSize: RF(24, height),
                      lineHeight: 36,
                      textAlign: "center",
                      fontWeight: "700",
                      color: "#080D45",
                      letterSpacing: -0.16,
                    }}
                  >
                    {"3KLE invests your money \n intelligently in stocks"}
                  </Text>
                </View>
                <View
                  style={{
                    // position: 'absolute',
                   
                    
                    // top: 385
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Mulish",
                      fontSize: RF(14, height),
                      lineHeight: 21,
                      textAlign: "center",
                      fontWeight: "400",
                      color: "#333333",
                      letterSpacing: -0.233684,
                    }}
                  >
                    {"Build, perserve and manage your \nfamily wealth with stocks investment"}
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
                    width: wp(1.289),
                    height: wp(1.389),
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
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity 
            style={{
                width: wp(90.833), 
                height: hp(7.353),
                borderRadius: 6,
                backgroundColor: '#7F18D0',
                // left: wp(6.667),
                top: 30,
                justifyContent: 'center',
            }}
            onPress={() =>navigation.navigate('Portfolio')}
        >
          <View style={{
            }}>
                <Text style={{ 
                    fontFamily: 'Mulish',
                    fontWeight: '700',
                    fontSize: RF(16, height),
                    lineHeight: 20,
                    textAlign: "center",
                    color: '#FFFFFF',
            }}>Get started</Text>
          </View>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
