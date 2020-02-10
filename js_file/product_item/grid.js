$(document).ready(() => {
  $(getAllpost__grid);
  localStorage.removeItem('itemDetail');
})

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})
let listCart;

function getAllpost__grid() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/grid',
    success: (items) => {
      items.forEach(item => {
        $(".right__item .list__product").append(
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
              <a class="-left -add-cart" href="javascript:delay('#')" onClick="saveProduct__grid('${item.id}')">MUA NGAY</a>
              <a class="-right " href="javascript:delay('detail.html')" onClick="productDetail__grid('${item.id}')">XEM CHI TIẾT</a>
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

function saveProduct__grid(itemId) {
  Boolean =true;
  if (JSON.parse(localStorage.getItem('listProduct')) === null) {
    listCart = new Array();
  }
  else {
    listCart = JSON.parse(localStorage.getItem('listProduct'));
  }
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/grid',
    success: (items) => {
      for (let x in items)
        {
          let item=items[x]
        if (item.id == itemId) {
          if (listCart.length === 0) {
            listCart.push(item);
            Boolean=false;
            localStorage.setItem('listProduct', JSON.stringify(listCart));
            alert("Đã thêm vào giõ hàng");
            break;
          }
          else {  
            listCart.forEach(itemCart => {
              if (item.id === itemCart.id) {
                countUp(item);
                Boolean=false;
              }
            }) 
            if (Boolean) {
              listCart.push(item);
              localStorage.setItem('listProduct', JSON.stringify(listCart));
              alert("Đã thêm vào giõ hàng");
          }
            break;
          }
        }
      }
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

function productDetail__grid(itemId) {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/grid',
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