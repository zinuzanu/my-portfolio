import React from 'react';
import './About.css'; 

function About() {
  return (
    <section id="about" className="section">
      <div className="profile-photo-container">
        <img 
          src="/profile-photo.jpg" 
          alt="프로필 사진" 
          className="profile-photo" 
        />
      </div>
      
      <h1>김진우</h1>
      <h2>백엔드 개발자 (Java/Spring)</h2>
      
      {/* 🚀 교육 섹션과 동일한 스타일로 구조화된 핵심 역량 블록 */}
      
      <div className="about-item">
        <h3>핵심 역량 및 목표</h3>
        <p className="summary-text">
          Java와 Spring Framework (Spring Boot) 기반의 RESTful API 설계 및 구축 경험을 보유한 백엔드 개발자입니다. 객체 지향 설계 원칙 (OOP)과 Spring Security를 준수하며, 안정적이고 확장 가능한 서버 로직 구현에 집중합니다.
        </p>
      </div>
      
      <div className="about-item">
        <h3>데이터 수집 및 문제 해결 능력</h3>
        <ul className="achievement-list">
            <li>
                <strong>데이터 통합 경험:</strong> 카카오 지도 API와 네이버 지도 크롤링 데이터를 병합하여, API에서 얻기 어려운 상세 정보를 확보하고 DB에 최종 반영하는 데이터 파이프라인을 구축했습니다.
            </li>
            <li>
                <strong>기술적 문제 해결:</strong> 복합적인 외부 데이터 연동 과정에서 발생하는 데이터 정제 및 매칭 문제를 주도적으로 해결했습니다.
            </li>
        </ul>
      </div>
      
      <div className="about-item">
        <h3>기술 스택</h3>
        <ul className="skills-list">
          <li><strong>Backend:</strong> Java 17, Spring Boot, Spring Security, JPA, RESTful API</li>
          <li><strong>Database:</strong> MySQL, PostgreSQL</li>
          <li><strong>DevOps/Infra:</strong> Git, GitHub, Docker, AWS (EC2/RDS)</li>
          <li><strong>Others:</strong> JUnit5, Mockito, Gradle</li>
        </ul>
      </div>

      <div className="about-item">
        <h3>핵심 링크</h3>
        <ul className="link-list">
            <li>
                <a href="https://github.com/zinuzanu" target="_blank" rel="noopener noreferrer">
                    <span>GitHub Repository</span>
                    <span className="link-url">https://github.com/zinuzanu</span>
                </a>
            </li>
            <li>
                <a href="https://rust-stoplight-d56.notion.site/2025-2-25a0e296251780c186a2d67fd4b0f693?source=copy_link" target="_blank" rel="noopener noreferrer">
                    <span>기술 노트 및 회고</span>
                    <span className="link-url">Notion Blog</span>
                </a>
            </li>
            <li>
                <a href="mailto:jinugim80@gmail.com">
                    <span>연락처</span>
                    <span className="link-url">jinugim80@gmail.com</span>
                </a>
            </li>
        </ul>
      </div>
    </section>
  );
}

export default About;