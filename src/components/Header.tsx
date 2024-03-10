import { Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomStyle from '../style'
import IonIcons from 'react-native-vector-icons/Ionicons'
import AntIcons from 'react-native-vector-icons/AntDesign'
import COLOR from '../constant/COLOR'
const Header = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Image
                    source={require('../assets/images/user.png')}
                    style={CustomStyle.userImage}
                />
                <Text
                    style={CustomStyle.userName}
                >
                    Hi, Ali Huzaifa
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <TouchableOpacity
                    style={CustomStyle.iconContainer}
                >
                    <IonIcons name="search" size={30} color={COLOR.text} />

                </TouchableOpacity>
                <TouchableOpacity
                    style={CustomStyle.iconContainer}
                >
                    <AntIcons name="user" size={30} color={COLOR.text} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Header