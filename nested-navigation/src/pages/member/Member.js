import React from 'react';
import {Button, SafeAreaView} from 'react-native';

function Member({navigation}){
  return(
    <SafeAreaView>
      <Button 
              title='Detail'
              onPress={()=> navigation.navigate('MemberDetailScreen')}
      />
    </SafeAreaView>
  );
}

export default Member;