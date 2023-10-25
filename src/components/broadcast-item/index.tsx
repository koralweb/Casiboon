import React from 'react';

import {styles} from './style';
import {Pressable, Text, View} from 'react-native';

interface BroadcastItemProps {
  broadcast: any;
}

export const BroadcastItem: React.FC<BroadcastItemProps> = ({broadcast}) => {
  return (
    <Pressable style={styles.broadcastContent}>
      <View style={styles.leagueTextContainer}>
        <Text style={styles.leagueText}>{broadcast.league}</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.labelWithPriceContainer}>
          <Text style={styles.labelText}>{broadcast.label}</Text>
          <View>
            <Text>{broadcast.price}.10</Text>
            <Text style={styles.leagueText}>{broadcast.time}</Text>
          </View>
        </View>
        <Text style={styles.descText}>{broadcast.desc}</Text>
      </View>
    </Pressable>
  );
};
