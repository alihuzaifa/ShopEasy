import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomStyle from '../style'

type Props = {
    title: string,
    subtitle: string,
    thirdTitle: string,
}
const Title = ({ title, subtitle, thirdTitle }: Props) => {
    return (
        <View style={CustomStyle.titleContainer}>
            <Text style={CustomStyle.titleText}>
                {title}
                <Text style={CustomStyle.mainTitleText}>
                    {' '}
                    {subtitle}
                </Text>
                {thirdTitle}
            </Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({})