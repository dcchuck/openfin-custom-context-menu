/* global fin */
document.addEventListener('DOMContentLoaded', () => {
    if (typeof fin !== 'undefined') {
        init();
    } else {
        console.log('You should launch me on OpenFin!');
    }
});

function init() {

    // Create the Context Menu window on launch, but do not show it.
    const contextMenu = new fin.desktop.Window({
        url: 'menu.html',
        name: Math.random().toString(),
        autoShow: false,
        saveWindowState: false,
        frame: false,
        defaultHeight: 66,
        defaultWidth: 200,
        cornerRounding: {
            height: 3,
            width: 3
        },
        smallWindow: true
    });

    // The context menu handler shows the window where the user right clicked
    function contextMenuHandler() {
        fin.desktop.System.getMousePosition(mousePosition => {
            contextMenu.showAt(mousePosition.left, mousePosition.top, false, () => {
                contextMenu.bringToFront(() => contextMenu.focus());
            });
        });
    }

    document.addEventListener('contextmenu', contextMenuHandler);
}
