function locationTable(){//Couldnt get the table to load in my page

    var myTable = document.createElement("TABLE");

    myTable.border = 1;

    document.body.appandChild(myTable);

        var currentRow = myTable.insertRow(-1);

        var firstCell = currentRow.insertCell(0);
        firstCell.innerHTML = document.getElementById("locations").value;

        var firstCell = currentRow.insertCell(1);
        secondCell.innerHTML = document.getElementById("days").value;

        var firstCell = currentRow.insertCell(2);
        thirdCell.innerHTML = document.getElementById("members").value;

    }

    function locationCosts(){//loaded an alert that returned the value so that the results wopuld display.

        var radioButton = document.getElementsByName("location");
    
        var a = [1200, 2700, 1000];
    
        for (var i = 0; i < radioButton.length; i++){//for loop to itterate through the radio button selections
            if(radioButton[i].checked){
                var selectedValue = a[i];
                break;
            }
        }
    //alert to multiply the users input and display results
    alert("Your mission will cost: $" + selectedValue * document.getElementById("days").value * document.getElementById("members").value);
    
    }