
import { View, Text, ScrollView,TextInput, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../components/theme';
import { Button, Input,  makeStyles, useTheme } from '@rneui/themed';
import { Dismiss, Search } from '../../components/icons/fluent';
import { useState } from 'react';
import Container from '../../components/container';
import { ReadCardLoader } from '../../components/loaders/loaders';



const privateState = {
  
}



//,'#d3ecf4'
export default function Home() {
    
    //let activeTab = { id: TABS.forYou };
    const { theme, replaceTheme } = useTheme();
    return (
        <Container home={false}>
            <SafeAreaView>
                
                <ScrollView contentContainerStyle={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
                    <SafeAreaView></SafeAreaView>
                    <ReadCardLoader />
                    <ReadCardLoader />
                    <ReadCardLoader />
                    <ReadCardLoader />
                    <ReadCardLoader />
                    <ReadCardLoader />
                </ScrollView>
            </SafeAreaView>
        </Container>
       
    )
}
//<StatusBar style="auto" />

const useStyles = makeStyles((theme, props) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    topGD: {
        paddingTop: 100
    }
}))
const styles = StyleSheet.create({
    container: {
        flex:1
    },
    topGD: {
        paddingTop:100
    },
    logotext: {
        fontWeight: 'bold',
        fontSize: 34,
    },
    logoview: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 0,
        marginBottom:15
    },
    searchbar: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 15,
        paddingHorizontal: 6,
        paddingBottom: 5,
        paddingTop:3,
        justifyContent: 'space-between',
        marginBottom: 5,
        //marginTop:20,
        backgroundColor: '#f5f4f9',
        alignItems: 'center',
        borderRadius:10
    },
    searchinput: {
        fontSize: 18,
        paddingVertical: 10,
        width: '80%',
        //alignSelf: 'baseline',
        //marginTop:4
    }
})