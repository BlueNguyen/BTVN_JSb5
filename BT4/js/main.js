function toggleConnect() {
  let cusType = document.getElementById("cusType").value;
  let connect = +document.getElementById("connect").value;

  if (cusType === "nhaDan") {
    connect.disabled = true;
    connect.value = " "; // Reset giá trị nếu bị disabled
  } else {
    connect.disabled = false;
  }
}

toggleConnect();

function getBill() {
  let cusType = document.getElementById("cusType").value;
  let cusNum = document.getElementById("cusNum").value;
  let number = +document.getElementById("number").value;
  let connect = +document.getElementById("connect").value; 

  let processingFee, basicServiceFee, premiumChannelFee, totalBill;

  if (cusType === "nhaDan") {
    processingFee = 4.5;
    basicServiceFee = 20.5;
    premiumChannelFee = 7.5 * number;
  } else {
    processingFee = 15;
    basicServiceFee = 75 + (connect > 10 ? (connect - 10) * 5 : 0);
    premiumChannelFee = 50 * number;
  }

  totalBill = processingFee + basicServiceFee + premiumChannelFee;

  // Hiển thị kết quả
  let result = (document.getElementById("result").innerHTML = `
            <p>Phí xử lý hóa đơn: $${processingFee.toFixed(2)}</p>
            <p>Phí dịch vụ cơ bản: $${basicServiceFee.toFixed(2)}</p>
            <p>Thuê kênh cao cấp: $${(premiumChannelFee.toFixed(2))}</p>
            <h3>Mã khách hàng: ${cusNum}; Tổng hóa đơn: $${totalBill.toFixed(2)}</h3>
        `);
}
