import React from 'react';
import {SafeAreaView, Button} from 'react-native';

function Profile({navigation}){
  return(
    <SafeAreaView>
      <Button 
              title='Edit'
              onPress={() => navigation.navigate('ProfileEditScreen')}
      />
    </SafeAreaView>
  );

}

export default Profile;