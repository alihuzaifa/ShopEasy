import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomStyle from '../style'
import Header from '../components/Header'
import Title from '../components/Title'
import Categories from '../components/Categories'

type Props = {}

const Home = (props: Props) => {
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
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({})