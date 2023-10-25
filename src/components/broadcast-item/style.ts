import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../shared';

export const styles = StyleSheet.create({
  container: {},
  broadcastContent: {
    backgroundColor: COLORS.dark_000,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
  },
  leagueTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  leagueText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: COLORS.dark_0076,
    fontFamily: 'Poppins-Bold',
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: '800',
    textAlign: 'center',
    alignSelf: 'center',
  },
  labelWithPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
  },
  labelText: {
    color: COLORS.dark_100,
    fontFamily: FONTS.Poppins_Regular,
    fontWeight: '600',
    fontSize: 12,
  },
  descText: {
    color: COLORS.dark_100,
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 12,
    fontWeight: '400',
  },
  infoContainer: {
    flex: 2,
    height: 80,
    justifyContent: 'center',
  },
});
