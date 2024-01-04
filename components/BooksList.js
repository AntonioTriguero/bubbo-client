import { View, FlatList, RefreshControl } from 'react-native'
import BookItem from './BookItem'
import { useState, useEffect } from 'react'

const EventList = () => {


  const [books, setBooks] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (updated) {
      fetchData();
      setUpdated(false);
    }
  }, [updated]);

  const fetchData = () => {
    fetch('https://server-biblioteca-bubbo-vanesascode.onrender.com/')
      .then(response => response.json())
      .then(json => {
        setBooks(json);
      })
      .catch(error => {
        console.error(error);
      });
  };


  const renderItem = ({ item }) => {
    return <BookItem id={item.id} title={item.title} description={item.description} photo={item.photo} category={item.category} author={item.author} />
  }
  return (
    <View >
      <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={2}
        refreshControl={<RefreshControl refreshing={false} onRefresh={() => fetchData()} />}
      />
    </View>
  )
}

export default EventList
