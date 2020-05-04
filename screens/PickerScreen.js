import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Button from '../components/Button';

export default class PickerScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: null,
      video: null,
    };
  }

  render() {
    //const [photo, setPhoto] = useState(null);
    return (
      <SafeAreaView style={styles.mainView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Video and Image Picker</Text>
        </View>
        <View style={styles.bodyView}>
          <Button
            text="Select Photo"
            callback={() => this.handlePicker('photo')}
          />
          <View style={styles.imageContainer}>
            {this.state.photo && (
              <Image
                source={{uri: this.state.photo.uri}}
                style={styles.image}
              />
            )}
          </View>
          <Button
            text="Select Video"
            callback={() => this.handlePicker('video')}
          />
          <View style={styles.imageContainer}>
            {this.state.video && (
              <Image
                source={{uri: this.state.video.uri}}
                style={styles.image}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    );
  }

  handlePicker = (mediaType) => {
    // const options = {
    //   noData: false,
    // };
    const options = {
      title: 'Select Sample ' + mediaType,
      storageOptions: {
        skipBackup: true,
        path: 'media',
      },
      mediaType,
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.uri) {
        this.setState(
          mediaType === 'photo' ? {photo: response} : {video: response},
        );
      }
    });
  };
}

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
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    //resizeMode: 'cover',
    borderRadius: 20,
  },
  imageContainer: {
    height: 200,
    width: 200,
    margin: 10,
  },
});
