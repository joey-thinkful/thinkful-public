
/* 
Checkpoint 3 EventListener Assignment
Author: Joe P.
*/
$(function() {
  /*check to see if the user adds a value to the form. If so, add
  the value to the list. */
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        const item = $(event.currentTarget).find('input[name="shopping-list-entry"]').val();
        /*build the html. probably can refactor since all the li's use the same elements. */
        var insertedItem = '<li><span class="shopping-item">' + item + '</span>' +
        '<div class="shopping-item-controls">' + 
        '<button class="shopping-item-toggle">' + 
          '<span class="button-label">check</span>' + 
        '</button>' +
        '<button class="shopping-item-delete">' +
          '<span class="button-label">delete</span>' +
        '</button> '+ 
      '</div></li>';
      /* add to the list */
        $('.shopping-list').append(insertedItem);
      /* empty the form input field */
        $('#shopping-list-entry').val('');
    });

    $('.shopping-item-toggle').click(event => {
      var itemClass = $(event.currentTarget).closest('li').find('.shopping-item');
      var item = itemClass.text();

      /* is the item already crossed out? */
      if (itemClass.hasClass('shopping-item__checked')) {
        itemClass.removeClass('shopping-item__checked').addClass('shopping-item');
      } else {
        itemClass.addClass('shopping-item__checked');
      }
    });

    $('.shopping-item-delete').click(event => { 
      /* hide the li from the ul */
      var deletedItem = $(event.currentTarget).closest('li');
      deletedItem.hide();
    });

});