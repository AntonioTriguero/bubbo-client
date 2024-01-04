import { Ionicons } from "@expo/vector-icons"
import { Image, StyleSheet, Linking, TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

export const navOptions = (nav) => {
  return {
    headerTitleAlign: 'center',
    headerTintColor: '#cbd5e1',
    headerStyle: {
      backgroundColor: 'black',
    },
    headerLeft: () => {
      const navigation = useNavigation();
      const route = useRoute();

      if (route.name !== "Biblioteca") {
        return (
          <Ionicons
            name="arrow-back-outline"
            style={{ marginLeft: 20 }}
            size={32}
            color="white"
            onPress={() => navigation.goBack()}
          />
        );
      }
      if (route.name === "Biblioteca") {
        return (
          <Ionicons
            name="information-circle-outline"
            style={{ marginLeft: 20 }}
            size={25}
            color="white"
            onPress={() => navigation.navigate("Info")}
          />
        );
      }
    },
    headerRight: () => {
      return (
        <TouchableOpacity style={styles.imageContainer} onPress={() => Linking.openURL('https://www.bubbo.app/')}>
          <Image
            style={styles.img} source={require('../assets/bubbo.webp')} onPress={() => Linking.openURL('https://www.bubbo.app/')}
          />
        </TouchableOpacity>)
    }
  }
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 20,
    width: 70,
  },
  img: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    marginRight: 25
  }
})

