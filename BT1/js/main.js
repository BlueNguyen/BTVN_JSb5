function getResult(){
    let base= +document.getElementById("diemChuan").value;
    let area= document.getElementById("khuVuc").value;
    let sub= document.getElementById("doiTuong").value;
    let num1= +document.getElementById("mon1").value;
    let num2= +document.getElementById("mon2").value;
    let num3= +document.getElementById("mon3").value;

    let num= num1+num2+num3;
    let areaPoint=0;
    let subPoint=0;

    if (area=="A"){
        areaPoint=2;
    } else if (area=="B"){
        areaPoint=1;
    } else if(are=="C"){
        areaPoint=0.5;
    } else {
        areaPoint=0;
    };

    if (sub=="1"){
        subPoint=2.5;
    } else if (sub=="2"){
        subPoint=1.5;
    } else if (sub=="3"){
        subPoint=1;
    } else {
        subPoint=0;
    };

    let sum= num + areaPoint +subPoint;

    if (sum>base && num1>0 && num2>0 && num3>0){
        document.getElementById("result").innerHTML="Bạn đã đậu. Tổng điểm là: "+ sum;
    } else if (sum < base) {
        document.getElementById("result").innerHTML="Bạn đã rớt. Tổng điểm là: "+ sum;
    } else if (num1<=0 | num2 <=0 | num3<=0){
        document.getElementById("result").innerHTML="Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0"
    }
}