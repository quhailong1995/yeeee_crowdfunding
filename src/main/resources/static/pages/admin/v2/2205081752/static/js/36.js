webpackJsonp([36],{HhAa:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("Dd8w"),s=a.n(l),r={data:function(){return{id:null,visible:!1,dataForm:{}}},methods:{init:function(t){var e=this;this.id=t,this.visible=!0,this.$nextTick(function(){e.id&&e.getInfo()})},getInfo:function(){var t=this;this.$http.get("/sys/qrtzLog/info/"+this.id).then(function(e){var a=e.data;if(0!==a.code)return t.$message.error(a.msg);t.dataForm=s()({},t.dataForm,a.data)}).catch(function(){})}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-dialog",{staticClass:"mod-qrtzLog-info",attrs:{title:"详情","close-on-click-modal":!1,visible:t.visible},on:{"update:visible":function(e){t.visible=e}}},[a("el-form",{ref:"dataForm",attrs:{model:t.dataForm,"label-width":"120px"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"url:"}},[a("label",[t._v(t._s(t.dataForm.url))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"任务标识:"}},[a("label",[t._v(t._s(t.dataForm.jobKey))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态"}},[a("label",[t._v(t._s(0===t.dataForm.status?"成功":"失败"))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"运行时长:"}},[a("label",[t._v(t._s(t.dataForm.spendTime))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"备注:"}},[a("label",[t._v(t._s(t.dataForm.rmks))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"这次执行时间:"}},[a("label",[t._v(t._s(t.dataForm.preFireTm))])])],1),t._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"下次执行时间:"}},[a("label",[t._v(t._s(t.dataForm.nextFireTm))])])],1)],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.visible=!1}}},[t._v("取消")])],1)],1)},staticRenderFns:[]},i=a("VU/8")(r,o,!1,null,null,null);e.default=i.exports}});