import { useState } from 'react';
import './ImageModal.css';

function ImageModal({ imageUrl, onClose }) {
  const [zoomed, setZoomed] = useState(false);

  const toggleZoom = () => setZoomed((prev) => !prev);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className={`modal-content ${zoomed ? 'zoomed' : ''}`}
        onClick={(e) => {
          e.stopPropagation(); // 바깥 클릭 방지
          toggleZoom();
        }}
      >
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={imageUrl} alt="확대 이미지" />
      </div>
    </div>
  );
}

export default ImageModal;
