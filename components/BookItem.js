import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, Text, Image, StyleSheet, View } from 'react-native';

const BookItem = ({ id, title, description, photo, category, author }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Detalles del libro", { id, title, description, photo, category, author })}>

      <Image style={styles.img} source={{ uri: photo ? photo : 'https://via.placeholder.com/150' }} />

      <View >
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.text}>Más info</Text>
        </TouchableOpacity>
      </View>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },


  btn: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#10bfb7',
    width: 150,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },

  img: {
    height: 230,
    width: 150,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default BookItem;