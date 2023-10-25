import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark_0066,
    marginHorizontal: 22,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 22,
  },
  lineItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  labelContainer: {},
  label: {
    fontFamily: FONTS.Poppins_Regular,
    color: COLORS.dark_000,
    fontSize: 16,
  },
  amount: {
    fontFamily: FONTS.Poppins_ExtraBold,
    color: COLORS.dark_000,
    fontSize: 16,
  },
  buttonWrapper: {
    marginVertical: 12,
  },
});
