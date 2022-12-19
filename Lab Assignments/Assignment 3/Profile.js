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
* @function Profile
**/
export const Profile = ({navigation}) => {

const { container } = styles
 return(
  
  <View style={container}>
    
  
 
 <text style={{fontSize: 20,fontWeight:'bold',color:'black'}}> Hello user,Welcome</text>
 
  
  <text>Another account</text>
  
  <View><TouchableOpacity style={styles.button}
   onPress={() => navigation.goBack()}
   >
    <Text style={styles.Text2}>            sign up Again</Text>
  </TouchableOpacity>
  
  </View>
  
 
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
    
    View2:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center',
      flexDirection:'row'
      
                         
    },
    
    View:{
      marginTop:"2%",    
      flexDirection:'row',
      alignContent:'center',
      justifyContent:'center'
      
                         
    },
    Login:{
      height:30,
       width:200,
       padding:10,
       borderColor:'grey',
       borderWidth:3,
  
       borderRadius:30
  
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
      width:200,
      marginTop:10,
      borderRadius:20,
      justifyContent:'center',
      alignContent:'center'
    
    }
})
