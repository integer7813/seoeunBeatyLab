import './About.css';


function About() {
    return (
        <section id="about" className="about-section">
          <div className="about-container">
            <h2 className="about-title">서은뷰티랩 소개</h2>
    
            <p className="about-text">
              서은뷰티랩은 2024년 시작된 프리미엄 네일아트샵으로,<br />
              고객 한 분 한 분에게 섬세한 감성과 정성을 담은 서비스를 제공합니다.<br />
              트렌디한 감각과 위생적인 환경, 숙련된 테크닉으로<br />
              차별화된 네일 경험을 선사합니다.
            </p>
    
            <div className="about-history">
              <h3>연혁</h3>
              <ul>
                <li><strong>2024.04</strong> - 서은뷰티랩 오픈</li>
                <li><strong>2024.12</strong> - 회원고객 100명 돌파</li>
                <li><strong>2025.04</strong> - 서은뷰티랩 오픈 1주년</li>
              </ul>
            </div>
          </div>
        </section>
      );
    }
  
  export default About;
  