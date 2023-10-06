import '../css/sanpham.css'
function SanPham(props){
    return(
        <>
        <div class="product">
        <img src={props.data.hinh_anh} alt="Ảnh sản phẩm"/>
        <h2 class="props" >{props.data.ten}</h2>
        <p class="product-price">{props.data.gia}</p>
        <button class="buy-button">Chọn Mua</button>
        </div>
        </>
    );
}
export default SanPham;


