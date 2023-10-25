import React from 'react';

import {styles} from './style';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {
  RootStackParamList,
  RootStackParams,
} from '../../navigation/route/interface';
import {
  CatalogIcon,
  ContactsIcon,
  PodcastIcon,
  ReservationIcon,
} from '../../shared';
import {RouteItem} from '../../components';

type HomeScreenType = NativeStackScreenProps<RootStackParamList, 'Home'>;

const routes = [
  {
    id: '1',
    title: 'Produkte',
    destination: RootStackParams.Products,
    icon: CatalogIcon,
  },
  {
    id: '2',
    title: 'Tischreservierung',
    destination: RootStackParams.Reservation,
    icon: ReservationIcon,
  },
  {
    id: '3',
    title: 'Sendungen',
    destination: RootStackParams.Broadcasts,
    icon: PodcastIcon,
  },
  {
    id: '4',
    title: 'Wagen',
    destination: RootStackParams.Cart,
    icon: ContactsIcon,
  },
];

export const HomeScreen: React.FC<HomeScreenType> = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image source={require('../../shared/assets/img/logo.png')} style={{width:789/2.5, height:266/2.5, marginTop:35}}/>
        </View>
        <View style={styles.container}>
          {routes.map(route => {
            return (
              <React.Fragment key={route.id}>
                <RouteItem
                  route={route}
                  onItemPress={() => navigation.navigate(route.destination)}
                />
              </React.Fragment>
            );
          })}
        </View>

        <Text style={styles.footerText}>CasiboonSport</Text>
      </ScrollView>
    </SafeAreaView>
  );
};
