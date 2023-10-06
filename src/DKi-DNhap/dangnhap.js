import'../css/dangnhap.css'
function DangNhap(){
    return(
    <>
    <br/>
    <div class="container">
    <h2>Đăng Nhập</h2>
    <form action="process_login.php" method="post">
    <div class="form-group">
        <label for="username">Tên Đăng Nhập:</label>
        <input type="text" id="username" name="username" required/>
    </div>
    <div class="form-group">
        <label for="password">Mật Khẩu:</label>
        <input type="password" id="password" name="password" required/>
    </div>
    <div class="form-group">
        <input type="submit" value="Đăng Nhập"/>
    </div>
    </form>
    </div>
    </>);

}
export default DangNhap;