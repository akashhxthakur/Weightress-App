import React, {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { headerStyles } from './style';
const Header: FC<{onOpenCreator: () => void}> = ({onOpenCreator}) => {
  return (
    <>
      <View style={headerStyles.container}>
        <Text style={headerStyles.headerTitle}>Weightress</Text>
        <TouchableOpacity
          style={headerStyles.addButton}
          onPress={() => onOpenCreator()}>
          <Text>+ Add</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;