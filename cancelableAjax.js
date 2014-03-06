(($) -> 
  $('html').data("runningAjaxRequests", {});
  
  $.cancelableAjax = (ajax_options) ->
    unique_identifier = Math.floor(Math.random()*10000);
    ajax_request = $.ajax(ajax_options)
    $('html').data("runningAjaxRequests")[unique_identifier] = ajax_request
    return ajax_request
    
  $.cancelAjaxRequests = ->
    request.abort() for identifier, request of $('html').data("runningAjaxRequests")
    $('html').data("runningAjaxRequests", {});
    return $;
  

)(jQuery)
