import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function Home({ navigation}) {
    return (
        <View style={{
            alignItems: 'center',
            marginTop: 150
        }}>
            <Text>Home</Text>
            <Text>Home screen comming soon</Text>
            <TouchableOpacity onPress={() =>navigation.navigate('Portfolio')} style={{
                width: 327,
                height: 50,
                backgroundColor: "#C2C7FF",
                borderRadius: 6,
                marginBottom: 20,
                justifyContent: "center" ,
                marginTop: 50
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: "700",
                    fontSize: 16,
                    lineHeight: 20.08,
                    color: "#4B4B4B"
                }}>Go to Portfolio</Text>
            </TouchableOpacity>
        </View>
    );
}