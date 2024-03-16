import { ImageSourcePropType } from 'react-native';
import Color from '../constant/COLOR';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
interface User {
    id: number;
    name: string;
    image: ImageSourcePropType;
}
export const user: User = {
    id: 1,
    name: 'Ali Huzaifa',
    image: require('../assets/images/user.png'),
};
export interface Category {
    id: number;
    name: string;
}
export const categories: Category[] = [
    {
        id: 1,
        name: "Men's",
    },
    {
        id: 2,
        name: 'Women',
    },
    {
        id: 3,
        name: 'Kids',
    },
    {
        id: 4,
        name: 'Sports',
    },
];
interface Color {
    id: number;
    code: string;
}
const colors: Color[] = [
    {
        id: 1,
        code: Color.primary,
    },
    {
        id: 2,
        code: Color.secondary,
    },
    {
        id: 3,
        code: Color.text,
    },
];
interface Size {
    id: number;
    name: string;
}
export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    description: string;
    image: ImageSourcePropType;
    reviews: number;
    rating: number;
    brand: string;
    colors: Color[];
    sizes: Size[];
}
const sizes: Size[] = [
    { id: 1, name: 'S' },
    { id: 2, name: 'M' },
    { id: 3, name: 'L' },
    { id: 4, name: 'XL' },
    { id: 5, name: 'XXL' },
];
export const products: Product[] = [
    {
        id: 6,
        name: "Men's Pant Shirt",
        price: 18.0,
        category: categories[0],
        description:
            'Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.',
        image: require('../assets/images/user.png'),
        reviews: 80,
        rating: 2.5,
        colors: colors,
        brand: 'Zara',
        sizes,
    },
    {
        id: 1,
        name: 'Summer Shirt',
        price: 18.0,
        category: categories[0],
        description:
            'Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.',
        image: require('../assets/images/user.png'),
        reviews: 80,
        rating: 2.5,
        colors: colors,
        brand: 'Zara',
        sizes,
    },
    {
        id: 2,
        name: 'Skinny Fit Blazer',
        price: 18.0,
        category: categories[0],
        description:
            'Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.',
        image: require('../assets/images/user.png'),
        reviews: 80,
        rating: 2.5,
        colors: colors,
        brand: 'Zara',
        sizes,
    },
    {
        id: 3,
        name: 'Men’s Kinnstor sportswear',
        price: 76.0,
        category: categories[0],
        description:
            'Lorem ipsum dolor sit amet consectetur. Odio hendrerit vitae nibh elementum egestas. Duis eleifend turpis tempor purus et aliquam dui risus dui.',
        image: require('../assets/images/user.png'),
        reviews: 28,
        rating: 3.7,
        colors: colors,
        brand: 'Zara',
        sizes,
    },
];
export interface TitleProps {
    title: string;
    subtitle: string;
    thirdTitle: string;
}
export type HeaderProp = {
    navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
    title: String;
    isCartIconShow: Boolean;
};
interface Item {
    name: string;
    brand: string;
    price: number;
    image: ImageSourcePropType;
}
export interface CartCardProps {
    item: Item;
}