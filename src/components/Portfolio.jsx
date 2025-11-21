import React from 'react';
import './Portfolio.css';

const projects = [
  {
    title: '혼밥 프로젝트 (지도 기반 식당 리뷰 서비스) ',
    period: '2025.03 - 2025.06',
    
    // 💡 프로젝트 개요를 기술적인 관점에서 명확하게 수정
    summary: '카카오 지도 API를 활용하여 대학가 주변 식당/주점/카페 정보를 제공하고, 사용자 리뷰 및 평점 시스템을 통해 실시간 정보를 공유하는 **지도 기반 백엔드 웹 애플리케이션**입니다.',
    
    techStack: 'Java 17, Spring Boot 3.0, Spring Security, JPA, MySQL, Thymeleaf',
    
    // 🚀 핵심 기여 및 상세 내용 반영 (README 기반)
    achievements: [
        '[보안 및 인증] Spring Security를 활용하여 소셜 로그인 및 세션 기반 인증/인가 시스템 구축',
        '[API 및 데이터] 카카오 지도 API와 네이버 크롤링 데이터를 통합하여, DB에 최종 반영하는 데이터 파이프라인 구현 및 관리',
        '[영속성 관리] Spring Data JPA를 사용하여 도메인 객체를 설계하고, 트랜잭션 관리에 중점을 두어 데이터 무결성 확보',
        '[웹 연동] RESTful API를 설계하고, Thymeleaf를 통해 서버 사이드 렌더링(SSR) 방식으로 프론트엔드와 안정적으로 연동',
    ],
    
    links: [
      { name: 'GitHub Repository', url: 'https://github.com/zinuzanu/honbap-project' },
    ],
  },
  // 프로젝트가 더 있다면 여기에 추가
];

function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <h2>💻 프로젝트 포트폴리오</h2>
      
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item education-item"> {/* education-item 클래스를 추가하여 박스 스타일 공유 */}
            <h3>{project.title}</h3>
            <p className="period">개발 기간: {project.period}</p>
            
            <p className="summary-text">
                <strong>프로젝트 개요:</strong> {project.summary}
            </p>
            
            <div className="achievements">
                {/* 💡 제목을 '주요 기여 사항'으로 변경하여 인쇄 시 명확성 확보 */}
                <h4>주요 기여 사항</h4> 
                <ul className="achievement-list">
                    {project.achievements.map((achieve, aIndex) => (
                        <li key={aIndex}>{achieve}</li>
                    ))}
                </ul>
            </div>
            
            <div className="tech-stack">
              <strong>주요 기술 스택:</strong> <span className="tech-list">{project.techStack}</span>
            </div>
            
            <div className="project-links">
              {project.links.map((link, linkIndex) => (
                <a 
                  key={linkIndex} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link-button" // 인쇄 시 index.css에서 숨김 처리됨
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;