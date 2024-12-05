import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function FilterModal({ visible, onClose, onFilter }) {
  const [location, setLocation] = useState('');
  const [dateRange, setDateRange] = useState('');

  const handleFilter = () => {
    onFilter({ location, dateRange });
    onClose();
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.title}>Filter Images</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location"
          value={location}
          onChangeText={setLocation}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter date range (e.g., 2023-12-01 to 2023-12-05)"
          value={dateRange}
          onChangeText={setDateRange}
        />
        <Button title="Apply Filter" onPress={handleFilter} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
