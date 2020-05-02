import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default ListItem = ({data}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.rowView}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>Name</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.dataText}>{data.name}</Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>Email</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.dataText}>{data.email}</Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>PostId</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.dataText}>{data.postId}</Text>
        </View>
      </View>

      <View style={styles.rowView}>
        <View style={styles.labelView}>
          <Text style={styles.labelText}>Data</Text>
        </View>
        <View style={styles.dataView}>
          <Text style={styles.dataText}>{data.body}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 2,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
  },
  rowView: {
    flexDirection: 'row',
  },
  labelView: {
    flex: 1,
  },
  dataView: {
    flex: 6,
  },
  labelText: {
    fontWeight: 'bold',
  },
});
