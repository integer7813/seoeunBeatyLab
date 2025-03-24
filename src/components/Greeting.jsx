import './Greeting.css';

function Greeting() {
  return (
    <section id="greeting" className="greeting-section">
      <div className="greeting-container">
        <h2 className="greeting-title">원장 인사말</h2>

        <p className="greeting-text">
          안녕하세요, 서은뷰티랩 원장 박서은입니다. <br />
          저희 샵을 찾아주신 모든 고객님들께 진심으로 감사드립니다. <br />
          서은뷰티랩은 단순한 네일 관리를 넘어, 고객 한 분 한 분에게<br />
          '쉼'과 '회복'의 시간을 드릴 수 있는 공간이 되고자 합니다.<br /><br />
          내 가족에게 해드린다는 마음으로, 위생과 품질, 그리고 진심을 담아<br />
          최선을 다하겠습니다. 감사합니다.
        </p>

        <div className="greeting-signature">
          <p>박서은 드림</p>
        </div>
      </div>
    </section>
  );
}

export default Greeting;
