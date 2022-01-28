import Login from './Login';
import Main from './Main';
import SignUp from './SignUp';
import Perfil from './Perfil';
import VacinaInfancia from './VacinaInfancia';
import InsertVacina from './InsertVacina';


import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation'

const Routes = createAppContainer(

 createStackNavigator({
        Login:  Login,
        Main:   Main,
        SignUp: SignUp,
        Perfil: Perfil,
        VacinaInfancia: VacinaInfancia,
        InsertVacina: InsertVacina
        
}))
;

export default Routes;