import react from "react"
import{createDrawerNavigator} from "../tabNavigator"
import tabNavigator from "../tabNavigator";
import profile from "../Screens/Profile";
const Drawer = createDrawerNavigator();
const drawerNavigator =()=>{
    return(
        <Drawer.Navigator screenOptions ={{headerShown:false}}>
        <Drawer.Screen name = "Home" component = {tabNavigator}/>
        <Drawer.Screen name ="Profile" component ={profile}/>
        </Drawer.Navigator>
        )

}