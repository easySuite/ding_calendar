(function ($) {
  Drupal.behaviors.ding_calendar = {
    attach: function (context, settings) {
      var current_day = $('.ding-calendar-container td.current-day.has-events', context);
      current_day.addClass('selected');

      var calendar_day = $('.calendar-day.has-events');
      calendar_day.find('a').on('click', function () {
        if (calendar_day.find('.selected')) {
          calendar_day.removeClass('selected');
        }

        $(this).parent().parent().addClass('selected');
      });
    }
  };
})(jQuery);
