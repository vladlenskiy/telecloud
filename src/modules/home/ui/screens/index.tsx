import React, { useEffect } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { loadProfile } from '@src/modules/home/store/actions';
import { profileSelector } from '@src/modules/home/store/selectors';
import UDButton from '@src/modules/ud-ui/components/ud-button';
import MtProtoResource from '@src/modules/core/infrastructure/MtProtoResource';
import { navigateAndReset } from '@src/modules/navigation/RootNavigation';
import screenNames from '@src/modules/navigation/screen-names';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  useEffect(() => {
    dispatch(loadProfile());
  }, []);

  const logOut = async () => {
    MtProtoResource.call('auth.logOut');
    navigateAndReset(screenNames.auth);
  };

  console.log('Profile:', profile);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {profile && (
        <>
          <Image
            source={{ uri: profile.photo }}
            style={{ width: 100, height: 100 }}
          />
          <Text style={{ color: 'black', fontSize: 20 }}>
            {profile.full_user.about}
          </Text>
          <Text style={{ color: 'black', fontSize: 20 }}>
            {profile.users[0].first_name} {profile.users[0].last_name}
          </Text>
        </>
      )}
      <UDButton onPress={logOut} label={'Выйти из аккаунта'} />
    </SafeAreaView>
  );
}
