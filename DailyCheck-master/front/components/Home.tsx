import dynamic from 'next/dynamic';
import TopicNews from './home/TopicNews';
import Topics from './home/Topics';
import Market from './home/Market';
import Brief from './home/Brief';
import Consensus from './home/Consensus';
// const StartUp = dynamic(() => import('./home/StartUp'));
// import AirPollution from './home/AirPollution';
import Main from './home/Main';
import StartUp from './home/StartUp';
const AirPollution = dynamic(() => import('./home/AirPollution'));

export default function Home() {
  return (
    <div>
      <Main />
      <StartUp />
      {/* <Topics /> */}
      {/* <Market /> */}
      {/* <Consensus /> */}
      {/* <Brief /> */}
      {/* <TopicNews /> */}
      <AirPollution />
    </div>
  );
}
