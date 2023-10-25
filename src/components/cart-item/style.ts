import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_0097,
    borderRadius: 18,
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 22,
    marginBottom: 22,
  },
  imgStyle: {
    width: 90,
    height: 90,
    borderRadius: 22,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 12,
  },
  nameStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 16,
    paddingBottom: 6,
  },
  descStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 10,
    paddingBottom: 6,
  },
  priceStyle: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 22,
    paddingBottom: 6,
  },
  deleteIcon: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
