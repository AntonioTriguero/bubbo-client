import { useRoute } from '@react-navigation/native'
import { View, StyleSheet, TouchableOpacity, Text, Image, ScrollView } from 'react-native'

import { Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BookDetailScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { id, title, description, category, photo, author } = route.params

  const handleDeleteBook = () => {
    Alert.alert(
      "Eliminar libro",
      "¿Estás seguro que quieres eliminar este libro?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          style: "destructive",
          onPress: async () => {
            try {
              const response = await fetch(`https://server-biblioteca-bubbo-vanesascode.onrender.com/books/${id}`, {
                method: 'DELETE',
              });
              if (response.ok) {
                console.log(`Successfully deleted book with id: ${id}`);
                navigation.goBack();
              } else {
                console.error(`Failed to delete book with id: ${id}`);
              }
            } catch (error) {
              console.error(error);
            }
          }
        }
      ],
      { cancelable: true }
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.card} >
      <Text style={styles.title}>{title}</Text>

      <Image style={styles.img} source={{ uri: photo ? photo : 'https://via.placeholder.com/150' }} />

      <View style={styles.container}>
        <Text style={styles.label}>Autor: </Text><Text style={styles.info}>{author}</Text>
      </View>

      <View style={styles.container}>
        <Text style={styles.label}>Categoría: </Text><Text style={styles.info}>{category}</Text>
      </View>


      <Text style={[styles.info, { marginTop: 10 }]}>{description}</Text>


      <View style={{ flexDirection: 'row', marginTop: 10 }}>

        {/* EDIT BUTTON */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: '#10bfb7', marginTop: 10 }]} onPress={() => navigation.navigate('Edita tu libro', { id, title, description, photo, category, author })}>
          <Text style={{ color: 'white' }}>Editar</Text>
        </TouchableOpacity>

        {/* DELETE BUTTON */}
        <TouchableOpacity style={[styles.btn, { backgroundColor: 'black', marginTop: 10 }]} onPress={handleDeleteBook}>
          <Text style={{ color: 'white' }}>Eliminar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  card: {
    marginVertical: 5,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: 5

  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: Platform.select({
      ios: '700',
      android: 'bold',
      default: 'bold',
    }),
    marginBottom: 10
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 15,
  },
  img: {
    height: 260,
    width: 170,
    marginBottom: 10
  },
});
export default BookDetailScreen