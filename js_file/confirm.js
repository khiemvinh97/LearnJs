$(document).ready(() => {
  $(checkInfo);
  $(confirmInfo);
})

function checkInfo(){
  if(JSON.parse(localStorage.getItem('infoUser'))===null){
    alert("Bạn cần nhập đầy đủ thông tin trước");
    window.location="file:///E:/edu/P1_vinhkhiem/info.html"
  }
}

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})
let listCart = JSON.parse(localStorage.getItem('listProduct'));
let sumPrice=0;
function confirmInfo(){
  let infoUser = JSON.parse(localStorage.getItem('infoUser'));
  $(".confirm__text").append(`
  <h4>Chào ${infoUser.name},<h5>
  <h5>Bạn hãy kiểm tra lại đơn hàng của mình</h5>
  <table>
  <tr>
  <th class="count">STT</th>
  <th class="pro">SẢN PHẨM</th>
  <th class="info">THÔNG TIN</th>
  <th class="privce">ĐƠN GIÁ</th>
  <th class="num">SỐ LƯỢNG</th>
  <th class="sum">THÀNH TIỀN</th>  
  <tr>
  </table>
  `)
  listCart.forEach((item,index )=> {
    let totalPrice= parseFloat(item.price) * parseFloat(item.count)
    sumPrice +=totalPrice;
      $(".confirm__text table").append(`
      <tr>
        <td>${index+1}</td>
        <td>
          <img class="img" src="./img/product/${item.img}"/>
        </td>
        <td>${item.name}</td>
        <td>${formatter.format(item.price)}</td>
        <td> 
        ${item.count}
        </td>
        <td>
        ${formatter.format(item.price*item.count)}
        </td>
      </tr>
      `)
  });
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 300 );
}

function PayCart()
{
  localStorage.setItem('confirm', true);
}