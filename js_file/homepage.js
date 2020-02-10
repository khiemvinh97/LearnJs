$(document).ready(() => {
  $('.menu__ul.-hide').css("display","none")
  $(".nav__menu").click(()=>{
    if($('.menu__ul.-hide').css('display') === 'none'){
      $(".menu__ul.-hide").show();
    }
    else {
      $(".menu__ul.-hide").hide();
    }
  });
  $(".basket__count").append(countItem);
  $(processCheck);
})

function countItem() {

  if (JSON.parse(localStorage.getItem('listProduct')) !== null) {
    return (
      `<p>${JSON.parse(localStorage.getItem('listProduct')).length}</p>`
    )
  }
  else {
    localStorage.clear();
    return (
      `<p>0</p>`
    )
  }
}

function processCheck() {

  if (JSON.parse(localStorage.getItem('listProduct'))!==null){
    $(".Process__bar ul li:nth-child(1)").addClass("-active");
    $(".Process__bar ul li:nth-child(1) i").removeClass();
    $(".Process__bar ul li:nth-child(1) i").addClass("fas fa-sync")
    $(".Process__bar ul li:nth-child(1) a").attr("href","./cart.html")
  }
  if (JSON.parse(localStorage.getItem('cartSum'))!==null){
    $(".Process__bar ul li:nth-child(1)").addClass("-success");
    $(".Process__bar ul li:nth-child(1) i").removeClass();
    $(".Process__bar ul li:nth-child(1) i").addClass("fas fa-check")
    $(".Process__bar ul li:nth-child(2)").addClass("-active");
    $(".Process__bar ul li:nth-child(2) i").removeClass();
    $(".Process__bar ul li:nth-child(2) i").addClass("fas fa-sync")
    $(".Process__bar ul li:nth-child(2) a").attr("href","./info.html")

  }
  if (JSON.parse(localStorage.getItem('infoUser'))!==null){
    $(".Process__bar ul li:nth-child(2)").addClass("-success");
    $(".Process__bar ul li:nth-child(2) i").removeClass();
    $(".Process__bar ul li:nth-child(2) i").addClass("fas fa-check")
    $(".Process__bar ul li:nth-child(3)").addClass("-active");
    $(".Process__bar ul li:nth-child(3) i").removeClass();
    $(".Process__bar ul li:nth-child(3) i").addClass("fas fa-sync")
    $(".Process__bar ul li:nth-child(3) a").attr("href","./confirm.html")

  }
  if (JSON.parse(localStorage.getItem('confirm'))!==null){
    $(".Process__bar ul li:nth-child(3)").addClass("-success");
    $(".Process__bar ul li:nth-child(3) i").removeClass();
    $(".Process__bar ul li:nth-child(3) i").addClass("fas fa-check")
    $(".Process__bar ul li:nth-child(4)").addClass("-active");
    $(".Process__bar ul li:nth-child(4) i").removeClass();
    $(".Process__bar ul li:nth-child(4) i").addClass("fas fa-sync")
    $(".Process__bar ul li:nth-child(4) a").attr("href","./succes.html")

  }
}