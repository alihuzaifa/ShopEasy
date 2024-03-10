import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
const responsive = {
    width: (size: number) => responsiveWidth(size),
    height: (size: number) => responsiveHeight(size),
    fontSize: (size: number) => responsiveFontSize(size)
}
export const { width, height, fontSize } = responsive;