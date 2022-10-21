import { StyleSheet, Text, View, Image, Platform } from 'react-native';
import { Themes, Icons } from '../../assets/Themes';

export default function Footer() {
  return (
    <View style={styles.actionItems}>
      <View style={styles.actionButtons}>
        <Image source={Icons.discover.light} style={styles.actionIcon}/>
        <Text style={styles.actionText}>
          Discover
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <Image source={Icons.heart.light} style={styles.actionIcon}/>
        <Text style={styles.actionText}>
          Matches
        </Text>
      </View>
      <View style={styles.actionButtons}>
        <Image source={Icons.messages.light} style={styles.actionIcon}/>
        <Text style={styles.actionText}>
          DMs
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actionItems: {
    padding: 10,
    backgroundColor: Themes.light.navigation,
    height: Platform.OS === 'ios' ? 80 : 93,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
  },
  actionButtons: {
    height: '100%',
    width: undefined,
    aspectRatio: 1,
  },
  actionText: {
    color: Themes.light.textSecondary,
    paddingTop: 5,
    fontSize: 18,
    fontFamily: 'Sydney',
    alignSelf: 'center'
  },
  actionIcon: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  }
});
