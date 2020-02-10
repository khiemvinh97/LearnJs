$(document).ready(() => {
  $(getAllpost__hot);
})

function product_info_hot(item){
  return (`
  <div class="product__item">
      <div class="shadow__item">
        <div class="item__img">
          <img class="img" src="./img/product/${item.img}" />
        </div>
        <div class="item__info">
        <h4 class="-price">${formatter.format(item.price)}</h4>
        <h4>${item.name}</h4>
        <p>
          <i class ="fa fa-star"/>
          <i class ="fa fa-star"/>
          <i class ="fa fa-star"/>
          <i class ="fa fa-star"/>
          <i class ="far fa-star"/>
          </br>
          (12 Đánh giá)
        </p>
        </div>
        <div class="item__button">
        <a class="-left -add-cart" type="button" href="javascript:delay('#')" onClick="saveProduct__hot('${item.id}')">MUA NGAY</a>
        <a class="-right " href="javascript:delay('detail.html')" onClick="productDetail__hot('${item.id}')">XEM CHI TIẾT</a>
       </div>
      </div>
    </div>
  `)
}

function getAllpost__hot() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/hot',
    success: (items) => {
      items.forEach((item,index) => {
        if(index===1 || index===0){
          $(".hot__small.-left").append(product_info_hot(item))
        }
        else if(index===2){
          $(".hot__large").append(product_info_hot(item))
        }
        else {
          $(".hot__small.-right").append(product_info_hot(item))
        }
      });
    }
  }
  )
}

function saveProduct__hot(itemId) {
  let i = 1;
  if (JSON.parse(localStorage.getItem('listProduct')) === null) {
    listCart = new Array();
  }
  else {
    listCart = JSON.parse(localStorage.getItem('listProduct'));
  }
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/hot',
    success: (items) => {
      items.forEach(item => {
        if (item.id == itemId) {
          if (listCart.length === 0) {
            listCart.push(item);
            i = 2;
            localStorage.setItem('listProduct', JSON.stringify(listCart));
            alert("Đã thêm vào giõ hàng")
          }
          else {
            listCart.forEach(itemCart => {
              if (item.id === itemCart.id) {
                countUp(item);
                i = 2;
              }
            })
          }
          if (i === 1) {
            listCart.push(item);
            localStorage.setItem('listProduct', JSON.stringify(listCart));
            alert("Đã thêm vào giõ hàng")
          }
        }
      })
      window.location.reload();
    }
  })
}

function productDetail__hot(itemId){
$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/hot',
  success: (items) => {
    items.forEach((item,index)=>{
      if(item.id == itemId){
        item.count=0;
        localStorage.setItem('itemDetail',JSON.stringify(item));
      }
    })
  }
})
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 300 );
}