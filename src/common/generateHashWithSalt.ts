import * as crypto from 'crypto'

export default function generateHashWithSalt(value: string) {
  const salt = process.env.CRYPTO_SALT

  const textWithSalt = salt + value + salt
  return crypto
    .createHash('sha256')
    .update(textWithSalt)
    .digest('base64')
}
