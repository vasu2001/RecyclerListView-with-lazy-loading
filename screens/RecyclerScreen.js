import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import {RecyclerListView, DataProvider, LayoutProvider} from 'recyclerlistview';
import ListItem from '../components/ListItem';

const {width} = Dimensions.get('window');
const pageSize = 10;
var dataLength = 0;
var page = 1;
const viewTypes = {
  normal: 0,
  reload: 1,
};

const dataProvider = new DataProvider((r1, r2) => {
  return r1.id !== r2.id;
});

const layoutProvider = new LayoutProvider(
  (index) => {
    //return 1 for 2nd last element for further loading
    if (dataLength - index === 1) {
      return viewTypes.reload;
    }

    return viewTypes.normal;
  },
  (type, dim) => {
    switch (type) {
      case viewTypes.normal:
      case viewTypes.reload:
        dim.width = width;
        dim.height = 200;
        break;
      default:
        dim.width = 0;
        dim.height = 0;
        break;
    }
  },
);

const loadData = async (data, setData) => {
  //api call for data
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/comments',
      {
        params: {
          _page: page,
          _limit: pageSize,
        },
      },
    );
    page++;
    dataLength += pageSize;

    setData([...data, ...res.data]);
  } catch (e) {
    console.log('error: ' + e);
  }
};

const renderFooter = () => {
  return (
    <View style={styles.footerContainer}>
      {dataLength < 500 ? (
        <ActivityIndicator size={30} color="blue" />
      ) : (
        <Text style={styles.footerText}>No more results</Text>
      )}
    </View>
  );
};

export default RecyclerScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    page = 1;
    loadData(data, setData);
  }, []);

  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recycler List View</Text>
      </View>

      {data.length > 0 && (
        <RecyclerListView
          style={styles.list}
          layoutProvider={layoutProvider}
          dataProvider={dataProvider.cloneWithRows(data)}
          rowRenderer={(type, record) => {
            if (type === viewTypes.reload) loadData(data, setData);
            return <ListItem data={record} />;
          }}
          renderFooter={renderFooter}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    padding: 10,
  },
  list: {
    flex: 1,
  },
  footerContainer: {
    margin: 5,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 20,
    color: 'blue',
  },
});
