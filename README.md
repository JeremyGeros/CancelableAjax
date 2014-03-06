CancelableAjax
==============

Simple jQuery pluign to wrap the $.ajax to provide an easy was to cancel all ajax requests, takes the same options as the normal $.ajax method, this doesn't not override the default $.ajax method

```
$.cancelableAjax(ajaxOptions, [identifer]);

$.cancelableAjax({
  type: 'POST',
  url:  '/save',
  dataType: 'JSON',
  data: {
    name: 'Jeremy'
  },
  success: function (response) {
    //Do something
  }
});


$.cancelableAjax({
  //Ajax options
}, 'updatingUser');

```

To cancel all requests

```
$.cancelAjaxRequests();
```

To cancel a specific request
```
$.cancelAjaxRequest(identifer);

$.cancelAjaxRequest('updatingUser');
```


