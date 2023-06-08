import { LinearGradient } from 'expo-linear-gradient';
import { makeStyles } from '@rneui/themed';


export default function Container(props) {//#a7d2e0
    const styles = useStyles();
    return (
        <LinearGradient colors={['#fbfbfb', '#0bbcf4']} start={{ x: 0, y: 0.5 }} end={{ x: 0, y: 0 }} style={styles.container} >
            {props.children}
        </LinearGradient>
    )
}


const useStyles = makeStyles((theme, props) => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background
    },
    topGD: {
        paddingTop: 100
    }
  }))