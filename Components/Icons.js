import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
const Icons = () => {
    return (
      <View style={styles.mainContainer}>
        
        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="spa" size={28} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>FARMIQ</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="landscape" size={28} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Pests</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="local-bar" size={28} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Fertilizers</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="assignment" size={28} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Plans</Text>
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity>
            <Icon name="eco" size={28} color="#4CAF50"/>
          </TouchableOpacity>
        <Text style={styles.iconName}>Crops</Text>
        </View>

      </View>
    );
  };
  
  const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      backgroundColor: '#fff'
    },
    iconName: {
      fontSize: 10,
      fontWeight: 'bold',
    },
    iconsContainer: {
      flexDirection: 'col',
      alignItems: 'center',
      padding:10,
    }
  });
  
  export default Icons;
  