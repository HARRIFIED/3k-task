import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  Animated,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue as RF} from "react-native-responsive-fontsize";
import Svg,{Circle} from 'react-native-svg';
import { pieData } from "../data/portfolio";

const { width, height } = Dimensions.get("window")

export default function Home({ navigation }) {
    const scrollX = useRef(new Animated.Value(0)).current;
    return (
        <>
          <StatusBar style= "dark" backgroundColor="#F5F5F5" />
          <ScrollView  showsVerticalScrollIndicator={false}  nestedScrollEnabled={true}
            style={{backgroundColor: '#F5F5F5', }}
          >
            <TouchableOpacity style={{marginTop: hp(8.5529)}}>
              <Image 
              source={require("../../assets/icons/arrow-left.png")}
              style={{
                width: wp(2.5),
                height: hp(2.3529),
                resizeMode: "contain",
                left: wp(8.889),
                tintColor: "#7F18D0",
              }}
                />
            </TouchableOpacity>
            <View 
              style={{marginTop: hp(2.6316)}}
            >
              <Text
                style={{
                  fontFamily: "Mulish",
                  fontWeight: "500",
                  fontSize: RF(20, height),
                  lineHeight: 30,
                  textAlign: "center",
                  letterSpacing: -0.165,
                  color: "#4B4B4B",
                }}
              >
                Family Plus Investments
              </Text>
            </View>
            <ScrollView 
              nestedScrollEnabled={true}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
              scrollEventThrottle={16}
              style={{height: hp(26), width}}
            >  
            <View >
              {pieData.map((item, index) => {
                return (
                  <View style={{
              width: wp(90.556),
              height: hp(25.44),
              alignItems: 'center',
              marginTop: hp(2.65),
              left: wp(5.5)
            }}>
                <Image 
                source={require("../../assets/dashboard.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "contain",
                }}
              />
              </View>
                )
              })}
              
            </View> 
            </ScrollView>         
          </ScrollView>  
        </>
    );
}