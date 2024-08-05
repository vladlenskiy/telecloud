import { MtProtoStorage } from '@src/modules/core/services/StorageService';
//@ts-ignore
import { polyfillGlobal } from 'react-native/Libraries/Utilities/PolyfillFunctions';
//@ts-ignore
import MTProto from '@mtproto/core/envs/browser';
import 'react-native-get-random-values';
import { TextDecoder, TextEncoder } from 'web-encoding';
import Config from 'react-native-config';

polyfillGlobal('TextEncoder', () => TextEncoder);
polyfillGlobal('TextDecoder', () => TextDecoder);

export default new MTProto({
  api_id: Config.API_ID,
  api_hash: Config.API_HASH,
  storageOptions: {
    instance: new MtProtoStorage(),
  },
});
