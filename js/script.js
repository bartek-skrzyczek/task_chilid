$( document ).ready(function() {

  jQuery(function($) {
      //pointing to cells
      var items = $("#table-wrapper .row");

      var numItems = items.length;
      var perPage = 5;

      items.slice(perPage).hide();
      // Setup the pagination using the `.pagination-page` div.
      $(".pagination-page").pagination({
          items: numItems,
          itemsOnPage: perPage,

          // This is the actual page changing functionality.
          onPageClick: function(pageNumber) {
              // We need to show and hide `tr`s appropriately.
              var showFrom = perPage * (pageNumber - 1);
              var showTo = showFrom + perPage;

              // We'll first hide everything...
              items.hide().slice(showFrom, showTo).show();
                   // ... and then only show the appropriate rows.
          }
      });
  });
});
