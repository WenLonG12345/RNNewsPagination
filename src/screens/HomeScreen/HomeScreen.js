import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator, Button } from 'react-native';
import { connect } from 'react-redux';
import { topHeadlineRequest } from '../../store/action';
import NewsCard from '../../components/NewsCard';
import styles from './HomeScreen.style';

const HomeScreen = ({ newsModel, dispatch }) => {

    const [page, setPage] = useState(1);

    const requestAPI = () => {
        dispatch(topHeadlineRequest({
            country: 'my', page: page
        }))
    }

    useEffect(() => {
        requestAPI();
        console.log("CURRENT PAGE", page);
    }, [page])

    const fetchMoreData = () => {
        if (!newsModel.isListEnd && !newsModel.moreLoading) {
            setPage(page + 1)
        }
    }

    const renderHeader = () => (
        <Text style={styles.title}>RN News</Text>
    )

    const renderFooter = () => (
        <View style={styles.footerText}>
            {newsModel.moreLoading && <ActivityIndicator />}
            {newsModel.isListEnd && <Text>No more articles at the moment</Text>}
        </View>
    )

    const renderEmpty = () => (
        <View style={styles.emptyText}>
            <Text>No Data at the moment</Text>
            <Button onPress={() => requestAPI()} title='Refresh'/>
        </View>
    )

    console.log({newsModel})

    return (
        <SafeAreaView style={styles.container}>
            {newsModel.loading ?
                <View style={styles.loading}>
                    <ActivityIndicator size='large' />
                </View>
                :
                <FlatList
                contentContainerStyle={{flexGrow: 1}}
                    data={newsModel.data}
                    renderItem={({ item }) => (
                        <NewsCard news={item} />
                    )}
                    ListHeaderComponent={renderHeader}
                    ListFooterComponent={renderFooter}
                    ListEmptyComponent={renderEmpty}
                    onEndReachedThreshold={0.2}
                    onEndReached={fetchMoreData}
                />
            }

        </SafeAreaView>
    )
}

const mapStateToProps = (state) => {
    return {
        newsModel: state.news
    }
};

export default connect(mapStateToProps)(HomeScreen);


