import {StyleSheet} from 'react-native';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  arrowContainer: {
    backgroundColor: COLORS.dark_000,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 10,
  },
  icon: {
    backgroundColor: COLORS.dark_000,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 8,
  },
  iconContainer: {
    width: 24,
    height: 24,
    justifyContent: 'space-between',
  },
  line: {
    height: 3, // Line thickness
    backgroundColor: COLORS.dark_00356B,
  },
});
