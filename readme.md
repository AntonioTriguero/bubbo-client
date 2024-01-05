# Biblioteca libros - Bubbo prueba técnica - CLIENT SIDE

## Instrucciones:

Interfaz de usuario en la aplicación móvil utilizando componentes de React Native.

- Mostrar la lista de libros en una pantalla principal.
- Permitir al usuario ver los detalles de un libro al hacer clic en él.
- Proporcionar la funcionalidad para agregar un nuevo libro.
- Permitir al usuario editar y eliminar libros existentes.
- Consumo de la API REST desarrollada en la [Parte 1](https://github.com/vanesascode/bubbo-server). La API se puede encontrar en el siguiente link: https://server-biblioteca-bubbo-vanesascode.onrender.com/

## Descripción del proyecto:

El usuario cuenta con una pantalla principal en la que se muestran todos los libros de la biblioteca. Al hacer clic en uno, se abre la pantalla con los detalles de ese libro. En esa misma página hay dos botones, uno que es para editar el libro, el cual te lleva a otra pantalla con la información del libro en modo editable, y otro botón, para eliminar (con una alerta para evitar una eliminación por error).

El usuario cuenta con una navegación inferior, donde clicando en el botón de la derecha vas a una página donde te permite crear un libro nuevo, o donde clicando en el bóton de la izquierda, vuelves a la pantalla principal.

Los formularios tienen validación para no crearse un objeto vacío. También te indica si has creado un nuevo libro o no con una alerta, para poder quedarte en esa pantalla y seguir añadiendo libros.

En la barra superior, aparecen los nombres de las pantallas, un icono de la empresa Bubbo que te lleva a su web, y a la izquierda un botón de información que te lleva otra página donde se puede leer todo esto, y consultar mi portafolio.

## Herramientas:

### Paquetes instalados:

- npx create-expo-app events-app
- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context
- npm install @react-navigation/stack
- npx expo install react-native-gesture-handler
- npx expo install react-native-gesture-handler react-native-reanimated
- npm i @expo/vector-icons

### Aplicación móvil para el desarrollo:

- expo go

### Móvil para el desarrollo: 

- Android - POCO M3 Pro 5G

### Run command:

- npx expo start
