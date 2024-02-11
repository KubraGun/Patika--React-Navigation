import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

function MemberDetail({navigation}){
    <SafeAreaView>
      <Button 
              title='Update'
              onPress={()=> navigation.navigate('MemberUpdateScreen') }
      />
      <Text>dfgsdfg</Text>
    </SafeAreaView>
}

export default MemberDetail;