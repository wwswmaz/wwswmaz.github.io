importScripts("https://lib.baomitu.com/clientworker/2.8.1/dist/cw.js"),navigator.serviceWorker?navigator.serviceWorker.register("/cw.js?t="+(new Date).getTime()).then((async e=>{if("true"!==localStorage.getItem("cw_installed")){const e=()=>{console.log("[CW] Installing Success,Configuring..."),fetch("/cw-cgi/api?type=config").then((e=>e.text())).then((t=>{"ok"===t?(console.log("[CW] Installing Success,Configuring Success,Starting..."),localStorage.setItem("cw_installed","true"),fetch(window.location.href).then((e=>e.text())).then((e=>{document.open(),document.write(e),document.close()}))):(console.warn("[CW] Installing Success,Configuring Failed,Sleeping 200ms..."),setTimeout((()=>{e()}),200))})).catch((e=>{console.log("[CW] Installing Success,Configuring Error,Exiting...")}))};setTimeout((()=>{e()}),50)}})).catch((e=>{console.error("[CW] Installing Failed,Error: "+e.message)})):console.error("[CW] Installing Failed,Error: Browser not support service worker");