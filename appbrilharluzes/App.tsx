import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const cores = [
    "#a1b2c3",
    "#d4e5f6",
    "#123456",
    "#abcdef",
    "#789abc",
    "#def123",
    "#456789",
    "#fedcba",
    "#321654",
    "#987654"
  ]
  return (
    <View style={styles.container}>
      <Image  source={require('./assets/iconeapp.png')} />
      <Text style={{fontSize:35,fontWeight:"bold",color:"#fff",marginBottom:15}}>Escolha uma Cor</Text>
      <View style={{flexDirection: "row", flexWrap: "wrap", width: "100%", justifyContent: 'center', alignItems: 'center' }}>
        {cores.map((item) => <View style={{ width: "33%", margin: 5 }}>
          <TouchableOpacity style={{ backgroundColor: item, padding: 10, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="lightbulb-o" size={30} color="#fff" />
          </TouchableOpacity>
        </View>)}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",

    flexDirection: "column",
    flexWrap:"wrap",
    backgroundColor: '#363636',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
