function calculateTotal()
{
  let unit_price={
    age: 0.02856,
    female:0.3757,
    dt:0.5738,
    fra_yes:0.359,
    fra_unknown:0.1987,
    fragender_yes:-0.5627,
    hgi:0.8508,
    liverd:0.3884,
    pad:0.3143,
    hsmoke_yes:0.2488,
    hsmoke_unknown:.1377,
    nyha:0.2605,
    rvef_severe:0.2196,
    rvef_unknown:0.01746,
    ha1c:0.1989,
    bun:0.006297,
    hg:-0.07279
    
  };
  let item_price={};
  item_price.age = ($("#qty_age").val() * unit_price.age );
  
  var gender_val = document.querySelector('.qty_female:checked').value;
  item_price.gender=(gender_val * unit_price.female);
  
  
  
  var dt_val = document.querySelector('.dt:checked').value;
  item_price.dt=(dt_val * unit_price.dt);
  
  var fra_val = document.querySelector('.fra:checked').value;
  if(fra_val==1){
    item_price.fra=(fra_val * unit_price.fra_yes);
  } else if(fra_val==2){
    item_price.fra=((fra_val-1) * unit_price.fra_unknown);
  } else {
    item_price.fra=0;
  }

  if(fra_val==1){
    item_price.fragender=(fra_val * gender_val*unit_price.fragender_yes);
  }  else {
    item_price.fragender=0;
  }
  
  var hgi_val = document.querySelector('.hgi:checked').value;
  item_price.hgi=(hgi_val * unit_price.hgi);
  
  var liverd_val = document.querySelector('.liverd:checked').value;
  item_price.liverd=(liverd_val * unit_price.liverd);
  
  var pad_val = document.querySelector('.pad:checked').value;
  item_price.pad=(pad_val * unit_price.pad);
  
  var hsmoke_val = document.querySelector('.hsmoke:checked').value;
  if(hsmoke_val==1){
    item_price.hsmoke=(hsmoke_val * unit_price.hsmoke_yes);
  } else if(hsmoke_val==2){
    item_price.hsmoke=((hsmoke_val-1) * unit_price.hsmoke_unknown);
  } else {
    item_price.hsmoke=0;
  }
  
  var nyha_val = document.querySelector('.nyha:checked').value;
  item_price.nyha=(nyha_val * unit_price.nyha);
  
  var rvef_val = document.querySelector('.rvef:checked').value;
  if(rvef_val==1){
    item_price.rvef=(rvef_val * unit_price.rvef_severe);
  } else if(rvef_val==2){
    item_price.rvef=((rvef_val-1) * unit_price.rvef_unknown);
  } else {
    item_price.rvef=0;
  }
  
  
  var ha1c_val = document.querySelector('.ha1c:checked').value;
  item_price.ha1c=(ha1c_val * unit_price.ha1c);
  
  
  item_price.bun = ($("#qty_bun").val() * unit_price.bun);
  
  item_price.hg = ($("#qty_hg").val() * unit_price.hg);
  
  
  
  let total = item_price.age+item_price.gender+item_price.dt+item_price.fra+item_price.fragender+item_price.hgi+item_price.liverd+item_price.pad+item_price.hsmoke+item_price.nyha+item_price.rvef+item_price.ha1c+item_price.bun+item_price.hg;

  let fregib={};
  fregib.half= Math.round((1-Math.pow(0.9866659,Math.exp(total)))*100 * 10) / 10;
  fregib.one= Math.round((1-Math.pow(0.9807243,Math.exp(total)))*100 * 10) / 10;
  fregib.two= Math.round((1-Math.pow(0.9726137,Math.exp(total)))*100 * 10) / 10;
  
  $("#half").text(fregib.half);
  $("#one").text(fregib.one);
  $("#two").text(fregib.two);
  
  
}

$(function()
 {
    $(".qty").on("change",calculateTotal)
    $(".qty_female").on("change",calculateTotal)
   
    $(".dt").on("change",calculateTotal)
    $(".fra").on("change",calculateTotal)
    $(".hgi").on("change",calculateTotal)
    $(".liverd").on("change",calculateTotal)
    $(".pad").on("change",calculateTotal)
    $(".hsmoke").on("change",calculateTotal)
    $(".nyha").on("change",calculateTotal)
    $(".rvef").on("change",calculateTotal)
    $(".ha1c").on("change",calculateTotal)
   
  
})

