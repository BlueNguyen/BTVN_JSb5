function toggleConnect() {
  let cusType = document.getElementById("cusType").value;
  let connectNumber = document.getElementById("connectNumber");

  if (cusType === "doanhNghiep") {
    connectNumber.style.display = "block";
    connectNumber.removeAttribute("disabled");
  } else {
    connectNumber.style.display = "none";
    connectNumber.setAttribute("disabled", "disabled");
  }
}

toggleConnect();

function getBill() {
  let cusType = document.getElementById("cusType").value;
  let cusNum = document.getElementById("cusNum").value;
  let number = +document.getElementById("number").value;
  let connectNumber = +document.getElementById("connectNumber").value;

  let processingFee, basicServiceFee, premiumChannelFee, totalBill;

  if (cusType === "nhaDan") {
    processingFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelFee = 7.5 * number;
  } else if (cusType === "doanhNghiep") {
    processingFee = 15;
    basicServiceFee = 75 + (connectNumber > 10 ? (connectNumber - 10) * 5 : 0);
    premiumChannelFee = 50 * number;
  } else {
    document.getElementById("result").innerHTML =
      "Vui lòng chọn loại Khách hàng";
  }

  totalBill = processingFee + basicServiceFee + premiumChannelFee;
  // totalBill=totalBill.toLocaleString("en-US");

  // Hiển thị kết quả
  let result = (document.getElementById("result").innerHTML = `
            <p>Phí xử lý hóa đơn: $${processingFee.toFixed(2)}</p>
            <p>Phí dịch vụ cơ bản: $${basicServiceFee.toFixed(2)}</p>
            <p>Thuê kênh cao cấp: $${premiumChannelFee.toFixed(2)}</p>
            <h3>Mã khách hàng: ${cusNum}; Tổng hóa đơn: $${totalBill.toFixed(
    2
  )}</h3>
        `);
}
