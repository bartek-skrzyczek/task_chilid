$(document).ready(function() {
    $('#myTable').DataTable( {
      "iDisplayLength": 5,
      "searching": false,
      "bLengthChange": false,
      "bInfo" : false,
      "aaSorting": [],
      "language": {
        "paginate": {
          "previous": "back",
          "next": "next"
        }
      }
    });
} );
