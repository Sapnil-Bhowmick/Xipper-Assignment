import { StyleSheet, Text, Alert, View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Location from 'expo-location'

const CurrentLocation = ({customStyle}) => {
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState('Location Loading.....');
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false)

  useEffect(()=>{
   checkIfLocationEnabled();
   getCurrentLocation();
  },[])

  //check if location is enable or not
  const checkIfLocationEnabled= async ()=>{
    let enabled = await Location.hasServicesEnabledAsync();       
    if(!enabled){                    
      Alert.alert('Location not enabled', 'Please enable your Location', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }else{
      setLocationServicesEnabled(enabled)         
    }
  }

  //get current location
  const getCurrentLocation= async ()=>{
       let {status} = await Location.requestForegroundPermissionsAsync();  
       if(status !== 'granted'){
        Alert.alert('Permission denied', 'Allow the app to use the location services', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
       }


       const {coords} = await Location.getCurrentPositionAsync();  

       
       if(coords){
        const {latitude,longitude} =coords;



        let response = await Location.reverseGeocodeAsync({           
          latitude,
          longitude
        });

        for(let item of response ){
         let address = `${item.formattedAddress}`
          setDisplayCurrentAddress(address)
        }
           }
  }
  
  return (
      <Text numberOfLines={1} ellipsizeMode="tail" style={customStyle}>{displayCurrentAddress}</Text>
  )
}

export default CurrentLocation