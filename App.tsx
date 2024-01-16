import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function CaixaRed(){
  return <View style={{backgroundColor: 'red', width: 100, height: 100, flexBasis: 140}}>
    </View>
  
}

function CaixaGreen(){
  return <View 
        style={{backgroundColor: 'green',
               width: 100, height: 100}}>
    </View>
  
  
}

function CaixaBlue(){
  return <View 
        style={{backgroundColor: 'blue',
               width: 100, height: 100}}>
    </View>
  
  
}

export default function App() {
  return (
    <View style={styles.container}>
    
      <CaixaGreen></CaixaGreen>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      <CaixaGreen></CaixaGreen>
      <CaixaRed></CaixaRed>
      <CaixaBlue></CaixaBlue>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: "flex-start",
    alignItems: "flex-start",
   
    backgroundColor: '#fff',
  
    
  },
});
