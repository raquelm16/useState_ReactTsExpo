import { ImageBackground, StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#1f1e25',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color:'#fff',
      fontSize:25,
      fontWeight:'bold',
      paddingBottom:10
    },
    input:{
      color:'red',
      backgroundColor:'#fff',
      borderRadius:5,
      fontWeight:'400',
      width:'60%',
      margin: 10,
      padding:10
    },
    btn:{
      backgroundColor:'red',
      fontSize:14,
      width:'60%',
      margin:10,
      padding:15,
      marginbBottom:20,
      borderRadius:5,
      alignItems:'center'
    },
    btnTxt:{ 
      color:'#fff',
      fontFamily:'Arial',
      fontWeight:'600'
    },
  });