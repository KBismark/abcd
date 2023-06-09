
import { View, Text, ScrollView,TextInput, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../components/theme';
import { Button, Input,  makeStyles, useTheme } from '@rneui/themed';
import { Dismiss, Search } from '../../components/icons/fluent';
import { useState } from 'react';
import Container from '../../components/container';
import { BlogCardLoader } from '../../components/loaders/loaders';


const TABS = {
    forYou: 1,
    Topics: 2,
    Courses: 3,
    Reading:4
}
const privateState = {
    activeTab: TABS.forYou,
    setActiveTab:undefined
}

function SearchBar() {
    const [searchbar, adjust] = useState({
        ...styles.searchbar,
        justifyContent:''
    });
    const [searchinput, setSpace] = useState({
        ...styles.searchinput,
        marginLeft:25
    })
    const [dismiss, setDismiss] = useState(true);
    const [value, setValue] = useState('');
    function onTextChanged(text) {
        setValue(text);
        
        if (text.length) {
            setDismiss(false);
            adjust({
                ...searchbar,
                justifyContent: 'space-between'
            });
            setSpace({
                ...searchinput,
                marginLeft:0
            })
        } else {
            setDismiss(true);
            adjust({
                ...searchbar,
                justifyContent: ''
            });
            setSpace({
                ...searchinput,
                marginLeft:20
            })
        }
    }
    return (
        <View style={searchbar}>
            <Search width={20} height={20} />
            <TextInput style={searchinput} placeholder='Search topic..' onChangeText={onTextChanged} value={value} />
            {dismiss ? null : <Dismiss width={24} height={20}/>}
        </View>
    )
}

function TabButton({id, title, onClick = () => { } }) {
    const { theme, replaceTheme } = useTheme();
    const [isActive, setAsActive] = useState(id == privateState.activeTab);
    if (isActive) {
        privateState.setActiveTab = setAsActive;
        privateState.activeTab = id;
    }
    function onPress() {
        if (privateState.activeTab == id) {
            return
        }
        privateState.setActiveTab(false);
        setAsActive(true);
        onClick(id);
    }
    return  <Button title={title} onPress={onPress} buttonStyle={{borderRadius:6, backgroundColor:isActive?theme.colors.grey1:theme.colors.white}} titleStyle={{ color: theme.colors.black }} />
}

//,'#d3ecf4'
export default function Home() {
    
    //let activeTab = { id: TABS.forYou };
    const { theme, replaceTheme } = useTheme();
    return (
        <Container home={false}>
            <SafeAreaView>
                
                <ScrollView contentContainerStyle={{ display: 'flex', justifyContent: 'center', paddingTop: 0 }}>
                    <SafeAreaView></SafeAreaView>
                    <BlogCardLoader style={{ marginTop: 0 }} />
                    <BlogCardLoader style={{ marginTop:0} } />
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