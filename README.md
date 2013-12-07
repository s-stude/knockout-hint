# Knockout-hint

Knockout binding handler that allows you to display hints on the page about any background work that's performing right now.

## Gimme it right now!!!

```
npm install knockout-hint
```

## Intro


How many times did you used `visible` binding to display / hide any element on the page to show that any background work is performing? 

_Please wait, we are saving..._ 
_Searching data..._
_Connecting to the server..._

Stop using `visible` binding! 

## Knockout-hint to the rescue!

Knockout `hint` binding allows you take care of such things.
```html
<button data-bind="click: load">Load</button>
<span data-bind="hint: isLoading">
  Loading...
</span>
```
```javascript
var VM = function () {
    var _isLoading = ko.observable(false),
            _load = function () {
                // background work goes here...
                _isLoading(true);

                // emulating the work
                setTimeout(function () {
                    _isLoading(false);
                }, 1000);

            };

    return {
        isLoading:_isLoading,
        load:_load
    };
};

ko.applyBindings(new VM());
```

## Features

The previous example is what you need to get started. Knockout will take care of the `hint` property, and will show, or hide the hint element on the page. 

**Default implementation** is that it's using `.hidden` CSS class to hide the element. That CSS rule will be added to the bottom of the page by default. You shouldn't care of that.

In case you want use your own CSS class to make the `hint` hidden, you can override the defaults by passing binding options.

### Options:
```html
<button data-bind="click: load">Load</button>
<span data-bind="hint: isLoading, hintOptions: { hiddenClass: 'custom-hidden' }">
    Loading... (This is hidden by custom css class)
</span>
```

That makes it very easy to integrate with your CSS library (hello Twitter Bootstrap :smiley: ), or any other logic on the page.

## I should care of the hint element and additional VM property... REALLY?

Yes! :wink: 

This is very simple helper, and you need insert all `hint` elements by your own. That makes it _very flexible for usage_. There is no any dynamically inserted html element. You can place so many hint elements on the page as you wish.

## Licence
MIT