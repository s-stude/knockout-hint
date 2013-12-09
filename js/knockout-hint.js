(function(win, doc, $, ko){

    var options = {
        hiddenClass: 'hidden'
    };

    ko.bindingHandlers.hint = {
        init:function (element, valueAccessor, allBindingsAccessor) {
            var observable = valueAccessor(),
                hintOptions = allBindingsAccessor().hintOptions,
                cssClass;

            if(hintOptions && hintOptions.hiddenClass){
                cssClass = hintOptions.hiddenClass;
            }else{
                cssClass = options.hiddenClass;
                insertCustomCss();
            }

            applyHint(observable, element, cssClass);
        },

        update:function (element, valueAccessor, allBindingsAccessor) {
            var observable = valueAccessor(),
                hintOptions = allBindingsAccessor().hintOptions,
                cssClass;

            if(hintOptions && hintOptions.hiddenClass){
                cssClass = hintOptions.hiddenClass;
            }else{
                cssClass = options.hiddenClass;
            }

            applyHint(observable, element, cssClass);
        }
    };

    function applyHint(observable, element, cssClass){
        if (observable()) {
            $(element).removeClass(cssClass);
        } else {
            $(element).addClass(cssClass);
        }
    }

    function insertCustomCss(){
        var css = [
            '<style>',
            '.hidden{display: none !important;}',
            '</style>'
        ];

        doc.write(css.join(''));
    }

})(window,document, jQuery, ko);