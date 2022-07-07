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
import { pieData } from "../data/portfolio";
import { values } from "../data/portfolio";
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from "expo-status-bar";
import { CustomPie } from '../components/vic-doghurt';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue as RF} from "react-native-responsive-fontsize";
import { useFonts } from 'expo-font';

// const { height, width } = Dimensions.get(
//   Platform.OS === "android" ? "screen" : "window"
// );
const { width, height } = Dimensions.get("window");
// console.log(height)
export default function Portfolio({navigation}) {
   
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <>
    <StatusBar style= "dark" backgroundColor="#F5F5F5" />
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} 
      style={{
        backgroundColor: '#F5F5F5',
        
      }}
    >
      <View style={{ position: "absolute", top: 0, width }}>
        <View
          style={{
            flexDirection: "row",
            marginTop: hp(8.5529),
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../../assets/icons/arrow-left.png")}
              style={{
                width: wp(2.5),
                height: hp(2.3529),
                resizeMode: "contain",
                left: wp(8.889),
                tintColor: "#080D45",
              }}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/icons/Question.png")}
            style={{
              width: wp(5),
              height: hp(2.6471),
              resizeMode: "contain",
              right: width / 11.25,
              tintColor: "#080D45",
            }}
          />
        </View>
        <View
          style={{
            top: hp(2.6316),
          }}
        >
          <Text
            style={{
              fontFamily: "Mulish",
              fontWeight: "700",
              fontSize: RF(24, height),
              lineHeight: 36,
              textAlign: "center",
              letterSpacing: -0.16,
              color: "#080D45",
            }}
          >
            Aggressive Portfolio
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          {pieData.map((item, index) => {
            const backgroundColor = scrollX.interpolate({
              inputRange: [
                width * (index - 1),
                width * index,
                width * (index + 1),
              ],
              outputRange: ["#FFFFFF", "#1826D0", "#FFFFFF"],
              extrapolate: "clamp",
            });
            return (
              <Animated.View
                key={index}
                style={{
                  width: wp(4.44),
                  height: hp(2.4),
                  borderRadius: 200,
                  borderWidth: 1,
                  borderColor: "#1826D0",
                  top: height / 21.714,
                  left: width / 3,
                  marginHorizontal: width / 45,
                  backgroundColor,
                }}
              />
            );
          })}
        </View>
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
          style={{height: hp(62.21), width}}
        >
          {pieData.map((item, index) => {
            return (
              <View key={index} style={{ marginTop: hp(24), width, alignItems: "center"  }}>
                <CustomPie />
              </View>
            );
          })}
        </ScrollView>
        <ScrollView nestedScrollEnabled={true} style={{height: hp(62)}}>
        <View
          style={{
            width: wp(48.33),
            height: hp(11.91),
            borderRadius: 6,
            backgroundColor: "#EDEEF7",
            left: wp(4),
            top: hp(1.974)
          }}
        >
            <Text style={{
                left: 17,
                fontFamily: 'Mulish',
                fontWeight: "700",
                fontSize:RF(14, height),
                lineHeight: 21,
                top: 12,
                color: '#4B4B4B',
                letterSpacing: -0.26
                }}>Prospective Outcome</Text>
            <Text style={{
                fontWeight: '600',
                fontSize: RF(12, height),
                lineHeight: 21,
                letterSpacing: -0.26,
                color: '#666666',
                left: 17,
                top: 12
            }}>Risk:6</Text>
            <Text style={{
                fontWeight: '500',
                fontSize: RF(12, height),
                lineHeight: 18, 
                letterSpacing: -0.26,
                color: '#666666',
                left: 17,
                top: 12
            }}>Returns 10-15%</Text>
        </View>
        {values.map((item, index) => {
            return(
                <View key={index} style={{top:25, height: hp(52), alignItems: 'center'}}>
                    <View style ={{ 
                      flexDirection: "row",
                      width: wp(90.833),
                      height: hp(9.55882),
                      borderRadius: 6,
                      backgroundColor: '#EDEEF7',        
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8
                      }}
                    >
                        <Text style={{
                          fontWeight: '600',
                          fontSize: RF(14, height),
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8,
                          letterSpacing: RF(1, height),
                        }}>{item.large.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginRight: 10
                          }}>
                          <CircularProgress
                            value={55}
                            inActiveStrokeColor={'#1826D0'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.1}
                            progressValueColor={'#1826D0'}
                            radius={wp(4)}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: wp(2),
                              height: hp(2),
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 9,
                              marginRight: 12
                            }}
                           />
                        </View>
                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: wp(90.833),
                      height: hp(9.55882),
                      borderRadius: 6,
                      backgroundColor: '#EDEEF7',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: RF(14, height),
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8,
                          letterSpacing: RF(1, height),
                        }}>{item.medium.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginRight: 10
                          }}>
                          <CircularProgress
                            value={10}
                            inActiveStrokeColor={'#1826D0'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.1}
                            progressValueColor={'#1826D0'}
                            radius={wp(4)}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: wp(2),
                              height: hp(2),
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 9,
                              marginRight: 12
                            }}
                           />
                        </View>

                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: wp(90.833),
                      height: hp(9.55882),
                      borderRadius: 6,
                      backgroundColor: '#EDEEF7',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: 8
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: RF(14, height),
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8,
                          letterSpacing: RF(1, height),
                        }}>{item.small.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginRight: 10
                          }}>
                          <CircularProgress
                            value={5}
                            inActiveStrokeColor={'#1826D0'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.1}
                            progressValueColor={'#1826D0'}
                            radius={wp(4)}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: wp(2),
                              height: hp(2),
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 9,
                              marginRight: 12
                            }}
                           />
                        </View>

                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: wp(90.833),
                      height: hp(9.55882),
                      borderRadius: 6,
                      backgroundColor:'#EDEEF7',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                     
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: RF(14, height),
                          lineHeight: 18,
                          color: '#080D45',
                          marginLeft: 8,
                          letterSpacing: RF(1, height),
                        }}>{item.international.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-around',
                          alignItems: 'center',
                          marginRight: 10
                          }}>
                          <CircularProgress
                            value={30}
                            inActiveStrokeColor={'#1826D0'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.1}
                            progressValueColor={'#1826D0'}
                            radius={wp(4)}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: wp(2),
                              height: hp(2),
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 9,
                              marginRight: 12
                            }}
                           />
                        </View> 
                    </View>
                </View>
            )
        })}
        </ScrollView>
        <View style={{alignItems: 'center'}}>
        <TouchableOpacity style={{
          width: wp(90.833),
          height: hp(7.353),
          backgroundColor: "#C2C7FF",
          borderRadius: 6,
          marginBottom: 20,
          justifyContent: "center" 
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: "700",
            fontSize: RF(16, height),
            lineHeight: 20.08,
            color: "#4B4B4B"
          }}>
            This portfolio is selected
          </Text>
        </TouchableOpacity>
        </View>
    </ScrollView>
    </>
  );
}
