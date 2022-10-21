import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Themes, Icons, Profiles } from '../../assets/Themes';

export default function Body() {
  return (
    <View style={styles.body}>
      <View style={styles.profileCard}>
        <Image source={Profiles.mtl.image} style={styles.profilePicture}/>
        <Text style={styles.profileName}>
          {Profiles.mtl.name}
        </Text>
        <Text style={styles.profileDesc}>
          {Profiles.mtl.caption}
        </Text>
      </View>
      <View style={styles.prompt}>
        <View style={styles.textContainer}>
          <Text style={styles.promptText}>
            My hottest take
          </Text>
        </View>
        <View style={styles.audio}>
          <Image source={Icons.player.light} style={styles.play}/>
          <Image source={Icons.audioWave.light} style={styles.wave}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 20,
    paddingTop: 30,
    alignItems: 'center'
  },
  profileCard: {
    position: 'relative',
    width: Dimensions.get('window').width * 0.8,
    height: undefined,
    aspectRatio: 1,
    flexShrink: 1,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    borderRadius: 8,
    marginBottom: 20
  },
  profilePicture: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 8
  },
  profileName: {
    position: 'absolute',
    fontSize: 32,
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    padding: 10
  },
  profileDesc: {
    position: 'absolute',
    fontSize: 18,
    color: Themes.light.textSecondary,
    fontFamily: 'Sydney',
    padding: 10,
    bottom: 0
  },
  prompt: {
    backgroundColor: Themes.light.bgSecondary,
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.17,
    shadowColor: Themes.light.shadows.shadowColor,
    shadowOpacity: Themes.light.shadows.shadowOpacity,
    shadowRadius: Themes.light.shadows.shadowRadius,
    shadowOffset: Themes.light.shadows.shadowOffset,
    borderRadius: 20,
    padding: 20
  },
  textContainer: {
    paddingBottom: 15,
    flex: 0
  },
  promptText: {
    fontFamily: 'Sydney',
    fontSize: 25,
  },
  audio: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  play: {
    height: '60%',
    width: undefined,
    aspectRatio: 1
  },
  wave: {
    flex: 1,
    width: null,
    height: '60%',
    resizeMode: 'contain',
  }
});
