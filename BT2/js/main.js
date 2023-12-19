function tinhTien(){
    let name= document.getElementById("name").value;
    let number= +document.getElementById("number").value;
    let pay= 0;
    const rate1= 500;
    const rate2= 650;
    const rate3= 850;
    const rate4= 1100;
    const rate5= 1300;

    if (number<=50){
        pay= rate1*number;
    } else if(number <=100){
        pay= rate2* number;
    } else if(number<=200){
        pay= rate3* number;
    } else if( number<= 350){
        pay= rate4* number;
    } else {
        pay= rate5* number;
    }

    pay=pay.toLocaleString("en-US");
    document.getElementById("result").innerHTML="Họ tên: "+ name+ "; Tiền điện: "+ pay + "VNĐ";
}