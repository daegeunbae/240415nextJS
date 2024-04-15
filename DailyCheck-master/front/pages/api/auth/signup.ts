import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../../lib/auth';

// signup form에서 submitHandle 했던 Request에 대응하는 코드
async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Loading prisma client
  // Prisma 클라이언트를 초기화하는 함수입니다.
  let prisma = new PrismaClient();

  if (req.method !== 'POST') {
    return;
  }

  const data = req.body;

  const { name, email, password } = data;

  // email에는 '@'문자가 포함되어야 하고 password는 최소 7자 이상이어야 합니다.
  if (!name || !email || !email.includes('@') || !password || password.trim().length < 7) {
    res.status(422).json({
      message: 'password should also be at least 7 characters long.',
      error: true,
    });
    return;
  }
  // 그다음 user는 우리가 schema.prisma 에서 만든 모델 User를 나타냅니다.
  // 모델 User는 대문자로 시작하지만 코드에서는 소문자로 이용해야 합니다.
  // 그리고 prisma db관련 함수 중에 가장 많이 쓰이는 findUnique 함수인데요.
  // User 모델에서 특별한 걸 찾으라는 함수입니다.
  // 그리고 findUnique에는 객체를 전달하는데요.
  // where 구문이 바로 찾는 조건이 됩니다.
  // where에서 email : email이라고 썼는데요.
  // 앞에 email은 user 모델의 email이고 두 번째 email은 request body에서 유저가 보낸 email입니다.
  // 그리고 두번째 select문인데요.
  // SQL query 중에 "select * from"에서 * 에 해당되는 구문입니다.
  // 즉, "select name, email from user"와 같은 경우죠.
  // 즉, findUnique 함수는 리턴되는 객체가 바로 email, name을 리턴한다는 뜻이죠.
  // 그리고 그 리턴되는 객체를 existingUser에 저장하고 만약 existingUser가 있으면,
  // 422 코드로 에러를 전송합니다.
  // 즉, 같은 이메일로 등록한 사람이 있다는 뜻이죠.
  // 왜냐하면 schema.prisma 파일에서 model User를 설정할 때 email을 @unique로 설정했기 때문입니다.
  const existingUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
    select: {
      email: true,
      name: true,
    },
  });

  if (existingUser) {
    res.status(422).json({ message: 'User Email already exists!', error: true });
    return;
  }
  // hashPassword함수를 이용해서 유저가 입력한 password값을 hash 합니다.
  const hashedPassword = await hashPassword(password);
  // 그다음으로 prisma.user.create 함수를 통해 DB에 저장하게 됩니다.
  // prisma 클라이언트의 create 함수는 객체의 data 값을 저장하는데요.
  // 그래서 data: {} 식으로 작성해야 합니다.
  const result = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: hashedPassword,
    },
  });

  if (result) {
    res.status(201).json({ message: 'Created user!', error: false });
  } else {
    res.status(422).json({ message: 'Prisma error occured', error: true });
  }
}

export default handler;
