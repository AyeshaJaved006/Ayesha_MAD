import React from 'react'
import { View,
     Text,
      StyleSheet,
       TextInput,
       Image ,Touchable,
        TouchableOpacity, 
        Alert } from 'react-native'


/**
* @author
* @function Register
**/
export const Register = ({navigation}) => {

const { container } = styles
 return(
  <View style={container}>
    
  
  <Text style={{fontSize: 40,fontWeight:'bold',color:'Black',margin:5}}>Sign up</Text>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='First Name'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='Second Name'

  ></TextInput>
  <TextInput style={[styles.Login,{margin:10}]}
  
  placeholder='Email'
  keyboardType='name-phone-pad'></TextInput>
  <TextInput style={styles.Login}
  
  placeholder='******'

  ></TextInput>


  <TouchableOpacity style={styles.button}
  onPress={() => navigation.navigate('Profile')}
  >
    <Text style={styles.Text2}>           Signup</Text>
  </TouchableOpacity>
 
  </View>
  )
}


const styles = StyleSheet.create({
    container: {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor:'#ffffff',
     height:'100%',
     width:'100%'
    },
    
    View:{
      marginTop:"3%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:200,
       width:200,
       padding:10,
       borderColor:'grey',
       borderWidth:2
    },
    Text:{
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
      alignContent:'center',
      justifyContent:'center'
  
  
    },
    Text2:{
      color:'white',
      fontSize:15,
      fontStyle:'normal',
      margin:10,
      fontFamily:'Yatra-One',
      alignContent:'center',
      justifyContent:'center'
  
  
    },
    button:{
      backgroundColor:'black',
      height:30,
      width:150,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
  
  })