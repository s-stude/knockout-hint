ko.bindingHandlers.hint = {
    init:function (element, valueAccessor, allBindingsAccessor) {
        var observable = valueAccessor();

        if (observable()) {
            $(element).removeClass('hidden');
        } else {
            $(element).addClass('hidden');
        }
    },

    update:function (element, valueAccessor, allBindingsAccessor) {
        var observable = valueAccessor();

        if (observable()) {
            $(element).removeClass('hidden');
        } else {
            $(element).addClass('hidden');
        }
    }
};