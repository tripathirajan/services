import { default as Encryption } from '../CryptoService/Hashing';

describe('Encryption: base64Encode', () => {
  test('Should called once', () => {
    const encodeSpy = jest.spyOn(Encryption, 'base64Encode');
    Encryption.base64Encode('testingEncodeBase64');
    expect(encodeSpy).toHaveBeenCalled();
    expect(encodeSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Encryption: base64Decode', () => {
  test('Should called once', () => {
    const decodeSpy = jest.spyOn(Encryption, 'base64Decode');
    Encryption.base64Decode('dGVzdGluZ0VuY29kZUJhc2U2NA==');
    expect(decodeSpy).toHaveBeenCalled();
    expect(decodeSpy).toHaveBeenCalledTimes(1);
  });
});

describe('Encryption: base64Decode and base64Encode', () => {
  test('Before encode and after decode should be same', async () => {
    expect(await Encryption.base64Encode('testingEncodeBase64')).toEqual('dGVzdGluZ0VuY29kZUJhc2U2NA==');
    expect(await Encryption.base64Decode('dGVzdGluZ0VuY29kZUJhc2U2NA==')).toEqual('testingEncodeBase64');
  });
});
