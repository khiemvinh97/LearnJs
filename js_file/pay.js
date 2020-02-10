$(document).ready(() => {
  $(checkCart);
})

function checkCart(){
  if(JSON.parse(localStorage.getItem('cartSum'))===null ){
    alert("Giỏ hàng của bạn đang rỗng")
    window.location="file:///E:/edu/P1_vinhkhiem/cart.html"
  }
  if(JSON.parse(localStorage.getItem('infoUser'))!==null){
    let userInfo=JSON.parse(localStorage.getItem('infoUser'));
    $("input[name='name']").attr("value",userInfo.name)
    $("input[name='mail']").attr("value",userInfo.mail)
    $("input[name='phone']").attr("value",userInfo.phone)
    $("input[name='address']").attr("value",userInfo.address)

  }
}

function PayCart(){
  Boolean =true;
  let cartSum = JSON.parse(localStorage.getItem('cartSum'));
  if(cartSum===null) {
    alert("Giỏ hàng của bạn đang rỗng")
    window.location="file:///E:/edu/P1_vinhkhiem/cart.html"
  }
  else{
    let name = $("input[name='name']").val();
    let mail = $("input[name='mail']").val();
    let phone = $("input[name='phone']").val();
    let address = $("input[name='address']").val();
    for(let index in phone){
      let a= parseInt(phone[index])
      if(isNaN(a))
      {
        alert("SĐT chỉ có thể nhập số");
        Boolean = false;
        window.location.reload();
        break;
      }
    }
    if(Boolean){
      if(address=="" || name=="" || mail=="" || phone=="" ){
        alert("Xin hãy nhập đầy đủ thông tin")
      }
      else{
        cartSum.name=name;
        cartSum.mail=mail;
        cartSum.phone=phone;
        cartSum.address=address;
        localStorage.setItem('infoUser',JSON.stringify(cartSum))
        window.location="file:///E:/edu/P1_vinhkhiem/confirm.html"
      }
    }
  }
}

function delay (URL) {
  setTimeout( function() { window.location = URL }, 300 );
}