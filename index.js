document.getElementById("noOfSub").focus();
var NOOFSUBS1 = document.getElementById("noOfSub").value;
function getInputValue(){
           // Selecting the input element and get its value
           // Displaying the value
           var NOOFSUBS = document.getElementById("noOfSub").value;
           // alert(NOOFSUBS);
           for(var i=1; i<=NOOFSUBS; i++){
             createInputField();
             createInputField1();
             createInputField2();
           }
           submitButtonApp();
       }
  function createInputField(){
    // 1 Create div
    var newInput = document.createElement("div");
    // add the content (a new input box) of the element.
    newInput.innerHTML = "<input type='text' id='newInputBox'style='width: 80px; height: 20px';>";
    // put this where you want
    document.getElementById("container1").appendChild(newInput);
    // document.getElementById("container2").appendChild(newInput);
    // document.getElementById("container3").appendChild(newInput);
  }
  function createInputField1(){
    // 1 Create div
    var newInput = document.createElement("div");
    // add the content (a new input box) of the element.
      newInput.innerHTML = "<select   id='select'style='width: 80px; height: 23px';>"+
  "<option value='10'>O</option>"+
  "<option value='9'>A+</option>"+
  "<option value='8'>A</option>"+
  "<option value='7'>B+</option>"+
  "<option value='6'>B</option>"+
"</select>"
    // put this where you want
    document.getElementById("container2").appendChild(newInput);
    // document.getElementById("container2").appendChild(newInput);
    // document.getElementById("container3").appendChild(newInput);
  }
  function createInputField2(){
    // 1 Create div
    var newInput = document.createElement("div");
    // add the content (a new input box) of the element.
      newInput.innerHTML = "<select class='select1'  id='select1'style='width: 80px; height: 23px';>"+
  "<option value='2'>2</option>"+
  "<option value='3'>3</option>"+
  "<option value='4'>4</option>"+
"</select>";
    // put this where you want
    document.getElementById("container3").appendChild(newInput);
    // document.getElementById("container2").appendChild(newInput);
    // document.getElementById("container3").appendChild(newInput);
  }
function submitButtonApp(){
  var newButton = document.createElement("div");
  newButton.innerHTML = "<button onclick='finalSubmit()' id='finalSubmit' class='btn btn-primary'type='button'>Submit</button>"
  document.getElementById("submitButtonApp").appendChild(newButton)
}


function finalSubmit(){
  var checked = document.querySelectorAll('#select :checked');
  var selected = [...checked].map(option => option.value);
  var length = selected.length;
  var checked = document.querySelectorAll('#select1 :checked');
  var selected1 = [...checked].map(option => option.value);
  var som = selected1.reduce(add, 0);
function add(a, b) {
return a+b;
}
var value = som,
    sam = 0;
while (value) {
    sam += value % 10;
    value = Math.floor(value / 10);
}
// alert(sam);
  var sum = 0;
for(var i=0; i<length; i++) {
    sum += selected[i]*selected1[i];
}
var result = sum/sam;
var result2=result.toFixed(2);
// alert(result2);
var output = document.createElement("div");
output.innerHTML = "Your GPA is "+ result2+".!";
document.getElementById("demo").appendChild(output)
}
