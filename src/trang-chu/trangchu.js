import Header from "./my_header";
import Banner from "./my_banner";
import Footer from "./my_footer";
import LoaiSanPham from "../component/loaisanpham";


function TrangChu(){
    const dsLoaiSanPham=[
        {
          'ten': 'Chậu Lavaobo ',
          'ds_san_pham':[
            {
              'hinh_anh':'ảnh sp/NV-403-16 (1).jpg',
              'ten': 'Chậu lavabo vuông Navier NV-403',
              'gia': '700.000'
            },
          {
             'hinh_anh': 'ảnh sp/NV-353.jpg',
              'ten': 'Lavabo Vuông Viền Đen Navier NV-353',
              'gia': '1.2000.000'
      
          }
        ]
        },
        {
          'ten': 'Sen Cây Tắm ',
          'ds_san_pham':[
            {
              'hinh_anh': 'ảnh sp/nv-824aâ.jpg',
              'ten': 'Sen Cây Tắm  Đồng Thau Mạ Crome Navier NV-824',
              'gia': '1.800.000'
            },
          {
             'hinh_anh': 'ảnh sp/9355.jpg',
              'ten': 'Sen Tắm Đứng Đồng Thau Sơn Tĩnh Điện Navier NV-9355XA',
              'gia': '2.2000.000'
      
          },
        ]
      }
      ];
      const listLoaiSanPhams=dsLoaiSanPham.map(function(item){
        return(
          <LoaiSanPham data={item}/>
        );
      })
    return(
        
        <div>
            <Header/>
            <Banner/>
            {listLoaiSanPhams};
            <Footer/>
        </div>
        
    );
}
export default TrangChu;
