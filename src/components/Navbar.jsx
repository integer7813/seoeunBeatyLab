import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">서은뷰티랩</a>
      </div>
      <ul className="nav-links">
        <li><a href="#about">소개</a></li>
        <li><a href="#greeting">원장 인사말</a></li>
        <li><a href="#services">서비스</a></li>
        <li><a href="#contact">연락처/오시는길</a></li>
        <li><a href="#sns">예약/SNS</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
