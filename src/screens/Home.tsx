import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import React from 'react'
import CustomStyle from '../style'
import Header from '../components/Header'
import Title from '../components/Title'
import Categories from '../components/Categories'
import Card from '../components/Card'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../types'

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const Home: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <ScrollView style={CustomStyle.scrollContainer}>
                <Header />
                <Title title='Choose the best' subtitle='Outfits ' thirdTitle='for you' />
                <Text
                    style={CustomStyle.categoryText}
                >
                    Categories
                </Text>
                <Categories />
                <Text
                    style={CustomStyle.categoryText}
                >
                    All Products
                </Text>
                <Card navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})