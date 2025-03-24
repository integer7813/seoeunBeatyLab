import './SNS.css';

function SNS() {
  return (
    <section id="sns" className="sns-section">
      <div className="sns-container">
        <h2 className="sns-title">예약 / SNS</h2>
        <p className="sns-text">서은뷰티랩의 다양한 소식을 만나보세요 😊</p>

        <div className="sns-buttons">
          <a
            href="https://www.instagram.com/sebl_nail/"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-btn insta"
          >
            📸 인스타그램
          </a>

          <a
            href="https://map.naver.com/p/entry/place/1931383839?lng=127.0725472&lat=37.7497629&placePath=%2Fbooking&searchType=place&c=15.00,0,0,0,dh"
            target="_blank"
            rel="noopener noreferrer"
            className="sns-btn naver"
          >
            📝 네이버 예약
          </a>

          <a
            href="tel:01043314962"
            className="sns-btn call"
          >
            📞 전화 예약: 010-4331-4962
          </a>
        </div>
      </div>
    </section>
  );
}

export default SNS;
