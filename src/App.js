import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login.js";
import MyPolls from "./pages/MyPolls/MyPolls.js";
import Signup from "./pages/Signup/Signup.js";
import Forgot from "./pages/Forgot-password/Forgot.js";
import Reset from "./pages/Reset-password/Reset.js";
import Poll from "./pages/Polls/Poll/Poll.js";
import CreatePoll from "./pages/Polls/Create-poll/CreatePoll.js";
import Results from "./pages/Results/Results.js";
import NotFound from './pages/404-page/NotFound';
import VotedUsers from './pages/Voted-Users/VotedUser.js';
import Subscription from "./pages/Subscriptions/Subscription.js";
import Home from "./pages/Home/Home";
import CreatePollChain from "./pages/Polls/Create-Poll-Chain/CreatePollChain.jsx";
import PollChains from "./pages/Polls/PollChains/PollChains.js";
import PollChain from "./pages/Polls/Poll-Chain/PollChain.jsx";
import Demo from "./pages/Demo/Demo.js";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/home" />} />
      <Route path="login" element={<Login />} />
      <Route path="voted-users/:pollId" element={<VotedUsers />} />
      <Route path="poll/results/:pollId" element={<Results />} />
      <Route path="create-poll" element={<CreatePoll />} />
      <Route path="poll/:pollId" element={<Poll />} />
      {/* <Route path="signup" element={<Signup />} /> */}
      <Route path="polls" element={<MyPolls />} />
      {/* <Route path="forgot-password" element={<Forgot />} /> */}
      {/* <Route path="reset-password/:resetToken" element={<Reset />} /> */}
      <Route path='subscribe' element={<Subscription />} />
      <Route path='create-poll-chain' element={<CreatePollChain />} />
      <Route path='my-poll-chains' element={<PollChains />} />
      <Route path='poll-chain/:id' element={<PollChain />} />
      <Route path='home' element={<Home />} />
      {/* <Route path='demo' element={<Demo />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
