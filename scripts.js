document.addEventListener('DOMContentLoaded', function() {
    // Function to create the personal-info window
    function createPersonalInfoWindow() {
        const personalInfoWindow = document.createElement('div');
        personalInfoWindow.id = 'personal-info';
        personalInfoWindow.classList.add('window', 'window-hidden');
        personalInfoWindow.innerHTML = `
            <div class="window-header">
                <div class="window-buttons">
                    <div class="close" onclick="closeApp(this)"></div>
                    <div class="minimize" onclick="minimizeApp(this)"></div>
                    <div class="zoom" onclick="maximizeApp(this)"></div>
                </div>
                <span class="window-title">About Randy</span>
            </div>
            <div class="window-content">
                <h2>Randy Hendriyawan</h2>
                <img src="https://lh3.googleusercontent.com/a/ACg8ocKru9O5NWtEUPLSXvl3Qe2R-7IaVDlvfCCIlA6D9A-L-dnEqQquBw=s288-c-no" alt="Your Photo" style="width: 150px;">
                <p>Mahasiswa</p>
                <p>20 Tahun</p>
                <p>Bandar Lampung</p>
                <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget erat consequat, consectetur elit ut, efficitur lectus. Sed varius dignissim tortor. Duis eu sem eu purus auctor suscipit.</p>
            </div>
            <div class="resize-handle resize-handle-top"></div>
            <div class="resize-handle resize-handle-right"></div>
            <div class="resize-handle resize-handle-bottom"></div>
            <div class="resize-handle resize-handle-left"></div>
            <div class="resize-handle resize-handle-top-left"></div>
            <div class="resize-handle resize-handle-top-right"></div>
            <div class="resize-handle resize-handle-bottom-left"></div>
            <div class="resize-handle resize-handle-bottom-right"></div>
        `;
        desktop.appendChild(personalInfoWindow);
        makeDraggable(personalInfoWindow);
        makeResizable(personalInfoWindow);
        return personalInfoWindow;
    }

    // Function to open applications
    window.openApp = function(appName) {
        if (appName === 'Safari') {
            window.open('https://id.linkedin.com/in/randyhendriyawan/in');
        } else if (appName === 'Personal Info') {
            let personalInfoWindow = document.getElementById('personal-info');
            if (!personalInfoWindow) {
                personalInfoWindow = createPersonalInfoWindow();
            }
            personalInfoWindow.classList.remove('window-hidden');
        } else {
            const appWindow = createWindow(appName);
            desktop.appendChild(appWindow);
            setTimeout(() => {
                appWindow.classList.remove('window-hidden');
            }, 10);
            makeDraggable(appWindow);
            makeResizable(appWindow);
        }
    };

    // Open Personal Info window automatically
    openApp('Personal Info');
});


function adjustDockSize() {
  const dock = document.getElementById('dock');
  const dockItems = dock.querySelectorAll('.dock-item');
  const dockWidth = dockItems.length * 70; // 50px width + 10px margin on each side + 10px extra padding
  dock.style.width = `${dockWidth}px`;
}




function createWindow(appName) {
  const appWindow = document.createElement('div');
  appWindow.classList.add('window', 'window-hidden');
  appWindow.innerHTML = `
      <div class="window-header">
          <div class="window-buttons">
              <div class="close" onclick="closeApp(this)"></div>
              <div class="minimize" onclick="minimizeApp(this)"></div>
              <div class="zoom" onclick="maximizeApp(this)"></div>
          </div>
          <span class="window-title">${appName}</span>
      </div>
      <div class="window-content"></div>
      <div class="resize-handle resize-handle-top"></div>
      <div class="resize-handle resize-handle-right"></div>
      <div class="resize-handle resize-handle-bottom"></div>
      <div class="resize-handle resize-handle-left"></div>
      <div class="resize-handle resize-handle-top-left"></div>
      <div class="resize-handle resize-handle-top-right"></div>
      <div class="resize-handle resize-handle-bottom-left"></div>
      <div class="resize-handle resize-handle-bottom-right"></div>
  `;
  return appWindow;
}

window.closeApp = function(button) {
  const appWindow = button.closest('.window');
  appWindow.classList.add('window-hidden');
  setTimeout(() => {
      appWindow.remove();
  }, 300);
};

window.minimizeApp = function(button) {
  const appWindow = button.closest('.window');
  appWindow.style.display = 'none';
};

window.maximizeApp = function(button) {
  const appWindow = button.closest('.window');
  if (appWindow.classList.contains('fullscreen')) {
      appWindow.classList.remove('fullscreen');
      appWindow.style.top = '100px';
      appWindow.style.left = '100px';
      appWindow.style.width = '500px';
      appWindow.style.height = 'auto';
  } else {
      appWindow.classList.add('fullscreen');
      appWindow.style.top = '0';
      appWindow.style.left = '0';
      appWindow.style.width = '100vw';
      appWindow.style.height = '100vh';
  }
};

function makeDraggable(element) {
  const header = element.querySelector('.window-header');
  header.onmousedown = function(event) {
      let shiftX = event.clientX - element.getBoundingClientRect().left;
      let shiftY = event.clientY - element.getBoundingClientRect().top;

      function moveAt(pageX, pageY) {
          element.style.left = pageX - shiftX + 'px';
          element.style.top = pageY - shiftY + 'px';
      }

      function onMouseMove(event) {
          moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      header.onmouseup = function() {
          document.removeEventListener('mousemove', onMouseMove);
          header.onmouseup = null;
      };
  };

  header.ondragstart = function() {
      return false;
  };
}

function makeResizable(element) {
  const resizers = element.querySelectorAll('.resize-handle');
  const minimumWidth = parseInt(getComputedStyle(element).minWidth);
  const minimumHeight = parseInt(getComputedStyle(element).minHeight);

  resizers.forEach(resizer => {
      resizer.addEventListener('mousedown', function(e) {
          e.preventDefault();
          const initialRect = element.getBoundingClientRect();
          const startX = e.clientX;
          const startY = e.clientY;
          const handle = resizer.className.split(' ')[1];

          function resize(event) {
              const deltaX = event.clientX - startX;
              const deltaY = event.clientY - startY;
              let newWidth, newHeight, newTop, newLeft;

              switch (handle) {
                  case 'resize-handle-top':
                      newHeight = initialRect.height - deltaY;
                      newTop = initialRect.top + deltaY;
                      break;
                  case 'resize-handle-right':
                      newWidth = initialRect.width + deltaX;
                      break;
                  case 'resize-handle-bottom':
                      newHeight = initialRect.height + deltaY;
                      break;
                  case 'resize-handle-left':
                      newWidth = initialRect.width - deltaX;
                      newLeft = initialRect.left + deltaX;
                      break;
                  case 'resize-handle-top-left':
                      newWidth = initialRect.width - deltaX;
                      newHeight = initialRect.height - deltaY;
                      newLeft = initialRect.left + deltaX;
                      newTop = initialRect.top + deltaY;
                      break;
                  case 'resize-handle-top-right':
                      newWidth = initialRect.width + deltaX;
                      newHeight = initialRect.height - deltaY;
                      newTop = initialRect.top + deltaY;
                      break;
                  case 'resize-handle-bottom-left':
                      newWidth = initialRect.width - deltaX;
                      newHeight = initialRect.height + deltaY;
                      newLeft = initialRect.left + deltaX;
                      break;
                  case 'resize-handle-bottom-right':
                      newWidth = initialRect.width + deltaX;
                      newHeight = initialRect.height + deltaY;
                      break;
              }

              if (newWidth >= minimumWidth || newWidth === undefined) {
                  element.style.width = `${newWidth}px`;
              }

              if (newHeight >= minimumHeight || newHeight === undefined) {
                  element.style.height = `${newHeight}px`;
              }

              if (newLeft !== undefined) {
                  element.style.left = `${newLeft}px`;
              }

              if (newTop !== undefined) {
                  element.style.top = `${newTop}px`;
              }
          }

          function stopResize() {
              document.removeEventListener('mousemove', resize);
              document.removeEventListener('mouseup', stopResize);
          }

          document.addEventListener('mousemove', resize);
          document.addEventListener('mouseup', stopResize);
      });
  });
}
