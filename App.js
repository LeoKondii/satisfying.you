import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'; 
import Login from './src/components/screens/Login'
import Cadastro from './src/components/screens/Cadastro'
import RecuperarSenha from './src/components/screens/RecuperarSenha'
import AgradecimentoParticipacao from './src/components/screens/AgradecimentoParticipacao'
import Home from './src/components/screens/Home';
import NovaPesquisa from './src/components/screens/NovaPesquisa';
import AcoesPesquisa from './src/components/screens/AcoesPesquisa';
import ModificarPesquisa from './src/components/screens/ModificarPesquisa';
import Coleta from './src/components/screens/Coleta';
import Relatorio from './src/components/screens/Relatorio';
import Drawer from './src/components/screens/Drawer';

const Stack = createStackNavigator()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={{ headerShown: false }} 
                />
                <Stack.Screen 
                    name="Cadastro" 
                    component={Cadastro}
                    options={{
                        title: 'Nova Conta',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="RecuperarSenha" 
                    component={RecuperarSenha} 
                    options={{
                        title: 'Recuperação de Senha',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerTintColor: '#372775',
                    }}
                />
                <Stack.Screen 
                    name="AgradecimentoParticipacao" 
                    component={AgradecimentoParticipacao} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        title: 'Home',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="NovaPesquisa" 
                    component={NovaPesquisa} 
                    options={{
                        title: 'Nova Pesquisa',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="AcoesPesquisa" 
                    component={AcoesPesquisa} 
                    options={{
                        title: 'Carnaval',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="ModificarPesquisa" 
                    component={ModificarPesquisa} 
                    options={{
                        title: 'Modificar Pesquisa',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="Coleta" 
                    component={Coleta} 
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="Relatorio" 
                    component={Relatorio} 
                    options={{
                        title: 'Relatorio',
                        headerStyle: estilos.headerDefault,
                        headerTitleStyle: estilos.headerTitle,
                        headerLeftContainerStyle: estilos.headerLeft,
                        headerTintColor: '#372775',
                        headerBackTitle: null,
                        headerBackImageStyle: estilos.navigationBackImage,
                    }}
                />
                <Stack.Screen 
                    name="Drawer" 
                    component={Drawer} 
                    options={{ headerShown: false }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

const estilos = StyleSheet.create({
    headerDefault: {
        backgroundColor: '#2B1D62',
        height: 50,
    },
    headerTitle: {
        color: '#fff',
        fontWeight: '400',
        fontSize: 24,
        fontFamily: 'AveriaLibre-Regular',
    },
    headerLeft: {
        paddingLeft: 0,
    },
    navigationBackImage: {
        width: 60,
        height: 60,
    }
})

export default App
