import React , {useState} from 'react';
import { Keyboard, KeyboardAvoidingView , Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {

  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems , task]);
    setTask('');
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>
        <View style={styles.tasks}>
          {
            taskItems.map((items , index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={items}/>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>

      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
        <TextInput style={styles.taskInput} placeholder='write a task' value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress = {() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle : {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  },
  tasks: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  taskInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius:60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: '80%'
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1
  },
  addText: {
    fontWeight: 'bold'
  },
});
