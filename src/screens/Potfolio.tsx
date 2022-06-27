import React, { useRef } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  Platform,
  Animated,
  TouchableOpacity
} from "react-native";
import { pieData } from "../data/portfolio";
import { values } from "../data/portfolio";
import DoghurtChart from "../components/doghurt";
import CircularProgress from 'react-native-circular-progress-indicator';
import { StatusBar } from "expo-status-bar";

const { height, width } = Dimensions.get(
  Platform.OS === "android" ? "screen" : "window"
);
// const width = Dimensions.get("window").width

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
            marginTop: height / 11.692,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require("../../assets/icons/arrow-left.png")}
              style={{
                width: width / 40,
                height: height / 47.5,
                resizeMode: "contain",
                left: width / 11.25,
                tintColor: "#080D45",
              }}
            />
          </TouchableOpacity>
          <Image
            source={require("../../assets/icons/Question.png")}
            style={{
              width: width / 18,
              height: 760 / 38,
              resizeMode: "contain",
              right: width / 11.25,
              tintColor: "#080D45",
            }}
          />
        </View>
        <View
          style={{
            width: width / 1.5859,
            height: height / 16.5212,
            top: height / 38,
            left: width / 4.8649,
            right: width / 4.8649,
          }}
        >
          <Text
            style={{
              fontFamily: "Mulish",
              fontWeight: "700",
              fontSize: width / 15,
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
                  width: width / 22.5,
                  height: height / 47.5,
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
          style={{height: height / 1.6889}}
        >
          {pieData.map((item, index) => {
            return (
              <View key={index} style={{ marginTop: height / 3.455, width,  }}>
                <DoghurtChart />
                <View
                  style={{
                    flexDirection: "row",
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,
                      top: height / 6.178862,
                      left: width / 24,
                      lineHeight: 21,
                      fontWeight: "600",
                      color: "#080D45",
                    }}
                  >
                    {"Small Company \nStocks (IJR)"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      left: -(width / 120),
                      top: -(height / 84.44),
                      lineHeight: 21,
                      fontWeight: "600",
                      color: "#080D45",
                    }}
                  >
                    {"Medium Company \nstocks (IJH)"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      left: width / 4.091,
                      top: -(height / 25.33),
                      lineHeight: 21,
                      fontWeight: "600",
                      color: "#080D45",
                    }}
                  >
                    {"International Company \nStocks"}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      top: height / 4.343,
                      left: width / 18,
                      lineHeight: 21,
                      fontWeight: "600",
                      color: "#080D45",
                    }}
                  >
                    {"Large Company \nStocks (VOO)"}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
        <ScrollView nestedScrollEnabled={true} style={{height: height / 1.9}}>
        <View
          style={{
            width: width / 2.067,
            height: height / 9.383,
            borderRadius: 6,
            backgroundColor: "#F8F8F8",
            left: width / 13.33,
            top: height / 50.667
          }}
        >
            <Text style={{
                left: 17,
                fontWeight: "700",
                fontSize:14,
                lineHeight: 21,
                top: 12,
                color: '#4B4B4B',
                letterSpacing: -0.26
                }}>Prospective Outcome</Text>
            <Text style={{
                fontWeight: '600',
                fontSize: 12,
                lineHeight: 21,
                letterSpacing: -0.26,
                color: '#666666',
                left: 17,
                top: 12
            }}>Risk:6</Text>
            <Text style={{
                fontWeight: '500',
                fontSize: 12,
                lineHeight: 18, 
                letterSpacing: -0.26,
                color: '#666666',
                left: 17,
                top: 12
            }}>Returns 10-15%</Text>
        </View>
        {values.map((item, index) => {
            return(
                <View key={index} style={{top:25, height: height / 2.533, }}>
                    <View style ={{ 
                      flexDirection: "row",
                      width: width / 1.10,
                      height: height / 11.69231,
                      borderRadius: 6,
                      backgroundColor: '#F7F7F7',
                      left: width / 13.333,
                      alignItems: 'center',
                      justifyContent: 'space-between'
                      }}
                    >
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14,
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8
                        }}>{item.large.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-between',
                          alignItems: 'center'
                          }}>
                          <CircularProgress
                            value={55}
                            inActiveStrokeColor={'#e1e1e6'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#1826D0'}
                            
                            radius={width / 16.364}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: 4.73,
                              height: 10.56,
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 7,
                              marginRight: 12
                            }}
                           />
                        </View>
                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: width / 1.10,
                      height: height / 11.69231,
                      borderRadius: 6,
                      backgroundColor: '#F7F7F7',
                      left: width / 13.33,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      top: 8
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14,
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8
                        }}>{item.medium.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-between',
                          alignItems: 'center'
                          }}>
                          <CircularProgress
                            value={10}
                            inActiveStrokeColor={'#e1e1e6'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#1826D0'}
                            radius={width / 16.364}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: 4.73,
                              height: 10.56,
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 7,
                              marginRight: 12
                            }}
                           />
                        </View>

                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: width / 1.10,
                      height: height / 11.69231,
                      borderRadius: 6,
                      backgroundColor: '#F7F7F7',
                      left: width / 13.33,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      top:8
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14,
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8
                        }}>{item.small.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-between',
                          alignItems: 'center'
                          }}>
                          <CircularProgress
                            value={5}
                            inActiveStrokeColor={'#e1e1e6'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#1826D0'}
                            radius={width / 16.364}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: 4.73,
                              height: 10.56,
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 7,
                              marginRight: 12
                            }}
                           />
                        </View>

                    </View>
                    <View style={{
                      flexDirection: "row",
                      width: width / 1.10,
                      height: height / 11.69231,
                      borderRadius: 6,
                      backgroundColor: '#F7F7F7',
                      left: width / 13.33,
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      top:8
                    }}>
                        <Text style={{
                          fontWeight: '600',
                          fontSize: 14,
                          lineHeight: 17.57,
                          color: '#080D45',
                          marginLeft: 8
                        }}>{item.international.value}</Text>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: 'space-between',
                          alignItems: 'center'
                          }}>
                          <CircularProgress
                            value={30}
                            inActiveStrokeColor={'#e1e1e6'}
                            activeStrokeColor={'#1826D0'}
                            inActiveStrokeOpacity={0.2}
                            progressValueColor={'#1826D0'}
                            radius={width / 16.364}
                          />
                          <Image source={require("../../assets/icons/arrow-right.png")}
                            style={{
                              width: 4.73,
                              height: 10.56,
                              tintColor: '#888789',
                              resizeMode: "contain",
                              marginLeft: 7,
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
          width: width / 1.10,
          height: 50,
          backgroundColor: "#C2C7FF",
          borderRadius: 6,
          marginBottom: 20,
          justifyContent: "center" 
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: "700",
            fontSize: 16,
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
