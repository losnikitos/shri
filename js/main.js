(function ($) {
  "use strict";

  $(function () {
    $('#task-solution-3-js').load("js/shri.js");
    $('.toggle-solution').on('click', function () {
      var self = $(this);
      var solution = self.siblings('.task-solution');
      var isOpened = solution.hasClass('open');
      if (isOpened) {
        solution.slideUp();
        self.text(self.data('open') || 'Показать решение');
      } else {
        solution.slideDown();
        try {
          $('html, body').animate({scrollTop: solution.offset().top}, 1000);
        } catch (ignore) {
          // ie fix
        }
        self.text(self.data('close') || 'Скрыть решение');
      }
      solution.toggleClass('open', !isOpened);
      return false;
    });

    $('#print').on('click', function () {
      window.print();
      return false;
    });

    SyntaxHighlighter.all();
  });
})(jQuery);