function addToDisplay(value) {
  document.getElementById("display").value =
    document.getElementById("display").value + value;
}

function clearToDisplay() {
  document.getElementById("display").value = "";
}
function calculate() {
    try {document.getElementById("display").value = eval(
        document.getElementById("display").value
      );
        
    } catch (error) {document.getElementById("display").value= error
        
    }
  
}
