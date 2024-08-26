import crypto from 'crypto'

export const useEncryption = () => {
  const generateKeyPair = () => {
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: process.env.REACT_APP_ENCRYPTION_CIPHER,
        passphrase: process.env.REACT_APP_ENCRYPTION_PASSPHRASE,
      },
    })

    return { publicKey, privateKey }
  }

  return { generateKeyPair }
}
