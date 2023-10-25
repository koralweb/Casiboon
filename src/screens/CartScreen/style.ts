import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    marginTop: 22,
  },
  emptyContainer: {
    flex: 1,
  },
  emptyTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 22,
  },
  buttonWrapperStyle: {
    paddingHorizontal: 32,
    marginBottom: 32,
  },
  listContent: {
    paddingHorizontal: 16,
  },
});
