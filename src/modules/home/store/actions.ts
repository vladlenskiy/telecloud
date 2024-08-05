import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '@src/modules/auth/domain/AuthService';
import MtProtoResource from '@src/modules/core/infrastructure/MtProtoResource';
import { Buffer } from 'buffer';

const PREFIX = 'home';

export const loadProfile = createAsyncThunk(
  `${PREFIX}/loadProfile`,
  async _ => {
    try {
      const profile = await MtProtoResource.call('users.getFullUser', {
        id: {
          _: 'inputUserSelf',
        },
      });

      console.log(profile);

      const profilePhotoResponse = await MtProtoResource.call(
        'upload.getFile',
        {
          location: {
            _: 'inputPeerPhotoFileLocation',
            peer: {
              _: 'inputPeerSelf',
            },
            photo_id: profile.full_user.profile_photo.id,
          },
          offset: 0,
          limit: 1024 * 1024,
        },
      );

      const photo =
        'data:image/jpeg;base64,' +
        Buffer.from(profilePhotoResponse.bytes).toString('base64');

      console.log({ ...profile, photo });

      return { ...profile, photo };
    } catch (error) {
      console.log(error);
    }
  },
);
