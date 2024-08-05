import MtProtoResource from '@src/modules/core/infrastructure/MtProtoResource';
//@ts-ignore
import MTProto from '@mtproto/core/envs/browser';
import { SendCode } from '@src/modules/auth/domain/interfaces/SendCode';

type LoginDto = {
  phone_code: string;
  phone_number: string;
  phone_code_hash: string;
};

export class AuthService {
  constructor(private resource: MTProto) {}

  public async sendCode(phone: string): Promise<SendCode> {
    const { phone_code_hash } = await this.resource.call('auth.sendCode', {
      phone_number: phone,
      settings: {
        _: 'codeSettings',
      },
    });
    return { phone, phone_code_hash };
  }

  public async login(params: LoginDto): Promise<void> {
    return this.resource.call('auth.signIn', {
      phone_code: params.phone_code,
      phone_number: params.phone_number,
      phone_code_hash: params.phone_code_hash,
    });
  }

  public async checkAuth() {
    return await this.resource.call('users.getFullUser', {
      id: {
        _: 'inputUserSelf',
      },
    });
  }
}

const authService = new AuthService(MtProtoResource);
export default authService;
