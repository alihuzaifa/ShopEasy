import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Image, Button } from 'react-native'
import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { RootStackParamList } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Color from '../constant/COLOR';
import { fontSize, width } from '../constant/RESPONSIVE';
import CustomStyle from '../style';
import COLOR from '../constant/COLOR';
type Props = NativeStackScreenProps<RootStackParamList, "DetailedScreen">;
const DetailedScreen: React.FC<Props> = ({ route, navigation }) => {
    const product = route.params.product;
    const [activeColorIndex, setActiveColorIndex] = useState<number>(0);
    const [activeSizeIndex, setActiveSizeIndex] = useState<number>(0);
    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={[CustomStyle.detailbox, { paddingHorizontal: width(4) }]}
                >
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            padding: width(1),
                        }}
                    >
                        <Ionicons
                            name="arrow-back-outline"
                            size={30}
                            color={Color.text}
                        />
                    </TouchableOpacity>

                    <Text
                        style={CustomStyle.detailText}
                    >
                        Detail
                    </Text>
                    <TouchableOpacity
                        style={{
                            padding: width(1),
                        }}
                    >
                        <Ionicons
                            name="cart-outline"
                            size={30}
                            color={Color.text}
                        />
                    </TouchableOpacity>
                </View>
                <ScrollView
                    style={{
                        paddingHorizontal: width(4),
                    }}
                >
                    <Image
                        source={product.image}
                        style={CustomStyle.detailImage}
                    />
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingVertical: width(2),
                        }}
                    >
                        <Text
                            style={CustomStyle.detailName}
                        >
                            {product.name}
                        </Text>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                            }}
                        >
                            {product.colors.map((color, index) => (
                                <View
                                    key={color.id}
                                    style={[
                                        CustomStyle.detailColor1,
                                        activeColorIndex === index && CustomStyle.detailColor2,
                                    ]}
                                >
                                    <TouchableOpacity
                                        onPress={() => setActiveColorIndex(index)}
                                        style={[CustomStyle.colorBox, {
                                            backgroundColor: color.code,
                                        }]}
                                    />
                                </View>
                            ))}
                        </View>
                    </View>
                    <Text
                        style={CustomStyle.detailDescription}
                    >
                        {product.description}
                    </Text>
                    <View
                        style={{
                            flexDirection: "row",
                            marginVertical: width(2),
                        }}
                    >
                        <Ionicons name="star" color={Color.secondary} size={20} />
                        <Text
                            style={CustomStyle.ratingBox}
                        >
                            {product.rating}
                        </Text>
                        <Text
                            style={CustomStyle.reviews}
                        >
                            {product.reviews} Reviews
                        </Text>
                        {/* */}
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        {product.sizes.map((size, index) => (
                            <TouchableOpacity
                                key={size.id}
                                onPress={() => setActiveSizeIndex(index)}
                                style={[
                                    CustomStyle.sizeBox,
                                    activeSizeIndex === index && {
                                        backgroundColor: Color.primary,
                                        borderWidth: 0,
                                    },
                                ]}
                            >
                                <Text
                                    style={{
                                        fontFamily: "Poppins-Regular",
                                        fontSize: fontSize(2),
                                        color:
                                            activeSizeIndex === index ? Color.onPrimary : Color.text,
                                    }}
                                >
                                    {size.name}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View
                    style={CustomStyle.priceBox}
                >
                    <Text
                        style={CustomStyle.priceText}
                    >
                        $ {product.price}
                    </Text>
                    <Button
                        // onPress={onPressLearnMore}
                        title="Add To Cart"
                        color={COLOR.primary}
                        
                    />
                    {/* <CustomButton title='Add To Cart' /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetailedScreen