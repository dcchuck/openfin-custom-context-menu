# Launch

```
npm install
node index.js
```

## Custom Context Menu

In the app.json `contextMenu: false` which disables default browser context menu

* Click to change window to child window, i.e. traditional navigation
* Right clicking will launch another openfin window targeting the menu.html asset, simulating the context menu behavior
* Event listeners focus the menu window but close it on blur, just like a context menu
* If you wanted to still include developer tools, etc. - there are openfin API calls for that so you could add them to the menu

## Sending State

The button will launch the child window and pass its state along to the new window
