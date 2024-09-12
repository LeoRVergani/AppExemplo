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
                    <MaterialCommunityIcons name='linkedin' size={24} color="#0077B5" />
                    <Text>linkedin.com/in/leorvergani</Text>
                </View>

                    <Text style={[styles.title, {marginTop: 10}]}>Resumo</Text>
                    <View style={styles.separadorView}></View>
                    <Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, alias. Deserunt tempore excepturi autem dolorem ipsa, vitae, doloremque alias quod sed debitis dolore molestias illum architecto aspernatur nesciunt iusto ratione!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, alias. Deserunt tempore excepturi autem dolorem ipsa, vitae, doloremque alias quod sed debitis dolore molestias illum architecto aspernatur nesciunt iusto ratione! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Text>

                    <Text style={[styles.title, {marginTop: 10}]}>Experiência</Text>
                    <View style={styles.separadorView}></View>

                    <Text style={[styles.title, {marginTop: 1, paddingLeft: 5}]}>Desenvolvedor Full-Stack</Text>
                    <Text style={styles.textBold}>Empresa XYZ</Text>
                    <Text style={styles.textCinza}>Jan 2020 - Presente</Text>
                    <Text>- Desenvolvi aplicativos móveis usando React Native.</Text>
                    <Text>- Testes unitários.</Text>
                    <Text>- Liderança de equipes.</Text>

                    <Text style={[styles.title, {marginTop: 5, paddingLeft: 5}]}>Desenvolvedor Front-End</Text>
                    <Text style={styles.textBold}>Empresa ABC</Text>
                    <Text style={styles.textCinza}>Jan 1976 - Dez 1997</Text>
                    <Text>- Desenvolvi o HTML junto com Mark Zuckerberg.</Text>
                    <Text>- Treinei o Bill Gates e sua equipe.</Text>
                    <Text>- Criei o primeiro boot do Windows 95.</Text>

                    <Text style={[styles.title, {marginTop: 10}]}>Educação</Text>
                    <View style={styles.separadorView}></View>
                    <Text style={[styles.title, {marginTop: 1, paddingLeft: 5}]}>Bacharel em Ciência da Computação</Text>
                    <Text style={styles.textBold}>Universidade do Albert Einstein</Text>
                    <Text style={styles.textCinza}>1970 - 1978</Text>

                    <Text style={[styles.title, {marginTop: 10}]}>Habilidades</Text>
                    <View style={styles.separadorView}></View>

                    <View style={styles.listItens}>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>JavaScript</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Git</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Python</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>React</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>C++</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>React Native</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Golang</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Dart</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Flutter</Text></View>
                        <View style={styles.badge}><Text style={styles.bagdeTag}>Node.js</Text></View>
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
        fontWeight: 'bold'
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
        marginBottom: 10
    },
    title:{
        color:'#0077B5',
        fontSize: 20,
        fontWeight: 'bold'
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
        borderRadius: 11,
        maxWidth: 125,
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10
    },
    bagdeTag: {
        color: '#0077B5',
        fontWeight: 'bold',
        fontSize: 16
    },
    listItens:{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        height: 100
    },
    textCinza: {
        color: '#a3a3a3',
        paddingLeft: 10
    },
    textBold: {
        fontWeight: 'bold',
        color: '#686868',
        paddingLeft: 10
    }
})