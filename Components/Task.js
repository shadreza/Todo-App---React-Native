import React from 'react';
import {View , Text , StyleSheet, TouchableOpacity} from 'react-native';

const Task = ({text}) => {
    return (
        <View style={styles.task}>
            <View style={styles.leftPart}>
                <TouchableOpacity style={styles.square} />
                <Text style={styles.taskName}>{text}</Text>
            </View>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    task: {
        backgroundColor: '#fff5eb',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    taskName: {
        fontWeight: 'bold',
        maxWidth: '80%'
    },
    leftPart: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 8,
        marginRight: 10
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Task;