(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[163],{

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/image.md?vue&type=template&id=9caa9fc8

var imagevue_type_template_id_9caa9fc8_hoisted_1 = {
  class: "content element-doc"
};

var imagevue_type_template_id_9caa9fc8_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "image"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#image"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Image")], -1);

var imagevue_type_template_id_9caa9fc8_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "En plus des propriétés natives de img, ce composant supporte le lazy loading, les placeholder personnalisés, les échecs de téléchargement, etc.", -1);

var imagevue_type_template_id_9caa9fc8_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "usage-basique"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#usage-basique"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Usage basique")], -1);

var imagevue_type_template_id_9caa9fc8_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Indique comment l'image devrait être redimmensionnée pour s'adapter à son conteneur grâce à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(", identique au "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
}, "object-fit"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" natif.")])], -1);

var imagevue_type_template_id_9caa9fc8_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image\">\n  <div class=\"block\" v-for=\"fit in fits\" :key=\"fit\">\n    <span class=\"demonstration\">{{ fit }}</span>\n    <el-image\n      style=\"width: 100px; height: 100px\"\n      :src=\"url\"\n      :fit=\"fit\"></el-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "placeholder"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#placeholder"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Placeholder")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Placeholder personnalisé qui s'affiche lorsque l'image n'est pas encore chargée, grâce à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot = placeholder"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__placeholder\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Défaut</span>\n    <el-image :src=\"src\"></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Personnalisé</span>\n    <el-image :src=\"src\">\n      <template #placeholder>\n        <div class=\"image-slot\">\n          Chargement<span class=\"dot\">...</span>\n        </div>\n      </template>\n    </el-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "echec-du-chargement"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#echec-du-chargement"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Échec du chargement")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Contenu personnalisé qui s'affiche lorsque le chargement a échoué, grâce à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "slot = error"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(".")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__error\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Défaut</span>\n    <el-image></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Personnalisé</span>\n    <el-image>\n      <template #error>\n        <div class=\"image-slot\">\n          <i class=\"el-icon-picture-outline\"></i>\n        </div>\n      </template>\n    </el-image>\n  </div>\n</div>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "lazy-loading"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#lazy-loading"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Lazy Loading")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("Utilisez le lazy loading avec "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Les images ne se chargeront que lorsque le scrolling les atteindra. Vous pouvez indiquer le conteneur grâce à "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(". Si undefined, ce sera le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.")])], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__lazy\">\n  <el-image v-for=\"url in urls\" :key=\"url\" :src=\"url\" lazy></el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        urls: [\n          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\n          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\n          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "image-preview"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#image-preview"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" Image Preview")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("allow big image preview by setting "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "previewSrcList"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" prop.")])], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__preview\">\n  <el-image\n    style=\"width: 100px; height: 100px\"\n    :src=\"url\"\n    :preview-src-list=\"srcList\">\n  </el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n        srcList: [\n          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'\n        ]\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"image-attributs\"><a class=\"header-anchor\" href=\"#image-attributs\">¶</a> Image Attributs</h3><table><thead><tr><th>Attribut</th><th>Description</th><th>Type</th><th>Valeurs acceptées</th><th>Défaut</th></tr></thead><tbody><tr><td>alt</td><td>Attribut alt natif.</td><td>string</td><td>-</td><td>-</td></tr><tr><td>fit</td><td>Indique comment l&#39;image devrait être redimmensionnée pour s&#39;adapter à son conteneur, identique à <a href=\"https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit\">object-fit</a></td><td>string</td><td>fill / contain / cover / none / scale-down</td><td>-</td></tr><tr><td>hide-on-click-modal (needs translation)</td><td>When enabling preview, use this flag to control whether clicking on backdrop can exit preview mode</td><td>boolean</td><td>true / false</td><td>false</td></tr><tr><td>lazy</td><td>Si le lazy loading doit être utilisé.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>preview-src-list</td><td>allow big image preview</td><td>Array</td><td>—</td><td>-</td></tr><tr><td>referrer-policy</td><td>Attribut referrerPolicy natif.</td><td>string</td><td>-</td><td>-</td></tr><tr><td>src</td><td>Source de l&#39;image, identique au natif.</td><td>string</td><td>—</td><td>-</td></tr><tr><td>scroll-container</td><td>Le conteneur auquel ajouter le listener du scroll en mode lazy loading.</td><td>string / HTMLElement</td><td>—</td><td>Le conteneur parent le plus proche avec la propriété overflow à auto ou scroll.</td></tr><tr><td>z-index</td><td>set image preview z-index</td><td>Number</td><td>—</td><td>2000</td></tr><tr><td>append-to-body</td><td>whether to append image itself to body. A nested parent element attribute transform should have this attribute set to <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table><h3 id=\"image-evenements\"><a class=\"header-anchor\" href=\"#image-evenements\">¶</a> Image Évènements</h3><table><thead><tr><th>Nom</th><th>Description</th><th>Paramètres</th></tr></thead><tbody><tr><td>load</td><td>Identique au load natif.</td><td>(e: Event)</td></tr><tr><td>error</td><td>Identique au error natif.</td><td>(e: Error)</td></tr></tbody></table><h3 id=\"image-slots\"><a class=\"header-anchor\" href=\"#image-slots\">¶</a> Image Slots</h3><table><thead><tr><th>Nom</th><th>Description</th></tr></thead><tbody><tr><td>placeholder</td><td>Se déclenche quand l&#39;image charge.</td></tr><tr><td>error</td><td>Se déclenche quand le chargement de l&#39;image a échoué.</td></tr></tbody></table><h3 id=\"imageviewer-attributs\"><a class=\"header-anchor\" href=\"#imageviewer-attributs\">¶</a> ImageViewer Attributs</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>url-list</td><td>Preview link list</td><td>Array&lt;string&gt;</td><td>-</td><td>[]</td></tr><tr><td>z-index</td><td>Preview backdrop z-index</td><td>number / string</td><td>int / string&lt;int&gt;</td><td>2000</td></tr><tr><td>initial-index</td><td>The initial preview image index, less than or equal to the length of <code>url-list</code></td><td>number</td><td>int</td><td>0</td></tr><tr><td>infinite</td><td>Whether preview is infinite</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>hide-on-click-modal</td><td>Whether user can emit close event when clicking backdrop</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table><h3 id=\"imageviewer-evenements\"><a class=\"header-anchor\" href=\"#imageviewer-evenements\">¶</a> ImageViewer Évènements</h3><table><thead><tr><th>Event name</th><th>Description</th><th>Callback parameter</th></tr></thead><tbody><tr><td>close</td><td>Emitted when clicking on <code>X</code> button or when <code>hide-on-click-modal</code> enabled clicking on backdrop</td><td>None</td></tr><tr><td>switch</td><td>When switching images</td><td><code>(val: number)</code> switching target index</td></tr></tbody></table>", 10);

function imagevue_type_template_id_9caa9fc8_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", imagevue_type_template_id_9caa9fc8_hoisted_1, [imagevue_type_template_id_9caa9fc8_hoisted_2, imagevue_type_template_id_9caa9fc8_hoisted_3, imagevue_type_template_id_9caa9fc8_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [imagevue_type_template_id_9caa9fc8_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [imagevue_type_template_id_9caa9fc8_hoisted_5];
    }),
    _: 1
  }), _hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_8];
    }),
    _: 1
  }), _hoisted_10, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_11];
    }),
    _: 1
  }), _hoisted_13, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_18];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/fr-FR/image.md?vue&type=template&id=9caa9fc8

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/fr-FR/image.md?vue&type=script&lang=ts


/* harmony default export */ var imagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _toDisplayString = vue_esm_browser["T" /* toDisplayString */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */];
      var _hoisted_1 = {
        class: "demo-image"
      };
      var _hoisted_2 = {
        class: "demonstration"
      };

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.fits, function (fit) {
          return _openBlock(), _createBlock("div", {
            class: "block",
            key: fit
          }, [_createVNode("span", _hoisted_2, _toDisplayString(fit), 1), _createVNode(_component_el_image, {
            style: {
              "width": "100px",
              "height": "100px"
            },
            src: _ctx.url,
            fit: fit
          }, null, 8, ["src", "fit"])]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__placeholder"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Défaut", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Personnalisé", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createTextVNode(" Chargement"), /*#__PURE__*/_createVNode("span", {
        class: "dot"
      }, "...")], -1);

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image, {
          src: _ctx.src
        }, null, 8, ["src"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, {
          src: _ctx.src
        }, {
          placeholder: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["src"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__error"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Défaut", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Personnalisé", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-picture-outline"
      })], -1);

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image)]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, null, {
          error: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _renderList = vue_esm_browser["N" /* renderList */],
          _Fragment = vue_esm_browser["b" /* Fragment */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */];
      var _hoisted_1 = {
        class: "demo-image__lazy"
      };

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.urls, function (url) {
          return _openBlock(), _createBlock(_component_el_image, {
            key: url,
            src: url,
            lazy: ""
          }, null, 8, ["src"]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            urls: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__preview"
      };

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_image, {
          style: {
            "width": "100px",
            "height": "100px"
          },
          src: _ctx.url,
          "preview-src-list": _ctx.srcList
        }, null, 8, ["src", "preview-src-list"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/fr-FR/image.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/fr-FR/image.md



imagevue_type_script_lang_ts.render = imagevue_type_template_id_9caa9fc8_render

/* harmony default export */ var fr_FR_image = __webpack_exports__["default"] = (imagevue_type_script_lang_ts);

/***/ })

}]);