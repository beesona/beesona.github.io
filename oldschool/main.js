$(document).ready(function () {
    UpdateClock();
    setInterval(function () { UpdateClock() }, 60000);

    LoadIcons();

});


function UpdateClock() {

    var curHour = new Date().getHours();
    var timeSuf = 'AM';

    if (curHour > 12) {
        curHour = curHour - 12;
        timeSuf = 'PM';
    } else if (curHour == 0) {
        curHour = 12;
        timeSuf = 'AM';
    } else {
        timeSuf = 'AM';
    }

    var curMin = new Date().getMinutes();

    curMin = curMin < 10 ? '0' + curMin : curMin;

    $('#clock').text(curHour + ':' + curMin + ' ' + timeSuf);
}


function LoadIcons() {

    for (var x in desktopObjs) {
        var thisObj = desktopObjs[x];
        var icoContainer = $('<div />', { id: thisObj.id, 'class': 'icoContainer' });
        var icon = $('<img />', { id: thisObj.id + 'Img', src: thisObj.src, width: 92, height: 92, 'class': 'ico', MyWindow: thisObj.name });
        var iconText = $('<span />', { 'class': 'icoText' });
        $(iconText).text(thisObj.name);
        //var iconText = '<span class="icoText">'+thisObj.name+'</span>';

        $(icoContainer).append(icon);
        $(icoContainer).append(iconText);
        $(icoContainer).draggable();
        $('#mainContainer').append(icoContainer);

        $(icon).on('mousedown', function () {
            $(this).attr('src', $(this).attr('src').split('.')[0] + 'Selected.png');
        });
        $(icon).on('mouseup', function () {
            $(this).attr('src', $(this).attr('src').replace('Selected', ''));
        });

        $(icon).on('dblclick touchend', function () {

            for (var x in desktopObjs) {
                if (desktopObjs[x].id == $(this).parent().attr('id')) {
                    thisObj = desktopObjs[x];
                }
            }

            $(this).siblings('.icoText').trigger('blur');

            var newWindow = new WindowPane($(this).siblings('.icoText').text(), thisObj.width, thisObj.height, thisObj.type, {}, thisObj.contents);

            $('body').append(newWindow);
            $(newWindow).css('position', 'absolute');
            //needed to reinstantiate scrollbars... stupid.
            $(newWindow).children('.windowContent').css('overflow', 'auto').jScrollPane({ showArrows: true });

            //var newWindow = OpenWindow($(this).attr('MyWindow'));
            $(newWindow).on('mousedown', function () {
                $('div').css('z-index', 0);
                $(this).css('z-index', 99);
            });
            $(this).effect("transfer", { to: $(newWindow) }, 500);
        });

        $(iconText).on('click', function () {

            var thisText = $(this);

            var origText = $(this).text();
            var newText = '';

            $(this).text('');
            $(this).append($('<input />', { type: 'text', 'class': 'icoTextBox', value: origText }));

            $('.icoTextBox').focus().on('blur', function () {
                newText = $(this).val();
                $(this).remove();
                $(thisText).text(newText == '' || undefined ? origText : newText);
            }).on('keyup', function (e) {
                if (e.keyCode == 13) {
                    $(this).trigger('blur');
                }
            });
        });
    }

    //works, deprecating....
    //var icoContainer = $('<div />', { id: 'icoTrashContainer' });
    //var trashIcon = $('<img />', { src: 'icoTrash.png', width: 92, height: 92, 'class': 'ico', MyWindow: 'Trash' });
    //var trashText = '<span class="icoText">Trash</span>';

    //$(icoContainer).append(trashIcon);
    //$(icoContainer).append(trashText);
    //$(icoContainer).draggable();
    //$('#mainContainer').append(icoContainer);
    //end works...

}

function OpenWindow(windowName){
    var newWindow = $('<div />', { id: windowName + 'Window', 'class': 'divWindow' });
    $('#mainContainer').append(newWindow);
    $(newWindow).hide().draggable();
    return newWindow;
}