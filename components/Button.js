import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
} from 'react-native';

export default Button = ({text, callback}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity style={styles.touchArea} onPress={callback}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    borderWidth: 1,
    padding: 10,
  },
  touchArea: {},
  text: {
    fontSize: 20,
  },
});
