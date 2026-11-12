function init(){
    //add your javascrip between these two lines of code
      var input = document.getElementById('entryinput');
      var button = document.getElementById('entrybutton');
      var output = document.getElementById('textoutput');
    
      button.addEventListener('click', function(){
        var text = input.value;
        alert('Gavin: ' + text); 
        output.textContent = text;
      });
    //add your javascrip between these two lines of code
    }
    
    window.addEventListener('load', init);
