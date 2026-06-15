import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const IngredientTag = ({ name, onRemove }) => {
    return (
        <View style={styles.tagPill}>
            <Text style={styles.tagText}>{name}</Text>
            <TouchableOpacity onPress={onRemove}>
                <Ionicons name="close-circle" size={16} color="#A07250" style={styles.closeIcon} />
            </TouchableOpacity>
        </View>
    );
};

export default IngredientTag;

const styles = StyleSheet.create({
    tagPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FDF0E6',
        borderWidth: 1,
        borderColor: '#F5C299',
        paddingVertical: 4,
        paddingHorizontal: 12,
        borderRadius: 100,
        marginRight: 8,
        marginBottom: 8,
    },
    tagText: {
        color: '#5A3820',
        fontSize: 13,
        fontWeight: '600',
        marginRight: 6,
    },
    closeIcon: {
        marginTop: 1,
    },
});