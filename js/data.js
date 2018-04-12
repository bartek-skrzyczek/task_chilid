var obj = [
  {
    "id": 1,
    "firstName": "Jan",
    "lastName": "Kowalski",
    "dateOfBirth": "1.7.1990 11:35",
    "company": "XSolve",
    "note": 90
  },
  {
    "id": 4,
    "firstName": "Justyna",
    "lastName": "Kowalska",
    "dateOfBirth": "4.02.1976 14:37",
    "company": "XSolve",
    "note": 91
  },
  {
    "id": 2,
    "firstName": "Krzysztof",
    "lastName": "Krawczyk",
    "dateOfBirth": "28.10.1950 2:15",
    "company": "Chilid",
    "note": 27
  },
  {
    "id": 3,
    "firstName": "Bogusław",
    "lastName": "Linda",
    "dateOfBirth": "03.01.1963 23:10",
    "company": "XSolve",
    "note": 50
  },
  {
    "id": 5,
    "firstName": "Krzysztof",
    "lastName": "Kononowicz",
    "dateOfBirth": "10.10.1910 18:00",
    "company": "Chilid",
    "note": 77
  },
  {
    "id": 6,
    "firstName": "Maryla",
    "lastName": "Rodowicz",
    "dateOfBirth": "29.02.1936 11:35",
    "company": "XSolve",
    "note": 8
  },

  {
    "id": 7,
    "firstName": "Edyta",
    "lastName": "Górniak",
    "dateOfBirth": "14.11.1972 06:35",
    "company": "XSolve",
    "note": 25
  },
  {
    "id": 8,
    "firstName": "Dawid",
    "lastName": "Podsiadło",
    "dateOfBirth": "23.05.1993 16:15",
    "company": "Chilid",
    "note": 19
  },
  {
    "id": 9,
    "firstName": "Elvis",
    "lastName": "Presley",
    "dateOfBirth": "09.01.1935 01:35",
    "company": "XSolve",
    "note": 8
  }
]

var div = document.createElement("div");
div.id="table-wrapper";
document.getElementById("table").appendChild(div);

for ( var i = 0; i < obj.length; i++ ) {
  var row="<div class=row>";
    var cell1="<div class=cell>" + obj[i]["id"] + "</div>";
    var cell2="<div class=cell>" + obj[i]["firstName"] + "</div>";
    var cell3="<div class=cell>" + obj[i]["lastName"] + "</div>";
    var cell4="<div class=cell>" + obj[i]["dateOfBirth"] + "</div>";
    var cell5="<div class=cell>" + obj[i]["company"] + "</div>";
    var cell6="<div class=cell>" + obj[i]["note"] + "</div></div>";

    document.getElementById("table-wrapper").innerHTML += row += cell1 += cell2 += cell3 += cell4 += cell5 += cell6;
  }
