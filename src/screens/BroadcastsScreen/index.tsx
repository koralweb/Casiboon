import React from 'react';

import {styles} from './style';
import {FlatList, Image, ListRenderItem, View} from 'react-native';
import {Broadcast, ScreenHeader, Spacer, broadcasts} from '../../shared';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/route/interface';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {BroadcastItem} from '../../components';

type BroadcastsScreenType = NativeStackScreenProps<
  RootStackParamList,
  'Broadcasts'
>;

export const BroadcastsScreen: React.FC<BroadcastsScreenType> = ({
  navigation,
}) => {
  const {top} = useSafeAreaInsets();

  const renderItem: ListRenderItem<Broadcast> = ({item}) => {
    return <BroadcastItem key={item.id} broadcast={item} />;
  };

  const listHeaderComponent = () => {
    return <ScreenHeader onBackPress={navigation.goBack} title="Sendungen" />;
  };

  const listFooterComponent = () => <Spacer wrapperStyle={styles.space} />;

  return (
    <View style={[styles.container, {top}]}>
      <FlatList
        data={broadcasts}
        contentContainerStyle={styles.scrollContent}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
        ListFooterComponent={listFooterComponent}
      />
      <Image
        source={require('../../shared/assets/img/pngwing.png')}
        style={styles.bottomImage}
      />
    </View>
  );
};
