const getCellValue = (tr, idx) =>
tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) =>
((v1, v2) =>
 v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
 ? v1 - v2
 : v1.toString().localeCompare(v2))(
  getCellValue(asc ? a : b, idx),
  getCellValue(asc ? b : a, idx)
);

// do the work...
document.querySelectorAll(".table-header .cell").forEach(cell =>
                                        cell.addEventListener("click", () => {
  const table = div.closest("table");
  Array.from(table.querySelectorAll("cell:nth-child(n+2)"))
    .sort(
    comparer(
      Array.from(th.parentNode.children).indexOf(th),
      (this.asc = !this.asc)
    )
  )
    .forEach(tr => table.appendChild(tr));
})
                                       );
