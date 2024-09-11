import {Text, View, SafeAreaView, Image, StyleSheet, StatusBar} from 'react-native'

export default function App() {
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <StatusBar backgroundColor='#0077b5' />
                <Image
                source={
                { 
                    uri: 'https://thumb.ac-illust.com/6c/6cdf0b9fe13286fe5f8b012a891364a1_t.jpeg'
                }
                }
                style={styles.myImage}
                />
                <Text style={styles.myName}>Leonardo Vergani</Text>
                <Text style={styles.myPosition}>Desenvolvedor de Software</Text>
                <Text style={styles.title}>Contato</Text>
                <View style={styles.separadorView}></View>
            </View>
        </SafeAreaView>
    ) 
}

const styles = StyleSheet.create({
    myImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        marginVertical: 15,
        borderWidth: 5,
        borderColor: '#0077b5'
    },
    container:{
        padding: 10,
    },
    myName: {
        color: '#0077B5',
        alignSelf: 'center',
        fontSize: 28,
    },
    myPosition: {
        color: '#CCC000',
        alignSelf: 'center',
        fontSize: 24
    },
    separadorView:{
        backgroundColor: '#0077B5',
        width: '100%',
        height: 2,
        marginVertical: 5
    },
    title:{
        color:'#0077B5',
        fontSize: 20
    }
})