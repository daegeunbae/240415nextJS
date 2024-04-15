import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const { data: session, status } = useSession();
  if (status === 'authenticated') console.log('session', session);
  return (
    <HeaderStyle>
      <div className="HeaderWrap">
        <Link href="/">
          <Image className="Logo" src="/logo.png" alt="logo" width={200} height={60} />
        </Link>
        <nav className="Navbar">
          <ul className="Menubar">
            <li>
              <span>콘텐츠</span>
            </li>
            <li>
              <span>인사이터</span>
            </li>
            <li>
              <span>헤택</span>
            </li>
            <li>
              <span>상품</span>
            </li>
          </ul>
          <ul className="SearchBar">
            <li>
              <input className="SearchInput" type="text" />
              <FontAwesomeIcon className="SearchIcon" icon={faMagnifyingGlass} />
            </li>
          </ul>
          <ul className="User">
            {/* {status === 'authenticated' ? (
              <>
                <li>
                  <span>{session.user.name}님</span>
                </li>
                <li>
                  <span onClick={() => signOut()}>로그아웃</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span onClick={() => signIn()}>로그인</span>
                </li>
                <li>
                  <Link href="/signup">
                    <span>회원가입</span>
                  </Link>
                </li>
              </>
            )} */}
            {status === 'authenticated' ? (
              <>
                <li>
                  <span>{session.user.name}님</span>
                </li>
                <li>
                  <span>로그아웃</span>
                </li>
                <li>
                  <span className="SubscribeButton">구독</span>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span>로그인</span>
                </li>
                <li>
                  <span>회원가입</span>
                </li>
                <li>
                  <span className="SubscribeButton">구독</span>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </HeaderStyle>
  );
};

const HeaderStyle = styled.header`
  max-width: 1240px;
  margin: 0px auto;
  .HeaderWrap {
    padding: 10px 0;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
  }
  .Navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
  }
  .Logo {
    cursor: pointer;
  }
  .Menubar {
    display: flex;
    flex-direction: row;
  }
  .Menubar li {
    margin-right: 40px;
    font-size: 16px;
    cursor: pointer;
  }
  .SearchBar {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
  .SearchInput {
    width: 350px;
  }
  .SearchIcon {
    cursor: pointer;
  }
  .User {
    display: flex;
    flex-direction: row;
  }
  .User li {
    margin-right: 40px;
    font-size: 16px;
    cursor: pointer;
  }
  .SubscribeButton:hover {
    color: red;
  }
`;
export default Navbar;
