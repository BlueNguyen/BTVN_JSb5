function tinhTien(){
    let name= document.getElementById("name").value;
    let income= +document.getElementById("thuNhap").value;
    let num= +document.getElementById("nguoiPhuThuoc").value;

    let taxRate= 0;
    const unit= 1000000;
    const rate1= 4;
    const rate2= 1.6;

    let tax=income-rate1*unit-num*rate2*unit;

    if (tax<=60*unit){
        taxRate=5;
    } else if(tax<=120*unit){
        taxRate=10;
    } else if(tax<=210*unit){
        taxRate=15;
    } else if(tax<=384*unit){
        taxRate=20;
    } else if(tax<=624*unit){
        taxRate=25;
    } else if(tax<=960*unit){
        taxRate=30;
    } else{
        taxRate=35;
    }

    document.getElementById("result").innerHTML="Họ tên: "+ name+"; Tiền thuế thu nhập cá nhân: "+ (tax/100*taxRate).toLocaleString("en-US")+" VNĐ";

}