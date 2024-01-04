import { View, StyleSheet, ImageBackground } from 'react-native'
import BookList from '../components/BooksList'

const HomeScreen = () => {

  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.screen}>
        <BookList />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  screen: {
    padding: 20,
    textAlign: 'center',
  },
});

export default HomeScreen