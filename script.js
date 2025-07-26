// Disable Right-Click
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
    alert('Right-click is disabled on this page');
});

// Disable Text Selection
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
});

// Prevent Fullscreen on Video
var video = document.querySelector('video');
if (video) {
    video.addEventListener('fullscreenchange', function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    });
}

// Optional: Attempt screen capture detection (very limited)
if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    navigator.mediaDevices.enumerateDevices().then(devices => {
        devices.forEach(device => {
            if (device.kind === 'videoinput') {
                device.deviceId = '';
            }
        });
    });
}
