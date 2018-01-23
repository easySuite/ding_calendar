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

      $('input[name=calendar_search]', context).keypress(function(e) {
        var form = $('#ding-calendar-draw-input');
        var form_submit = form.find('input[type=submit]');
        if (e.which == 13) {
          form_submit.mousedown();
          return false;
        }
      });
    }
  };
})(jQuery);
