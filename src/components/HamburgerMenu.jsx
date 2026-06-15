import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HamburgerMenu({ onPress }) {
  return (
    <TouchableOpacity
      onPress={() => {
        onPress && onPress();
      }}
      accessibilityLabel="Open menu"
      style={{ paddingRight: 12 }}
    >
      <Ionicons name="menu" size={31} color="#5a5c62" />
    </TouchableOpacity>
  );
}