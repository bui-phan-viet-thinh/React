import'../css/myhear.css'

function Header(){
    return(
      
        <>
        <header>
        <nav>
          <div className="logo">
            <img src='logo.jpg' alt="Ảnh sản phẩm" />  
          </div>
          <ul>
            <li><a href="/">Trang chủ</a></li>
            <li><a href="/about">Về chúng tôi</a></li>
            <li><a href="/products">Sản phẩm</a></li>
            <li><a href="/news">Tin tức</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Tìm kiếm..." />
          <button type="submit">Tìm kiếm</button>
        </div>
        <div className="user-actions">
          <a href="/login">Đăng nhập</a>
          <a href="/register">Đăng ký</a>
        </div>
      </header>
        </>
    );
}
export default Header;