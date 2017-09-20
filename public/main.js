/* global fin */
document.addEventListener('DOMContentLoaded', () => {
    const ofVersion = document.getElementById('no-openfin');
    if (typeof fin !== 'undefined') {
        init();
    } else {
        ofVersion.innerText = 'OpenFin is not available - you are probably running in a browser.';
    }
});

function init () {
    const thisApp = fin.desktop.Application.getCurrent();
    fin.desktop.System.showDeveloperTools(thisApp.uuid, thisApp.uuid, () => { console.log('yes'); }, (e) => { console.log(e); });
    const thisWin = fin.desktop.Window.getCurrent();
    function buttonClickHandler() {
        thisWin.getState( state => {
            new fin.desktop.Window({
                url: 'child.html',
                name: Math.random().toString(),
                autoShow: true,
                state: state
            });
        });
    }

    function contextMenuHandler() {
        fin.desktop.System.getMousePosition(mousePosition => {
            new fin.desktop.Window({
                url: 'menu.html',
                name: Math.random().toString(),
                autoShow:true,
                defaultTop: mousePosition.top,
                defaultLeft: mousePosition.left,
                saveWindowState: false,
                frame: false,
                defaultHeight: 100,
                defaultWidth: 200,
                cornerRounding: {
                    height: 3,
                    width: 3
                }
            });
        });
    }

    const launchButton = document.getElementById('openWin');
    const childWindowAnchor = document.getElementById('childWindowAnchor');
    launchButton.onclick = buttonClickHandler;
    childWindowAnchor.addEventListener('contextmenu', contextMenuHandler);
}
