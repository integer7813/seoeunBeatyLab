import { useState } from 'react';
import './Services.css';
import ImageModal from './ImageModal';

function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (url) => {
    setModalImage(url);
    setModalOpen(true);
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">서비스 안내</h2>

        <div className="service-grid">
          {/* 서비스 카드 */}
          <div
            className="service-card"
            onClick={() =>
              openModal('https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250225_113%2F1740475899526C70PG_PNG%2FIMG_3122.png')
            }
          >
            <img
              src="https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20250225_113%2F1740475899526C70PG_PNG%2FIMG_3122.png"
              alt="오픈 1주년 이벤트"
            />
            <p>
              <em>오픈 1주년 기념 행사중입니다!</em><br />
              <em>행사내용은 위의 이미지를 참고해주세요!</em>
            </p>
          </div>
        </div>
      </div>

      {modalOpen && (
        <ImageModal imageUrl={modalImage} onClose={() => setModalOpen(false)} />
      )}
    </section>
  );
}

export default Services;
