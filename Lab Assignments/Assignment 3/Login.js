import React from 'react'
import { View, Text, StyleSheet, TextInput,Image ,Touchable, TouchableOpacity, Alert } from 'react-native'
import { Bottombar } from './Bottm'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
/**
* @author
* @function 
**/
export const Login = ({navigation}) => {

const { container } = styles
 return(
         
  <View style={container}>
 
  <text style={{fontSize:40,fontWeight:'bold'}}>LOGIN PAGE</text>

  <TextInput style={[styles.Login,{margin:10}]}

  placeholder='Enter Email'
></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='********'

  ></TextInput>
  
  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text2}>                       Sign in</Text>
  </TouchableOpacity>

  
  <TouchableOpacity style={styles.button}
    
  onPress={() => navigation.navigate('Register')}


>
  
    <Text style={styles.Text2}>                      Signup</Text>
  </TouchableOpacity>
  
  
  </View>
  )

 }
const styles = StyleSheet.create({
  container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'white',
   height:'100%',
   width:'100%'
  },
  
  View:{
    marginTop:"2%",    
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'center'
    
                       
  },
  Login:{
    height:40,
     width:250,
     padding:10,
     borderColor:'black',
     borderWidth:1,

     

  },
 
  Text:{
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
  Text2:{
    color:'white',
    fontSize:15,
    fontStyle:'normal',
    margin:10,
    
    alignContent:'center',
    justifyContent:'center'


  },
 
  
  button:{
    backgroundColor:'black',
    height:40,
    width:250,
    marginTop:10,
    
    justifyContent:'center',
    alignContent:'center'
  
  },
  button2:{
    backgroundColor:'white',
    height:30,
    width:200,
    marginTop:10,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center'
  
}
})