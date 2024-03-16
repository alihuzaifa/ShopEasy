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
    cardImage: {
        width: width(44),
        height: height(25),
        borderRadius: width(5),
    },
    CardText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: fontSize(2),
        color: COLOR.text,
        marginVertical: height(2),
        flexWrap: "wrap"
    },
    cardPrice: {
        fontFamily: "Poppins-SemiBold",
        fontSize: fontSize(2),
        color: COLOR.gray,
    },
    cardBrandBox: {
        width: width(1),
        height: height(1),
        backgroundColor: COLOR.gray,
        borderRadius: width(.5),
        marginHorizontal: width(2),
    },
    cardBrandText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: fontSize(2),
        color: COLOR.gray,
    },
    detailbox: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: width(2)
    },
    detailText: {
        fontFamily: "Poppins-SemiBold",
        fontSize: fontSize(2),
        color: COLOR.text,
    },
    detailImage: {
        width: width(100),
        height: height(50),
        borderRadius: width(4),
        marginVertical: width(2),
    },
    detailName: {
        fontSize: fontSize(3),
        fontFamily: "Poppins-Bold",
        color: COLOR.text,
    },
    detailColor1: {
        margin: width(.4),
        borderRadius: width(4),
    },
    detailColor2: {
        borderWidth: .5,
        borderColor: COLOR.borderWithOpacity,
        borderRadius: width(4),
    },
    colorBox: {
        height: height(4),
        width: width(4),
        borderRadius: width(2),
    },
    detailDescription: {
        color: COLOR.text,
        fontFamily: "Poppins-Regular",
        fontSize: fontSize(2),
    },
    ratingBox: {
        marginLeft: width(2),
        color: COLOR.gray,
        fontFamily: "Poppins-Regular",
    },
    reviews: {
        marginLeft: width(2),
        color: COLOR.gray,
        fontFamily: "Poppins-Regular",
    },
    sizeBox: {
        paddingHorizontal: width(4),
        paddingVertical: width(2),
        borderWidth: 1,
        borderColor: COLOR.border,
        borderRadius: width(4),
        marginRight: width(2),
    },
    priceBox: {
        paddingHorizontal: width(4),
        paddingVertical: height(2),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    priceText: {
        fontFamily: "Poppins-Bold",
        fontSize: fontSize(4),
        color: COLOR.text,
    },
    buttonContainer: {
        backgroundColor: COLOR.primary,
        paddingHorizontal: width(6),
        paddingVertical: width(2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: width(45),
        borderRadius: width(10),
    },
    buttonText: {
        fontFamily: "Poppins-SemiBold",
        color: COLOR.onPrimary,
        fontSize: fontSize(2),
        marginLeft: width(1),
    },
    // cart Card
    cartCardBox: {
        height: height(15),
        elevation: width(3),
        borderRadius: width(2),
        backgroundColor: COLOR.background,
        marginVertical: height(2),
        marginHorizontal: width(4),
        paddingHorizontal: width(2),
        flexDirection: 'row',
        alignItems: 'center',
        width: width(83)
    },
    cartImage: {
        height: height(10),
        width: width(20),
        borderRadius: width(2)
    },
    cartTextBox: {
        height: height(20),
        marginLeft: width(2),
        paddingVertical: height(4),
        flex: 1,
    },
    cartName: {
        fontFamily: "Poppins-Bold",
        fontSize: fontSize(2),
        color: COLOR.text
    },
    cartBrand: {
        fontSize: fontSize(2),
        color: COLOR.border,
        fontFamily: "Poppins-Regular"
    },
    cartBtn: {
        width: width(18),
        backgroundColor: COLOR.primary,
        borderRadius: width(6),
        paddingHorizontal: width(1),
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingVertical: height(.6)
    },
    cartPrice: {
        fontFamily: "Poppins-SemiBold",
        fontSize: fontSize(2),
        color: COLOR.text
    }
})
export default CustomStyle