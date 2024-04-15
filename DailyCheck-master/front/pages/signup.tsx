import React, { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

async function createUser(name: string, email: string, password: string): Promise<any> {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({ name, email, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

export default function signup() {
  const [formStatus, setFormStatus] = useState<string>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const { status } = useSession();
  const router = useRouter();

  async function submitHandler(event: React.SyntheticEvent) {
    event.preventDefault();

    const enteredName = nameInputRef.current?.value;
    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    // optional: Add validation

    try {
      const result = await createUser(enteredName, enteredEmail, enteredPassword);
      console.log(result);
      setFormStatus(`Sign up Success: ${result.message}`);
      // window.location.href = "/";
      router.replace('/login');
    } catch (error) {
      console.log(error);
      setFormStatus(`Error Occured: ${error.message}`);
    }
  } // end of submitHandler function

  if (status === 'authenticated') {
    router.replace('/');
    return (
      <div>
        <h1>Sign Up</h1>
        <div>You are already signed up.</div>
        <div>Now redirect to main page.</div>
      </div>
    );
  }
  return (
    <Signup className="container px-5 py-10 mx-auto w-2/3">
      <div>
        <h1 className="Title">Sign Up</h1>
      </div>
      <form onSubmit={submitHandler} className="Form">
        <div className="mb-4">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" type="text" placeholder="Name" required ref={nameInputRef} />
        </div>
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
            Sign Up
          </button>
        </div>
      </form>
    </Signup>
  );
}
const Signup = styled.div`
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
