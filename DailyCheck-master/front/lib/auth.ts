// password을 해싱해서 저장할 수 있도록 하기 위해 bcryptjs
import { hash, compare } from 'bcryptjs';

// hashPassword 함수는 password라는 문자열을 받아서 hash 함수를 통해 사람이 알아볼 수 없는 문자열로 만들고 리턴해 줍니다.
export async function hashPassword(password: string): Promise<string> {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}
// verifyPassword 함수는 반대로 hash 된 문자열을 유저가 입력한 password 문자열을 hash 한 값과 비교하는 함수입니다.
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  const isValid = await compare(password, hashedPassword);
  return isValid;
}
