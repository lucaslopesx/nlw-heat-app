import React from 'react';

import { View, Text } from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Texto da mensagem</Text>
      <View>
        <UserPhoto
          imageUri={'https://github.com/lucaslopesx.png'}
          sizes='SMALL'
        />
        <Text style={styles.userName}>
          Nome do usuario 
        </Text>
      </View>
    </View>
  );
}
