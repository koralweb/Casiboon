import React from 'react';

import {Text, View} from 'react-native';
import {CustomButton} from '../../shared';
import {styles} from './style';

interface SummaryCartType {
  totalSum: number;
  onPlaceOrder(): void;
}

export type LineItem = {
  label: string;
  amount: number;
};

export const SummaryCart: React.FC<SummaryCartType> = ({
  onPlaceOrder,
  totalSum,
}) => {
  const items: LineItem[] = [
    {label: 'Zwischensumme', amount: totalSum},
    {label: 'Gesamt', amount: totalSum},
  ];
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <LineItem key={index} label={item.label} amount={item.amount} />
      ))}

      <CustomButton
        onPress={onPlaceOrder}
        label="Meine Bestellung aufgeben"
        wrapperStyle={styles.buttonWrapper}
      />
    </View>
  );
};

const LineItem: React.FC<LineItem> = ({label, amount}) => (
  <View style={styles.lineItem}>
    <Text style={styles.label}>{label}</Text>

    <Text style={styles.amount}>€{amount.toFixed(2)}</Text>
  </View>
);
