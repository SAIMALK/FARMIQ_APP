import React from 'react';
import { ScrollView, StyleSheet,Text, Image,TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AllPestScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <PlantationGrid />
    </ScrollView>
  );
};

const PlantationGrid = () => {
    const crops = [
      { imageUrl: 'https://images.unsplash.com/photo-1715944476655-20a7d99ae687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0ZSUyMHBhbG1zfGVufDB8fDB8fHww', title: 'Date Palm' },
      { imageUrl: 'https://images.unsplash.com/photo-1509817775895-79efefb813d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D', title: 'Coconut' },
      { imageUrl: 'https://images.unsplash.com/photo-1602943543714-cf535b048440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhJTIwbGVhdmVzfGVufDB8fDB8fHww', title: 'Tea' },
      { imageUrl: 'https://plus.unsplash.com/premium_photo-1669205342640-aef28ff08cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Almond' },
      { imageUrl: 'https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww', title: 'Wheat' },
      { imageUrl: 'https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D', title: 'Corn' },
      { imageUrl: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Coffee' },
      { imageUrl: 'https://images.unsplash.com/photo-1715944476655-20a7d99ae687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0ZSUyMHBhbG1zfGVufDB8fDB8fHww', title: 'Date Palm' },
      { imageUrl: 'https://images.unsplash.com/photo-1509817775895-79efefb813d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D', title: 'Coconut' },
      { imageUrl: 'https://images.unsplash.com/photo-1602943543714-cf535b048440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhJTIwbGVhdmVzfGVufDB8fDB8fHww', title: 'Tea' },
      { imageUrl: 'https://plus.unsplash.com/premium_photo-1669205342640-aef28ff08cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Almond' },
      { imageUrl: 'https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww', title: 'Wheat' },
      { imageUrl: 'https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D', title: 'Corn' },
      { imageUrl: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Coffee' },
  
  ];
  
    return (
      <View style={styles.gridContainer}>
        {crops.map((crop, index) => (
          <CropItem key={index} imageUrl={crop.imageUrl} title={crop.title} />
        ))}
      </View>
    );
  };

  const CropItem = ({ imageUrl, title }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.cropItemContainer} onPress={() => navigation.navigate('FertilizerDetails')}>
        <Image source={{ uri: imageUrl }} style={styles.cropImage} />
        <Text style={styles.cropTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  cropItemContainer: {
    width: '48%',  // Adjust width to fit two items per row
    alignItems: 'left',
    margin: '1%',  // Adjust margin to give some spacing
  },
  cropImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  cropTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default AllPestScreen;