/* */


import {mgc} from "./dt/magicNum.js";
import {Scene} from "./scene.js";
import {GUI} from "./gui.js";
import {Figure} from "./figure.js";


class Main
{
  /* ... */
  constructor() 
  {
    mgc.scene = new Scene("scene");
    mgc.gui = new GUI();
    mgc.figure = new Figure();

    this.readDtFromClipboard();
    // this.updatePage();
    this.lockSelectionText();
  }

  /* /// */
  start()
  {
    if (mgc.gui.accessToClipboard)
    {
      mgc.gui.start();
      mgc.scene.createScene();
      
      mgc.figure.addGeometry(Number("0"));

      mgc.scene.enabledOrbitControls();

      mgc.scene.render();
    }
  }

  /* /// */
  startUpdate()
  {
    mgc.scene.enabledOrbitControls();
  }

  /* /// */
  stopUpdate()
  {
    mgc.scene.disableOrbitControls();
  }

  /* Спросить, можно ли читать данные из буффера обмена? */
  readDtFromClipboard()
  {
    navigator.clipboard.readText().catch(() => {});

    const PERMISSIONS = [{name: "clipboard-read"}];

    Promise.all(PERMISSIONS.map(descriptor => navigator.permissions.query(descriptor)))
      .then((permissions) => 
      {
        permissions.forEach((status) =>
        {        
          // Если статус разрешения изменился
          status.onchange = () => 
          {
            if (status.state == "granted")
            {
              mgc.gui.accessToClipboard = true;

              if (mgc.scene.scene == null)
                mgc.main.start();
              else 
                mgc.main.startUpdate();

              mgc.gui.shGUI(true);
            }
            else if (status.state == "denied")
            {
              mgc.gui.accessToClipboard = false;

              if (mgc.scene.scene != null)
                mgc.main.stopUpdate();

              mgc.gui.shGUI(false);
            }
          };
          status.onchange();
        });
      });
  }

  /* Предупредить перед обновлением страницы */
  updatePage()
  {
    window.onbeforeunload = function () { return ""; };
  }

  /* Для блокировки выделения текста */
  lockSelectionText()
  {
    document.ondragstart=noselect;
    document.onselectstart=noselect;
    document.oncontextmenu=noselect;
    function noselect(){return false;}
  }
}

export {Main};
