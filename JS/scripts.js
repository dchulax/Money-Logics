

//function targeted (save, target) {
//  if (target < save)
//  {
  //  var yy = save - target;
  //  return yy;

  //} else if (target > save)
//  {
    //var yy = target - save;
  //  return yy;
//  } else
//  {
  //  return target;
//  }
//};

function xx (){
  var xx = document.getElementById('Initial').value;
  document.getElementById('projected').value = xx;
  var vv = document.getElementById('Expenditure').value;
  var kk = xx-vv;
  document.getElementById('Saving').value = kk;
  document.getElementById('income').value = kk;
  var jj = document.getElementById('target').value
  document.getElementById('target').value = jj;
  event.preventDefault();
}

//function yy (){
//  var xx = document.getElementById('Initial').value;
  //var vv = document.getElementById('Expenditure').value;
  //var kk = yy-vv
  //document.getElementById('Saving').value = kk;
//S}
