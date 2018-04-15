let obj = [
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

let div = document.createElement("tbody");
div.id="table-wrapper";
document.getElementById("myTable").appendChild(div);

for ( let i = 0; i < obj.length; i++ ) {
  let birthData = obj[i]["dateOfBirth"];
  birthData = birthData.substring(0, birthData.indexOf(' '));

  let newB = birthData.split("."),
      a = newB[0], b = newB[1], c = newB[2];

  let months = {
    "01": "styczeń",
    "1": "styczeń",
    "02": "luty",
    "2": "luty",
    "03":" marzec",
    "3":" marzec",
    "4": "kwiecień",
    "5": "maj",
    "05": "maj",
    "6": "czerwiec",
    "7": "lipiec",
    "8": "sierpień",
    "9": "wrzesień",
    "10": "październik",
    "11": "listopad",
    "12": "grudzień"
  };

//console.log(a + months[b] + c);
console.log(a + " " + (months[b]) + " " + c);

  let row="<tr class=row>";
    let cell1="<td class=cell>" + obj[i]["id"] + "</td>";
    let cell2="<td class=cell>" + obj[i]["firstName"] + "</td>";
    let cell3="<td class=cell>" + obj[i]["lastName"] + "</td>";
    let cell4="<td class=cell>" + a + " " + (months[b]) + " " + c + "</td>";
    let cell5="<td class=cell>" + obj[i]["company"] + "</td>";
    let cell6="<td class=cell>" + obj[i]["note"] + "</td></tr>";

    document.getElementById("table-wrapper").innerHTML += row += cell1 += cell2 += cell3 += cell4 += cell5 += cell6;
  }
