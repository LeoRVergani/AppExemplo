import {Text, View, SafeAreaView, Image, StyleSheet, StatusBar, ScrollView} from 'react-native'

import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function App() {
    return(
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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

                <View style={styles.row}>
                    <MaterialCommunityIcons name='email' size={24} color="#0077B5" />
                    <Text>Email: vergani@outlook.com.br</Text>
                </View>

                <View style={styles.row}>
                    <MaterialCommunityIcons name='phone' size={24} color="#0077B5" />
                    <Text>Telefone: (41) 98522-7458 </Text>
                </View>

                <View style={styles.row}>
                    <MaterialCommunityIcons name='linkedin' size={30} color="#0077B5" />
                    <Text>linkedin.com/in/leorvergani</Text>
                </View>

                    <Text style={[styles.title, {marginTop: 15}]}>Resumo</Text>
                    <View style={styles.separadorView}></View>
                    <Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, alias. Deserunt tempore excepturi autem dolorem ipsa, vitae, doloremque alias quod sed debitis dolore molestias illum architecto aspernatur nesciunt iusto ratione!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, alias. Deserunt tempore excepturi autem dolorem ipsa, vitae, doloremque alias quod sed debitis dolore molestias illum architecto aspernatur nesciunt iusto ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>

                    <Text style={[styles.title, {marginTop: 15}]}>Habilidades</Text>
                    <View style={styles.separadorView}></View>

                    <View style={styles.row}>
                        <View style={styles.badge}>
                            <Text>JavaScript</Text>
                        </View>
                        <View style={styles.badge}>
                            <Text>JavaScript</Text>
                        </View>
                        <View style={styles.badge}>
                            <Text>JavaScript</Text>
                        </View>
                    </View>




                </ScrollView>

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
        marginVertical: 5,
    },
    title:{
        color:'#0077B5',
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
    },
    badge: {
        backgroundColor: '#EAF4FF',
        padding: 5,
        borderRadius: 5,
        opacity: 0.5
    }
})