(function($) {
  $('html').data("runningAjaxRequests", {});
  $.cancelableAjax = function(ajaxOptions, identifier) {
    var ajaxRequest;
    if (identifier == null) {
      identifier = Math.floor(Math.random() * 10000);
    }
    ajaxRequest = $.ajax(ajaxOptions);
    $('html').data("runningAjaxRequests")[identifier] = ajaxRequest;
    return ajaxRequest;
  };
  $.cancelAjaxRequests = function() {
    var identifier, request, _ref;
    _ref = $('html').data("runningAjaxRequests");
    for (identifier in _ref) {
      request = _ref[identifier];
      request.abort();
    }
    $('html').data("runningAjaxRequests", {});
    return $;
  };
  $.cancelAjaxRequest = function(identifier) {
    var request;
    request = $('html').data("runningAjaxRequests")[identifier];
    if (request != null) {
      request.abort();
    }
    return $;
  };
})(jQuery);
