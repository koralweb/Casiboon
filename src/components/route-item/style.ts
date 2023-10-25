import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

export const styles = StyleSheet.create({
  container: {},
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 22,
    paddingHorizontal: 26,
  },
  iconContainer: {},
  itemText: {
    color: COLORS.dark_000,
    fontFamily: 'Poppins-Regular',
    fontWeight: '600',
    fontStyle: 'normal',
    fontSize: 22,
    paddingHorizontal: 12,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.dark_000,
    marginTop: 8,
  },
});
