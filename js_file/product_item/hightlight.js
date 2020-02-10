$(document).ready(() => {
  $(getAllpost__hightlight);
  $(".-left.-add-cart").click(saveProduct__hightlight);
  localStorage.removeItem('itemDetail');
})


const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})
let listCart;

function getAllpost__hightlight() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/hightlight',
    success: (items) => {
      items.forEach(item => {
        $(".highlights__product .right__item .list__product").append(
          `<div class="product__item">
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
              <a class="-left -add-cart" href="javascript:delay('#')" onClick="saveProduct__hightlight('${item.id}')">MUA NGAY</a>
              <a class="-right " href="javascript:delay('detail.html')" onClick="productDetail__hightlight('${item.id}')">XEM CHI TIẾT</a>
             </div>
            </div>
          </div>
          `
        );
      });
    }
  }
  )
}

function saveProduct__hightlight(itemId) {
  let i = 1;
  if (JSON.parse(localStorage.getItem('listProduct')) === null) {
    listCart = new Array();
  }
  else {
    listCart = JSON.parse(localStorage.getItem('listProduct'));
  }
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/hightlight',
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


function countUp(item) {
  let updateCount = JSON.parse(localStorage.getItem('listProduct'));
  updateCount.forEach((itemCount, index) => {
    if (itemCount.id === item.id) {
      itemCount.count++;
    }
  })
  localStorage.setItem('listProduct', JSON.stringify(updateCount));
  alert("Đã cập nhật vào giõ hàng")
}

function productDetail__hightlight(itemId) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/hightlight',
    success: (items) => {
      items.forEach((item, index) => {
        if (item.id == itemId) {
          item.count = 0;
          localStorage.setItem('itemDetail', JSON.stringify(item));
        }
      })
    }
  })
}

function delay(URL) {
  setTimeout(function () { window.location = URL }, 300);
}