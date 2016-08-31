function farbknoepfeAktivieren() {
    $('.farbknopf').bind({
        mousedown: function () {
            geclicktefarbeAnzeigen(this);
        },
        mouseup: function () {
            ausgangsfarbeAnzeigen(this);
        }
    });
}

function farbknoepfeDeaktivieren() {
    $('.farbknopf').unbind('mousedown', 'mouseup');
}

function geclicktefarbeAnzeigen(obj) {
    switch (obj.id) {
        case 'rot':
            $('#' + obj.id).css('background-color', '#ff3333');
            break;
        case 'blau':
            $('#' + obj.id).css('background-color', '#0066ff');
            break;
        case 'gruen':
            $('#' + obj.id).css('background-color', '#00ff00');
            break;
        case 'gelb':
            $('#' + obj.id).css('background-color', '#ffff00');
            break;
    }
}

function ausgangsfarbeAnzeigen(obj) {
    switch (obj.id) {
        case 'rot':
            $('#' + obj.id).css('background-color', '#cc0000');
            break;
        case 'blau':
            $('#' + obj.id).css('background-color', '#0000cc');
            break;
        case 'gruen':
            $('#' + obj.id).css('background-color', '#00cc00');
            break;
        case 'gelb':
            $('#' + obj.id).css('background-color', '#cccc00');
            break;
    }
}