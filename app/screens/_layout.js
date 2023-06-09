import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Slot, Stack } from "expo-router";
import { usePathname, useSearchParams } from "expo-router";


export default function ScreenLayout() {
    const params = useSearchParams();
    return (
        <Stack screenOptions={{
            presentation: 'card',
            headerSearchBarOptions: {
                barTintColor:'#ffffff',
                tintColor: '#000000',
                placeholder: `Search ${params.title.toLowerCase()}`,
                onChangeText: (event) => {
                    
                },
                onCancelButtonPress: () => {
                    
                }
            },
            headerTransparent: false,
            headerTitle: params.title,
            title: params.title,
            // headerStyle: {
            //     backgroundColor:'#45cdf7'//'#61d3f7'//'#0bbcf4'
            // },
            headerBackground: () => {
                return (
                    <LinearGradient colors={['#fbfbfb', '#0bbcf4']} start={{ x: 0, y: 1 }} end={{ x: 0, y: 0 }} style={{flex:1}} ></LinearGradient>
                )
            }
        }}/>
  )
}