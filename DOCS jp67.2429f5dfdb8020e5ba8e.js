(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[275],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.js
var vue_esm_browser = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tree.md?vue&type=template&id=008229c7

var treevue_type_template_id_008229c7_hoisted_1 = {
  class: "content element-doc"
};

var treevue_type_template_id_008229c7_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h2", {
  id: "turi"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#turi"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ツリー")], -1);

var treevue_type_template_id_008229c7_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "データの集合を階層化して表示します。", -1);

var treevue_type_template_id_008229c7_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "ji-ben-de-nashi-ifang"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#ji-ben-de-nashi-ifang"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 基本的な使い方")], -1);

var treevue_type_template_id_008229c7_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "基本的なツリー構造。", -1);

var treevue_type_template_id_008229c7_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree :data=\"data\" :props=\"defaultProps\" @node-click=\"handleNodeClick\"></el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "xuan-ze-ke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#xuan-ze-ke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 選択可能")], -1);

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ノードの選択に使用します。", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "この例では、ノードデータを非同期にロードする方法も示しています。")], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox\n  @check-change=\"handleCheckChange\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones'\n        },\n        count: 1\n      };\n    },\n    methods: {\n      handleCheckChange(data, checked, indeterminate) {\n        console.log(data, checked, indeterminate);\n      },\n      handleNodeClick(data) {\n        console.log(data);\n      },\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'Root1' }, { name: 'Root2' }]);\n        }\n        if (node.level > 3) return resolve([]);\n\n        var hasChild;\n        if (node.data.name === 'region1') {\n          hasChild = true;\n        } else if (node.data.name === 'region2') {\n          hasChild = false;\n        } else {\n          hasChild = Math.random() > 0.5;\n        }\n\n        setTimeout(() => {\n          var data;\n          if (hasChild) {\n            data = [{\n              name: 'zone' + this.count++\n            }, {\n              name: 'zone' + this.count++\n            }];\n          } else {\n            data = [];\n          }\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "chi-yan-mododenokasutamurihunodo"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#chi-yan-mododenokasutamurihunodo"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 遅延モードでのカスタムリーフノード")], -1);

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ノードのデータはクリックされるまで取得されないので、ツリーはそのノードがリーフノードであるかどうかを予測することができません。そのため、各ノードにはドロップダウンボタンが追加されており、リーフノードであればクリックされるとドロップダウンボタンは消えてしまいます。つまり、ノードがリーフノードであるかどうかを事前にツリーに伝えることで、リーフノードの前にドロップダウンボタンがレンダリングされるのを避けることもできます。")], -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :props=\"props\"\n  :load=\"loadNode\"\n  lazy\n  show-checkbox>\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        props: {\n          label: 'name',\n          children: 'zones',\n          isLeaf: 'leaf'\n        },\n      };\n    },\n    methods: {\n      loadNode(node, resolve) {\n        if (node.level === 0) {\n          return resolve([{ name: 'region' }]);\n        }\n        if (node.level > 1) return resolve([]);\n\n        setTimeout(() => {\n          const data = [{\n            name: 'leaf',\n            leaf: true\n          }, {\n            name: 'zone'\n          }];\n\n          resolve(data);\n        }, 500);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "tietukubotukusuwu-xiao-hua"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#tietukubotukusuwu-xiao-hua"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" チェックボックス無効化")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ノードのチェックボックスを無効に設定することができます。", -1);

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "この例では、defaultPropsで'disabled'プロパティが宣言されており、一部のノードは'disabled:true'として設定されています。対応するチェックボックスは無効化されており、クリックできないようになっています。")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  show-checkbox\n  @check-change=\"handleCheckChange\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 3,\n            label: 'Level two 2-1',\n            children: [{\n              id: 4,\n              label: 'Level three 3-1-1'\n            }, {\n              id: 5,\n              label: 'Level three 3-1-2',\n              disabled: true\n            }]\n          }, {\n            id: 2,\n            label: 'Level two 2-2',\n            disabled: true,\n            children: [{\n              id: 6,\n              label: 'Level three 3-2-1'\n            }, {\n              id: 7,\n              label: 'Level three 3-2-2',\n              disabled: true\n            }]\n          }]\n        }],\n        defaultProps: {\n            children: 'children',\n            label: 'label',\n            disabled: 'disabled',\n        },\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "dehuorutozhan-kai-tietuku"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#dehuorutozhan-kai-tietuku"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" デフォルト展開、チェック")], -1);

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ツリーノードは、最初に展開またはチェックすることができます。", -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-expanded-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "default-checked-keys"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を用いて、それぞれ初期展開ノードと初期チェックノードを設定する。これらが動作するためには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が必要であることに注意してください。この値はデータオブジェクトのキーの名前であり、そのキーの値はツリー全体で一意でなければなりません。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  node-key=\"id\"\n  :default-expanded-keys=\"[2, 3]\"\n  :default-checked-keys=\"[5]\"\n  :props=\"defaultProps\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "turinodonotietuku"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#turinodonotietuku"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ツリーノードのチェック")], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("この例では、チェックされたノードを取得して設定する方法を示しています。どちらも、ノードとキーの2つのアプローチで行うことができます。キーアプローチの場合は "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node-key"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が必要です。")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  show-checkbox\n  default-expand-all\n  node-key=\"id\"\n  ref=\"tree\"\n  highlight-current\n  :props=\"defaultProps\">\n</el-tree>\n\n<div class=\"buttons\">\n  <el-button @click=\"getCheckedNodes\">get by node</el-button>\n  <el-button @click=\"getCheckedKeys\">get by key</el-button>\n  <el-button @click=\"setCheckedNodes\">set by node</el-button>\n  <el-button @click=\"setCheckedKeys\">set by key</el-button>\n  <el-button @click=\"resetChecked\">reset</el-button>\n</div>\n\n<script>\n  export default {\n    methods: {\n      getCheckedNodes() {\n        console.log(this.$refs.tree.getCheckedNodes());\n      },\n      getCheckedKeys() {\n        console.log(this.$refs.tree.getCheckedKeys());\n      },\n      setCheckedNodes() {\n        this.$refs.tree.setCheckedNodes([{\n          id: 5,\n          label: 'Level two 2-1'\n        }, {\n          id: 9,\n          label: 'Level three 1-1-1'\n        }]);\n      },\n      setCheckedKeys() {\n        this.$refs.tree.setCheckedKeys([3]);\n      },\n      resetChecked() {\n        this.$refs.tree.setCheckedKeys([]);\n      }\n    },\n\n    data() {\n      return {\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "kasutamunodononei-rong"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#kasutamunodononei-rong"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" カスタムノードの内容")], -1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ツリーノードの内容をカスタマイズできるので、好きなようにアイコンやボタンを追加することができます。", -1);

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ツリーノードのテンプレートをカスタマイズするには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" とスコープ付きスロットの2つの方法があります。ツリーノードの内容を返すレンダー関数を割り当てるには、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" を使用します。レンダリング関数の詳細については、Vueのドキュメントを参照してください。スコープされたスロットを使用したい場合は、スコープ内の "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "node"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "data"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" にアクセスできます。JSX 構文をサポートしていないため、"), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" デモは jsfiddle で実行できないことに注意してください。実際のプロジェクトでは、関連する依存関係が正しく設定されていれば "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "render-content"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" は動作します。")])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "\n")], -1);

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "turinodohuirutaringu"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#turinodohuirutaringu"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ツリーノードフィルタリング")], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "ツリーノードはフィルタリング出来る。", -1);

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ツリーインスタンスの "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" メソッドを呼び出してツリーノードをフィルタリングします。そのパラメータはフィルタリングキーワードである。これが動作するためには "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "filter-node-method"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" が必要であり、その値がフィルタリングメソッドであることに注意すること。")])], -1);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-input\n  placeholder=\"Filter keyword\"\n  v-model=\"filterText\">\n</el-input>\n\n<el-tree\n  class=\"filter-tree\"\n  :data=\"data\"\n  :props=\"defaultProps\"\n  default-expand-all\n  :filter-node-method=\"filterNode\"\n  ref=\"tree\">\n</el-tree>\n\n<script>\n  export default {\n    watch: {\n      filterText(val) {\n        this.$refs.tree.filter(val);\n      }\n    },\n\n    methods: {\n      filterNode(value, data) {\n        if (!value) return true;\n        return data.label.indexOf(value) !== -1;\n      }\n    },\n\n    data() {\n      return {\n        filterText: '',\n        data: [{\n          id: 1,\n          label: 'Level one 1',\n          children: [{\n            id: 4,\n            label: 'Level two 1-1',\n            children: [{\n              id: 9,\n              label: 'Level three 1-1-1'\n            }, {\n              id: 10,\n              label: 'Level three 1-1-2'\n            }]\n          }]\n        }, {\n          id: 2,\n          label: 'Level one 2',\n          children: [{\n            id: 5,\n            label: 'Level two 2-1'\n          }, {\n            id: 6,\n            label: 'Level two 2-2'\n          }]\n        }, {\n          id: 3,\n          label: 'Level one 3',\n          children: [{\n            id: 7,\n            label: 'Level two 3-1'\n          }, {\n            id: 8,\n            label: 'Level two 3-2'\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    }\n  };\n</script>\n")], -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "akodeion"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#akodeion"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" アコーディオン")], -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, "一度に展開できるのは同一レベル内の1つのノードのみです。", -1);

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  :props=\"defaultProps\"\n  accordion\n  @node-click=\"handleNodeClick\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleNodeClick(data) {\n        console.log(data);\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("h3", {
  id: "doratuguke-neng"
}, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("a", {
  class: "header-anchor",
  href: "#doratuguke-neng"
}, "¶"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" ドラッグ可能")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])("ツリーノードに "), /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", null, "draggable"), /*#__PURE__*/Object(vue_esm_browser["n" /* createTextVNode */])(" 属性を追加することで、ツリーノードをドラッグ＆ドロップすることができます。")], -1);

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser["o" /* createVNode */])("code", {
  class: "html"
}, "<el-tree\n  :data=\"data\"\n  node-key=\"id\"\n  default-expand-all\n  @node-drag-start=\"handleDragStart\"\n  @node-drag-enter=\"handleDragEnter\"\n  @node-drag-leave=\"handleDragLeave\"\n  @node-drag-over=\"handleDragOver\"\n  @node-drag-end=\"handleDragEnd\"\n  @node-drop=\"handleDrop\"\n  draggable\n  :allow-drop=\"allowDrop\"\n  :allow-drag=\"allowDrag\">\n</el-tree>\n\n<script>\n  export default {\n    data() {\n      return {\n        data: [{\n          label: 'Level one 1',\n          children: [{\n            label: 'Level two 1-1',\n            children: [{\n              label: 'Level three 1-1-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 2',\n          children: [{\n            label: 'Level two 2-1',\n            children: [{\n              label: 'Level three 2-1-1'\n            }]\n          }, {\n            label: 'Level two 2-2',\n            children: [{\n              label: 'Level three 2-2-1'\n            }]\n          }]\n        }, {\n          label: 'Level one 3',\n          children: [{\n            label: 'Level two 3-1',\n            children: [{\n              label: 'Level three 3-1-1'\n            }]\n          }, {\n            label: 'Level two 3-2',\n            children: [{\n              label: 'Level three 3-2-1'\n            }]\n          }]\n        }],\n        defaultProps: {\n          children: 'children',\n          label: 'label'\n        }\n      };\n    },\n    methods: {\n      handleDragStart(node, ev) {\n        console.log('drag start', node);\n      },\n      handleDragEnter(draggingNode, dropNode, ev) {\n        console.log('tree drag enter: ', dropNode.label);\n      },\n      handleDragLeave(draggingNode, dropNode, ev) {\n        console.log('tree drag leave: ', dropNode.label);\n      },\n      handleDragOver(draggingNode, dropNode, ev) {\n        console.log('tree drag over: ', dropNode.label);\n      },\n      handleDragEnd(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drag end: ', dropNode && dropNode.label, dropType);\n      },\n      handleDrop(draggingNode, dropNode, dropType, ev) {\n        console.log('tree drop: ', dropNode.label, dropType);\n      },\n      allowDrop(draggingNode, dropNode, type) {\n        if (dropNode.data.label === 'Level two 3-1') {\n          return type !== 'inner';\n        } else {\n          return true;\n        }\n      },\n      allowDrag(draggingNode) {\n        return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;\n      }\n    }\n  };\n</script>\n")], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser["m" /* createStaticVNode */])("<h3 id=\"attributes\"><a class=\"header-anchor\" href=\"#attributes\">¶</a> Attributes</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>data</td><td>tree data</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>text displayed when data is void</td><td>string</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>unique identity key name for nodes, its value should be unique across the whole tree</td><td>string</td><td>—</td><td>—</td></tr><tr><td>props</td><td>configuration options, see the following table</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>whether to render child nodes only after a parent node is expanded for the first time</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>method for loading subtree data, only works when <code>lazy</code> is true</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>render function for tree node</td><td>Function(h, { node, data, store }</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>whether current node is highlighted</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>whether to expand all nodes by default</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>check-on-click-node</td><td>whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>auto-expand-parent</td><td>whether to expand father node when a child node is expanded</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>array of keys of initially expanded nodes</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>whether node is selectable</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code></td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>array of keys of initially checked nodes</td><td>array</td><td>—</td><td>—</td></tr><tr><td>current-node-key</td><td>key of initially selected node</td><td>string, number</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>whether only one node among the same level can be expanded at one time</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>horizontal indentation of nodes in adjacent levels in pixels</td><td>number</td><td>—</td><td>16</td></tr><tr><td>icon-class</td><td>custome tree node icon</td><td>string</td><td>-</td><td>-</td></tr><tr><td>lazy</td><td>whether to lazy load leaf node, used with <code>load</code> attribute</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>draggable</td><td>whether enable tree nodes drag and drop</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>allow-drag</td><td>this function will be executed before dragging a node. If <code>false</code> is returned, the node can not be dragged</td><td>Function(node)</td><td>—</td><td>—</td></tr><tr><td>allow-drop</td><td>this function will be executed before the dragging node is dropped. If <code>false</code> is returned, the dragging node can not be dropped at the target node. <code>type</code> has three possible values: &#39;prev&#39; (inserting the dragging node before the target node), &#39;inner&#39; (inserting the dragging node to the target node) and &#39;next&#39; (inserting the dragging node after the target node)</td><td>Function(draggingNode, dropNode, type)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"props\"><a class=\"header-anchor\" href=\"#props\">¶</a> props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Accepted Values</th><th>Default</th></tr></thead><tbody><tr><td>label</td><td>specify which key of node object is used as the node&#39;s label</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>specify which node object is used as the node&#39;s subtree</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>specify which key of node object represents if node&#39;s checkbox is disabled</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>specify whether the node is a leaf node, only works when lazy load is enabled</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\"method\"><a class=\"header-anchor\" href=\"#method\">¶</a> Method</h3><p><code>Tree</code> has the following method, which returns the currently selected array of nodes.</p><table><thead><tr><th>Method</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>filter</td><td>filter all tree nodes, filtered nodes will be hidden</td><td>Accept a parameter which will be used as first parameter for filter-node-method</td></tr><tr><td>updateKeyChildren</td><td>set new data to node, only works when <code>node-key</code> is assigned</td><td>(key, data) Accept two parameters: 1. key of node 2. new data</td></tr><tr><td>getCheckedNodes</td><td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes</td><td>(leafOnly, includeHalfChecked) Accept two boolean type parameters: 1. default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes. 2. default value is <code>false</code>. If the parameter is <code>true</code>, the return value contains halfchecked nodes</td></tr><tr><td>setCheckedNodes</td><td>set certain nodes to be checked, only works when <code>node-key</code> is assigned</td><td>an array of nodes to be checked</td></tr><tr><td>getCheckedKeys</td><td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node&#39;s keys</td><td>(leafOnly) Accept a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.</td></tr><tr><td>setCheckedKeys</td><td>set certain nodes to be checked, only works when <code>node-key</code> is assigned</td><td>(keys, leafOnly) Accept two parameters: 1. an array of node&#39;s keys to be checked 2. a boolean type parameter whose default value is <code>false</code>. If the parameter is <code>true</code>, it only returns the currently selected array of sub-nodes.</td></tr><tr><td>setChecked</td><td>set node to be checked or not, only works when <code>node-key</code> is assigned</td><td>(key/data, checked, deep) Accept three parameters: 1. node&#39;s key or data to be checked 2. a boolean typed parameter indicating checked or not. 3. a boolean typed parameter indicating deep or not.</td></tr><tr><td>getHalfCheckedNodes</td><td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes</td><td>-</td></tr><tr><td>getHalfCheckedKeys</td><td>If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node&#39;s keys</td><td>-</td></tr><tr><td>getCurrentKey</td><td>return the highlight node&#39;s key (null if no node is highlighted)</td><td>—</td></tr><tr><td>getCurrentNode</td><td>return the highlight node&#39;s data (null if no node is highlighted)</td><td>—</td></tr><tr><td>setCurrentKey</td><td>set highlighted node by key, only works when <code>node-key</code> is assigned</td><td>(key, shouldAutoExpandParent=true) 1. the node&#39;s key to be highlighted. If <code>null</code>, cancel the currently highlighted node 2. whether to automatically expand parent node</td></tr><tr><td>setCurrentNode</td><td>set highlighted node, only works when <code>node-key</code> is assigned</td><td>(node, shouldAutoExpandParent=true) 1. the node to be highlighted 2. whether to automatically expand parent node</td></tr><tr><td>getNode</td><td>get node by data or key</td><td>(data) the node&#39;s data or key</td></tr><tr><td>remove</td><td>remove a node, only works when node-key is assigned</td><td>(data) the node&#39;s data or node to be deleted</td></tr><tr><td>append</td><td>append a child node to a given node in the tree</td><td>(data, parentNode) 1. child node&#39;s data to be appended 2. parent node&#39;s data, key or node</td></tr><tr><td>insertBefore</td><td>insert a node before a given node in the tree</td><td>(data, refNode) 1. node&#39;s data to be inserted 2. reference node&#39;s data, key or node</td></tr><tr><td>insertAfter</td><td>insert a node after a given node in the tree</td><td>(data, refNode) 1. node&#39;s data to be inserted 2. reference node&#39;s data, key or node</td></tr></tbody></table><h3 id=\"events\"><a class=\"header-anchor\" href=\"#events\">¶</a> Events</h3><table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>node-click</td><td>triggers when a node is clicked</td><td>three parameters: node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-contextmenu</td><td>triggers when a node is clicked by right button</td><td>four parameters: event, node object corresponding to the node clicked, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>check-change</td><td>triggers when the selected state of the node changes</td><td>three parameters: node object corresponding to the node whose selected state is changed, whether the node is selected, whether node&#39;s subtree has selected nodes</td></tr><tr><td>check</td><td>triggers after clicking the checkbox of a node</td><td>two parameters: node object corresponding to the node that is checked / unchecked, tree checked status object which has four props: checkedNodes, checkedKeys, halfCheckedNodes, halfCheckedKeys</td></tr><tr><td>current-change</td><td>triggers when current node changes</td><td>two parameters: node object corresponding to the current node, <code>node</code> property of TreeNode</td></tr><tr><td>node-expand</td><td>triggers when current node open</td><td>three parameters: node object corresponding to the node opened, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-collapse</td><td>triggers when current node close</td><td>three parameters: node object corresponding to the node closed, <code>node</code> property of TreeNode, TreeNode itself</td></tr><tr><td>node-drag-start</td><td>triggers when dragging starts</td><td>two parameters: node object corresponding to the dragging node, event.</td></tr><tr><td>node-drag-enter</td><td>triggers when the dragging node enters another node</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the entering node, event.</td></tr><tr><td>node-drag-leave</td><td>triggers when the dragging node leaves a node</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the leaving node, event.</td></tr><tr><td>node-drag-over</td><td>triggers when dragging over a node (like mouseover event)</td><td>three parameters: node object corresponding to the dragging node, node object corresponding to the dragging over node, event.</td></tr><tr><td>node-drag-end</td><td>triggers when dragging ends</td><td>four parameters: node object corresponding to the dragging node, node object corresponding to the dragging end node (may be <code>undefined</code>), node drop type (before / after / inner), event.</td></tr><tr><td>node-drop</td><td>triggers after the dragging node is dropped</td><td>four parameters: node object corresponding to the dragging node, node object corresponding to the dropped node, node drop type (before / after / inner), event.</td></tr></tbody></table><h3 id=\"scoped-slot\"><a class=\"header-anchor\" href=\"#scoped-slot\">¶</a> Scoped Slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>—</td><td>Custom content for tree nodes. The scope parameter is { node, data }</td></tr></tbody></table>", 11);

function treevue_type_template_id_008229c7_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_element_demo0 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser["P" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo3");

  var _component_element_demo4 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo4");

  var _component_element_demo5 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo5");

  var _component_element_demo6 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo6");

  var _component_element_demo7 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo7");

  var _component_element_demo8 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo8");

  var _component_element_demo9 = Object(vue_esm_browser["P" /* resolveComponent */])("element-demo9");

  var _component_right_nav = Object(vue_esm_browser["P" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser["G" /* openBlock */])(), Object(vue_esm_browser["j" /* createBlock */])("section", treevue_type_template_id_008229c7_hoisted_1, [treevue_type_template_id_008229c7_hoisted_2, treevue_type_template_id_008229c7_hoisted_3, treevue_type_template_id_008229c7_hoisted_4, treevue_type_template_id_008229c7_hoisted_5, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [treevue_type_template_id_008229c7_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), _hoisted_11, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_12];
    }),
    _: 1
  }), _hoisted_14, _hoisted_15, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_16];
    }),
    _: 1
  }), _hoisted_18, _hoisted_19, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo4)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo5)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_24];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_23];
    }),
    _: 1
  }), _hoisted_25, _hoisted_26, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo6)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_28];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_27];
    }),
    _: 1
  }), _hoisted_29, _hoisted_30, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo7)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_32];
    }),
    default: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_31];
    }),
    _: 1
  }), _hoisted_33, _hoisted_34, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo8)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), _hoisted_36, _hoisted_37, Object(vue_esm_browser["o" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [Object(vue_esm_browser["o" /* createVNode */])(_component_element_demo9)];
    }),
    highlight: Object(vue_esm_browser["eb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), _hoisted_39, Object(vue_esm_browser["o" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/tree.md?vue&type=template&id=008229c7

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(5);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/tree.md?vue&type=script&lang=ts


/* harmony default export */ var treevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          }
        }
      };
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
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": "",
          onCheckChange: _ctx.handleCheckChange
        }, null, 8, ["props", "load", "onCheckChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            props: {
              label: 'name',
              children: 'zones'
            },
            count: 1
          };
        },
        methods: {
          handleCheckChange: function handleCheckChange(data, checked, indeterminate) {
            console.log(data, checked, indeterminate);
          },
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          },
          loadNode: function loadNode(node, resolve) {
            var _this = this;

            if (node.level === 0) {
              return resolve([{
                name: 'Root1'
              }, {
                name: 'Root2'
              }]);
            }

            if (node.level > 3) return resolve([]);
            var hasChild;

            if (node.data.name === 'region1') {
              hasChild = true;
            } else if (node.data.name === 'region2') {
              hasChild = false;
            } else {
              hasChild = Math.random() > 0.5;
            }

            setTimeout(function () {
              var data;

              if (hasChild) {
                data = [{
                  name: 'zone' + _this.count++
                }, {
                  name: 'zone' + _this.count++
                }];
              } else {
                data = [];
              }

              resolve(data);
            }, 500);
          }
        }
      };
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
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          props: _ctx.props,
          load: _ctx.loadNode,
          lazy: "",
          "show-checkbox": ""
        }, null, 8, ["props", "load"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            props: {
              label: 'name',
              children: 'zones',
              isLeaf: 'leaf'
            }
          };
        },
        methods: {
          loadNode: function loadNode(node, resolve) {
            if (node.level === 0) {
              return resolve([{
                name: 'region'
              }]);
            }

            if (node.level > 1) return resolve([]);
            setTimeout(function () {
              var data = [{
                name: 'leaf',
                leaf: true
              }, {
                name: 'zone'
              }];
              resolve(data);
            }, 500);
          }
        }
      };
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
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          "show-checkbox": "",
          onCheckChange: _ctx.handleCheckChange
        }, null, 8, ["data", "props", "onCheckChange"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 3,
                label: 'Level two 2-1',
                children: [{
                  id: 4,
                  label: 'Level three 3-1-1'
                }, {
                  id: 5,
                  label: 'Level three 3-1-2',
                  disabled: true
                }]
              }, {
                id: 2,
                label: 'Level two 2-2',
                disabled: true,
                children: [{
                  id: 6,
                  label: 'Level three 3-2-1'
                }, {
                  id: 7,
                  label: 'Level three 3-2-2',
                  disabled: true
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label',
              disabled: 'disabled'
            }
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

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "node-key": "id",
          "default-expanded-keys": [2, 3],
          "default-checked-keys": [5],
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
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
          _createTextVNode = vue_esm_browser["n" /* createTextVNode */],
          _withCtx = vue_esm_browser["eb" /* withCtx */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];
      var _hoisted_1 = {
        class: "buttons"
      };

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("get by node");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("get by key");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("set by node");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("set by key");

      var _hoisted_6 = /*#__PURE__*/_createTextVNode("reset");

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        var _component_el_button = _resolveComponent("el-button");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "show-checkbox": "",
          "default-expand-all": "",
          "node-key": "id",
          ref: "tree",
          "highlight-current": "",
          props: _ctx.defaultProps
        }, null, 8, ["data", "props"]), _createVNode("div", _hoisted_1, [_createVNode(_component_el_button, {
          onClick: _ctx.getCheckedNodes
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.getCheckedKeys
        }, {
          default: _withCtx(function () {
            return [_hoisted_3];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedNodes
        }, {
          default: _withCtx(function () {
            return [_hoisted_4];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.setCheckedKeys
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }, 8, ["onClick"]), _createVNode(_component_el_button, {
          onClick: _ctx.resetChecked
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["onClick"])])]);
      }

      var democomponentExport = {
        methods: {
          getCheckedNodes: function getCheckedNodes() {
            console.log(this.$refs.tree.getCheckedNodes());
          },
          getCheckedKeys: function getCheckedKeys() {
            console.log(this.$refs.tree.getCheckedKeys());
          },
          setCheckedNodes: function setCheckedNodes() {
            this.$refs.tree.setCheckedNodes([{
              id: 5,
              label: 'Level two 2-1'
            }, {
              id: 9,
              label: 'Level three 1-1-1'
            }]);
          },
          setCheckedKeys: function setCheckedKeys() {
            this.$refs.tree.setCheckedKeys([3]);
          },
          resetChecked: function resetChecked() {
            this.$refs.tree.setCheckedKeys([]);
          }
        },
        data: function data() {
          return {
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo6": function () {
      var _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        return _openBlock(), _createBlock("div");
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo7": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_input = _resolveComponent("el-input");

        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_input, {
          placeholder: "Filter keyword",
          modelValue: _ctx.filterText,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.filterText = $event;
          })
        }, null, 8, ["modelValue"]), _createVNode(_component_el_tree, {
          class: "filter-tree",
          data: _ctx.data,
          props: _ctx.defaultProps,
          "default-expand-all": "",
          "filter-node-method": _ctx.filterNode,
          ref: "tree"
        }, null, 8, ["data", "props", "filter-node-method"])]);
      }

      var democomponentExport = {
        watch: {
          filterText: function filterText(val) {
            this.$refs.tree.filter(val);
          }
        },
        methods: {
          filterNode: function filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
          }
        },
        data: function data() {
          return {
            filterText: '',
            data: [{
              id: 1,
              label: 'Level one 1',
              children: [{
                id: 4,
                label: 'Level two 1-1',
                children: [{
                  id: 9,
                  label: 'Level three 1-1-1'
                }, {
                  id: 10,
                  label: 'Level three 1-1-2'
                }]
              }]
            }, {
              id: 2,
              label: 'Level one 2',
              children: [{
                id: 5,
                label: 'Level two 2-1'
              }, {
                id: 6,
                label: 'Level two 2-2'
              }]
            }, {
              id: 3,
              label: 'Level one 3',
              children: [{
                id: 7,
                label: 'Level two 3-1'
              }, {
                id: 8,
                label: 'Level two 3-2'
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo8": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          props: _ctx.defaultProps,
          accordion: "",
          onNodeClick: _ctx.handleNodeClick
        }, null, 8, ["data", "props", "onNodeClick"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleNodeClick: function handleNodeClick(data) {
            console.log(data);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo9": function () {
      var _resolveComponent = vue_esm_browser["P" /* resolveComponent */],
          _createVNode = vue_esm_browser["o" /* createVNode */],
          _openBlock = vue_esm_browser["G" /* openBlock */],
          _createBlock = vue_esm_browser["j" /* createBlock */];

      function render(_ctx, _cache) {
        var _component_el_tree = _resolveComponent("el-tree");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_tree, {
          data: _ctx.data,
          "node-key": "id",
          "default-expand-all": "",
          onNodeDragStart: _ctx.handleDragStart,
          onNodeDragEnter: _ctx.handleDragEnter,
          onNodeDragLeave: _ctx.handleDragLeave,
          onNodeDragOver: _ctx.handleDragOver,
          onNodeDragEnd: _ctx.handleDragEnd,
          onNodeDrop: _ctx.handleDrop,
          draggable: "",
          "allow-drop": _ctx.allowDrop,
          "allow-drag": _ctx.allowDrag
        }, null, 8, ["data", "onNodeDragStart", "onNodeDragEnter", "onNodeDragLeave", "onNodeDragOver", "onNodeDragEnd", "onNodeDrop", "allow-drop", "allow-drag"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            data: [{
              label: 'Level one 1',
              children: [{
                label: 'Level two 1-1',
                children: [{
                  label: 'Level three 1-1-1'
                }]
              }]
            }, {
              label: 'Level one 2',
              children: [{
                label: 'Level two 2-1',
                children: [{
                  label: 'Level three 2-1-1'
                }]
              }, {
                label: 'Level two 2-2',
                children: [{
                  label: 'Level three 2-2-1'
                }]
              }]
            }, {
              label: 'Level one 3',
              children: [{
                label: 'Level two 3-1',
                children: [{
                  label: 'Level three 3-1-1'
                }]
              }, {
                label: 'Level two 3-2',
                children: [{
                  label: 'Level three 3-2-1'
                }]
              }]
            }],
            defaultProps: {
              children: 'children',
              label: 'label'
            }
          };
        },
        methods: {
          handleDragStart: function handleDragStart(node, ev) {
            console.log('drag start', node);
          },
          handleDragEnter: function handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
          },
          handleDragLeave: function handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
          },
          handleDragOver: function handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
          },
          handleDragEnd: function handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
          },
          handleDrop: function handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
          },
          allowDrop: function allowDrop(draggingNode, dropNode, type) {
            if (dropNode.data.label === 'Level two 3-1') {
              return type !== 'inner';
            } else {
              return true;
            }
          },
          allowDrag: function allowDrag(draggingNode) {
            return draggingNode.data.label.indexOf('Level three 3-1-1') === -1;
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/tree.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/tree.md



treevue_type_script_lang_ts.render = treevue_type_template_id_008229c7_render

/* harmony default export */ var tree = __webpack_exports__["default"] = (treevue_type_script_lang_ts);

/***/ })

}]);