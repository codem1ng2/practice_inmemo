import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TeamProfilePage from './pages/TeamProfilePage';
import TeamEditPage from './pages/TeamEditPage';
import TeamJoinRequestsPage from './pages/TeamJoinRequestsPage';
import JoinHistory from './components/TeamJoinRequests/JoinHistory';
import DashboardPage from './pages/DashboardPage';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 팀 프로필 페이지 */}
        <Route path="/team/profile/:teamName" element={<TeamProfilePage />} />
        {/* 팀 프로필 수정 페이지(팀장만 접근 가능) */}
        <Route path="/team/:teamName/edit/" element={<TeamEditPage />} />
        {/* 가입 신청한 멤버 관리 페이지(팀장만 접근 가능) */}
        <Route path="/team/:teamName/member" element={<TeamJoinRequestsPage />} />
        {/* 가입 신청 내역 페이지 */}
        <Route path="/team/wait" element={<JoinHistory />} />
        {/* 헤더 방패 누를 시 나오는 페이지 */}
        <Route path="/team/dashboard/" element={<DashboardPage />} />
        {/* 메인 페이지(임시) */}
        <Route path="/main" element={<div>메인 페이지</div>} />
      </Routes>
    </Router>
  );
};

export default App;
