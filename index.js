'use strict';


function createItem() {
  $('#js-shopping-list-form').on('submit', function(event) {
    event.preventDefault();
    const newShoppingEntry = $('#shopping-list-entry').val();
    $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${newShoppingEntry}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
  });
}


function checkItem() {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
    $(event.currentTarget).closest('span').toggleClass('shopping-item__checked');
  });
}


function removeItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(event.currentTarget).closest('li').remove();
  });
}


$(createItem);
$(checkItem);
$(removeItem);