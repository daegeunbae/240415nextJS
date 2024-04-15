import React, { useState, useRef } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

export default function login() {
  const [formStatus, setFormStatus] = useState<string>(null);

  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    // email과 password값을 signIn 함수를 이용해서 result 값을 얻어 내는데요.
    // signIn 함수는 뭘까요?
    // 바로 "next-auth/react" 패키지에서 제공하는 signIn 함수입니다.
    // signIn 함수의 첫 번째 인자는 바로 로그인 방식인데요.
    // 우리는 유저 이메일과 패스워드 방식입니다.
    // NextAuth에서는 이 방식을 credentials이라고 부릅니다.
    const result = await signIn('credentials', {
      // redirect : false는 signIn 과정에서 에러가 발생했을 때 화면을 새로고침 하지 않고 그 자리에 있으라는 뜻입니다.
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
    });

    if (!result.error) {
      setFormStatus(`Log in Success!`);
      router.replace('/');
    } else {
      setFormStatus(`Error Occured : ${result.error}`);
    }
  } // end of submitHandler function

  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') {
    router.replace('/');
    return (
      <div>
        <h1>Log in</h1>
        <div>You are already logged in.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }
  return (
    <Login className="container px-5 py-10 mx-auto w-2/3">
      <div className="text-center mb-12">
        <h1 className="Title">Log In</h1>
      </div>
      <form onSubmit={submitHandler} className="Form">
        <div className="mb-4">
          <label className="Label" htmlFor="email">
            Email
          </label>
          <input className="Input" id="email" type="text" placeholder="Email" required ref={emailInputRef} />
        </div>
        <div className="mb-6">
          <label className="Label" htmlFor="password">
            Password
          </label>
          <input className="Input" id="password" type="password" required ref={passwordInputRef} />
          <p className="text-red-500 text-xs italic">
            {/* Please choose a password. */}
            {formStatus}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="Button" type="submit">
            Log In
          </button>
        </div>
      </form>
    </Login>
  );
}

const Login = styled.div`
  max-width: 1240px;
  height: 90vh;
  padding: 30px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .Title {
    font-size: 32px;
    margin-bottom: 20px;
    font-weight: bold;
  }
  .Form {
    padding: 20px;
    box-shadow: rgb(154 154 154 / 12%) 2px 2px 2px 2px;
    background: rgba(255, 255, 255, 0.25);
  }
  .Label {
    display: block;
    margin-bottom: 5px;
  }
  .Input {
    padding: 10px;
    box-shadow: rgb(154 154 154 / 12%) 2px 2px 2px 2px;
    background: rgba(255, 255, 255, 0.25);
    margin-bottom: 20px;
  }
  .Button {
    font-weight: bold;
  }
`;
