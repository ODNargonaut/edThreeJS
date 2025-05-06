/* Отвечает за весь UI в "edThreeJS" */

import {mgc} from "./dt/magicNum.js";
import {mdl} from "./modules/mainModules.js";


class GUI
{
  // все интерфейсы
  interface =
  {
    leftPanel: true,
    rightPanel: true,
    menuAddGeom: false,
    paletteClr: false,
    vertices: 
    {
      menu: false, 
      historyOV: false,
      blSetPrm: false
    },
    warning: 
    {
      clipboard: false,
      winNoFocus: false
    }
  };

  // Первая заглавная буква
  firstUpperCase = (str) => { return str[0].toUpperCase() + str.slice(1); };

  selectedTitle = // this.resetSelectedTitle()
  {
    b: false, 
    id: "", 
    o: null
  };

  selectedSection = 
  {
    pos: false,
    rot: false,
    prm: false,
    verti: false
  };

  selectedArg = 
  {
    id: {c: "#", t: ""},
    b: false,
    arg: "",
    type: ""
  };

  selectedHisOV = 
  {
    id: "",
    key: -1,
    b: false,
    ignoreCheck: false
  };
  
  btnDelT = false;

  setNewTitle = 
  {
    t: {current: "", new: ""},
    countClick: 0,
    idTime: {id: null, sec: 800},
    b: false,
    o: null
  };

  cpElm = false;

  mvElm = 
  {
    b: false
  };

  inputField = 
  {
    minus: false,
    point: false,
    posCur: -1,
    delCh: "",        // запоминем символ перед его удалением
    rememberTFC: "",  // rememberTFC - rememberTextFromClipboard
    minusTFC: false,
    pointTFC: false,
    focusId: null
  };

  // доступ к буферу обмена
  accessToClipboard = false;

  palette = 
  {
    clr: 
    {
      R: 255, 
      G: 255, 
      B: 255,
      hex: "FFFFFF"
    },
    WIDTH: 264,  // ширина блока
    slider: 
    {
      R: 
      {
        c: "R",
        b: false, 
        offset: 0,         // смещение ползунка
        offsetScrSaver: 5  // смещение заставки
      },
      G:
      {
        c: "G",
        b: false,
        offset: 0,         // смещение ползунка
        offsetScrSaver: 5  // смещение заставки
      },
      B:
      {
        c: "B",
        b: false,
        offset: 0,         // смещение ползунка
        offsetScrSaver: 5  // смещение заставки
      },
      min: 0, max: 255,    // min/max смещение ползунка
      offset: 1,
      btnL: false,
      btnScr: true
    },
    mouse:
    {
      x: 0,
      prevPos: 0, nextPos: 0
    },
    screenSaver:
    {
      w: {min: 268, max: 16},
      offset: {min: 5, max: 258}
    },
    historyClr:
    {
      arr: [],
      len: 0
    },
    inpHex: 
    {
      maxLen: 0,
      hashtag: false,
      idTime: null
    }
  };

  keypad = 
  {
    KEY_BACKSPACE: 8, KEY_DELETE: 46, KEY_TAB: 9, KEY_ENTER: 13, KEY_ESC: 27,
    KEY_ARROW_L: 37, KEY_ARROW_R: 39, KEY_ARROW_U: 38, KEY_ARROW_D: 40,
    KEY_HASHTAG: 51, KEY_MINUS: 189, KEY_MINUS_2: 45, KEY_POINT: 190, KEY_POINT_2: 46,
    KEY_0: 48, KEY_1: 49, KEY_2: 50, KEY_3: 51, KEY_4: 52, KEY_5: 53, KEY_6: 54, 
    KEY_7: 55, KEY_8: 56, KEY_9: 57,
    KEY_A: 65, KEY_B: 66, KEY_C: 67, KEY_D: 68, KEY_E: 69, KEY_F: 70,
    KEY_a: 97, KEY_b: 98, KEY_c: 99, KEY_d:100, KEY_e:101, KEY_f: 102,
    KEY_V: 86
  };


  /* ... */
  constructor() { }

  /* /// */
  resetSelectedTitle()
  {
    this.shBtnDeselect(false);
    this.shBtnDeleteTitle(false);
    this.shBtnCopy(false);
    this.shBtnMove(false);

    this.removeNodeBtnSetNewTitleLOs();

    this.resetArgPrm();

    this.clearAllSection();

    mgc.figure.resetDtMV();
    mgc.figure.resetSelectedGeometry();

    // Удобно, когда все находится в одном экземпляре.
    this.selectedTitle = {b: false, id: "", o: null};
  }

  /* /// */
  start()
  {
    this.addNodeMouseInBody();
    this.addNodeBtnAddGeometry();
    this.addNodeRollUpLeftPanel();
    this.addNodeRollUpRightPanel();
    this.addNodeClosePaletteClrs();
    this.addNodeBtnCreateFigure();
    this.addNodeBtnAddGrp();
    this.addNodeBtnDeselectTitleLOs();
    this.addNodeBtnCopy();
    this.addNodeBtnMove();
    this.addNodeTitleParameters();
    this.addNodesInPaletteClrs();
    this.addNodeShowVertices();

    // this.shBlVertices(true);
  }

  /* /// */
  getClrInHex(R, G, B)
  {
    let getHex = (n) => { return n.toString(16).toLocaleUpperCase(); };

    let r = getHex(R);
    let g = getHex(G);
    let b = getHex(B);

    r = (r.length==1 ? '0'+r : r);
    g = (g.length==1 ? '0'+g : g);
    b = (b.length==1 ? '0'+b : b);

    return (r+g+b);
  }

  /* /// */
  translateHexInRGBAndShow(s)
  {
    s = s.slice(s[0]=='#' ? 1 : 0);

    let ch1 = s[0]+s[1];
    let ch2 = s[2]+s[3];
    let ch3 = s[4]+s[5];

    let R = parseInt(ch1, 16);
    let G = parseInt(ch2, 16);
    let B = parseInt(ch3, 16);

    this.setColorForPalette(R, G, B);
  }

  /* /// */
  getPatternHTML(id, NId, name, json)
  {
    let p = "";
    p += '<tr class="'+id+'">';
    p += '<td class="deleteElem deleteElem_'+NId+'" title="Удалить">';
    p += '<code class="deleteElemT_'+NId+'"><span class="hideLine">_</span></code></td>';
    p += '<td id="'+mgc.figure.byDefaultIdTL.t+NId+'" class="titleObj" data-list_ind=\''+json+'\' ';
    p += 'title="Нажми два раза, чтобы переименовать. Когда закончишь нажми Esc/Enter">';
    p += '<code>'+name+'</code>';
    p += '</td></tr>';

    return p;
  }

  /* /// */
  addHTMLElm(id, NId, name, json, type)
  {
    let p = this.getPatternHTML(id, NId, name, json);

    if (type == "grp")
    {
      p += '<tr class="'+id+'"><td></td>';
      p += '<td><table><tbody class="'+mgc.figure.byDefaultIdGL.t+NId+'"></tbody></table></td></tr>';
    }

    if (this.selectedTitle.b && this.selectedTitle.o.type == "grp")
    {
      $(mgc.figure.byDefaultIdGL.sum+this.selectedTitle.o.id.n).append(p);
    }
    else
      $(".tbodyListObjs").append(p);

    this.addNodeSelectTitleListObjs(NId);
  }

  /* /// */
  addTitleListObjs(id, NId, name, json)
  {
    this.addHTMLElm(id, NId, name, json, "elm");
  }

  /* /// */
  addGroupInListObjs(id, NId, name, json)
  {
    this.addHTMLElm(id, NId, name, json, "grp");
  }

  /* /// */
  gsTitle(change=false)
  {
    let selObj = this.selectedTitle;
    let lvl = selObj.o.level.length;
    let o = mgc.figure.listCreatedFigures[selObj.o.l];

    if (lvl > 0)
    {
      for (let i = 0; i < lvl; ++i)
      {
        let indArr = selObj.o.level[i].indArr;
        o = o.arr[indArr];
      }
    }

    if (change)
      o.title.t = this.setNewTitle.t.new;
    else
      return o.title.t;
  }

  /* /// */
  enableSetNewTitle() 
  {
    this.removeNodeBtnSetNewTitleLOs();
    this.setNewTitle.b = true;

    this.setNewTitle.t.current = this.gsTitle();
    
    let id = this.selectedTitle.id;

    $(id).empty();
    $(id).append('<input class="snt_setNewTitle" type="text" value="'+this.setNewTitle.t.current+'" />');
    $("input").focus();

    this.addNodeKeypadEnterInput();
  }

  /* /// */
  disableSetNewTitle(change=false)
  {
    this.setNewTitle.b = false;

    this.setNewTitle.t.new = this.setNewTitle.t.current;

    if (change)
    {
      let s = $(".snt_setNewTitle").val().trim();
      this.setNewTitle.t.new = (s.length==0?"Неизвестный":s);
    }

    let id = this.selectedTitle.id;

    $(id).empty();

    this.gsTitle(true);
    $(id).append('<code>'+this.setNewTitle.t.new+'</code>');

    this.setNewTitle.t.current = "";
    this.setNewTitle.t.new = "";
  }

  /* /// */
  updatePrmFigureInGUI()
  {
    mgc.figure.selectedGeometry();

    let o = mgc.figure.selGeom;

    if (o.geom.object3D != null)
    {
      let pos = o.geom.object3D.position;
      let rot = o.geom.object3D.rotation;
      let prm = null;

      if (this.selectedTitle.o.type == "elm")
      {
        prm = o.geom.object3D.children[1].geometry.parameters;

        $("#inpRVerti").val(o.geom.vertices.point.r);
        $("#inpOffsetVerti").val(o.geom.vertices.point.step);

        $(".tHistoryOV").empty();
      }

      this.addNodeCheckboxPos();
      this.addNodeCheckboxRot();

      $("#inpPosX").val(pos.x);
      $("#inpPosY").val(pos.y);
      $("#inpPosZ").val(pos.z);

      $("#inpRotX").val(rot.x);
      $("#inpRotY").val(rot.y);
      $("#inpRotZ").val(rot.z);

      switch(o.geom.title.n)
      {
        case 0:
        {
          this.addNodeCheckboxPrmBox();

          let wSeg = prm.widthSegments;
          let hSeg = prm.heightSegments;
          let dSeg = prm.depthSegments;

          $("#inpBoxW").val(prm.width);
          $("#inpBoxH").val(prm.height);
          $("#inpBoxD").val(prm.depth);
          $("#inpBoxWSeg").val(wSeg);
          $("#inpBoxHSeg").val(hSeg);
          $("#inpBoxDSeg").val(dSeg);

          let changed = o.geom.vertices.changed;
          if (changed.total > 0)
          {
            for (let k in changed)
            {
              if (k == "current" || k == "total")
                continue;

              this.getPatternHistoryOV(k, changed[k].title);
            }

            this.gsDtForSelHisOV("set");
          }
          
          break;
        }
        // ...
      }

      if (this.selectedTitle.o.type == "elm")
      {
        this.shIndicatorSHVerti(o.geom.vertices.point.b);
        mgc.figure.changeColorGeometry();
      }
    }
  }

  /* /// */
  setValByD(type)
  {
    let sa = this.selectedArg;

    switch(type.n)
    {
      // Box
      case 0:
      {
        let vwSeg = $("#inpBoxWSeg").val();
        let vhSeg = $("#inpBoxHSeg").val();
        let vdSeg = $("#inpBoxDSeg").val();

        let wSeg = +vwSeg;
        let hSeg = +vhSeg;
        let dSeg = +vdSeg;

        if ((vwSeg.length == 0 && sa.arg != "wSeg") || (wSeg <= 0 && sa.arg == "wSeg"))
          $("#inpBoxWSeg").val("1");

        if ((vhSeg.length == 0 && sa.arg != "hSeg") || (hSeg <= 0 && sa.arg == "hSeg"))
          $("#inpBoxHSeg").val("1");

        if ((vdSeg.length == 0 && sa.arg != "dSeg") || (dSeg <= 0 && sa.arg == "dSeg"))
          $("#inpBoxDSeg").val("1");

        break;
      }
    }
  }

  /* /// */
  checkStrFieldPrm(s)
  {
    let sLen = s.length;
    if (sLen == 0 || sLen == 1 && s[0] == '-' || s[0] == '-' && s[1] == '.')
      return false;

    return true;
  }

  /* /// */
  selectArgPrm(Elm)
  {
    let sa = this.selectedArg

    sa.b = true;
    sa.id.t = $(Elm).attr("id");
    sa.arg = (document.getElementById(sa.id.t).hasAttribute("data-arg") ? $(Elm).attr("data-arg") : "");
    sa.type = $(Elm).attr("data-type");
  }

  /* /// */
  resetArgPrm()
  {
    let sa = this.selectedArg;
    sa.id.t = "";
    sa.arg = "";
    sa.b = false;
    sa.type = "";
  }

  /* /// */
  selectElmFromHisOV(key)
  {
    let selHisOV = this.selectedHisOV;

    $(selHisOV.id).css("background-color", "#ff2c2c");

    selHisOV.key = key;
    selHisOV.id = ".bl_indicatorOffsetVerti_"+key;
    selHisOV.b = true;

    $(selHisOV.id).css("background-color", "#17c117");
  }

  /* /// */
  resetHisOV()
  {
    let selHisOV = this.selectedHisOV;
    
    $(selHisOV.id).css("background-color", "#ff2c2c");

    selHisOV.key = -1;
    selHisOV.id = "";
    selHisOV.b = false;
  }

  /* /// */
  gsDtForSelHisOV(action)
  {
    if (mgc.figure.selGeom != null && mgc.figure.selGeom.type == "elm")
    {
      let selHisOV = this.selectedHisOV;
      let geomSelOV = mgc.figure.selGeom.geom.vertices.selectOV;

      if (action == "get")
      {
        geomSelOV.id = selHisOV.id;
        geomSelOV.key = selHisOV.key;
        geomSelOV.b = selHisOV.b;
        geomSelOV.ignoreCheck = selHisOV.ignoreCheck;
      }
      else if (action == "set")
      {
        selHisOV.id = geomSelOV.id;
        selHisOV.key = geomSelOV.key;
        selHisOV.b = geomSelOV.b;
        selHisOV.ignoreCheck = geomSelOV.ignoreCheck;

        $(selHisOV.id).css("background-color", "#"+(selHisOV.b?"17c117":"ff2c2c"));
      }
    }
  }

  /* /// */
  getPatternPrm(type, tId, title, arg, idInp, obj={addOffset: false, addBtnReset: false})
  {
    let p = "";
    p += '<tr><td><code>'+title+':</code></td>';
    p += '<td><code style="visibility: hidden"></code>';
    p += '<input id="'+idInp+'" class="inpDesign" type="text" data-arg="'+arg+'" data-type="'+type+'" /></td>';
    p += '<td>';

    if (Object.hasOwn(obj, "addBtnReset") && obj.addBtnReset)
    {
      p += '<div id="btnResetValPrm_'+type+'_'+arg+'" class="btnDesignResetValPrm">';
      p += '<code class="TResetValPrm">Reset</code></div>'
    }

    p += '</td></tr>';

    if (Object.hasOwn(obj, "addOffset") && obj.addOffset)
    {
      p += '<tr>';
      p += (type=="prm"||type=="verti"?'':'<td></td>');
      p += '<td><code>Offset:</code>';
      p += '<input id="inpOffset'+this.firstUpperCase(type)+'" class="inpOffset" data-type="'+type+'" ';
      p += 'type="text" /></td></tr>';
    }

    $(tId).append(p);
  }

  /* /// */
  getPatternHistoryOV(key, title, b=false)
  {
    let _this = this;

    let idDel = "bl_historyOV_1_"+key;
    let idSel = "bl_historyOV_2_"+key;
    let idIndicator = "bl_indicatorOffsetVerti_"+key;

    let p = "";
    p += '<tr class="tr_historyOV_'+key+'">';
    p += '<td class="bl_historyOV_1 '+idDel+'" title="Удалить" data-key="'+key+'">';
    p += '<code class="T_historyOV_1">x</code></td>';
    p += '<td class="bl_historyOV_2 '+idSel+'" data-key="'+key+'" data-indicator=".'+idIndicator+'">';
    p += '<code class="T_historyOV_2">'+title+'</code>';
    p += '<div class="bl_indicatorOffsetVerti '+idIndicator+'" style="background-color: #'+(b?"17c117":"ff2c2c")+'"></div>';
    p += '</td></tr>';

    $(".tHistoryOV").append(p);

    if (b)
      this.selectElmFromHisOV(key);

    $('.'+idDel).on("click", function()
    {
      let selHisOV = _this.selectedHisOV;

      let key = $(this).attr("data-key");

      if (key == selHisOV.key)
        _this.resetHisOV();

      $(".tr_historyOV_"+key).remove();
      mgc.figure.delElmFromHisOV(key);
    });
    
    $('.'+idSel).on("click", function()
    {
      let selHisOV = _this.selectedHisOV;

      if (selHisOV.b)
        $(selHisOV.id).css("background-color", "#ff2c2c");

      let key = $(this).attr("data-key");
      let idIndicator = $(this).attr("data-indicator");

      if (key != selHisOV.key)
      {
        selHisOV.key = key;
        selHisOV.id = idIndicator;
        selHisOV.b = true;
        $(selHisOV.id).css("background-color", "#17c117");

        switch(mgc.figure.selGeom.geom.title.n)
        {
          // Box
          case 0:
          {
            let changed = mgc.figure.selGeom.geom.vertices.changed;
            let o = changed[key];

            $("#inpBoxWSeg").val(o.wSeg);
            $("#inpBoxHSeg").val(o.hSeg);
            $("#inpBoxDSeg").val(o.dSeg);

            break;
          }

          // ...
        }
      }
      else
      {
        _this.resetHisOV();
        mgc.gui.selectedHisOV.ignoreCheck = true;
      }

      mgc.figure.shOffsetForAllVerti();

      mgc.gui.selectedHisOV.ignoreCheck = false;
    });
  }

  /* /// */
  handForSlider(slider)
  {
    let p = this.palette;

    if (slider.b)
    {
      let id = ".blScreenSaverForRange_"+slider.c;
      let w = $(id).width();

      p.mouse.nextPos = p.mouse.x;

      if (p.mouse.nextPos > p.mouse.prevPos)
      {
        slider.offset += p.slider.offset;

        w -= p.slider.offset;

        slider.offsetScrSaver += p.slider.offset;

        if (slider.offset >= p.slider.max)
        {
          slider.offset = p.slider.max;
          slider.offsetScrSaver = p.screenSaver.offset.max;
          w = p.screenSaver.w.max;
        }
      }
      else if (p.mouse.nextPos < p.mouse.prevPos)
      {
        slider.offset -= p.slider.offset;

        w += p.slider.offset;

        slider.offsetScrSaver -= p.slider.offset;

        if (slider.offset <= p.slider.min)
        {
          slider.offset = p.slider.min;
          slider.offsetScrSaver = p.screenSaver.offset.min;
          w = p.screenSaver.w.min;
        }
      }

      $(id).css("width", w+"px");
      $(id).css("margin", "2px "+slider.offsetScrSaver+"px");
      $(".slider_"+slider.c).css("margin", "3px "+slider.offset+"px");

      p.mouse.prevPos = p.mouse.nextPos;
    }
  }

  /* /// */
  setColorForPalette(R, G, B)
  {
    let p = mgc.gui.palette;
    
    p.clr.R = R;
    p.clr.G = G;
    p.clr.B = B;
    p.clr.hex = this.getClrInHex(R, G, B);

    $(".blWinClr").css("background-color", "#"+p.clr.hex);

    let clr = 
    [
      {c: 'R', n: R, o: p.slider.R}, 
      {c: 'G', n: G, o: p.slider.G}, 
      {c: 'B', n: B, o: p.slider.B}
    ];

    for (let i = 0; i < "RGB".length; ++i)
    {
      let n = clr[i].n;
      let o = clr[i].o;
       
      let w = p.screenSaver.w.min - n;
      o.offset = n;
      o.offsetScrSaver = p.screenSaver.offset.min + n;

      if (o.offset >= p.slider.max)
      {
        o.offset = p.slider.max;
        o.offsetScrSaver = p.screenSaver.offset.max;
        w = p.screenSaver.w.max;
      }
      else if (o.offset <= p.slider.min)
      {
        o.offset = p.slider.min;
        o.offsetScrSaver = p.screenSaver.offset.min;
        w = p.screenSaver.w.min;
      }

      $(".blScreenSaverForRange_"+clr[i].c).css("width", w+"px");
      $(".blScreenSaverForRange_"+clr[i].c).css("margin", "2px "+o.offsetScrSaver+"px");
      $(".slider_"+clr[i].c).css("margin", "3px "+o.offset+"px");
    }

    $(".inpClrHex").val("#"+p.clr.hex);

    mgc.figure.previewChangeColorGeometry();
  }

  /* /// */
  showSelectedColorGeometry()
  {
    this.shPaletteClrs(true);

    let _this = this;

    let selGeom = mgc.figure.selGeom;

    let R = selGeom.geom.color.R;
    let G = selGeom.geom.color.G;
    let B = selGeom.geom.color.B;

    this.setColorForPalette(R, G, B);
    
    this.palette.inpHex.hashtag = true;
    this.palette.inpHex.maxLen = 7;
    
    let historyClr = this.palette.historyClr;

    if (historyClr.len < historyClr.arr.length)
    {
      let N = historyClr.arr.length;
      let color = this.palette.historyClr.arr[N-1];

      let R = color.R;
      let G = color.G;
      let B = color.B;

      let hex = this.getClrInHex(R, G, B);

      let p = "";
      p += '<tr>';
      p += '<td class="tegTDForHis"><code class="historyNT">'+N+'</code></td>';
      p += '<td><div class="bl_createClr bl_createClr_'+N+'" ';
      p += 'style="background-color: #'+hex+';" data-r="'+R+'" data-g="'+G+'" data-b="'+B+'"></div>';
      p += '</td></tr>'

      $(".blHistoryClrs").append(p);

      $(".bl_createClr_"+N).on("click", function()
      {
        let R = +$(this).attr("data-r");
        let G = +$(this).attr("data-g");
        let B = +$(this).attr("data-b");

        _this.setColorForPalette(R, G, B);
      });

      historyClr.len = historyClr.arr.length;
    }
  }

  /* /// */
  changeColorGeometry()
  {
    let p = this.palette;

    p.clr.R = p.slider.R.offset;
    p.clr.G = p.slider.G.offset;
    p.clr.B = p.slider.B.offset;

    let hex = this.getClrInHex(p.clr.R, p.clr.G, p.clr.B);

    this.palette.clr.hex = hex;

    $(".blWinClr").css("background-color", "#"+hex);
    $(".inpClrHex").val("#"+hex);

    mgc.figure.previewChangeColorGeometry();
  }

  /* /// */
  clearAllSection()
  {
    if (this.selectedSection.pos)
      this.shBlPrmInRightPanel("pos", ".arrowPos", ".blParametersPos");

    if (this.selectedSection.rot)
      this.shBlPrmInRightPanel("rot", ".arrowRot", ".blParametersRot");

    if (this.selectedSection.prm)
      this.shBlPrmInRightPanel("prm", ".arrowPrm", ".blParametersFigure");

    if (this.selectedSection.verti)
      this.shBlPrmInRightPanel("posVerti", ".arrowVerti", ".blParametersVerti");

    $(".tPrmsPos").empty();
    $(".tPrmsRot").empty();
    $(".tPrmsFigure").empty();
    $(".tPrmsVerti").empty();
  }

  /* /// */
  moveGeometryInSpace()
  {
    if (this.selectedTitle.b && this.selectedArg.type == "pos")
      mgc.figure.moveGeometryByXYZ();
  }

  /* /// */
  rotationGeometryInSpace()
  {
    if (this.selectedTitle.b && this.selectedArg.type == "rot")
      mgc.figure.rotationGeometryByXYZ();
  }

  /* /// */
  changePrmGeometry()
  {
    if (this.selectedTitle.b && this.selectedArg.type == "prm")
      mgc.figure.updateDtGeometry();
  }

  /* /// */
  changeSzVertisInGeom()
  {
    if (this.selectedTitle.b && this.selectedArg.type == "verti")
      mgc.figure.changeSizeVerticesInGeometry();
  }

  /* /// */
  moveVerticesInGeometryInSpace()
  {
    if (this.selectedTitle.b && mgc.figure.selVertix.b && this.selectedArg.type == "posVerti")
      mgc.figure.moveVerticesByXYZ();
  }

  /* /// */
  resetPrmInGeom(idInp, arg, type)
  {
    $(idInp).val("0");

    this.selectedArg.arg = arg;
    this.selectedArg.type = type;
    
    switch(type)
    {
      case "pos":      this.moveGeometryInSpace();           break;
      case "rot":      this.rotationGeometryInSpace();       break;
      case "posVerti": this.moveVerticesInGeometryInSpace(); break;
    }

    mgc.scene.render();

    this.resetArgPrm();
  }

  /* /// */
  colorizeBorderField(id, b=false)
  {
    if (id != null)
    {
      $(this.inputField.focusId).css("outline", "none").css("border", "1px solid #605f5f");
      if (b)
        $(id).css("border", "1px solid #27f918");
    }
  }

  /* /// */
  focusField(idInp, b)
  {
    if (document.hasFocus())
    {
      if (b)
      {
        this.colorizeBorderField(idInp, true);
        this.checkTextFromClipboard(true);
        $(idInp).focus();

        this.inputField.focusId = idInp;
      }
      else
      {
        this.colorizeBorderField(idInp);
        this.checkTextFromClipboard(false, idInp);
        $(idInp).blur();

        this.inputField.focusId = null;
      }
    }
    else
      this.shWarningForWinNoFocus();
  };

  /* /// */
  checkTextFromClipboard(check, Elm=null)
  {
    if (check)
    {
      navigator.clipboard.readText().then((result) =>
      {
        this.inputField.rememberTFC = (""+result).trim();

        let buf = this.inputField.rememberTFC;
        let kp = this.keypad;
        
        let countMinus = 0;
        let countPoint = 0;

        let checkSymb = () => 
        {
          for (let i = 0; i < buf.length; ++i)
          {
            let chCode = buf[i].charCodeAt();
  
            switch(chCode)
            {
              case kp.KEY_0: case kp.KEY_1: case kp.KEY_2: case kp.KEY_3: case kp.KEY_4: 
              case kp.KEY_5: case kp.KEY_6: case kp.KEY_7: case kp.KEY_8: case kp.KEY_9:
              case kp.KEY_MINUS_2: case kp.KEY_POINT_2:
              {
                if (chCode == kp.KEY_MINUS_2)
                {
                  if (i == 0) countMinus++;
                  else return true;
                }
                else if (chCode == kp.KEY_POINT_2)
                {
                  countPoint++;
                  
                  if (i == 0 || i == 1 && buf[0] == '-') return true;
                }

                break;
              }
              default:
                return true;
            }
          }
   
          return (countPoint > 1 ? true : false);
        };

        let error = checkSymb();

        if (!error)
        {
          this.inputField.minusTFC = (countMinus==1?true:false);
          this.inputField.pointTFC = (countPoint==1?true:false);
        }
        else
        {
          navigator.clipboard.writeText("").catch(() => {});
        }
      })
      .catch(() => {});
    }
    else
    {
      navigator.clipboard.readText().then((result) =>
      {
        let s = (""+result).trim();
        if (s.length == 0)
          navigator.clipboard.writeText(this.inputField.rememberTFC).catch(() => {});
      });

      let s = $(Elm).val();
      if (!this.checkStrFieldPrm(s))
        $(Elm).val("0");

      let sa = this.selectedArg;
      if (sa.b)
      {
        if (sa.type == "prm")
          this.setValByD(mgc.figure.selGeom.geom.title);

        this.moveGeometryInSpace();
        this.rotationGeometryInSpace();
        this.changePrmGeometry();
        this.changeSzVertisInGeom();
        this.moveVerticesInGeometryInSpace();
      }
    }
  }

  /* /// */
  display(id, b) { $(id).css("display", (b?"block":"none")); }

  /* /// */
  shCheckBox(id, b) { $(id).html(b?"[o]":"[-]"); };

  /* /// */
  shLeftPanel(b)
  {
    this.shBtnAddGeometry(b);
    this.shBtnAddGrp(b);
    this.shBtnDeselect(b);
    this.shBtnCopy(b);
    this.shBtnMove(b);
    this.shBlListObjs(b);

    this.interface.leftPanel = b;
  }

  /* /// */
  shRightPanel(b)
  {
    this.shBtnOpenUIVertix(b);
    this.shBlListPrms(b);

    this.interface.rightPanel = b;

    if (b)
      this.shBtnOpenUIVertix(b);
  }

  /* /// */
  shBlListObjs(b)
  {
    this.display(".blListObjs", b);
    $(".leftPanel").css("height", (b?"100%":"33px"));
  }

  /* /// */
  shBlListPrms(b)
  {
    this.display(".blListParameters", b);
    $(".rightPanel").css("height", (b?"100%":"33px"));
  }

  /* /// */
  shBlLeftPanel(b)
  {
    this.display(".leftPanel", b);
  }

  /* /// */
  shBlRightPanel(b)
  {
    this.display(".rightPanel", b); 
  }

  /* /// */
  shBlListFigures(b)
  {
    this.shBtnRollUpLeftPanel(!b);
    this.shBlListObjs(!b);
    this.shBtnDeselect(!b)
    this.shBtnAddGrp(!b);
    this.shBtnCopy(!b);
    this.shBtnMove(!b);

    this.display(".bl_listFigures", b);

    this.interface.menuAddGeom = b;
  }

  /* /// */
  shBtnRollUpLeftPanel(b)
  {
    this.display(".btnRollUpLeftPanel", b);
  }

  /* /// */
  shBtnRollUpRightPanel(b)
  {
    this.display(".btnRollUpRightPanel", b);
  }

  /* /// */
  shBtnClosePaletteClrs(b)
  {
    this.display(".btnClosePaletteClrs", b);
  }

  /* /// */
  shBtnCloseUIVertix(b)
  {
    this.display(".btnCloseUIVertix", b);
  }

  /* /// */
  shBtnOpenUIVertix(b)
  {
    if (this.selectedTitle.b && this.selectedTitle.o.type == "elm" && this.interface.rightPanel)
      this.display(".btnOpenUIVertix", b)
  }

  /* /// */
  shBtnAddGeometry(b)
  {
    this.display(".btnAddGeometry", b);
  }

  /* /// */
  shBtnAddGrp(b)
  {
    this.display(".btnAddGrp", b);
  }

  /* /// */
  shBtnDeselect(b)
  {
    this.display(".btnDeselect", (b && this.selectedTitle.b));
  }

  /* /// */
  shBtnCopy(b)
  {
    if (this.selectedTitle.b && this.selectedTitle.o.type == "elm")
      this.display(".btnCopy", b);
  }

  /* /// */
  shBtnMove(b)
  {
    this.display(".btnMove", (b && this.selectedTitle.b));
  }

  /* /// */
  shBtnDeleteTitle(b)
  {
    let nId = this.selectedTitle.id.split("_")[1];
    let id = ".deleteElem_"+nId;
    let idT = ".deleteElemT_"+nId;

    $(id).off();
    $(idT).empty();

    if (b)
    {
      $(idT).html("x");
      $(id).on("mouseenter", function() { $(this).css("background-color", "#ff2c2c").css("color", "#ffffff"); })
           .on("mouseleave", function() { $(this).css("background-color", "#343333").css("color", "#ff2c2c"); });

      $(".deleteElem_"+nId).css("cursor", "pointer");
      this.addNodeBtnDeleteCreatedFigure(nId);
    }
    else
    {
      $(idT).html('<span class="hideLine">_</span>');
      $(".deleteElem_"+nId).css("cursor", "default");
      this.removeNodeBtnDeleteCreatedFigure(nId);
    }
  }

  /* /// */
  shBlPrmInRightPanel(s, idArrow, idBl)
  {
    let b = false;

    switch(s)
    {
      case "pos": b = this.selectedSection.pos = !this.selectedSection.pos; break;
      case "rot": b = this.selectedSection.rot = !this.selectedSection.rot; break;
      case "prm": b = this.selectedSection.prm = !this.selectedSection.prm; break;
      case "posVerti": b = this.selectedSection.verti = !this.selectedSection.verti; break;
    }

    $(idArrow).html(b?"v":">");

    this.display(idBl, b);
  }

  /* /// */
  shPaletteClrs(b)
  {
    this.shRightPanel(!b);
    this.shBtnRollUpRightPanel(!b);
    this.shBtnClosePaletteClrs(b);
    this.display(".bl_paletteClr", b);

    this.interface.paletteClr = b;
  }

  /* /// */
  shBlVertices(b)
  {
    this.shRightPanel(!b);
    this.shBtnRollUpRightPanel(!b);
    this.shBtnOpenUIVertix(!b);
    this.shBtnCloseUIVertix(b);
    this.display(".blMain_showVertices", b);

    this.interface.vertices.menu = b;

    if (this.interface.vertices.blSetPrm)
      this.shBlSetPrmVerti(b);
    if (this.interface.vertices.historyOV)
      this.shBlHistoryOffsetVertices(b);
  }

  /* /// */
  shBlSetPrmVerti(b)
  {
    this.display(".bl_setPrmVerti", b);
    this.interface.vertices.blSetPrm = b;
  }

  /* /// */
  shIndicatorSHVerti(b)
  {
    $(".indicatorSHVerti").css("background-color", b?"#17c117":"#ff2c2c");

    if (mgc.figure.selGeom.type == "elm")
      mgc.figure.showVerticesInGeometry(mgc.figure.selGeom);
  }

  /* /// */
  shGUI(b)
  {
    if (mgc.scene.scene != null)
      this.display(mgc.scene.renderer.domElement, b);
    
    this.shBlLeftPanel(b);
    this.shBlRightPanel(b);

    this.display(".bl_listFigures", b && this.interface.menuAddGeom);
    this.display(".bl_paletteClr", b && this.interface.paletteClr);
    this.display(".blMain_showVertices", b && this.interface.vertices.menu);

    this.shWarningForClipboard(b);
  }

  /* /// */
  shWarningForClipboard(b)
  {
    this.display(".bl_warningForClipboard", !b);
    this.interface.warning.clipboard = !b;
  }

  /* /// */
  shWarningForWinNoFocus()
  {
    let b = !document.hasFocus();
    this.display(".bl_warningNoFocus", b); 
    this.interface.warning.winNoFocus = b;
  }

  /* /// */
  shBlHistoryOffsetVertices(b)
  {
    this.display(".blMain_historyOffsetVerti", b);
    this.interface.vertices.historyOV = b;
  }


  /* /// */
  addNodeMouseInBody()
  {
    let _this = this;

    $("body").on("click", function(e)
    {
      _this.shWarningForWinNoFocus();

      if ($(e.target).attr("data-type") !== undefined)
      {
        _this.colorizeBorderField(e.target, true);
        _this.inputField.focusId = e.target;
      }
    });
  }

  /* /// */
  addNodeBtnAddGeometry()
  {
    let _this = this;

    $(".btnAddGeometry").on("click", function()
    {
      _this.shBlListFigures(!_this.interface.menuAddGeom);
    });
  }

  /* /// */
  removeNodeBtnAddGeometry() { }

  /* /// */
  addNodeRollUpLeftPanel()
  {
    let _this = this;

    $(".btnRollUpLeftPanel").on("click", function()
    {
      _this.shLeftPanel(!_this.interface.leftPanel);
    });
  }

  /* /// */
  addNodeRollUpRightPanel()
  {
    let _this = this;

    $(".btnRollUpRightPanel").on("click", function()
    {
      _this.shRightPanel(!_this.interface.rightPanel);
    });
  }

  /* /// */
  addNodeClosePaletteClrs()
  {
    let _this = this;

    $(".btnClosePaletteClrs").on("click", function()
    {
      mgc.figure.changeColorGeometry();
    });
  }

  /* /// */
  addNodeBtnCreateFigure()
  {
    let _this = this;

    $(".btn_CreateFigure").on("click", function()
    {
      let nFigure = $(this).attr("data-createfigure");
      
      _this.shBlListFigures(false);

      mgc.figure.addGeometry(Number(nFigure));
    });
  }

  /* /// */
  removeNodeBtnCreateFigure() { }

  /* /// */
  addNodeBtnDeleteCreatedFigure(idN)
  {
    let _this = this;

    $(".deleteElem_"+idN).on("click", function()
    {
      this.btnDelT = true;

      mgc.figure.removeGeometry();

      this.btnDelT = false;  
    });
  }

  /* /// */
  removeNodeBtnDeleteCreatedFigure(idN) { $(".deleteElem_"+idN).off(); }

  /* /// */
  addNodeBtnAddGrp()
  {
    let _this = this;

    $(".btnAddGrp").on("click", function()
    {
      mgc.figure.setDtGroupGeometry();
    });
  }

  /* /// */
  removeNodeBtnAddGrp() { }

  /* /// */
  addNodeSelectTitleListObjs(nId, select=true)
  {
    let _this = this;
    let id = mgc.figure.byDefaultIdTL.sum+nId;

    let funx = (elm, id) =>
    {
      this.selectedTitle.b = true;
      this.selectedTitle.id = id;
      this.selectedTitle.o = JSON.parse($(id).attr("data-list_ind"));

      this.shBtnDeselect(true);

      if (this.selectedTitle.o.type == "elm")
      {
        this.shBtnCopy(true);
        this.shBtnMove(true);
        this.shBtnOpenUIVertix(true);
      }
      else if (this.selectedTitle.o.type == "grp")
      {
        mgc.figure.changeColorGeometry();

        if (this.selectedSection.prm)
          this.shBlPrmInRightPanel("prm", ".arrowPrm", ".blParametersFigure");
        if (this.selectedSection.verti)
          this.shBlPrmInRightPanel("posVerti", ".arrowVerti", ".blParametersVerti");
        
        $(".tPrmsFigure").empty();
        $(".tPrmsVerti").empty();

        if (this.mvElm.b)
          this.shBtnMove(true);
      }

      this.updatePrmFigureInGUI();

      $(elm).addClass("selectedTitleLOs");
      $(elm).removeClass("hoverTitleLOs");

      this.shBtnDeleteTitle(true);

      this.addNodeBtnSetNewTitleLOs();

      mgc.scene.render();
    };

    let removeClass = () => 
    {
      $(this.selectedTitle.id).removeClass("selectedTitleLOs");
      this.removeNodeBtnSetNewTitleLOs();
      this.shBtnDeleteTitle(false);
      this.shBtnCopy(false);
      this.shBtnMove(false);
      this.shBlVertices(false);
      this.shBtnOpenUIVertix(false);
      this.resetArgPrm();

      // Вершины можно регулировать только у выбранной геометрии, поэтому мы 
      // очищаем вершины у редыдущей геометрии.
      mgc.figure.hideVerticesInGeometry();
    };

    if (select)
    {
      if (!this.btnDelT && this.selectedTitle.b)
        removeClass();

      if (!this.btnDelT)
        funx(id, id);
    }

    $(id).on("click", function()
    {
      if (_this.selectedTitle.id != id)
      {
        if (_this.selectedTitle.b)
          removeClass();

        funx(this, id);
      }
    });

    $(id).hover(function()
    {
      let hoverId = $(this).attr("id");
      let selId = _this.selectedTitle;

      if (selId.b && hoverId != selId.id.slice(1) || !selId.b)
        $(this).addClass("hoverTitleLOs");

    }, function()
    {
      $(this).removeClass("hoverTitleLOs");
    });
  }

  /* /// */
  removeNodeTitleListObjs() { }

  /* /// */
  addNodeBtnDeselectTitleLOs()
  {
    let _this = this;

    $(".btnDeselect").on("click", function()
    {
      $(_this.selectedTitle.id).removeClass("selectedTitleLOs");
      _this.resetSelectedTitle();
    });
  }

  /* /// */
  removeNodeBtnDeselectTitleLOs() { }

  /* /// */
  addNodeBtnSetNewTitleLOs()
  {
    let _this = this;

    $(this.selectedTitle.id).on("click", function()
    {
      if (_this.setNewTitle.countClick++ == 0)
      {
        _this.setNewTitle.idTime.id = setTimeout(() => 
        {
          if (_this.setNewTitle.countClick == 2)
          {
            _this.enableSetNewTitle();
          }

          _this.setNewTitle.countClick = 0;
          clearTimeout(_this.setNewTitle.idTime.id);

        }, _this.setNewTitle.idTime.sec);
      }
    });
  }

  /* /// */
  removeNodeBtnSetNewTitleLOs() 
  {
    this.setNewTitle.countClick = 0;
    clearTimeout(this.setNewTitle.idTime.id);

    $(this.selectedTitle.id).off();

    this.addNodeSelectTitleListObjs(this.selectedTitle.o.id.n, false);

    if (this.setNewTitle.b)
      this.disableSetNewTitle();
  }

  /* /// */
  addNodeKeypadEnterInput()
  {
    let _this = this;

    $(".snt_setNewTitle").on("keydown", function(e)
    {
      let key = e.keyCode;
      let kp = _this.keypad;

      if (e.ctrlKey && key == kp.KEY_A)
        $(this).select();
      
      if (key == kp.KEY_ENTER || key == kp.KEY_ESC)
      {
        _this.disableSetNewTitle(key == kp.KEY_ENTER ? true : false);
        _this.addNodeBtnSetNewTitleLOs();
      }
      
    });
  }

  /* /// */
  removeNodeKeypadEnterInput() { }

  /* /// */
  addNodeBtnCopy()
  {
    let _this = this;

    $(".btnCopy").on("click", function()
    {
      this.cpElm = true;
      mgc.figure.copyGeometry();
    });
  }

  /* /// */
  removeNodeBtnCopy() { }

  /* /// */
  addNodeBtnMove()
  {
    let _this = this;

    $(".btnMove").on("click", function()
    {
      if (!_this.mvElm.b)
      {
        _this.mvElm.b = true;
        $(".btnMove").attr("title", "Вставить элемент");
        $(".mvT").html("in");

        mgc.figure.copyAndPasteGeometry("cp");
      }
      else
      {
        mgc.figure.copyAndPasteGeometry("in");
        mgc.figure.resetDtMV();
      }
    });
  }

  /* /// */
  removeNodeBtnMove() { }

  /* /// */
  addNodeTitleParameters()
  {
    let _this = this;

    // 
    $(".titleParameterPos").on("click", function()
    {
      _this.shBlPrmInRightPanel("pos", ".arrowPos", ".blParametersPos");
    });

    // 
    $(".titleParameterRot").on("click", function()
    {
      _this.shBlPrmInRightPanel("rot", ".arrowRot", ".blParametersRot");
    });

    // 
    $(".titleParameterFigure").on("click", function()
    {
      _this.shBlPrmInRightPanel("prm", ".arrowPrm", ".blParametersFigure");
    });

    // 
    $(".titleParameterVerti").on("click", function()
    {
      _this.shBlPrmInRightPanel("posVerti", ".arrowVerti", ".blParametersVerti");
    });
  }

  /* /// */
  removeNodeTitleParameters() { }

  /* /// */
  addNodeInpForPrms(type, c, idInp, obj={mousewheel:true, saB: false})
  {
    let _this = this;
    let sumId = c+idInp;
    let gs = (id, v=null) => { return (v==null ? $(id).val() : $(id).val(v)); };

    if (gs(sumId).length == 0 && gs(sumId, 0));

    let readingPrm = () => 
    {
      switch(type)
      {
        case "pos":      _this.moveGeometryInSpace();           break;
        case "rot":      _this.rotationGeometryInSpace();       break;
        case "prm":      _this.changePrmGeometry();             break;
        case "verti":    _this.changeSzVertisInGeom();          break;
        case "posVerti": _this.moveVerticesInGeometryInSpace(); break;
      }

      mgc.scene.render();
    };

    let funx = (e) =>
    {
      let idOffset = "#inpOffset"+this.firstUpperCase(type);
      let n = +gs(sumId);
      let offset = +gs(idOffset);
        
      if (offset == 0 && gs(idOffset, 0));

      if (e.deltaY > 0)
      {
        n += offset;
      }
      else
      {
        n -= offset;

        if (Object.hasOwn(obj, "checkNegVal") && obj.checkNegVal.b && n < obj.checkNegVal.n)
          n = obj.checkNegVal.n;
      }

      gs(sumId, n);

      readingPrm();
    };

    if (Object.hasOwn(obj, "mousewheel") && obj.mousewheel)
      document.getElementById(idInp).addEventListener('mousewheel', funx, { passive: false });

    // Определяем позицию курсора в поле-ввода
    $(sumId).click(function(){ _this.inputField.posCur = this.selectionStart; });

    // Отключаем клавиши
    $(sumId).keydown(function(e)
    {
      let key = (e.keyCode ? e.keyCode : e.which);
      let kp = _this.keypad;

      let disableKeys = () => { e.preventDefault(); e.stopPropagation(); };

      if (_this.selectedArg.b || obj.saB)
      {
        if (e.ctrlKey && key == kp.KEY_A) 
          $(this).select();

        if (e.ctrlKey && key == kp.KEY_V)
        {
          navigator.clipboard.readText().then((result) =>
          {
            let buf = result.trim();

            if (buf.length > 0)
            {
              $(this).val(buf);
              _this.inputField.minus = _this.inputField.minusTFC;
              _this.inputField.point = _this.inputField.pointTFC;
            }
          }).catch(() => {});
        }

        if (!e.shiftKey && !e.ctrlKey)
        {
          switch(key)
          {
            case kp.KEY_ARROW_L: case kp.KEY_ARROW_R: case kp.KEY_ARROW_U: case kp.KEY_ARROW_D:
            case kp.KEY_MINUS: case kp.KEY_POINT:
            case kp.KEY_DELETE: case kp.KEY_BACKSPACE: case kp.KEY_TAB:
            case kp.KEY_0: case kp.KEY_1: case kp.KEY_2: case kp.KEY_3: case kp.KEY_4: case kp.KEY_5: 
            case kp.KEY_6: case kp.KEY_7: case kp.KEY_8: case kp.KEY_9:
            {
              let inp = $(this).val();
              let posCur = _this.inputField.posCur;

              if ((key == kp.KEY_MINUS && _this.inputField.minus) || (key == kp.KEY_POINT && _this.inputField.point))
                disableKeys();

              if (key == kp.KEY_MINUS && posCur != 0)
                disableKeys();

              if ( posCur == 0 && inp.length > 0 && 
                  key != kp.KEY_MINUS     && 
                  key != kp.KEY_ARROW_L   && key != kp.KEY_ARROW_R && 
                  key != kp.KEY_ARROW_U   && key != kp.KEY_ARROW_D && 
                  key != kp.KEY_BACKSPACE && key != kp.KEY_DELETE )
              {
                if (_this.inputField.minus)
                  disableKeys();
              }

              if (key == kp.KEY_MINUS && posCur == 0 && !_this.inputField.minus)
                _this.inputField.minus = true;

              if (key == kp.KEY_POINT && !_this.inputField.point)
              {
                if (posCur == 0 || posCur == 1 && inp[0] == '-')
                  disableKeys();
                else
                  _this.inputField.point = true;
              }

              if (key == kp.KEY_DELETE && inp.length > posCur)
              {
                _this.inputField.delCh = inp[posCur];
              }
              else if (key == kp.KEY_BACKSPACE && posCur-1 >= 0)
              {
                _this.inputField.delCh = inp[posCur-1];
              }

              break;
            }
            default:
              disableKeys();
          }
        }
        else 
        {
          if (e.ctrlKey && (key == kp.KEY_C || key == kp.KEY_V));
          else
            disableKeys();
        }
      }
    });


    // Отключаем клавиши
    $(sumId).keyup(function(e)
    {
      let key = (e.keyCode ? e.keyCode : e.which);
      let kp = _this.keypad;

      if (key == kp.KEY_TAB)
      {
        _this.colorizeBorderField(e.target, true);
        _this.inputField.focusId = e.target;
      }

      if (_this.selectedArg.b || obj.saB)
      {
        _this.inputField.posCur = this.selectionStart;

        let inp = $(this).val();

        if (!e.shiftKey && !e.ctrlKey)
        {
          if ((inp.length == 0 || inp[0] != '-') && _this.inputField.minus)
            _this.inputField.minus = false;

          if (key == kp.KEY_DELETE || key == kp.KEY_BACKSPACE)
          {
            if (_this.inputField.delCh == '.')
              _this.inputField.point = false;

            if (inp.length == 2 && inp[0] == '-' && inp[1] == '.')
            {
              $(this).val(0);
              _this.inputField.minus = false;
              _this.inputField.point = false;
            }

            if (inp.length == 0)
            {
              _this.inputField.minus = false;
              _this.inputField.point = false;
            }
          }

          if (key == kp.KEY_POINT)
          {
            if (inp[_this.inputField.posCur-1] == 'ю')
            {
              $(this).val(inp.replace("ю", "."));
            }
          }
        }

        if (!obj.saB)
          readingPrm();
      }
    });
  }

  /* /// */
  addNodeCheckboxPos()
  {
    let _this = this;

    $(".tPrmsPos").empty();

    this.getPatternPrm("pos", ".tPrmsPos", "X", "x", "inpPosX", {addBtnReset: true});
    this.getPatternPrm("pos", ".tPrmsPos", "Y", "y", "inpPosY", {addBtnReset: true});
    this.getPatternPrm("pos", ".tPrmsPos", "Z", "z", "inpPosZ", {addOffset: true, addBtnReset: true});

    $("#btnResetValPrm_pos_x").on("click", function() { _this.resetPrmInGeom("#inpPosX", 'x', "pos"); });
    $("#btnResetValPrm_pos_y").on("click", function() { _this.resetPrmInGeom("#inpPosY", 'y', "pos"); });
    $("#btnResetValPrm_pos_z").on("click", function() { _this.resetPrmInGeom("#inpPosZ", 'z', "pos"); });

    $("#inpPosX").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpPosY").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpPosZ").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });
    
    $("#inpOffsetPos").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.resetArgPrm(); _this.focusField(this, false); });

    this.addNodeInpForPrms("pos", "#", "inpPosX");
    this.addNodeInpForPrms("pos", "#", "inpPosY");
    this.addNodeInpForPrms("pos", "#", "inpPosZ");
    this.addNodeInpForPrms("pos", "#", "inpOffsetPos", {mousewheel: false, saB: true});
  }

  /* /// */
  addNodeCheckboxRot()
  {
    let _this = this;

    $(".tPrmsRot").empty();

    this.getPatternPrm("rot", ".tPrmsRot", "X", "x", "inpRotX", {addBtnReset: true});
    this.getPatternPrm("rot", ".tPrmsRot", "Y", "y", "inpRotY", {addBtnReset: true});
    this.getPatternPrm("rot", ".tPrmsRot", "Z", "z", "inpRotZ", {addOffset: true, addBtnReset: true});

    $("#btnResetValPrm_rot_x").on("click", function() { _this.resetPrmInGeom("#inpRotX", 'x', "rot"); });
    $("#btnResetValPrm_rot_y").on("click", function() { _this.resetPrmInGeom("#inpRotY", 'y', "rot"); });
    $("#btnResetValPrm_rot_z").on("click", function() { _this.resetPrmInGeom("#inpRotZ", 'z', "rot"); });

    $("#inpRotX").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });
    
    $("#inpRotY").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpRotZ").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpOffsetRot").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.resetArgPrm(); _this.focusField(this, false); });

    this.addNodeInpForPrms("rot", "#", "inpRotX");
    this.addNodeInpForPrms("rot", "#", "inpRotY");
    this.addNodeInpForPrms("rot", "#", "inpRotZ");
    this.addNodeInpForPrms("rot", "#", "inpOffsetRot", {mousewheel: false, saB: true});
  }

  /* /// */
  addNodesInPaletteClrs()
  {
    let _this = this;

    let eventMouseDown = () => 
    {
      let p = _this.palette, id="", b=false;
      
      if (p.slider.R.b) { id = ".bl_setClrRange_R"; b = true };
      if (p.slider.G.b) { id = ".bl_setClrRange_G"; b = true };
      if (p.slider.B.b) { id = ".bl_setClrRange_B"; b = true };

      $(id).css("cursor", b ? "ew-resize" : "default");
    };

    let eventMouseUpSeleave = () => 
    {
      let p = _this.palette, id="";
      
      if (p.slider.R.b)
      {
        id = ".bl_setClrRange_R"; 
        p.slider.R.b = p.slider.btnL = false;
        this.shCheckBox(".slider_R", false);
      } 
      if (p.slider.G.b)
      { 
        id = ".bl_setClrRange_G"; 
        p.slider.G.b = p.slider.btnL = false;
        this.shCheckBox(".slider_G", false);
      }
      if (p.slider.B.b)
      { 
        id = ".bl_setClrRange_B"; 
        p.slider.B.b = p.slider.btnL = false;
        this.shCheckBox(".slider_B", false);
      }

      $(id).css("cursor", "default");
    };

    let eventMouseWhMv = (e, btn) =>
    {
      let p = _this.palette, slider = null, actvBtn = false;

      if (btn == 1)
      {
        p.mouse.x = -1 + (e.clientX / _this.palette.WIDTH) * 2;
        actvBtn = p.slider.btnL;
      }
      else if (btn == 2)
      {
        if (e.deltaY > 0)
          p.mouse.x += 1;
        else 
          p.mouse.x -= 1;

        actvBtn = p.slider.btnScr;
      }
      
      if (p.slider.R.b) slider = p.slider.R;
      if (p.slider.G.b) slider = p.slider.G;
      if (p.slider.B.b) slider = p.slider.B;

      if (slider != null && actvBtn)
      {
        _this.handForSlider(slider);
        _this.changeColorGeometry();
      }
    };

    $(".slider_R").on("mousedown", function() { _this.palette.slider.R.b = _this.palette.slider.btnL = true; _this.shCheckBox(this, true); });
    $(".slider_G").on("mousedown", function() { _this.palette.slider.G.b = _this.palette.slider.btnL = true; _this.shCheckBox(this, true); });
    $(".slider_B").on("mousedown", function() { _this.palette.slider.B.b = _this.palette.slider.btnL = true; _this.shCheckBox(this, true); });

    $(".bl_setClrRange_R").on("mouseenter", function() { _this.palette.slider.R.b = true; });
    $(".bl_setClrRange_G").on("mouseenter", function() { _this.palette.slider.G.b = true; });
    $(".bl_setClrRange_B").on("mouseenter", function() { _this.palette.slider.B.b = true; });

    $(".bl_setClrRange_R").on("mousedown", function() { eventMouseDown(); });
    $(".bl_setClrRange_G").on("mousedown", function() { eventMouseDown(); });
    $(".bl_setClrRange_B").on("mousedown", function() { eventMouseDown(); });

    $(".bl_setClrRange_R").on("mouseleave", function() { eventMouseUpSeleave(); });
    $(".bl_setClrRange_G").on("mouseleave", function() { eventMouseUpSeleave(); });
    $(".bl_setClrRange_B").on("mouseleave", function() { eventMouseUpSeleave(); });

    let eventMouseMv = (e) => { eventMouseWhMv(e, 1); };
    let eventMouseWh = (e) => { eventMouseWhMv(e, 2); };

    $(".bl_setClrRange_R").on("mousemove", function(e) { eventMouseMv(e); });
    $(".bl_setClrRange_G").on("mousemove", function(e) { eventMouseMv(e); });
    $(".bl_setClrRange_B").on("mousemove", function(e) { eventMouseMv(e); });

    document.getElementById("bl_setClrRange_R").addEventListener('mousewheel', eventMouseWh, { passive: false });
    document.getElementById("bl_setClrRange_G").addEventListener('mousewheel', eventMouseWh, { passive: false });
    document.getElementById("bl_setClrRange_B").addEventListener('mousewheel', eventMouseWh, { passive: false });

    $(".btnAddCreateClr").on("click", function() { mgc.figure.changeColorGeometry(true); });


    $(".inpClrHex").on("keydown", function(e)
    {
      let p = _this.palette;
      let key = (e.keyCode ? e.keyCode : e.which);
      let kp = _this.keypad;

      let disableKeys = () => { e.preventDefault(); e.stopPropagation(); };

      if (e.shiftKey)
      {
        switch(key)
        {
          case kp.KEY_HASHTAG: 
          case kp.KEY_A: case kp.KEY_B: case kp.KEY_C: case kp.KEY_D: case kp.KEY_E: 
          case kp.KEY_F:
          {
            break;
          }
          default:
            disableKeys();
        }
      }

      if (e.ctrlKey && key == kp.KEY_V)
      {
        navigator.clipboard.readText().then((result) => 
        {
          let error = true;
          let buf = result.trim();

          let maxLen = (buf[0]=='#' ? 7 : 6);

          if (buf.length == maxLen)
          {
            buf = buf.slice(buf[0]=='#' ? 1 : 0);

            let checkSymb = () => 
            {
              for (let i = 0; i < buf.length; ++i)
              {
                switch(buf[i].charCodeAt())
                {
                  case kp.KEY_0: case kp.KEY_1: case kp.KEY_2: case kp.KEY_3: case kp.KEY_4: 
                  case kp.KEY_5: case kp.KEY_6: case kp.KEY_7: case kp.KEY_8: case kp.KEY_9:
                  case kp.KEY_A: case kp.KEY_B: case kp.KEY_C: case kp.KEY_D: case kp.KEY_E: case kp.KEY_F:
                  case kp.KEY_a: case kp.KEY_b: case kp.KEY_c: case kp.KEY_d: case kp.KEY_e: case kp.KEY_f:
                  {
                    break;
                  }
                  default:
                    return true;
                }
              }
              return false;
            };

            error = checkSymb();
          }

          if (!error)
          {
            _this.translateHexInRGBAndShow(buf);
          }
          else
          {
            $(this).css("background-color", "#b52e2e");

            p.inpHex.idTime = setTimeout(() => 
            {
              $(this).val("");
              $(this).css("background-color", "#605f5f");
              clearTimeout(p.inpHex.idTime);
            }, 700);
          }
        }).catch(() => {});
      }

      if (!e.ctrlKey)
      {
        switch(key)
        {
          case kp.KEY_ARROW_L: case kp.KEY_ARROW_R: case kp.KEY_ARROW_U: case kp.KEY_ARROW_D:
          case kp.KEY_DELETE: case kp.KEY_BACKSPACE: case kp.KEY_TAB: case kp.KEY_HASHTAG:
          case kp.KEY_0: case kp.KEY_1: case kp.KEY_2: case kp.KEY_3: case kp.KEY_4: 
          case kp.KEY_5: case kp.KEY_6: case kp.KEY_7: case kp.KEY_8: case kp.KEY_9: 
          case kp.KEY_A: case kp.KEY_B: case kp.KEY_C: case kp.KEY_D: case kp.KEY_E: 
          case kp.KEY_F:
          {
            let s = $(this).val();

            if (s.length == 1)
            {
              p.inpHex.maxLen = (s[0]=='#' ? 7 : 6);
              p.inpHex.hashtag = true;
            }

            if (p.inpHex.maxLen)
            {
              if (s.length < p.inpHex.maxLen)
              {
                if (p.inpHex.hashtag && key == kp.KEY_HASHTAG && e.shiftKey)
                  disableKeys();
              }
              else
              {
                if (key != kp.KEY_DELETE  && key != kp.KEY_BACKSPACE &&
                    key != kp.KEY_ARROW_L && key != kp.KEY_ARROW_R   && 
                    key != kp.KEY_ARROW_U && key != kp.KEY_ARROW_D)
                {
                  disableKeys();
                }
              }
            }

            break;
          }
          default:
            disableKeys();
        }
      }
      else
      {
        if (e.ctrlKey && (key == kp.KEY_C || key == kp.KEY_V));
        else
          disableKeys();
      }
    });

    $(".inpClrHex").on("keyup", function(e)
    {
      let s = $(this).val();
      let key = (e.keyCode ? e.keyCode : e.which);
      let kp = _this.keypad;
      let p = _this.palette;

      if (!e.ctrlKey && !e.shiftKey)
      {
        if (key == kp.KEY_DELETE || key == kp.KEY_BACKSPACE && s.length == 0)
        {
          p.inpHex.hashtag = false;
          p.inpHex.maxLen = 0;
        }

        switch(key)
        {
          case kp.KEY_0: case kp.KEY_1: case kp.KEY_2: case kp.KEY_3: case kp.KEY_4: 
          case kp.KEY_5: case kp.KEY_6: case kp.KEY_7: case kp.KEY_8: case kp.KEY_9: 
          case kp.KEY_A: case kp.KEY_B: case kp.KEY_C: case kp.KEY_D: case kp.KEY_E: 
          case kp.KEY_F: case kp.KEY_HASHTAG:
          {
            if (p.inpHex.maxLen > 0 && s.length == p.inpHex.maxLen)
              _this.translateHexInRGBAndShow(s);

            break;
          }
        }
      }
    });
  }

  /* /// */
  addNodeCheckboxPrmBox()
  {
    let _this = this;

    $(".tPrmsFigure").empty();

    this.getPatternPrm("prm", ".tPrmsFigure", "Width", "w", "inpBoxW");
    this.getPatternPrm("prm", ".tPrmsFigure", "Height", "h", "inpBoxH");
    this.getPatternPrm("prm", ".tPrmsFigure", "Depth", "d", "inpBoxD");
    this.getPatternPrm("prm", ".tPrmsFigure", "WidthSegments", "wSeg", "inpBoxWSeg");
    this.getPatternPrm("prm", ".tPrmsFigure", "HeightSegments", "hSeg", "inpBoxHSeg");
    this.getPatternPrm("prm", ".tPrmsFigure", "DepthSegments", "dSeg", "inpBoxDSeg", {addOffset: true});
    $(".tPrmsFigure").append('<tr><td><div class="setClrFigure"></div></td></tr>');

    $("#inpBoxW").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpBoxH").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });
                 
    $("#inpBoxD").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                 .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpBoxWSeg").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                    .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });
    
    $("#inpBoxHSeg").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                    .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpBoxDSeg").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                    .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpOffsetPrm").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.resetArgPrm(); _this.focusField(this, false); });

    $(".setClrFigure").on("click", function() { _this.showSelectedColorGeometry(); });

    this.addNodeInpForPrms("prm", "#", "inpBoxW");
    this.addNodeInpForPrms("prm", "#", "inpBoxH");
    this.addNodeInpForPrms("prm", "#", "inpBoxD");
    this.addNodeInpForPrms("prm", "#", "inpBoxWSeg", {mousewheel: true, checkNegVal: {b: true, n: 1}});
    this.addNodeInpForPrms("prm", "#", "inpBoxHSeg", {mousewheel: true, checkNegVal: {b: true, n: 1}});
    this.addNodeInpForPrms("prm", "#", "inpBoxDSeg", {mousewheel: true, checkNegVal: {b: true, n: 1}});
    this.addNodeInpForPrms("prm", "#", "inpOffsetPrm", {mousewheel: false, saB: true});
  }

  /* /// */
  addNodeShowVertices()
  {
    let _this = this;

    $(".btnOpenUIVertix").on("click", function() { _this.shBlVertices(true); });
    $(".btnCloseUIVertix").on("click", function() { _this.shBlVertices(false); });

    $(".btn_SHVerti").on("click", function()
    {
      let pointB = !mgc.figure.selGeom.geom.vertices.point.b;
      mgc.figure.selGeom.geom.vertices.point.b = pointB;

      _this.shIndicatorSHVerti(pointB);
    });

    $(".btn_historyOffsetVerti").on("click", function()
    {
      if (mgc.figure.selGeom.geom.vertices.changed.total > 0)
      {
        if (_this.interface.vertices.blSetPrm)
          _this.shBlSetPrmVerti(false);

        _this.shBlHistoryOffsetVertices(!_this.interface.vertices.historyOV);
      }
    });

    $(".btn_PrmVerti").on("click", function()
    {
      if (_this.interface.vertices.historyOV)
        _this.shBlHistoryOffsetVertices(false);

      _this.shBlSetPrmVerti(!_this.interface.vertices.blSetPrm);
    });

    $("#inpRVerti").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                   .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpOffsetVerti").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                        .on("mouseleave", function() { _this.resetArgPrm(); _this.focusField(this, false); });

    this.addNodeInpForPrms("verti", "#", "inpRVerti");
    this.addNodeInpForPrms("verti", "#", "inpOffsetVerti", {mousewheel: false, saB: true});
  }

  /* /// */
  addNodeCheckboxPrmVerti()
  {
    let _this = this;

    $(".tPrmsVerti").empty();

    this.getPatternPrm("posVerti", ".tPrmsVerti", "X", "x", "inpPosVertiX", {addBtnReset: true});
    this.getPatternPrm("posVerti", ".tPrmsVerti", "Y", "y", "inpPosVertiY", {addBtnReset: true});
    this.getPatternPrm("posVerti", ".tPrmsVerti", "Z", "z", "inpPosVertiZ", {addOffset: true, addBtnReset: true});

    $("#btnResetValPrm_posVerti_x").on("click", function() { _this.resetPrmInGeom("#inpPosVertiX", 'x', "posVerti"); });
    $("#btnResetValPrm_posVerti_y").on("click", function() { _this.resetPrmInGeom("#inpPosVertiY", 'y', "posVerti"); });
    $("#btnResetValPrm_posVerti_z").on("click", function() { _this.resetPrmInGeom("#inpPosVertiZ", 'z', "posVerti"); });

    $("#inpPosVertiX").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpPosVertiY").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpPosVertiZ").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                      .on("mouseleave", function() { _this.focusField(this, false); _this.resetArgPrm(); });

    $("#inpOffsetPosVerti").on("mouseenter", function() { _this.selectArgPrm(this); _this.focusField(this, true); })
                           .on("mouseleave", function() { _this.resetArgPrm(); _this.focusField(this, false); });

    this.addNodeInpForPrms("posVerti", "#", "inpPosVertiX");
    this.addNodeInpForPrms("posVerti", "#", "inpPosVertiY");
    this.addNodeInpForPrms("posVerti", "#", "inpPosVertiZ");
    this.addNodeInpForPrms("posVerti", "#", "inpOffsetPosVerti", {mousewheel: false, saB: true});

    let sv = mgc.figure.selVertix;
    
    if (sv.cv != null)
    {
      let offset = sv.cv.offset;
      $("#inpPosVertiX").val(offset.x);
      $("#inpPosVertiY").val(offset.y);
      $("#inpPosVertiZ").val(offset.z);
    }
  }

  /* /// */
  addNodeIdentifyAnObjInSpace()
  {
    let _this = this;

    $(mgc.scene.renderer.domElement).on("mousemove", function(e)
    {
      mgc.scene.ray.pointer.x = (e.clientX / mgc.scene.getW()) * 2 - 1;
	    mgc.scene.ray.pointer.y = -(e.clientY / mgc.scene.getH()) * 2 + 1;
    });

    let setClrVerti = (hex, o) =>
    {
      o.material.color = new mdl.Color(hex);
      o.material.needUpdate = true;
    };

    $("body").on("keydown", function(e)
    {
      let key = e.keyCode;
      let kp = _this.keypad;
      let sv = mgc.figure.selVertix;

      if (key == kp.KEY_ESC && sv.b)
      {
        setClrVerti(sv.color[0], sv.o);
        mgc.figure.resetSelNVertix();
        mgc.scene.render();
      }
    });

    $(mgc.scene.renderer.domElement).on("mousemove", function()
    {
      if (mgc.scene.identifyAnObjInSpace)
      {
        let arr = mgc.scene.ray.arr;
        
        if (arr.length > 0)
        {
          let o = arr[0].object;
          let sv = mgc.figure.selVertix;

          if (o.name == "vertix")
          {
            setClrVerti(sv.color[1], o);

            sv.tmp.o = o;
            sv.tmp.n = o.userData.vertix.n;
          }
          else if (sv.tmp.o != null)
          {
            if (sv.tmp.n != sv.n)
              setClrVerti(sv.color[0], sv.tmp.o);
            
            sv.tmp.o = null;
            sv.tmp.n = -1;
          }
        }
      }

      mgc.scene.render();
    });

    $(mgc.scene.renderer.domElement).on("click", function()
    {
      if (mgc.scene.identifyAnObjInSpace)
      {
        let arr = mgc.scene.ray.arr;
        
        if (arr.length > 0)
        {
          let o = arr[0].object;
          let sv = mgc.figure.selVertix;

          if (o.name == "vertix")
          {
            if (sv.o != null)
              setClrVerti(sv.color[0], sv.o);

            if (sv.n != o.userData.vertix.n)
            {
              sv.cv = null;

              setClrVerti(sv.color[1], o);

              sv.o = o;
              sv.n = o.userData.vertix.n;
              sv.b = true;

              console.log("number Verti: "+sv.n);

              let key = mgc.figure.selGeom.geom.vertices.changed.current;
              let changed = mgc.figure.selGeom.geom.vertices.changed;

              if (Object.hasOwn(changed, key) && Object.hasOwn(changed[key].list, sv.n))
              {
                let cv = changed[key].list[sv.n];
                sv.cv = 
                {
                  n: sv.n, 
                  offset: {x: cv.offset.x, y: cv.offset.y, z: cv.offset.z},
                  posVerti: [cv.posVerti[0], cv.posVerti[1], cv.posVerti[2]]
                }
              }
              else
              {
                let pos = o.position;
                sv.cv = {n: sv.n, offset: {x: 0, y: 0, z: 0}, posVerti: [pos.x, pos.y, pos.z]};
              }

              _this.addNodeCheckboxPrmVerti();
            }
            else
              mgc.figure.resetSelNVertix();
          }
        }
      }

      mgc.scene.render();
    });
  }
}

export {GUI};
