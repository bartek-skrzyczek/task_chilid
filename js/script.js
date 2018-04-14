$( document ).ready(function() {

  jQuery(function($) {
      //pointing to cells
      var items = $("#table-wrapper .row");

      var numItems = items.length;
      var perPage = 5;

      items.slice(perPage).hide();

      function applyBackgroundColors () {
        $("#table-wrapper .row:visible").each(function(i) {
          console.log($("#table-wrapper .row:visible"));
            if ((i) % 2 == 0) $(this).addClass('bg-odd');
        })
      };

      applyBackgroundColors();

      // Setup the pagination using the `.pagination-page` div.
      $(".pagination-page").pagination({
          items: numItems,
          itemsOnPage: perPage,

          // This is the actual page changing functionality.
          onPageClick: function(pageNumber) {
              // We need to show and hide `tr`s appropriately.
              var showFrom = perPage * (pageNumber - 1);
              console.log(showFrom);
              var showTo = showFrom + perPage;
              console.log(showTo);
              // We'll first hide everything...
              items.hide().slice(showFrom, showTo).show();
                   // ... and then only show the appropriate rows.
              applyBackgroundColors();
          }
      });
  });
});
