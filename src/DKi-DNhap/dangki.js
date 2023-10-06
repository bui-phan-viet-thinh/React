import '../css/dangki.css'
function DangKi(){
    return(
        <>
        <br/>
         <div class="container">
        <h2>Đăng Ký Thành Viên</h2>
        <form action="process_registration.php" method="post">
            <div class="form-group">
                <label for="fullname">Họ Tên:</label>
                <input type="text" id="fullname" name="fullname" required/>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="form-group">
                <label for="username">Tên Đăng Nhập:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Mật Khẩu:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <label for="confirm_password">Xác Nhận Mật Khẩu:</label>
                <input type="password" id="confirm_password" name="confirm_password" required/>
            </div>
            <div class="form-group">
                <input type="submit" value="Đăng Ký"/>
            </div>
        </form>
    </div>
        
  
     </>
    );
    
}
export default DangKi;