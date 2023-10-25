import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_0097,
    borderRadius: 22,
    paddingHorizontal: 12,
    paddingVertical: 18,
    margin: 10,
    width: '45%',
  },
  contentContainer: {
    marginBottom: 12,
  },
  imageStyle: {
    width: '100%',
    height: 120,
    borderRadius: 15,
    marginBottom: 12,
  },
  nameStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Bold,
    fontSize: 12,
    paddingBottom: 4,
    textAlign: 'center',
  },
  descStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    paddingBottom: 4,
    fontSize: 12,
  },
  priceStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_ExtraBold,
    fontSize: 14,
    textAlign: 'right',
  },
});
