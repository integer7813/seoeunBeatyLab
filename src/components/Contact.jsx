import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">오시는 길 / 연락처</h2>

        <div className="contact-info">
          <p><strong>📍 주소:</strong> 경기 의정부시 장곡로628번길 22 삼성플러스 제1층 109호</p>
          <p><strong>🕒 영업시간:</strong> 매일 10:00 ~ 21:00 (화요일 휴무입니다!)</p>
          <p><strong>🚇 대중교통:</strong> 의정부경전철 <strong>경기도북부청사역</strong>에서 도보 5분 거리</p>
          <p>
            <strong>📞 전화:</strong>{' '}
            <a href="tel:01043314962" className="call-link">
              010-4331-4962
            </a><br />
            <em>(시술 중에는 통화가 어려울 수 있습니다. 문자 부탁드려요!)</em>
          </p>
        </div>

        <div className="map-wrapper">
            <a 
                href="https://map.naver.com/v5/search/서은뷰티랩" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="naver-map-button"
            >
                📍 네이버 지도로 보기
            </a>
            </div>
                
      </div>
    </section>
  );
}

export default Contact;
