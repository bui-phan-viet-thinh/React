import SanPham from "../component/sanpham";

function LoaiSanPham(props){
    const listLoaiSanPhams=props.data.ds_san_pham.map(function(item){
        return(
            <SanPham data={item}/>
        );
    });
    return(
        <>
        <h1 className="ten-loai-san-pham">{props.data.ten} </h1>
        <div>{listLoaiSanPhams}</div>
        </>
    )
}
export default LoaiSanPham;