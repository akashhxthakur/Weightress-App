import React, {FC, useState} from 'react';
import {
  Button,
  Modal,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import { SaveWeight } from '../data/helpers';
import { creatorStyles, primaryColor } from './style'

const Creator: FC<{
  isCreatorVisible: boolean;
  onHideCreator: () => void;
}> = ({onHideCreator, isCreatorVisible}) => {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [weight, setWeight] = useState<string>('');
  const [note, setNote] = useState<string>('');

  const handleSavePress = async () => {
    setIsSaving(true);
    await SaveWeight({weight, note});
    // hide modal
    onHideCreator();
    // Clear out the inputs
    setWeight('');
    setNote('');
    // Make button active again
    setIsSaving(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isCreatorVisible}>
      <View style={creatorStyles.centeredView}>
        <View style={creatorStyles.modalView}>
          <View style={creatorStyles.topActions}>
            <Text>Add your weight</Text>
            <TouchableOpacity
              onPress={() => {
                onHideCreator();
              }}>
              <Text style={creatorStyles.topCloseButton}>×</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={creatorStyles.input}
            placeholder="Your weight"
            keyboardType="decimal-pad"
            onChangeText={(text) => setWeight(text)}
            value={weight}
          />
          <TextInput
            placeholder="Additional note (optional)"
            style={creatorStyles.input}
            onChangeText={(text) => setNote(text)}
            value={note}
          />
          <Button
            title="Save"
            disabled={isSaving}
            color={primaryColor}
            onPress={handleSavePress}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Creator;