import { ScrollView, Text, TouchableOpacity } from 'react-native'
import CustomStyle from '../style'
import { fontSize } from '../constant/RESPONSIVE'
import Color from '../constant/COLOR'
import { useState } from 'react'
const Categories = () => {
    const categories = ['All', "Men", "Women", "Kids"]
    const [active, setActive] = useState<number>(0)
    return (
        <ScrollView
            horizontal
            contentContainerStyle={{
                paddingVertical: 10,
            }}
            showsHorizontalScrollIndicator={false}
        >
            {categories.map((category, index) => (
                <TouchableOpacity
                    onPress={() => setActive(index)}
                    style={[
                        CustomStyle.categoryBox,
                        active === index && {
                            backgroundColor: Color.primary,
                        },
                    ]}
                    key={index}
                >
                    <Text
                        style={{
                            color:
                                active === index
                                    ? Color.onPrimary
                                    : Color.text,
                            fontSize: fontSize(2),
                            fontFamily: "Poppins-Regular",
                        }}
                    >
                        {category}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}
export default Categories