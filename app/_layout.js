import { Stack } from "expo-router";
import { SafeAreaProvider} from 'react-native-safe-area-context';
import theme from '../components/theme';
import { ThemeProvider } from '@rneui/themed';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: "index",
};

export default function Layout() {
    return (
    <SafeAreaProvider>
        <ThemeProvider theme={theme}>
            <Stack screenOptions={{
                headerShown:false
            }}/>
        </ThemeProvider>
    </SafeAreaProvider>
  )
}