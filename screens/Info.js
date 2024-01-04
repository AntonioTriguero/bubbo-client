import { Text, StyleSheet, ImageBackground, View, TouchableOpacity, Linking } from 'react-native'

const Info = () => {
  return (
    <ImageBackground source={require('../assets/background.webp')} style={styles.background}>
      <View style={styles.screen}>
        <View style={styles.container}>

          <Text style={styles.title}>Bienvenid@ a la biblioteca</Text>

          <Text style={styles.info}>

            El usuario cuenta con una pantalla principal en la que se muestran todos los libros de la biblioteca.
            {'\n'}
            {'\n'}
            Al hacer clic en uno, se abre la pantalla con los detalles de ese libro. En esa misma página hay dos botones, uno que es para editar el libro, el cual te lleva a otra pantalla con la información del libro en modo editable, y otro botón, para eliminar (con una alerta para evitar una eliminación por error).
            {'\n'}
            {'\n'}
            El usuario cuenta con una navegación inferior, donde clicando en el botón de la derecha vas a una página donde te permite crear un libro nuevo, o donde clicando en el bóton de la izquierda, vuelves a la pantalla principal.
            {'\n'}
            {'\n'}
            Los formularios tienen validación para no crearse un objeto vacío. También te indica si has creado un nuevo libro o no con una alerta, para poder quedarte en esa pantalla y seguir añadiendo libros.
            {'\n'}
            {'\n'}
            En la barra superior, aparecen los nombres de las pantallas, un icono de la empresa Bubbo que te lleva a su web, y a la izquierda un botón de información que te lleva otra página donde se puede leer todo esto, y consultar mi portafolio.
            {'\n'}
            {'\n'}
          </Text>
        </View>
        <TouchableOpacity style={styles.btn} >
          <Text style={styles.text} onPress={() => Linking.openURL('https://www.vanesascode.com/')}>App creada {'\n'}por vanesascode</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  info: {
    fontSize: 15,
    marginTop: 10,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10bfb7',
    paddingHorizontal: 30,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 20,
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default Info