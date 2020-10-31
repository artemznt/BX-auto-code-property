$(document).ready(function () {
    $("input").on('click keyup', function (e) {

        var inputId = this.id.split("_");
        var propName = document.getElementById(this.id).value;
        var propIdCode = 'IB_PROPERTY_' + inputId[2] + '_CODE';

        var ru = {
            'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
            'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i',
            'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o',
            'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
            'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh',
            'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya', ' ': '_'
        }, n_str = [];

        str = propName.replace(/[ъь]+/g, '').replace(/й/g, 'i');

        for (var i = 0; i < str.length; ++i) {
            n_str.push(
                ru[str[i]]
                || ru[str[i].toLowerCase()] == undefined && str[i]
                || ru[str[i].toLowerCase()].toUpperCase()
            );
        }

        return $('#' + propIdCode).val(n_str.join('').toUpperCase());
    });
})
