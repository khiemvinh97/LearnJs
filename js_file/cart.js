$(document).ready(() => {
  $(getItemCart);
})

const formatter = new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'VND',
  minimumFractionDigits: 0
})
let listCart = JSON.parse(localStorage.getItem('listProduct'));
let sumPrice=0;
function getItemCart(){
      let i=1;
      if(listCart!==null)
      {
        listCart.forEach((item,index )=> {
          let totalPrice= parseFloat(item.price) * parseFloat(item.count)
          sumPrice +=totalPrice;
            $(".cart__table table").append(`
            <tr>
              <td>${index+1}</td>
              <td>
                <img class="img" src="./img/product/${item.img}"/>
              </td>
              <td>${item.name}</td>
              <td>${formatter.format(item.price)}</td>
              <td> 
              <input type="number" placeholder=${item.count} value="${item.count}" onChange="changeItem('${item.id}')" name="input__${item.id}">
              </td>
              <td>
              ${formatter.format(item.price*item.count)}
              </td>
              <td>
                <a href="#" onClick=deleteProduct('${index}')>
                  <i class ="fas fa-times"/>
                </a>
              </td>
            </tr>
            `)
        });
      }

      $(".sum__table").append(`
      <table>
        <tr>
        <th>TỔNG TIỀN:</th>
        <td>${formatter.format(sumPrice)} </td>
        </tr>
        <th>THUẾ (VAT):</th>
        <td>${formatter.format(sumPrice/10)} </td>
        </tr>
        <th>THANH TOÁN:</th>
        <td class="-red">${formatter.format(sumPrice/10+sumPrice)} </td>
        </tr>
      </table>
      `)
}

function deleteProduct(index){
  if(window.confirm("Bạn có chắc chắn xóa không ?")){
    listCart.splice(index,1);
    if(listCart.length===0)
    {
      localStorage.removeItem('listProduct')
      localStorage.removeItem('cartSum')
    }
    else {
      localStorage.setItem('listProduct', JSON.stringify(listCart));
      let cartSum =new Object();
      let itemSum =0;
      cartSum.sumPrice=sumPrice+sumPrice/10;
      listCart.forEach((item,index)=>{
        itemSum+=parseInt(item.count);
      })
      cartSum.sumItem=itemSum;
    }
    window.location.reload();
  }
}

function payCart(){
  if(sumPrice===0) {
    alert("Giõ hàng của bạn đang rỗng!")
    window.location="file:///E:/edu/P1_vinhkhiem/index.html";
  }
  else {
    let cartSum =new Object();
    let itemSum =0;
    cartSum.sumPrice=sumPrice+sumPrice/10;
    listCart.forEach((item,index)=>{
      itemSum+=parseInt(item.count);
    })
    cartSum.sumItem=itemSum;
    localStorage.setItem('cartSum',JSON.stringify(cartSum))
    window.location="file:///E:/edu/P1_vinhkhiem/info.html"
  }

}


function changeItem(item){
  console.log(item);
  cartChange=JSON.parse(localStorage.getItem('listProduct'));
  cartChange.forEach((cartItem,index)=>{
    if(cartItem.id===item){
      cartItem.count=parseInt($(`input[name='input__${cartItem.id}']`).val());
    }
  })
  localStorage.setItem('listProduct',JSON.stringify(cartChange));
  window.location.reload()
}