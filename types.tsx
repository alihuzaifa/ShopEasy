import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Product } from "./src/data";
declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}
export type RootStackParamList = {
    Home: undefined;
    Search: undefined;
    DetailedScreen: { product: Product };
    Cart: undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;