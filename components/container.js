import { LinearGradient } from 'expo-linear-gradient';
import { makeStyles } from '@rneui/themed';


export default function Container(props) {//#a7d2e0
    const styles = useStyles();
    const grad = props.home ? { colors: ['#fbfbfb', '#0bbcf4'], startY: 0.17 } : { colors: ['#0bbcf4', '#fbfbfb'], startY: 0 };
    return (
        <LinearGradient colors={grad.colors} start={{ x: 0, y: grad.startY }} end={{ x: 0, y: 0 }} style={styles.container} >
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