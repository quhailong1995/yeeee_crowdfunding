webpackJsonp([15],{Irhn:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("Dd8w"),l=o.n(a),i={data:function(){return{id:null,visible:!1,dataForm:{}}},methods:{init:function(t){var e=this;this.id=t,this.visible=!0,this.$nextTick(function(){e.id&&e.getInfo()})},getInfo:function(){var t=this;this.$http.get("/sys/role/info/"+this.id).then(function(e){var o=e.data;if(0!==o.code)return t.$message.error(o.msg);t.dataForm=l()({},t.dataForm,o.data)}).catch(function(){})}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-dialog",{staticClass:"mod-role-info",attrs:{title:"详情","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[o("el-form",{ref:"dataForm",attrs:{model:t.dataForm,"label-width":"120px"}},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:20}},[o("el-form-item",{attrs:{label:"编码:"}},[o("label",[t._v(t._s(t.dataForm.cd))])])],1),t._v(" "),o("el-col",{attrs:{span:20}},[o("el-form-item",{attrs:{label:"名称:"}},[o("label",[t._v(t._s(t.dataForm.nm))])])],1),t._v(" "),o("el-col",{attrs:{span:20}},[o("el-form-item",{attrs:{label:"备注:"}},[o("label",[t._v(t._s(t.dataForm.rmks))])])],1)],1)],1),t._v(" "),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1)],1)},staticRenderFns:[]};var n=o("VU/8")(i,r,!1,function(t){o("wEP7")},null,null);e.default=n.exports},vCgC:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,"\n.mod-role-info .el-dialog{\r\n  width: 45%\n}\r\n",""])},wEP7:function(t,e,o){var a=o("vCgC");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);o("rjj0")("8b0693d8",a,!0)}});