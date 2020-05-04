import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Button from '../components/Button';

export default MainScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Select a window</Text>
      </View>
      <View style={styles.bodyView}>
        <Button
          text="Go to RecyclerListView"
          callback={() => navigation.navigate('Recycler')}
        />
        <Button
          text="Go to Picker"
          callback={() => navigation.navigate('Picker')}
        />
      </View>
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
  bodyView: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
});
