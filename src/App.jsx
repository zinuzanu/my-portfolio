import React from 'react';
import Navbar from './components/Navbar'; 
import About from './components/About';
import Education from './components/Education';
import Portfolio from './components/Portfolio';

// 2. 메인 레이아웃 스타일을 import 합니다.
import './App.css'; 
// 💡 Navbar 스타일 대신 전역 스타일이 App.css나 index.css에 있다고 가정합니다.

function App() {
  
  // 💡 인쇄 기능을 수행하는 함수
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* 1. 고정 네비게이션 바 */}
      <Navbar /> 
      
      {/* 2. 모든 섹션 콘텐츠를 담는 메인 컨테이너 */}
      <main className="main-content">
        <About />
        <Education />
        <Portfolio />
      </main>

      {/* ------------------------------------------- */}
      {/* 🚀 인쇄 버튼 추가 (웹에서만 보이고 인쇄 시 숨김) */}
      <button 
        className="print-button no-print" 
        onClick={handlePrint}
        title="포트폴리오 인쇄 또는 PDF 저장"
      >
        인쇄하기
      </button>
      {/* ------------------------------------------- */}
    </>
  );
}

export default App;