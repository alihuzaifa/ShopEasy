import { StyleSheet } from 'react-native'
import { fontSize, height, width } from '../constant/RESPONSIVE'
import COLOR from '../constant/COLOR'
const CustomStyle = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: width(4),
        paddingVertical: height(1.5)
    },
    userImage: {
        width: width(10), height: height(5.2)
    },
    userName: {
        fontSize: fontSize(2.8),
        color: COLOR.text,
        marginLeft: width(2),
    },
    iconContainer: {
        padding: width(1),
    },
    titleContainer: {
        paddingTop: height(2),
        paddingBottom: height(1)
    },
    titleText: {
        fontSize: fontSize(4),
        fontFamily: "Poppins-Bold",
        color: COLOR.text,
    },
    mainTitleText: {
        fontSize: fontSize(4.5),
        color: COLOR.primary,
    },
    categoryText: {
        fontSize: fontSize(3),
        color: COLOR.text,
    },
    categoryBox: {
        paddingHorizontal: width(4),
        paddingVertical: width(1),
        borderWidth: 1,
        borderRadius: width(4),
        borderColor: COLOR.border,
        marginRight: width(2.5),
    },
})
export default CustomStyle