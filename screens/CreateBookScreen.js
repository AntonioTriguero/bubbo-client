import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const CreateBookScreen = () => {

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [category, setCategory] = useState('');

  const handlePostBook = async () => {
    if (!title || !description || !category || !author) {
      Alert.alert('Campos incompletos', 'Por favor, completa los campos antes de guardar el libro. La Foto es opcional.');
      return;
    }
    try {
      const response = await fetch('https://server-biblioteca-bubbo-vanesascode.onrender.com/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: title, description: description, photo: photo, category: category, author: author }),
      });
      if (response.ok) {
        setTitle('');
        setAuthor('');
        setDescription('');
        setPhoto('');
        setCategory('');
        Alert.alert('Libro nuevo creado', 'El libro se ha creado correctamente.');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Crea un nuevo libro</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={styles.input}
        placeholder="Autor"
        value={author}
        onChangeText={setAuthor}
      />

      <TextInput
        style={styles.input}
        placeholder="Sinopsis"
        value={description}
        onChangeText={setDescription}
      />


      <TextInput
        style={styles.input}
        placeholder="Categoría"
        value={category}
        onChangeText={setCategory}
      />

      <TextInput
        style={styles.input}
        placeholder="Foto Url"
        value={photo}
        onChangeText={setPhoto}
      />

      <View style={{ borderRadius: 10, overflow: 'hidden' }}>
        <Button title="Publica" onPress={handlePostBook} color="#10bfb7" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default CreateBookScreen;