import { VictoryPie } from "victory-native";
import React from 'react'
import {Dimensions, Platform } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { RFValue as RF} from "react-native-responsive-fontsize"


// const { height, width } = Dimensions.get(
//   Platform.OS === "android" ? "screen" : "window"
// );
const { height, width } = Dimensions.get("window");

export function CustomPie () {
    return (
        <VictoryPie 
            data={
                [
                    { y: 120, label: 'International Company \nStocks'},
                    { y: 50, label: 'Small Company \nStocks (IJR)'},
                    { y: 250, label: "Large Company \nStocks (VOO)"},
                    { y: 70, label: 'Medium Company \nstocks (IJH)'},
                    
                ]
            }
            width={wp(100)}
            height={hp(38)}
            // height={hp(32.89)}
            innerRadius={wp(11.11)}
            // innerRadius={wp(11.11)}
            style={{
            labels: {
            fill: '#080D45', fontSize: RF(11, height), padding: 15, letterSpacing:RF(1.5, height), fontWeight:'600',
            }, }}
            colorScale={['#EEEFFF', '#C2C7FF', '#1826D0', '#7982FA']}
        />
    );
}