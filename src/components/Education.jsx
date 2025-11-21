import React from 'react';
import './Education.css';

function Education() {
  return (
    <section id="education" className="section">
      <h2>🎓 학교 이력</h2>
      
      <div className="education-item">
        <h3>인하공업전문학교</h3>
        <p className="major">컴퓨터정보공학과 (전문학사)</p>
        <p className="period">2021.01 입학 ~ 2026.01 졸업 예정</p> 
        
        {/* 🚀 주요 성과와 활동을 분리 */}
        <div className="achievements">
          <h4>주요 성과 및 활동</h4>
          <ul className="achievement-list">
            {/* Strong 태그와 텍스트를 한 줄에 두어 인쇄 시 깔끔하게 block 처리 */}
            <li>
                <strong>졸업 평점:</strong> 총 평점 3.8 / 4.5
            </li>
            <li>
                <strong>자격증:</strong> 정보처리산업기사
            </li>
            {/* 추가 항목 보강 */}
          </ul>
        </div>

        {/* 🚀 전공 지식을 별도 섹션으로 분리하여 개발 역량 기반 강조 */}
        <div className="coursework">
          <h4>핵심 이수 교과목 (Backend/DB 중심)</h4>
          <ul className="achievement-list">
            <li>
                <strong>데이터베이스:</strong> MySQL 환경에서 인덱스, 트랜잭션, 조인 최적화를 학습하고 적용했습니다.
            </li>
            <li>
                <strong>객체지향 프로그래밍:</strong> Java를 활용하여 OOP 원칙에 기반한 클래스 설계 및 구현 능력을 배양했습니다.
            </li>
            <li>
                <strong>서버 프로그래밍:</strong> Spring MVC 패턴 이해 및 RESTful API 설계 기본 원칙을 학습했습니다.
            </li>
          </ul>
        </div>
      </div>
      
    </section>
  );
}

export default Education;