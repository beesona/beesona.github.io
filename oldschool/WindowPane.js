var WindowPane = function (name, width, height, type, buttons, content) {

    height = $(window).height() <= height ? $(window).height() - 50 : height;
    width = $(window).width() <= width ? $(window).width() - 50 : width;

    //build container
    var mainWindowContainer = $('<div />',
        {
            id: name + 'WindowMain',
            'class': 'windowMain',
            width: width,
            height: height,
            css: {left: ($(window).width() / 2) - (width / 2), top: ($(window).height() / 2) - (height /2)}
        });

    //build banner
    var windowBannerTop = $('<div />',
        {
            id: name + 'BannerTop',
            'class': 'windowBannerTop'
        });

    //build banner Name
    var windowBannerText = $('<span />',
        {
            id: name + 'BannerText',
            'class': 'windowBannerText'
        });

    //build window Close Button
    var windowCloseButton = $('<div />',
        {
            id: name + 'CloseButton',
            'class': 'windowCloseBox'
        });

    //build content pane
    var windowContent = $('<div />',
    {
        id: name + 'WindowContent',
        'class': 'windowContent',
        css: { top: 21, height: height - 21 , width: width, overflow: 'auto'}
    });

    $(windowContent).append(content);

    //build window left scroll
    //var windowRight = {};
    //if (type == 'folder' || type == 'doc') {
    //    windowRight = $('<div />', {
    //        id: name + 'Right',
    //        'class': 'windowScrollRight',
    //        css: {height: height - 21, left: width -21, top: 21}
    //    });
    //}

    //put it all together and init...
    windowBannerText.text(name);
    windowBannerTop.append(windowBannerText);
    windowBannerTop.append(windowCloseButton);
    mainWindowContainer.append(windowBannerTop);
    mainWindowContainer.append(windowContent);
    //if (windowRight) {
    //    mainWindowContainer.append(windowRight);
    //}

    mainWindowContainer.draggable({ handle: windowBannerTop });

    //event Management
    windowCloseButton.on('mousedown', function () {
        $(this).css('background-image', 'url(windowCloseActive.png)');
    }).on('mouseup', function () {
        $(this).css('background-image', 'none');
        mainWindowContainer.remove();
    });

    $(function () {
        $(windowContent).addClass('jspScrollable');
        $(windowContent).jScrollPane();
    });

    return mainWindowContainer;

}