import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { products } from '../data'
import { height } from '../constant/RESPONSIVE'
import CustomStyle from '../style'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'
type CardProps = {
    navigation: NativeStackScreenProps<RootStackParamList, "Home">['navigation'];
};
const Card: React.FC<CardProps> = ({ navigation }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
            {products?.map((product) => (
                <TouchableOpacity
                    style={{
                        marginVertical: height(2),
                    }}
                    key={product.id}
                    onPress={() => {
                        navigation.navigate("DetailedScreen", { product: product })
                    }}
                >
                    <Image style={CustomStyle.cardImage} source={product.image} />
                    <Text style={CustomStyle.CardText}>
                        {product.name.length > 15
                            ? `${product.name.substring(0, 15)}...`
                            : product.name}
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <Text style={CustomStyle.cardPrice}>$ {product.price}</Text>
                        <View style={CustomStyle.cardBrandBox} />
                        <Text style={CustomStyle.cardBrandText}>{product.brand}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default Card

const styles = StyleSheet.create({})