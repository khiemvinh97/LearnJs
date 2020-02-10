$(document).ready(() => {
  $(getAllpost__lastest);
})

function getAllpost__lastest() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/lastest',
    success: (items) => {
      items.forEach((item,index) => {
        $(".lastest__product").append(`
        <div class="product__last">
          <div class="shadow__item">
            <div class="img__last">
              <img class="img" src="./img/product/${item.img}">
            </div>
            <div class="text__last">
              <h4>${item.name}</h4>
              <p>
                <i class="fa fa-star">
                </i><i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="far fa-star"></i>
                (12 Đánh giá)
              </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore commo...</p>
                <h4 class="-price">${formatter.format(item.price)}</h4>
              <div class="item__button">
              <a class="-left -add-cart" type="button" href="javascript:delay('#')" onClick="saveProduct__lastest('${item.id}')">MUA NGAY</a>
              <a class="-right " href="javascript:delay('detail.html')" onClick="productDetail__lastest('${item.id}')">XEM CHI TIẾT</a>
             
              </div>
            </div>
          </div>
        </div>
        `)
      });
    }
  }
  )
}

function saveProduct__lastest(itemId) {
  let i = 1;
  if (JSON.parse(localStorage.getItem('listProduct')) === null) {
    listCart = new Array();
  }
  else {
    listCart = JSON.parse(localStorage.getItem('listProduct'));
  }
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/lastest',
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

function productDetail__lastest(itemId){
$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/lastest',
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