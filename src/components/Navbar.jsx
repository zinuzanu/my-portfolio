import React from 'react';
import './Navbar.css';

function Navbar() {
  // 네비게이션 항목과 해당 섹션의 ID를 정의
  const navItems = [
    { name: '자기소개', id: 'about' },
    { name: '학교 이력', id: 'education' },
    { name: '포트폴리오', id: 'portfolio' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* 포트폴리오 주인 이름 또는 로고 */}
        <div className="logo">My Portfolio</div>
        
        {/* 네비게이션 메뉴 (상단 우측 배치) */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              {/* href 속성을 사용하여 섹션 ID로 이동 (Smooth Scroll은 CSS에서 처리) */}
              <a href={`#${item.id}`}>{item.name}</a> 
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;