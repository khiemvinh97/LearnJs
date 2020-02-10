$(document).ready(() => {
  $(getDetail);
})

let item = JSON.parse(localStorage.getItem('itemDetail'));
let listCart;

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})

function getDetail() {
  console.log(item)
  $(".right__item .product__detail").append(
    `
    <div class ="product__detail">
    <div class="product__detail__img">
      <img class="img" src="./img/product/${item.img}" style="width:360px;height:360px;border:solid 0.5px #e1e1e1;padding:1px"/>
      <div class="product__detail__bonus">
        <img class="img" src="./img/product/detail2.jpg">
        <img class="img" src="./img/product/detail3.jpg">
        <img class="img" src="./img/product/detail4.jpg">
        <img class="img" src="./img/product/detail5.jpg">
        <img class="img" src="./img/product/detail6.jpg">
      </div>
    </div>
    <div class ="product__detail__info">
      <h3>${item.name}</h3>
      <p  class="star">
        <i class ="fa fa-star"/>
        <i class ="fa fa-star"/>
        <i class ="fa fa-star"/>
        <i class ="fa fa-star"/>
        <i class ="far fa-star"/>
      (12 Đánh giá)
      <span></span>
      <a href="#">Gửi bình luận của bạn</a>  
      </p>
      <h4>GNY :${formatter.format(item.price)}</h4>
      <h5>Thông tin sản phẩm :</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercition ullamco laboris nisi ut aliquip ex ea commodo consequat...</p>
      <div class="info__dropdown">
        <div class="dropdown__item">
          <h5>Size:</h5>
          <input type="text" placeholder="--Chọn size--">
          <i class="fa fa-caret-down">
          </i>
        </div>
        <div class="dropdown__item">
          <h5>Màu sắc:</h5>
          <input type="text" placeholder="--Chọn màu--">
          <i class="fa fa-caret-down"></i>
        </div>
      </div>
      <div class="info__count">
        <div class="count__input">
          <input type="number" value="1" name="number__count"  min="1">
          <div class="info__count__carret"></div></div><div class="count__buy"> 
            <a href="#" onClick=addCart()>MUA NGAY </a>
        </div>
      </div>
    </div>
    </div>
    `
  )
}

function addCart(){
  let i =1;
  if (JSON.parse(localStorage.getItem('listProduct')) === null) {
    listCart = new Array();
  }
  else {
    listCart = JSON.parse(localStorage.getItem('listProduct'));
  }
  let countProduct = $("input[name='number__count']").val();
  listCart.forEach((cart,index)=>{
    if(cart.id===item.id){
      cart.count+=parseInt(countProduct);
      i=2;
    }
  })
  if(i===1){
    item.count=parseInt(countProduct);
    listCart.push(item);
  }
  localStorage.setItem('listProduct',JSON.stringify(listCart))
  alert("Đã đặt hàng")
  window.location.reload();
}