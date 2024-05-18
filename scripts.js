document.addEventListener('DOMContentLoaded', function() {
  const desktop = document.getElementById('desktop');

  function createWindow(appName) {
    const window = document.createElement('div');
    window.classList.add('window', 'window-hidden');
    window.innerHTML = `
            <div class="window-header">
                <div class="window-buttons">
                    <div class="close" onclick="closeApp(this)"></div>
                    <div class="minimize" onclick="minimizeApp(this)"></div>
                    <div class="zoom" onclick="zoomApp(this)"></div>
                </div>
            </div>
            <div class="window-content">
                <p>${appName} is now open!</p>
            </div>
        `;
    return window;
  }

  window.openApp = function (appName) {
      if (appName === "Safari") {
          window.open("https://id.linkedin.com/in/randyhendriyawan/in", "_blank");
      } else {
          const appWindow = createWindow(appName);
          desktop.appendChild(appWindow);
          setTimeout(() => {
              appWindow.classList.remove('window-hidden');
          }, 10);
          makeDraggable(appWindow);
      }
  };

  
  window.closeApp = function(button) {
    const appWindow = button.closest('.window');
    appWindow.classList.add('window-hidden');
    setTimeout(() => {
      appWindow.remove();
    }, 300);
  };

  window.minimizeApp = function(button) {
    const appWindow = button.closest('.window');
    appWindow.style.transform = 'scale(0.8)';
  };

  window.zoomApp = function(button) {
    const appWindow = button.closest('.window');
    if (appWindow.classList.contains('window-maximized')) {
      appWindow.style.width = '500px';
      appWindow.style.height = '300px';
      appWindow.classList.remove('window-maximized');
    } else {
      appWindow.style.width = '100%';
      appWindow.style.height = 'calc(100% - 24px)';
      appWindow.style.top = '24px';
      appWindow.style.left = '0';
      appWindow.classList.add('window-maximized');
    }
  };

  function makeDraggable(window) {
    const header = window.querySelector('.window-header');
    let isDragging = false;
    let offsetX, offsetY;

    header.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - window.offsetLeft;
      offsetY = e.clientY - window.offsetTop;
      window.style.zIndex = 1000; // Bring window to the front
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        window.style.left = `${e.clientX - offsetX}px`;
        window.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      window.style.zIndex = 1; // Reset z-index
    });
  }
});
