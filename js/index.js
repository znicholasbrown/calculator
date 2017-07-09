function inputs(y) {
  $('.current').append(y);
  $('.history').append(y);
  $('#answer').hide();
  $('#current').show();
}
function move(y) {
  $('.history').append(y);
  $('#current').empty();
}
function calculate () {
  $('#current').hide();
  var x = document.getElementById('history').innerHTML;
  if (!x) {
    return;
  } else {
    var z = eval(x);
    document.getElementById('answer').innerHTML = z;
    $('#answer').show();
  }
}

$('#9').click(function () {
  inputs($(this).attr('value'));
});
$('#8').click(function () {
  inputs($(this).attr('value'));
});
$('#7').click(function () {
  inputs($(this).attr('value'));
});
$('#6').click(function () {
  inputs($(this).attr('value'));
});
$('#5').click(function () {
  inputs($(this).attr('value'));
});
$('#4').click(function () {
  inputs($(this).attr('value'));
});
$('#3').click(function () {
  inputs($(this).attr('value'));
});
$('#2').click(function () {
  inputs($(this).attr('value'));
});
$('#1').click(function () {
  inputs($(this).attr('value'));
});
$('#0').click(function () {
  inputs($(this).attr('value'));
});
$('#point').click(function () {
  inputs($(this).attr('value'));
});

$('#AC').click(function () {
  document.getElementById('current').innerHTML = ('');
  document.getElementById('history').innerHTML = ('');
  $('#answer').hide();
  $('#current').show();
});
$('#CE').click(function () {
  document.getElementById('current').innerHTML = ('');
  $('#answer').hide();
  $('#current').show();
});

$('#subtract').click(function () {
  var x = document.getElementById('history').innerHTML;
  if (!x) {
    return;
  } else {
    calculate();
    move($(this).attr('value'));
  }
  
});
$('#multiply').click(function () {
  var x = document.getElementById('history').innerHTML;
  if (!x) {
    return;
  } else {
    calculate();
    move($(this).attr('value'));
  }
});
$('#add').click(function () {
  var x = document.getElementById('history').innerHTML;
  if (!x) {
    return;
  } else {
    calculate();
    move($(this).attr('value'));
  }
});
$('#divide').click(function () {
  var x = document.getElementById('history').innerHTML;
  if (!x) {
    return;
  } else {
    calculate();
    move($(this).attr('value'));
  }
});

$('#equals').click(function () {
  calculate();
})

$(document).ready(function () {
  
  $(this).on('keypress', function(e) {
    switch (e.which){
      case 97:
      case 49: 
        inputs($('#1').attr('value'));
        break;

      case 98:
      case 50:
        inputs($('#2').attr('value'));
        break;

      case 99: 
      case 51:
        inputs($('#3').attr('value'));
        break;

      case 100: 
      case 52:
        inputs($('#4').attr('value'));
        break;

      case 101:
      case 53:
        inputs($('#5').attr('value'));
        break;
      
      case 102:
      case 54:
        inputs($('#6').attr('value'));
        break;

      case 103:
      case 55:
        inputs($('#7').attr('value'));
        break;

      case 104:
      case 56:
        inputs($('#8').attr('value'));
        break;

      case 105:
      case 57:
        inputs($('#9').attr('value'));
        break;

      case 96:
      case 48:
        inputs($('#0').attr('value'));
        break;

      default: 
        break;
    }
  })
  
  
  $(document).keydown(function (e) {
    switch (e.which){
      case 110: 
      case 190:
        inputs($('#point').attr('value'));
        break;

      case 107: 
        var x = document.getElementById('history').innerHTML;
        if (!x) {
          return;
        } else {
          calculate();
          move($('#add').attr('value'));
        }
        break;

      case 187:
        if(e.which == 16) {
          var x = document.getElementById('history').innerHTML;
          if (!x) {
          return;
          } else {
            calculate();
            move($('#add').attr('value'));
        }
          break;
        } else break;

      case 109:
      case 189:
        var x = document.getElementById('history').innerHTML;
        if (!x) {
          return;
        } else {
          calculate();
          move($('#subtract').attr('value'));
        }
        break;

      case 106:
        var x = document.getElementById('history').innerHTML;
        if (!x) {
          return;
        } else {
          calculate();
          move($('#multiply').attr('value'));
        }
        break;

      case 56:
        if(e.which == 16) {
        var x = document.getElementById('history').innerHTML;
        if (!x) {
          return;
        } else {
          calculate();
          move($('#multiply').attr('value'));
        }
        break;
      } else break;

      case 111:
      case 191:
        var x = document.getElementById('history').innerHTML;
        if (!x) {
          return;
        } else {
          calculate();
          move($('#divide').attr('value'));
        }
        break;

      case 13:
        calculate();
        break;
        
      default:
        break;
    }
    
});
})