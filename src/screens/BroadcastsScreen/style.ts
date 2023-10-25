import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 18,
    marginTop: 22,
  },
  headerText: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontWeight: '600',
    fontSize: 32,
    marginTop: 22,
    marginBottom: 42,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    width: 200,
    height: 200,
    zIndex: -1, // setting this to a negative value to ensure it's below
  },
  space: {
    height: 100,
  },
});
