function calculateTotal()
{
  let unit_price={
    age: 0.03238,
    female:0.4978,
    race_AA:0.603,
    race_other:0.1328,
    racegender_AA:-0.3699,
    racegender_other:-0.2034,
    dt:0.6414,
    fra_yes:0.383,
    fra_unknown:0.1965,
    fragender_yes:-0.5919,
    hgi:0.844,
    liverd:0.4191,
    pad:0.2782,
    hsmoke_yes:0.2757,
    hsmoke_unknown0:.1495,
    nyha:0.267,
    revf_severe:0.2285,
    rvef_unknown:0.03974,
    ha1c:0.1983,
    ice:0.1307,
    bun:0.006358,
    hg:-0.0665
    
  };
  let item_price={};
  item_price.age = ($("#qty_age").val() * unit_price.age );
  
  var gender_val = document.querySelector('.qty_female:checked').value;
  item_price.gender=(gender_val * unit_price.female);
  
  var race_val = document.querySelector('.race:checked').value;
  if(race_val==1){
    item_price.race=(race_val * unit_price.race_AA);
  } else if(race_val==2){
    item_price.race=((race_val-1) * unit_price.race_other);
  } else {
    item_price.race=0;
  }
  
  if(race_val==1){
    item_price.racegender=(race_val *gender_val* unit_price.racegender_AA);
  } else if(race_val==2){
    item_price.racegender=((race_val-1) *gender_val* unit_price.racegender_other);
  } else {
    item_price.racegender=0;
  }
  
  var dt_val = document.querySelector('.dt:checked').value;
  item_price.gender=(dt_val * unit_price.dt);
  
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
  
  var ice_val = document.querySelector('.ice:checked').value;
  item_price.ice=(ice_val * unit_price.ice);
  
  item_price.bun = ($("#qty_bun").val() * unit_price.bun);
  
  item_price.hg = ($("#qty_hg").val() * unit_price.hg);
  
  
  
  let total = item_price.age+item_price.gender+item_price.race+item_price.racegender+item_price.dt+item_price.fra+item_price.fragender+item_price.hgu+item_price.liverd+item_price.pad+item_price.hsmoke+item_price.nyha+item_price.rvef+item_price.ha1c+item_price.ice+item_price.bun+item_price.hg;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

