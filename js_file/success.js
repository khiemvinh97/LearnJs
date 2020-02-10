$(document).ready(() => {
  $(checkConfirm);

})
function checkConfirm(){
  if(JSON.parse(localStorage.getItem('confirm'))===null){
    alert("Bạn cần phải xác nhận thông tin trước");
    window.location="file:///E:/edu/P1_vinhkhiem/confirm.html"
  }  
}

function Success(){
  alert("Bạn đã đặt hàng thành công!")
  localStorage.clear();
}
function delay (URL) {
  setTimeout( function() { window.location = URL }, 300 );

}