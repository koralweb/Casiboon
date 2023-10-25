import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {},
  contentContainer: {
    paddingHorizontal: 12,
  },
  imgStyle: {
    width: '100%',
    height: 400,
    marginBottom: 12,
  },
  header: {
    marginTop: 22,
    marginBottom: 32,
    paddingHorizontal: 22,
  },
  nameStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_ExtraBold,
    fontSize: 22,
    paddingBottom: 8,
    textAlign: 'center',
  },
  descStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 18,
    paddingBottom: 12,
  },
  instructionStyle: {
    color: COLORS.dark_000,
    marginBottom: 22,
  },
  buttonStyle: {
    flex: 1,
    paddingHorizontal: 18,
    marginBottom: 32,
  },
});
