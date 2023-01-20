import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import { syncStyles } from './style';
import { sync } from '../data/sync';

const SyncIndicator = () => {
  const [syncState, setSyncState] = useState<string>('Syncing data...');

  useEffect(() => {
    sync()
      .then(() => setSyncState(''))
      .catch(() => setSyncState('Sync failed!'));
  });

  if (!syncState) {
    return null;
  }

  return (
    <View style={syncStyles.container}>
      <Text style={syncStyles.text}>{syncState}</Text>
    </View>
  );
};

export default SyncIndicator;