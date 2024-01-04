import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditBookScreen = ({ route }) => {

  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newPhoto, setNewPhoto] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [newAuthor, setNewAuthor] = useState('');

  const { id, title, description, photo, category, author } = route.params;

  const navigation = useNavigation()

  const handleEditBook = async () => {
    try {
      const response = await fetch(`https://server-biblioteca-bubbo-vanesascode.onrender.com/books/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTitle ? newTitle : title, description: newDescription ? newDescription : description, photo: newPhoto ? newPhoto : photo, category: newCategory ? newCategory : category, author: newAuthor ? newAuthor : author }),
      });
      if (response.ok) {
        navigation.navigate('Biblioteca', { updated: true });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen}>
      <View >
        <Text style={styles.text}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          defaultValue={title}
          onChangeText={setNewTitle}
        />
        <Text style={styles.text}>Autor</Text>
        <TextInput
          style={styles.input}
          placeholder="Autor"
          defaultValue={author}
          onChangeText={setNewAuthor}
        />
        <Text style={styles.text}>Descripción</Text>
        <TextInput
          style={styles.input}
          placeholder="Descripción"
          defaultValue={description}
          onChangeText={setNewDescription}
        />
        <Text style={styles.text}>Categoría</Text>
        <TextInput
          style={styles.input}
          placeholder="Categoría"
          defaultValue={category}
          onChangeText={setNewCategory}
        />
        <Text style={styles.text}>Foto URL</Text>
        <TextInput
          style={styles.input}
          placeholder="Foto"
          defaultValue={photo}
          onChangeText={setNewPhoto}
        />
        <View style={{ borderRadius: 10, overflow: 'hidden' }}>
          <Button title="Publica" onPress={handleEditBook} color="#10bfb7" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    minWidth: 300,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  }
});

export default EditBookScreen;