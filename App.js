import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from "react-native";

export default function App() {
  return (
    <ScrollView>
      <View>
        <View style={{marginTop:60, alignItems:"center", justifyContent:"center"}}>
          <Image source={require('./assets/logo.png')}></Image>
          <Text>HoneyWealth</Text>
        </View>
        <View>
          <TouchableOpacity>
            <View>
            <Image source={require('./assets/facebook.png')}></Image>
            <Text>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
            <Image source={require('./assets/google.png')}></Image>
            <Text>Google</Text>
            </View>
          </TouchableOpacity>
          <Text>or</Text>

          <Text>Forget Password?</Text>

          <TouchableOpacity>
            <Text>Login</Text>
          </TouchableOpacity>

          <Text>Don't have account? <Text>Register now</Text></Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
