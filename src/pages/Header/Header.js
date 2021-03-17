import React from 'react';
import {StyleSheet, Text,View,Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles';
export default function Header({navigation}) {

    const onFooterLinkPress = () => {
        navigation.navigate('PrivacyPolicyScreen')
       };
    // const onPrivacyPolicyPress = () => {
    //     navigation.navigate('PrivacyPolicyScreen')
    //    };
       const onContactPress = () => {
        navigation.navigate('ContactScreen')
       };
      
   
      return(
          <View style={styles.header}>
             <Image
                source={require('../../images/logo.png')}
                style={styles.icon}
                />
               
              
             <Text onPress={onContactPress} style={styles.contact}>
                    Contacts
            </Text> 
            <Text onPress={onFooterLinkPress} style={styles.footerLinks}>
                        Privacy Policy
            </Text> 
                
          </View>
        
      );
   }

      
   

   


