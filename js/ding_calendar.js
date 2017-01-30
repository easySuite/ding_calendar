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

      $.fn.onEnter = function(func) {
        this.bind('keypress', function(e) {
          if (e.keyCode === 13) {
            func.apply(this, [e]);
          }
        });

        return this;
      };

      $('input[name=calendar_search]').onEnter(function() {
        var form = $('#ding-calendar-draw-input');
        var form_submit = form.find('input[type=submit]');
        form_submit.mousedown();
      });
    }
  };
})(jQuery);
