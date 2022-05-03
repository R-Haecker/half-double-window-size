function setHalfWidth(client) {
    client.geometry.width = Math.round(client.geometry.width/2);
}
function setDoubleWidth(client) {
    client.geometry.width = Math.round(client.geometry.width*2);
}
function setHalfHeight(client) {
    client.geometry.height = Math.round(client.geometry.height/2);
}
function setDoubleHeight(client) {
    client.geometry.height = Math.round(client.geometry.height*2);
}

registerShortcut("Halve Window Width",
                 "Halve Window Width",
                 "Meta+Shift+Num+Left",
                 () => {setHalfWidth(workspace.activeClient);});
registerShortcut("Double Window Width",
                 "Double Window Width",
                 "Meta+Shift+Num+Right",
                 () => {setDoubleWidth(workspace.activeClient);});
registerShortcut("Halve Window Height",
                 "Halve Window Height",
                 "Meta+Shift+Num+Down",
                 () => {setHalfHeight(workspace.activeClient);});
registerShortcut("Double Window Height",
                 "Double Window Height",
                 "Meta+Shift+Num+Up",
                 () => {setDoubleHeight(workspace.activeClient);});