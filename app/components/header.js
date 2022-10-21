import { StyleSheet, Text, View, Image, Platform, Dimensions } from 'react-native';
import { Icons } from '../../assets/Themes';

export default function Header() {
  return (
    <View style={styles.navBar}>
      <Image source={Icons.menu.light} style={styles.navBarButtons}/>
      <Text style={styles.appLogo}>
        ensom
      </Text>
      <Image source={Icons.sun} style={styles.navBarButtons}/>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 41 : 54,
    width: Dimensions.get('window').width * 0.8,
    alignSelf: 'center'
  },
  navBarButtons: {
    height: '100%',
    width: undefined,
    aspectRatio: 1
  },
  appLogo: {
    fontFamily: 'SydneyBold',
    fontSize: 32
  }
});
