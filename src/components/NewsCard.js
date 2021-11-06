import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { Image as RNImage } from 'react-native-elements';

const styles = StyleSheet.create({
    container: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 10
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        flexWrap: 'wrap',
        marginHorizontal: 10,
    }
});


const NewsCard = ({ news }) => {
    return (
        <View style={styles.container}>
            <Image
                defaultSource={require('../asset/newspaper.png')}
                source={{uri: news.urlToImage}}
                style={styles.image}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{news.title}</Text>
            </View>

        </View>
    )
}

export default NewsCard


