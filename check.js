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

let current_page = 1;
let records_per_page = 5;

function changePage(page) {
  let btn_next = document.getElementById("btn_next");
  let btn_prev = document.getElementById("btn_prev");
  let listing_table = document.getElementById("myTable");

  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  let div = document.createElement("tbody");
  div.id="table-wrapper";
  document.getElementById("myTable").appendChild(div);

  document.getElementById("table-wrapper").innerHTML = "";

  for (let i = (page-1) * records_per_page; i < (page * records_per_page) && i < obj.length; i++) {
    let birthData = obj[i]["dateOfBirth"];
    birthData = birthData.substring(0, birthData.indexOf(' '));

    let newB = birthData.split("."), a = newB[0], b = newB[1], c = newB[2];
    console.log(newB);

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
      let cell1="<td>" + obj[i]["id"] + "</td>";
      let cell2="<td>" + obj[i]["firstName"] + "</td>";
      let cell3="<td>" + obj[i]["lastName"] + "</td>";
      let cell4="<td>" + a + " " + (months[b]) + " " + c + "</td>";
      let cell5="<td>" + obj[i]["company"] + "</td>";
      let cell6="<td>" + obj[i]["note"] + "</td></tr>";

      document.getElementById("table-wrapper").innerHTML += row += cell1 += cell2 += cell3 += cell4 += cell5 += cell6;
    }
    console.log(page);
    let page_span = document.getElementById("page");
    page_span.innerHTML = "";
    for ( let j = 1; j <= numPages(); j++ ) {
      let pageNumber = j;

      let span = "<a href=javascript:changePage" + "(" + pageNumber + ")>" + pageNumber + "</a>";
      console.log(current_page);
      console.log(page);
      page_span.innerHTML += span;
    }
    let elems = document.querySelectorAll("#page a");
    for (let i = 0; i < elems.length; i++) {
      console.log(elems.length);
      elems[page-1].classList.add('current');
      }
    }
  //end of changePage

  function prevPage() {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  }

  function nextPage() {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
      console.log(current_page);
    }
  }

  function numPages() {
    return Math.ceil(obj.length / records_per_page);
  }

  changePage(1);

let button = document.getElementById("id");
let ff = document.getElementById("sorting-characters");
let ln = document.getElementById("last-name");
let bd = document.getElementById("birth-date");
let company = document.getElementById("company");
let note = document.getElementById("note");

let order = false;
function sortId(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.id;
    const y = b.id;
    return (order ? x > y : x < y);
  });
}

function sortFirstName(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.firstName.toLowerCase();
    const y = b.firstName.toLowerCase();
    return (order ? x > y : x < y);
  });
}

function sortLastName(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.lastName.toLowerCase();
    const y = b.lastName.toLowerCase();
    return (order ? x > y : x < y);
  });
}

function sortBirthDate(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.dateOfBirth;
    const y = b.dateOfBirth;
    return (order ? x > y : x < y);
  });
}

function sortCompany(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.company.toLowerCase();
    const y = b.company.toLowerCase();
    return (order ? x > y : x < y);
  });
}

function sortNote(){
  order = !order;
  obj.sort(function (a, b) {
    const x = a.note;
    const y = b.note;
    return (order ? x > y : x < y);
  });
}

button.addEventListener("click", function () {
  sortId();
  changePage(current_page);
});

ff.addEventListener("click", function () {
  sortFirstName();
  changePage(current_page);
});

ln.addEventListener("click", function () {
  sortLastName();
  changePage(current_page);
});

bd.addEventListener("click", function () {
  sortBirthDate();
  changePage(current_page);
});

company.addEventListener("click", function () {
  sortCompany();
  changePage(current_page);
});

note.addEventListener("click", function () {
  sortNote();
  changePage(current_page);
});
