(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[249],{

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/pagination.md?vue&type=template&id=7bc65b37

var paginationvue_type_template_id_7bc65b37_hoisted_1 = {
  class: "content element-doc"
};

var paginationvue_type_template_id_7bc65b37_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "pezinesiyon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#pezinesiyon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ページネーション")], -1);

var paginationvue_type_template_id_7bc65b37_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データが多すぎて1ページに表示できない場合は、ページネーションを使用します。", -1);

var paginationvue_type_template_id_7bc65b37_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-de-nashi-ifang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-de-nashi-ifang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var paginationvue_type_template_id_7bc65b37_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("カンマで区切って表示したいページネーション要素を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "layout"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定します。ページネーション要素は以下の通りです。prev"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (前のページに移動するボタン)、"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("next"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (次のページに移動するボタン)、"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("pager"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (ページリスト)、"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("jumper"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (入力へのジャンプ)、"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("total"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (アイテムの合計数)、"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("size"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, " (ページサイズを決定するための選択)、そして"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("->` (このシンボル以降のすべての要素が右に引っ張られる)です。")])], -1);

var paginationvue_type_template_id_7bc65b37_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"block\">\n  <span class=\"demonstration\">When you have few pages</span>\n  <el-pagination\n    layout=\"prev, pager, next\"\n    :total=\"50\">\n  </el-pagination>\n</div>\n<div class=\"block\">\n  <span class=\"demonstration\">When you have more than 7 pages</span>\n  <el-pagination\n    layout=\"prev, pager, next\"\n    :total=\"1000\">\n  </el-pagination>\n</div>\n")], -1);

var paginationvue_type_template_id_7bc65b37_hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "peziyashu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#peziyashu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ページャー数")], -1);

var paginationvue_type_template_id_7bc65b37_hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("デフォルトでは、ページネーションは7ページを超えると余分なページャーボタンを折りたたむようになっています。これは "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "pager-count"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性で設定できます。")])], -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-pagination\n  :page-size=\"20\"\n  :pager-count=\"11\"\n  layout=\"prev, pager, next\"\n  :total=\"1000\">\n</el-pagination>\n")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "bei-jing-se-noarubotan"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#bei-jing-se-noarubotan"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 背景色のあるボタン")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "background"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("属性を設定すると、ボタンの背景色が設定されます。")])], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-pagination\n  background\n  layout=\"prev, pager, next\"\n  :total=\"1000\">\n</el-pagination>\n")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "xiao-sanapezinesiyon"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xiao-sanapezinesiyon"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 小さなページネーション")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "スペースが限られている場合は、小さなページネーションを使用します。", -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "small"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "true"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" に設定するだけで、ページネーションが小さくなります。")])], -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-pagination\n  small\n  layout=\"prev, pager, next\"\n  :total=\"50\">\n</el-pagination>\n")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "sonota-noyao-su"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#sonota-noyao-su"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" その他の要素")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "シナリオに基づいてモジュールを追加します。", -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("この例は完全なユースケースです。ページサイズの変更と現在のページの変更を扱うために "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "size-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "current-change"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" イベントを利用しています。例えば、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("は4つのオプションを持つことを示しています。例えば、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "[100, 200, 300, 400]"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は select に 4 つのオプションがあることを示します。")])], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<template>\n  <div class=\"block\">\n    <span class=\"demonstration\">Total item count</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage1\"\n      :page-size=\"100\"\n      layout=\"total, prev, pager, next\"\n      :total=\"1000\">\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Change page size</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage2\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"sizes, prev, pager, next\"\n      :total=\"1000\">\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Jump to</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage3\"\n      :page-size=\"100\"\n      layout=\"prev, pager, next, jumper\"\n      :total=\"1000\">\n    </el-pagination>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">All combined</span>\n    <el-pagination\n      @size-change=\"handleSizeChange\"\n      @current-change=\"handleCurrentChange\"\n      v-model:currentPage=\"currentPage4\"\n      :page-sizes=\"[100, 200, 300, 400]\"\n      :page-size=\"100\"\n      layout=\"total, sizes, prev, pager, next, jumper\"\n      :total=\"400\">\n    </el-pagination>\n  </div>\n</template>\n<script>\n  export default {\n    methods: {\n      handleSizeChange(val) {\n        console.log(`${val} items per page`);\n      },\n      handleCurrentChange(val) {\n        console.log(`current page: ${val}`);\n      }\n    },\n    data() {\n      return {\n        currentPage1: 5,\n        currentPage2: 5,\n        currentPage3: 5,\n        currentPage4: 4\n      };\n    }\n  }\n</script>\n")], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "1pezisikanaichang-he-hapezinesiyonwoyin-su"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#1pezisikanaichang-he-hapezinesiyonwoyin-su"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 1ページしかない場合はページネーションを隠す")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ページが1ページしかない場合は、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "hide-on-single-page"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を設定してページネーションを隠す。")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<div>\n <el-switch v-model=\"value\">\n </el-switch>\n <el-pagination\n  :hide-on-single-page=\"value\"\n  :total=\"5\"\n  layout=\"prev, pager, next\">\n</el-pagination>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        value: false\n      }\n    }\n  }\n</script>\n")], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"shu-xing\"><a class=\"header-anchor\" href=\"#shu-xing\">¶</a> 属性</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>small</td><td>小さなページネーションの有無</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background</td><td>ボタンに背景色があるかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>page-size</td><td>各ページの項目数 v-model 双方向バインディングをサポートします。</td><td>number</td><td>—</td><td>10</td></tr><tr><td>total</td><td>総項目数</td><td>number</td><td>—</td><td>—</td></tr><tr><td>page-count</td><td>ページ数の合計を指定します。<code>total</code>か<code>page-count</code>のいずれかを設定するとページが表示されます。もし <code>page-sizes</code>が必要な場合は<code>total</code>が必要です。</td><td>number</td><td>—</td><td>—</td></tr><tr><td>pager-count</td><td>ページャーの数を指定します。ページ数の合計がこの値を超えるとページネーションが崩れます。</td><td>number</td><td>odd number between 5 and 21</td><td>7</td></tr><tr><td>current-page</td><td>現在のページ番号 v-model 双方向バインディングをサポートします。</td><td>number</td><td>—</td><td>1</td></tr><tr><td>layout</td><td>ページネーションのレイアウト、カンマで区切られた要素</td><td>string</td><td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>, <code>total</code>, <code>slot</code></td><td>&#39;prev, pager, next, jumper, -&gt;, total&#39;</td></tr><tr><td>page-sizes</td><td>ページあたりの項目数のオプション</td><td>number[]</td><td>—</td><td>[10, 20, 30, 40, 50, 100]</td></tr><tr><td>popper-class</td><td>ページサイズセレクトドロップダウンのカスタムクラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>前ボタンのテキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>次のボタン用テキスト</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>ページネーションが無効になっているかどうか</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>hide-on-single-page</td><td>1ページしかないときに非表示にするかどうか</td><td>boolean</td><td>—</td><td>-</td></tr></tbody></table><h3 id=\"ibento\"><a class=\"header-anchor\" href=\"#ibento\">¶</a> イベント</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>size-change</td><td><code>page-size</code> が変更されたときにトリガされる</td><td>the new page size</td></tr><tr><td>current-change</td><td><code>current-page</code> が変更されたときにトリガされる</td><td>the new current page</td></tr><tr><td>prev-click</td><td>前ボタンがクリックされ、現在のページが変更されたときに発生します。</td><td>the new current page</td></tr><tr><td>next-click</td><td>次ボタンがクリックされ、現在のページが変更されたときに発生します。</td><td>the new current page</td></tr></tbody></table><h3 id=\"surotuto\"><a class=\"header-anchor\" href=\"#surotuto\">¶</a> スロット</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>カスタムコンテンツ。利用するためには<code>layout</code>で<code>slot</code>を宣言する必要があります。</td></tr></tbody></table>", 6);

function paginationvue_type_template_id_7bc65b37_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", paginationvue_type_template_id_7bc65b37_hoisted_1, [paginationvue_type_template_id_7bc65b37_hoisted_2, paginationvue_type_template_id_7bc65b37_hoisted_3, paginationvue_type_template_id_7bc65b37_hoisted_4, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [paginationvue_type_template_id_7bc65b37_hoisted_6];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [paginationvue_type_template_id_7bc65b37_hoisted_5];
    }),
    _: 1
  }), paginationvue_type_template_id_7bc65b37_hoisted_7, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [paginationvue_type_template_id_7bc65b37_hoisted_8];
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
  }), _hoisted_13, _hoisted_14, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_15];
    }),
    _: 1
  }), _hoisted_17, _hoisted_18, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_19];
    }),
    _: 1
  }), _hoisted_21, _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_24, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/pagination.md?vue&type=template&id=7bc65b37

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/pagination.md?vue&type=script&lang=ts


/* harmony default export */ var paginationvue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "When you have few pages", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "When you have more than 7 pages", -1);

      function render(_ctx, _cache) {
        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 50
        })]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          layout: "prev, pager, next",
          total: 1000
        })])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_pagination, {
          "page-size": 20,
          "pager-count": 11,
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_pagination, {
          background: "",
          layout: "prev, pager, next",
          total: 1000
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_pagination, {
          small: "",
          layout: "prev, pager, next",
          total: 50
        })]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo4": function () {
      var _createVNode = vue_esm_browser["o" /* createVNode */],
          _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "block"
      };

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Total item count", -1);

      var _hoisted_3 = {
        class: "block"
      };

      var _hoisted_4 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Change page size", -1);

      var _hoisted_5 = {
        class: "block"
      };

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Jump to", -1);

      var _hoisted_7 = {
        class: "block"
      };

      var _hoisted_8 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "All combined", -1);

      function render(_ctx, _cache) {
        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_hoisted_2, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage1,
          "onUpdate:currentPage": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.currentPage1 = $event;
          }),
          "page-size": 100,
          layout: "total, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createVNode("div", _hoisted_3, [_hoisted_4, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage2,
          "onUpdate:currentPage": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.currentPage2 = $event;
          }),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "sizes, prev, pager, next",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createVNode("div", _hoisted_5, [_hoisted_6, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage3,
          "onUpdate:currentPage": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.currentPage3 = $event;
          }),
          "page-size": 100,
          layout: "prev, pager, next, jumper",
          total: 1000
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])]), _createVNode("div", _hoisted_7, [_hoisted_8, _createVNode(_component_el_pagination, {
          onSizeChange: _ctx.handleSizeChange,
          onCurrentChange: _ctx.handleCurrentChange,
          currentPage: _ctx.currentPage4,
          "onUpdate:currentPage": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.currentPage4 = $event;
          }),
          "page-sizes": [100, 200, 300, 400],
          "page-size": 100,
          layout: "total, sizes, prev, pager, next, jumper",
          total: 400
        }, null, 8, ["onSizeChange", "onCurrentChange", "currentPage"])])]);
      }

      var democomponentExport = {
        methods: {
          handleSizeChange: function handleSizeChange(val) {
            console.log(val + " items per page");
          },
          handleCurrentChange: function handleCurrentChange(val) {
            console.log("current page: " + val);
          }
        },
        data: function data() {
          return {
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo5": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_switch = _resolveComponent("el-switch");

        var _component_el_pagination = _resolveComponent("el-pagination");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", null, [_createVNode(_component_el_switch, {
          modelValue: _ctx.value,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.value = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_pagination, {
          "hide-on-single-page": _ctx.value,
          total: 5,
          layout: "prev, pager, next"
        }, null, 8, ["hide-on-single-page"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            value: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/pagination.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/pagination.md



paginationvue_type_script_lang_ts.render = paginationvue_type_template_id_7bc65b37_render

/* harmony default export */ var pagination = __webpack_exports__["default"] = (paginationvue_type_script_lang_ts);

/***/ })

}]);