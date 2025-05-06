/* Отвечает за все, что связяно с фигурами */


import {mgc} from "./dt/magicNum.js";
import {mdl} from "./modules/mainModules.js";


class Figure
{
  selGeom = null;
  selListCF = null;

  listCreatedFigures = [];

  nFigure = -1;
  
  byDefaultIdGeomL = "geiomTitle_";
  byDefaultIdTL = {c: "#", t: "titleObj_", sum: "#titleObj_"};
  byDefaultIdGL = {c: ".", t: "groupObj_", sum: ".groupObj_"};

  mvElm = 
  {
    lvl: -1,
    indArr: -1,
    l: -1,
    listCF: null
  };

  selVertix = 
  {
    n: -1,
    b: false,
    tmp: {o: null, n: -1},
    o: null,
    cv: null,
    color: [0xffffff, 0x3ac73c]
  };


  /* ... */
  constructor() { }

  /* /// */
  listLength() { return this.getLenArr(this.listCreatedFigures); }

  /* /// */
  getLenArr(arr)
  {
    let count = 0;

    for (let i = 0; i < arr.length; ++i)
      if (typeof arr[i] == "object")
        count++;

    return count;
  }

  /* /// */
  getLenObj(obj)
  {
    let count = 0;

    for (let k in obj)
      if (Object.hasOwn(obj, k))
        count++;

    return count;
  }

  /* /// */
  getNewNId() { return new Date().getTime(); }

  /* /// */
  getGeometry()
  {
    let selObj = mgc.gui.selectedTitle;
    let lvl = selObj.o.level.length;
    let o = this.listCreatedFigures[selObj.o.l];
    this.selListCF = "";

    if (lvl > 0)
    {
      for (let i = 0; i < lvl; ++i)
      {
        this.selListCF = o;
        let indArr = selObj.o.level[i].indArr;
        o = this.selListCF.arr[indArr];
      }
    }

    return o;
  }

  /* /// */
  selectedGeometry()
  {
    mgc.gui.gsDtForSelHisOV("get");
    this.selGeom = this.getGeometry();
  }

  /* /// */
  resetSelectedGeometry()
  {
    mgc.gui.shBlVertices(false);
    mgc.gui.shBtnOpenUIVertix(false);

    this.hideVerticesInGeometry();
    this.changeColorGeometry();
    this.selGeom = null;

    mgc.scene.render();
  }

  /* /// */
  resetSelNVertix()
  {
    if (mgc.gui.selectedSection.verti)
      mgc.gui.shBlPrmInRightPanel("posVerti", ".arrowVerti", ".blParametersVerti");

    $(".tPrmsVerti").empty();

    this.selVertix.n = -1;
    this.selVertix.b = false;
    this.selVertix.cv = null;
  }

  /* /// */
  addGeometry(nFigure)
  {
    this.nFigure = nFigure;

    switch(nFigure)
    {
      case 0:
      {
        this.setDtBoxGeometry();
        break;
      }
    }

    mgc.scene.render();
  }

  /* /// */
  removeGeometry()
  {
    let selObj = mgc.gui.selectedTitle;
    let lvl = selObj.o.level.length;
    let listCF, indArr, lenArr;
    let o = this.listCreatedFigures[selObj.o.l];
    let objSearch = mgc.scene.scene;

    if (lvl > 0)
    {
      for (let i = 0; i < lvl; ++i)
      {
        listCF = o;
        indArr = selObj.o.level[i].indArr;
        o = listCF.arr[indArr];
      }

      objSearch = listCF.geom.object3D;
    }

    if (objSearch.getObjectByName(""+o.id.n) != undefined)
    {
      objSearch.remove(o.geom.object3D);
    }

    if (o.title.id === selObj.id)
    {
      mgc.gui.resetSelectedTitle();
    }

    $(o.id.c+o.id.t).remove();

    if (lvl > 0)
    {
      listCF.arr[indArr] = null;
      lenArr = this.getLenArr(listCF.arr);
    }
    else
    {
      this.listCreatedFigures[selObj.o.l] = null;
      lenArr = this.listLength();
    }

    for (let i = 0; i < lenArr; ++i)
    {
      o = (lvl>0 ? listCF.arr : this.listCreatedFigures)[i];

      if (o == null)
        continue;

      let id = this.byDefaultIdTL.sum+o.id.n;

      let dtLInd = $(id).attr("data-list_ind");
      dtLInd = JSON.parse(dtLInd);

      if (lvl == 0)
        dtLInd.l = i;
      else
        dtLInd.level[lvl-1].indArr = i;

      $(id).attr("data-list_ind", JSON.stringify(dtLInd));
    }

    mgc.scene.render();
  }

  /* /// */
  copyGeometry()
  {
    let selObj = mgc.gui.selectedTitle;
    let lvl = selObj.o.level.length;
    let o = this.listCreatedFigures[selObj.o.l];
    let listCF = o;

    if (selObj.o.type == "elm")
    {
      this.resetDtMV();

      if (lvl > 0)
      {
        for (let i = 0; i < lvl; ++i)
        {
          listCF = o;
          let indArr = selObj.o.level[i].indArr;
          o = listCF.arr[indArr];
        }
      }

      let setNewIdElm = (s, n) => { return (s.split("_")[0]+"_"+n); };

      let tmp = this.cloneGeom(o);

      tmp.id.n = this.getNewNId();
      tmp.id.t = setNewIdElm(o.id.t, tmp.id.n);
      tmp.title.id = setNewIdElm(o.title.id, tmp.id.n);

      tmp.geom.object3D.name = ""+tmp.id.n;

      let id = tmp.id.t;
      let NId = tmp.id.n;
      let json = JSON.parse(JSON.stringify(selObj.o));
      let name = tmp.title.t;

      json.id.n = tmp.id.n;

      let cls = "";

      if (lvl > 0)
      {
        json.l = selObj.o.l;
        json.level[lvl-1].indArr = this.getLenArr(listCF.arr);
        json = JSON.stringify(json);

        listCF.arr.push(tmp);
        listCF.geom.object3D.add(tmp.geom.object3D);

        cls = this.byDefaultIdGL.sum+listCF.id.n;
      }
      else
      {
        json.l = this.listLength();
        json = JSON.stringify(json);
        
        this.listCreatedFigures.push(tmp);
        mgc.scene.scene.add(tmp.geom.object3D);

        cls = ".tbodyListObjs";
      }

      $(cls).append(mgc.gui.getPatternHTML(id, NId, name, json));

      mgc.gui.addNodeSelectTitleListObjs(NId);
    }

    mgc.scene.render();
  }

  /* /// */
  copyAndPasteGeometry(action)
  {
    let selObj = mgc.gui.selectedTitle;
    let o = this.listCreatedFigures[selObj.o.l];
    let listCF = o;

    if (action == "cp")
    {
      let lvl = selObj.o.level.length;

      if (lvl > 0)
      {
        for (let i = 0; i < lvl; ++i)
        {
          listCF = o;
          let indArr = selObj.o.level[i].indArr;
          o = listCF.arr[indArr];
        }
      }

      this.mvElm.lvl = lvl;
        
      if (lvl > 0)
      {
        this.mvElm.listCF = listCF;
        this.mvElm.indArr = selObj.o.level[lvl-1].indArr;
      }
      else
        this.mvElm.l = selObj.o.l;
    }
    else if (action == "in")
    {
      let lvl = this.mvElm.lvl;

      if (lvl > 0)
      {
        listCF = this.mvElm.listCF;
        o = listCF.arr[this.mvElm.indArr];
      }
      else
      {
        listCF = this.listCreatedFigures;
        o = listCF[this.mvElm.l];
      }

      let tmp = this.cloneGeom(o, o.geom.vertices.point.b);

      $(o.id.c + o.id.t).remove();

      for (let chld of o.geom.object3D.children)
      {
        chld.geometry.dispose();
        chld.material.dispose();
      }

      if (lvl > 0)
      {
        listCF.geom.object3D.remove(o.geom.object3D);
        listCF.arr[this.mvElm.indArr] = null;
      }
      else
      {
        mgc.scene.removeModel(o.geom.object3D);
        this.listCreatedFigures[this.mvElm.l] = null;
      }

      let json = {};
      json.type = "elm";
      json.id = {};
      json.id.n = tmp.id.n;

      this.showNestingLevel(tmp, json);
    }

    mgc.scene.render();
  }

  /* /// */
  resetDtMV()
  {
    this.mvElm.o = null;
    mgc.gui.mvElm.b = false;

    $(".btnMove").attr("title", "Переместить элемент");
    $(".mvT").html("mv");
  }

  /* /// */
  previewChangeColorGeometry()
  {
    if (mgc.gui.selectedTitle.b && mgc.gui.interface.paletteClr)
    {
      let o = this.selGeom;
      let color = mgc.gui.palette.clr;
      let hex = parseInt(color.hex, 16);
      
      o.geom.object3D.children[1].material.color = new mdl.Color(hex);
      o.geom.object3D.children[1].material.needUpdate = true;

      mgc.scene.render();
    }
  }

  /* /// */
  changeColorGeometry(changeClr=false)
  {
    let o = this.selGeom;
      
    if (mgc.gui.interface.paletteClr)
    {
      if (changeClr)
      {
        let color = mgc.gui.palette.clr;

        o.geom.color.R = color.R;
        o.geom.color.G = color.G;
        o.geom.color.B = color.B;
        o.geom.color.hex = parseInt(color.hex, 16);

        let checkOnClones = () => 
        {
          let hisClr = mgc.gui.palette.historyClr;
          for (let i = 0; i < hisClr.arr.length; ++i)
          {
            let o = hisClr.arr[i];
            if (color.R == o.R && color.G == o.G && color.B == o.B)
              return false;
          }
    
          return true;
        };

        if (checkOnClones())
          mgc.gui.palette.historyClr.arr.push({R: color.R, G: color.G, B: color.B});
      }

      let hex = o.geom.color.hex;

      o.geom.object3D.children[1].material.color = new mdl.Color(hex);
      o.geom.object3D.children[1].material.needUpdate = true;

      mgc.gui.shPaletteClrs(false);
    }

    if (mgc.gui.selectedTitle.o.type == "elm")
    {
      let R = o.geom.color.R;
      let G = o.geom.color.G;
      let B = o.geom.color.B;

      let hex = mgc.gui.getClrInHex(R, G, B);

      $(".setClrFigure").css("background-color", "#"+hex);
    }
  }

  /* /// */
  showNestingLevel(o, json)
  {
    let funX = (o, json) =>
    {
      let selObj = mgc.gui.selectedTitle.o;
      let grp = this.listCreatedFigures[selObj.l];
      let indArr = [];

      json.level = [];

      if (selObj.level.length > 0)
      {
        for (let i = 0; i < selObj.level.length; ++i)
        {
          indArr[i] = selObj.level[i].indArr;
          grp = grp.arr[indArr[i]];
        }
      }

      grp.arr.push(o);
      grp.geom.object3D.add(o.geom.object3D);

      if (selObj.level.length > 0)
      {
        for (let i = 0; i < indArr.length; ++i)
        json.level.push({indArr: indArr[i]});
      }

      json.level.push({indArr: grp.arr.length-1});
          
      json.l = selObj.l;
    }


    let vxx = false;

    if (mgc.gui.selectedTitle.b)
    {
      let type0 = mgc.gui.selectedTitle.o.type;

      if (type0 == "grp")
        funX(o, json);
      else if (type0 == "elm")
        vxx = true;
    }
    else
      vxx = true;
    
    if (vxx)
    {
      json.l = this.listLength();
      json.level = [];  // если пустой, то это значит первый в стеке
      
      this.listCreatedFigures.push(o);

      mgc.scene.scene.add(o.geom.object3D);
    }

    let type = json.type;

    json = JSON.stringify(json);

    if (type == "elm")
      mgc.gui.addTitleListObjs(o.id.t, o.id.n, o.title.t, json);
    else if (type == "grp")
      mgc.gui.addGroupInListObjs(o.id.t, o.id.n, o.title.t, json);
  }

  /* /// */
  moveGeometryByXYZ()
  {
    let o = this.selGeom.geom;
    let pos = this.selGeom.geom.object3D.position;

    let x = $("#inpPosX").val();
    let y = $("#inpPosY").val();
    let z = $("#inpPosZ").val();

    let check = mgc.gui.checkStrFieldPrm(x) && mgc.gui.checkStrFieldPrm(y) && mgc.gui.checkStrFieldPrm(z);

    if (check)
    {
      switch(mgc.gui.selectedArg.arg)
      {
        case "x": pos.x = +x; o.position.x = pos.x; break;
        case "y": pos.y = +y; o.position.y = pos.y; break;
        case "z": pos.z = +z; o.position.z = pos.z; break;
      }
    }
  }

  /* /// */
  rotationGeometryByXYZ()
  {
    let o = this.selGeom.geom;
    let rot = this.selGeom.geom.object3D.rotation;

    let x = $("#inpRotX").val();
    let y = $("#inpRotY").val();
    let z = $("#inpRotZ").val();

    let check = mgc.gui.checkStrFieldPrm(x) && mgc.gui.checkStrFieldPrm(y) && mgc.gui.checkStrFieldPrm(z);
    
    if (check)
    {
      switch(mgc.gui.selectedArg.arg)
      {
        case "x": rot.x = +x; o.rotation.x = rot.x; break;
        case "y": rot.y = +y; o.rotation.y = rot.y; break;
        case "z": rot.z = +z; o.rotation.z = rot.z; break;
      }
    }
  }

  /* /// */
  updateDtGeometry(update=false)
  {
    let o = this.selGeom;

    switch(o.geom.title.n)
    {
      case 0:
      {
        let sw = $("#inpBoxW").val();
        let sh = $("#inpBoxH").val();
        let sd = $("#inpBoxD").val();
        let swSeg = $("#inpBoxWSeg").val();
        let shSeg = $("#inpBoxHSeg").val();
        let sdSeg = $("#inpBoxDSeg").val();

        let check = mgc.gui.checkStrFieldPrm(sw)    && mgc.gui.checkStrFieldPrm(sh)    && 
                    mgc.gui.checkStrFieldPrm(sd)    && mgc.gui.checkStrFieldPrm(swSeg) &&
                    mgc.gui.checkStrFieldPrm(shSeg) && mgc.gui.checkStrFieldPrm(sdSeg);

        if (check)
        {
          let w = +sw;
          let h = +sh;
          let d = +sd;
          let wSeg = +swSeg
          let hSeg = +shSeg;
          let dSeg = +sdSeg;

          mgc.gui.setValByD({n: 0, s: "Box"});

          if (wSeg > 0 && hSeg > 0 && dSeg > 0)
          {
            let geometry = null;
            let prm = o.geom.object3D.children[1].geometry.parameters;

            if (prm.width  != w            || 
                prm.height != h            || 
                prm.depth  != d            ||
                prm.widthSegments  != wSeg || 
                prm.heightSegments != hSeg || 
                prm.depthSegments  != dSeg || update)
            {
              this.resetSelNVertix();

              geometry = new mdl.BoxGeometry(w, h, d, wSeg, hSeg, dSeg);
              
              for (let chld of o.geom.object3D.children)
              {
                chld.geometry.dispose();
                chld.geometry = geometry;
              }
              
              this.getPairedVertices(o, true);
              this.setElmForHisOV(o);
              this.setOffsetForAllVerti(o);
              this.showVerticesInGeometry(o);
            }
          }
        }
        
        break;
      }
    }
  }

  /* /// */
  changeSizeVerticesInGeometry()
  {
    let o = this.selGeom;
    let point = o.geom.vertices.point;
    let r = $("#inpRVerti").val();

    let check = mgc.gui.checkStrFieldPrm(r);
    
    if (check && mgc.gui.selectedArg.arg == "r" && point.r != +r)
    {
      point.r = +r;
      point.step = +$("#inpOffsetVerti").val();

      if (point.r <= 0)
      {
        $("#inpRVerti").val((point.r = 0.01));
        $("#inpOffsetVerti").val("0");
      }

      this.showVerticesInGeometry(o);
    }
  }

  /* /// */
  moveVerticesByXYZ()
  {
    let sv = this.selVertix;

    if (sv.o != null)
    {
      let offset = sv.cv.offset;

      let x = $("#inpPosVertiX").val();
      let y = $("#inpPosVertiY").val();
      let z = $("#inpPosVertiZ").val();

      let check = mgc.gui.checkStrFieldPrm(x) && mgc.gui.checkStrFieldPrm(y) && mgc.gui.checkStrFieldPrm(z);

      if (check)
      {
        x = +x;
        y = +y;
        z = +z;

        let change = false;

        if (offset.x != x || offset.y != y || offset.z != z)
          change = true;

        if (change)
        {
          let pos = sv.o.position;

          pos.x = sv.cv.posVerti[0] + x;
          pos.y = sv.cv.posVerti[1] + y;
          pos.z = sv.cv.posVerti[2] + z;

          offset.x = x;
          offset.y = y;
          offset.z = z;

          let key = this.selGeom.geom.vertices.changed.current;
          let changed = this.selGeom.geom.vertices.changed;

          if (!Object.hasOwn(changed, key))
          {
            let key = "";
            let title = "";

            switch(this.selGeom.geom.title.n)
            {
              // Box
              case 0:
              {
                let wSeg = $("#inpBoxWSeg").val();
                let hSeg = $("#inpBoxHSeg").val();
                let dSeg = $("#inpBoxDSeg").val();
                
                key = wSeg+hSeg+dSeg;
                title = wSeg+"_"+hSeg+"_"+dSeg;
                changed[key] = {title: title, wSeg:+wSeg, hSeg:+hSeg, dSeg:+dSeg, list:{}};
                
                changed.total++;
                
                break;
              }

              // ...
            }

            mgc.gui.getPatternHistoryOV(key, title, true);
          }

          this.setOffsetVerti(this.selGeom, sv.n, x, y, z);
        }
      }
    }
  }
  
  /* /// */
  cloneGeom(o, shv=false)
  {
    let tmp = {};
    tmp.title = {};
    tmp.title.t = o.title.t;
    tmp.title.id = o.title.id;
    tmp.id = {};
    tmp.id.n = o.id.n;
    tmp.id.c = o.id.c;
    tmp.id.t = o.id.t;
    tmp.type = o.type;
    tmp.geom = {};
    tmp.geom.title = {};
    tmp.geom.title.s = o.geom.title.s;
    tmp.geom.title.n = o.geom.title.n;
    tmp.geom.color = {};
    tmp.geom.color.R = o.geom.color.R;
    tmp.geom.color.G = o.geom.color.G;
    tmp.geom.color.B = o.geom.color.B;
    tmp.geom.color.hex = o.geom.color.hex;
    tmp.geom.position = {};
    tmp.geom.position.x = o.geom.position.x;
    tmp.geom.position.y = o.geom.position.y;
    tmp.geom.position.z = o.geom.position.z;
    tmp.geom.rotation = {};
    tmp.geom.rotation.x = o.geom.rotation.x;
    tmp.geom.rotation.y = o.geom.rotation.y;
    tmp.geom.rotation.z = o.geom.rotation.z;
    tmp.geom.vertices = {};
    tmp.geom.vertices.quantity = o.geom.vertices.quantity;
    tmp.geom.vertices.pos = {};
    tmp.geom.vertices.pairedVertices = [];
    tmp.geom.vertices.changed = {};
    tmp.geom.vertices.changed.current = o.geom.vertices.changed.current;
    tmp.geom.vertices.changed.total = o.geom.vertices.changed.total;
    tmp.geom.vertices.point = {};
    tmp.geom.vertices.point.b = shv;
    tmp.geom.vertices.point.r = o.geom.vertices.point.r;
    tmp.geom.vertices.point.step = o.geom.vertices.point.step;
    tmp.geom.vertices.selectOV = {};
    tmp.geom.vertices.selectOV.id = o.geom.vertices.selectOV.id;
    tmp.geom.vertices.selectOV.key = o.geom.vertices.selectOV.key;
    tmp.geom.vertices.selectOV.b = o.geom.vertices.selectOV.b;
    tmp.geom.vertices.selectOV.ignoreCheck = o.geom.vertices.selectOV.ignoreCheck;
    tmp.geom.object3D = null;

    let verti = o.geom.vertices;

    for (let k in verti.pos)
    {
      let v = verti.pos[k];
      tmp.geom.vertices.pos[k] = {n: v.n, x: v.x, y: v.y, z: v.z};
    }

    for (let i = 0; i < verti.pairedVertices.length; ++i)
    {
      let v = verti.pairedVertices[i];
      tmp.geom.vertices.pairedVertices.push([v[0], v[1], v[2]]);
    }

    let changed = o.geom.vertices.changed;
    let tmpChanged = tmp.geom.vertices.changed;
    for (let k in changed)
    {
      if (k == "current" || k == "total") continue;

      tmpChanged[k] = {title:"", list:{}};
      
      let list = null;
      for (let k2 in changed[k])
      {
        if (k2 == "list")
        {
          list = changed[k][k2]; 
          continue;
        }
        else if (k2 == "title")
        {
          tmpChanged[k].title = changed[k][k2];
          continue;
        }

        tmpChanged[k][k2] = changed[k][k2];
      }

      for (let k2 in list)
      {
        let cv = list[k2];
        tmpChanged[k].list[k2] = 
        {
          n: cv.n,
          offset: {x: cv.offset.x, y: cv.offset.y, z: cv.offset.z},
          posVerti: [cv.posVerti[0], cv.posVerti[1], cv.posVerti[2]]
        };
      }
    }

    let grp = new mdl.Group();
    grp.name = o.geom.object3D.name;

    let prm = o.geom.object3D.children[1].geometry.parameters;

    switch(tmp.geom.title.n)
    {
      case 0:
      {
        let geometry = new mdl.BoxGeometry(
          prm.width, prm.height, prm.depth,
          prm.widthSegments, prm.heightSegments, prm.depthSegments
        );

        this.getReadyGeometry(grp, geometry, tmp.geom.color.hex);

        grp.position.x = tmp.geom.position.x;
        grp.position.y = tmp.geom.position.y;
        grp.position.z = tmp.geom.position.z;

        grp.rotation.x = tmp.geom.rotation.x;
        grp.rotation.y = tmp.geom.rotation.y;
        grp.rotation.z = tmp.geom.rotation.z;

        geometry.dispose();

        break;
      }
      // ...
    }

    tmp.geom.object3D = grp;
    this.setOffsetForAllVerti(tmp);
    return tmp;
  }

  /* /// */
  setLineSements(geometry)
  {
    let lineMaterial = new mdl.LineBasicMaterial({color: 0xffffff, transparent: true, opacity: 1});
    let ls = new mdl.LineSegments(geometry, lineMaterial);
    lineMaterial.dispose();
    return ls;
  }

  /* /// */
  getReadyGeometry(grp, geometry, color)
  {
    let meshMaterial = new mdl.MeshPhongMaterial({color: color});

    grp.add(this.setLineSements(geometry));
    grp.add(new mdl.Mesh(geometry, meshMaterial));

    mgc.scene.updateGroupGeometry(grp, geometry);

    meshMaterial.dispose();
  }

  /* /// */
  setOffsetVerti(o, n, x, y, z)
  {
    let geometry = o.geom.object3D.children[1].geometry;
    let geomPosAttr = geometry.attributes.position;
    let arrVerti = o.geom.vertices.pairedVertices[+n];

    let key = o.geom.vertices.changed.current;
    let changedVerti = o.geom.vertices.changed[key].list;

    if (Object.hasOwn(changedVerti, n))
    {
      let cv = changedVerti[n];
      cv.offset.x = x;
      cv.offset.y = y;
      cv.offset.z = z;
    }
    else
    {
      let posVerti = [];
      posVerti[0] = o.geom.vertices.pos[n].x;
      posVerti[1] = o.geom.vertices.pos[n].y;
      posVerti[2] = o.geom.vertices.pos[n].z;

      changedVerti[n] = {};
      changedVerti[n] = 
      {
        n: n,
        offset: {x: x, y: y, z: z}, 
        posVerti: posVerti, 
      };
    }

    let cv = changedVerti[n];

    for (let i = 0; i < arrVerti.length; ++i)
    {
      geomPosAttr.array[arrVerti[i] + 0] = cv.posVerti[0] + cv.offset.x;
      geomPosAttr.array[arrVerti[i] + 1] = cv.posVerti[1] + cv.offset.y;
      geomPosAttr.array[arrVerti[i] + 2] = cv.posVerti[2] + cv.offset.z;
    }
    geomPosAttr.verticesNeedUpdate = true;

    mgc.scene.updateGroupGeometry(o.geom.object3D, geometry);
  }

  /* /// */
  setOffsetForAllVerti(o)
  {
    let key = o.geom.vertices.changed.current;
    let changed = o.geom.vertices.changed;

    if (mgc.gui.selectedHisOV.b)
    {
      if (Object.hasOwn(changed, key))
      {
        let changedVerti = changed[key].list;
        for (let k in changedVerti)
        {
          let cv = changedVerti[k];
          this.setOffsetVerti(o, cv.n, cv.offset.x, cv.offset.y, cv.offset.z);
        }
      }
    }
    else
    {
      mgc.scene.updateLineSeg();
    }
  }

  /* /// */
  delElmFromHisOV(key)
  {
    let changed = this.selGeom.geom.vertices.changed;

    if (Object.hasOwn(changed, key))
    {
      changed.total--;
      delete changed[key];

      if (key == changed.current)
        this.updateDtGeometry(true);

      if (changed.total == 0)
        mgc.gui.shBlHistoryOffsetVertices(false);
    }
  }

  /* /// */
  shOffsetForAllVerti()
  {
    this.updateDtGeometry(true);
  }

  /* /// */
  setElmForHisOV(o)
  {
    let changed = o.geom.vertices.changed;
    let currentKey = changed.current;

    if (!mgc.gui.selectedHisOV.ignoreCheck && Object.hasOwn(changed, currentKey))
      mgc.gui.selectElmFromHisOV(currentKey);
    else
      mgc.gui.resetHisOV();
  }

  /* /// */
  setDtGroupGeometry()
  {
    let nId = this.getNewNId();
 
    let o = {};
    o.title = {};
    o.title.t = "Группа_"+nId;
    o.title.id = this.byDefaultIdTL.sum+nId;
    o.id = {};
    o.id.n = nId;
    o.id.c = ".";
    o.id.t = this.byDefaultIdGeomL+nId;
    o.arr = [];
    o.type = "grp";
 
    o.geom = {};
    o.geom.title = {};
    o.geom.title.s = "Group";
    o.geom.title.n = -185;  // Первые две букву из предыдущей строки в таблице ASCII
    o.geom.position = {};
    o.geom.position.x = 0;
    o.geom.position.y = 0;
    o.geom.position.z = 0;
    o.geom.rotation = {};
    o.geom.rotation.x = 0;
    o.geom.rotation.y = 0;
    o.geom.rotation.z = 0;
    o.geom.object3D = null;
 
    this.createGroupGeometry(o);
 
    let json = {};
    json.type = "grp";
    json.id = {};
    json.id.n = nId;
 
    this.showNestingLevel(o, json);

    mgc.scene.render();
  }
 
  /* /// */
  createGroupGeometry(o)
  {    
    o.geom.object3D = new mdl.Group();
    o.geom.object3D.name = ""+o.id.n;
  }

  /* /// */
  setDtBoxGeometry()
  {
    let nId = this.getNewNId();

    let o = {};
    o.title = {};
    o.title.t = "Коробка_"+nId;
    o.title.id = this.byDefaultIdTL.sum+nId;
    o.id = {};
    o.id.n = nId;
    o.id.c = ".";
    o.id.t = this.byDefaultIdGeomL+nId;
    o.type = "elm";

    o.geom = {};
    o.geom.title = {};
    o.geom.title.s = "Box";
    o.geom.title.n = 0;
    o.geom.color = {};
    o.geom.color.R = 171;
    o.geom.color.G = 22;
    o.geom.color.B = 110;
    o.geom.color.hex = 0xAB166E;
    o.geom.position = {};
    o.geom.position.x = 0;
    o.geom.position.y = 0;
    o.geom.position.z = 0;
    o.geom.rotation = {};
    o.geom.rotation.x = 0;
    o.geom.rotation.y = 0;
    o.geom.rotation.z = 0;
    o.geom.vertices = {};
    o.geom.vertices.quantity = 0;
    o.geom.vertices.pos = {};
    o.geom.vertices.pairedVertices = [];
    o.geom.vertices.changed = {};
    o.geom.vertices.changed.current = -1;
    o.geom.vertices.changed.total = 0;
    o.geom.vertices.point = {};
    o.geom.vertices.point.b = false;
    o.geom.vertices.point.r = 0.5;
    o.geom.vertices.point.step = 0.1;
    o.geom.vertices.selectOV = {};
    o.geom.vertices.selectOV.id = "";
    o.geom.vertices.selectOV.key = -1;
    o.geom.vertices.selectOV.b = false;
    o.geom.vertices.selectOV.ignoreCheck = false;
    o.geom.object3D = null;

    this.createBoxGeometry(o);
    this.getPairedVertices(o);

    let json = {};
    json.type = "elm";
    json.id = {};
    json.id.n = nId;

    this.showNestingLevel(o, json);

    console.log(this.selGeom);

    // let posAttr = this.selGeom.geom.object3D.children[1].geometry.attributes.position;
    // let vertices = 
    // [
    //   [0, 0, 0],  // Вершина 0
    //   [0, 0, 0],  // Вершина 1
    //   [5, 0, 0],  // Вершина 2
    //   [0, 0, 0],  // Вершина 3
    //   [0, 0, 0],  // Вершина 4
    //   [0, 0, 0],  // Вершина 5
    //   [0, 0, 0],  // Вершина 6
    //   [0, 0, 0],  // Вершина 7
    //
    //   [0, 0, 0],  // Вершина 8
    //   [0, 0, 0],  // Вершина 9
    //   [0, 0, 0],  // Вершина 10
    //   [0, 0, 0],  // Вершина 11
    //   [0, 0, 0],  // Вершина 12
    //   [5, 0, 0],  // Вершина 13
    //   [0, 0, 0],  // Вершина 14
    //   [0, 0, 0],  // Вершина 15
    //
    //   [0, 0, 0],  // Вершина 16
    //   [0, 0, 0],  // Вершина 17
    //   [0, 0, 0],  // Вершина 18
    //   [0, 0, 0],  // Вершина 19
    //   [0, 0, 0],  // Вершина 20
    //   [0, 0, 0],  // Вершина 21
    //   [0, 0, 0],  // Вершина 22
    //   [0, 0, 0],  // Вершина 23
    //
    //   // [0, 0, 0],  // Вершина 24
    //   // [0, 0, 0],  // Вершина 25
    //   // [0, 0, 0],  // Вершина 26
    //   // [0, 0, 0],  // Вершина 27
    //   // [0, 0, 0],  // Вершина 28
    //   // [0, 0, 0],  // Вершина 29
    //   // [0, 0, 0],  // Вершина 30
    //   // [0, 0, 0]   // Вершина 31
    // ];
    //
    // for (let i = 0, j = 0; i < vertices.length; ++i, j+=3)
    // {
    //   if (vertices[i][0] == -5)
    //     console.log("j: "+j);
    //
    //   posAttr.array[j + 0] += vertices[i][0];
    //   posAttr.array[j + 1] += vertices[i][1];
    //   posAttr.array[j + 2] += vertices[i][2];
    // }
    //
    // posAttr.needsUpdate = true;
  }

  /* /// */
  getPairedVertices(o, checkChanged=false)
  {
    o.geom.vertices.pairedVertices = [];
    o.geom.vertices.pos = {};

    let arrVerti = o.geom.object3D.children[1].geometry.attributes.position.array;
    let matrix = [];

    for (let i = 0, j = 0; i < arrVerti.length; i+=3, ++j)
    {
      matrix[j] = [];
      matrix[j][0] = arrVerti[i+0];
      matrix[j][1] = arrVerti[i+1];
      matrix[j][2] = arrVerti[i+2];
    }

    for (let i = 0, nv = 0; i < matrix.length; ++i)
    {
      let vm = matrix[i];

      let x = vm[0];
      let y = vm[1];
      let z = vm[2];

      if (x == null && y == null && z == null)
        continue;

      let tmp = [];
      let ind = i*(i>0?3:0);
      tmp.push(ind);

      for (let j = i+1; j < matrix.length; ++j)
      {
        let v = matrix[j];
        ind += 3

        if (v[0] == x && v[1] == y && v[2] == z)
        {
          tmp.push(ind);
          v[0] = null;
          v[1] = null;
          v[2] = null;
        }
      }
      
      o.geom.vertices.pairedVertices.push(tmp);

      o.geom.vertices.pos[""+nv] = {n: nv++, x: x, y: y, z: z};
      o.geom.vertices.quantity = nv;

      vm[0] = null;
      vm[1] = null;
      vm[2] = null;
    }

    let currentKey = "";
    for (let v of o.geom.object3D.children)
    {
      if (v.type == "Mesh")
      {
        let prm = v.geometry.parameters;
        switch(o.geom.title.n)
        {
          // Box
          case 0: currentKey = ""+prm.widthSegments + prm.heightSegments + prm.depthSegments; break;
          
          // ...
        }
      }
    }
    o.geom.vertices.changed.current = currentKey;

    let changed = o.geom.vertices.changed;

    // console.log(o.geom.vertices.pos);

    let key = o.geom.vertices.changed.current;

    if (checkChanged && Object.hasOwn(changed, key))
    {
      let posVerti = o.geom.vertices.pos;
      let changedVerti = changed[key].list;
      
      for (let k in changedVerti)
      {
        let cv = changedVerti[k];

        if (Object.hasOwn(posVerti, cv.n))
        {
          let v = posVerti[cv.n];
            
          cv.posVerti[0] = v.x;
          cv.posVerti[1] = v.y;
          cv.posVerti[2] = v.z;
        }
      }
    }

    // console.log(o.geom.vertices);
  }

  /* /// */
  showVerticesInGeometry(o, hideVerti=false)
  {
    let arrChildren = o.geom.object3D.children[1];

    for (let chld of arrChildren.children)
    {
      chld.geometry.dispose();
      chld.material.dispose();
    }
    arrChildren.clear();
    
    if (o.geom.vertices.point.b && !hideVerti)
    {
      let arrChildren = o.geom.object3D.children[1];
      let vertices = o.geom.vertices;
      let sphere = null;

      let createSphere = (n, x, y, z) => 
      {
        let sv = this.selVertix;

        let geometry = new mdl.SphereGeometry(vertices.point.r);
        let material = new mdl.MeshBasicMaterial(
          { 
            color: (sv.n==n && sv.b ? sv.color[1] : sv.color[0]) 
          });
        let sphere = new mdl.Mesh(geometry, material);
        sphere.name = "vertix";
        sphere.userData.vertix = {};
        sphere.userData.vertix.n = n;

        sphere.position.set(x, y, z);

        if (sv.n == n)
          sv.o = sphere;

        geometry.dispose();
        material.dispose();

        let key = o.geom.vertices.changed.current;
        let changed = o.geom.vertices.changed;

        if (mgc.gui.selectedHisOV.b     && 
            Object.hasOwn(changed, key) && Object.hasOwn(changed[key].list, n))
        {
          let cv = changed[key].list[n];

          sphere.position.x += cv.offset.x;
          sphere.position.y += cv.offset.y;
          sphere.position.z += cv.offset.z;
        }

        return sphere;
      };

      for (let i = 0; i < vertices.quantity; ++i)
      {
        let k = ""+i;
        let pos = vertices.pos[k];
        sphere = createSphere(k, pos.x, pos.y, pos.z);

        arrChildren.add(sphere);
      }
    }

    mgc.scene.render();
  }

  /* /// */
  hideVerticesInGeometry()
  {
    if (this.selGeom.type == "elm")
    {
      this.showVerticesInGeometry(this.selGeom, true);
    }

    this.resetSelNVertix();
  }

  /* /// */
  createBoxGeometry(o)
  {
    let grp = new mdl.Group();

    grp.name = ""+o.id.n;

    let w = 10;
    let h = 10;
    let d = 10;
    let wSeg = 1;
    let hSeg = 1;
    let dSeg = 1;

    let geometry = new mdl.BoxGeometry(w, h, d, wSeg, hSeg, dSeg);

    this.getReadyGeometry(grp, geometry, o.geom.color.hex);

    o.geom.object3D = grp;

    geometry.dispose();
  }
}

export {Figure};
