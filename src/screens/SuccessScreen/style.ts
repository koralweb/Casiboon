import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  thanksText: {
    color: COLORS.dark_0066,
    fontFamily: FONTS.Poppins_ExtraBold,
    fontSize: 45,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  orderText: {
    color: COLORS.dark_0066,
    fontFamily: FONTS.Poppins_ExtraBold,
    fontSize: 33,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  buttonContainer: {
    paddingHorizontal: 32,
    marginBottom: 32,
    justifyContent: 'flex-end',
  },
  imgStyle: {
    width: 200,
    height: 200,
    marginVertical: 32,
  },
  button: {
    backgroundColor: COLORS.dark_0066,
    marginBottom: 22,
  },
  buttonText: {
    color: COLORS.dark_000,
  },
});
