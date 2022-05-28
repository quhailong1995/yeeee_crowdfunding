webpackJsonp([17],{LpgP:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("Gu7T"),o=r.n(a),s=r("Dd8w"),i=r.n(s),n=r("O4Lo"),l={data:function(){var e=this;return{id:null,visible:!1,rscoList:[],dataForm:{code:"",name:"",rscoIdList:[]},dataFormOrigin:[],dataRule:{code:[{required:!0,message:"编码不能为空",trigger:"blur"},{validator:function(t,r,a){var o=e.$query.new();e.$query.toW(o,t.field,r,"EQ"),e.$http.get("/admin/sys-role/exist?query="+encodeURIComponent(e.$query.toJsonStr(o))).then(function(o){var s=o.data;200!==s.code&&a(new Error("服务器异常,校验失败")),r!==e.dataFormOrigin[t.field]&&s.data?a(new Error("已被使用")):a()}).catch(function(){a(new Error("校验失败"))})},trigger:"blur"}],name:[{required:!0,message:"名称不能为空",trigger:"blur"}]}}},methods:{init:function(e){var t=this;this.dataForm.id=null,this.dataFormOrigin={},this.id=e,this.visible=!0,this.rscoList=[],this.$nextTick(function(){t.$refs.dataForm.resetFields(),t.$refs.rscoListTree.setCheckedKeys([]),t.listRsco(),t.id&&t.getInfo()})},listRsco:function(){var e=this;this.$http.get("/admin/sys-menu/list-set",{params:{roleId:this.id}}).then(function(t){var r=t.data;if(200!==r.code)return e.$message.error(r.message);e.rscoList=r.data.list,e.$nextTick(function(){r.data.checkedKeys.forEach(function(t){return e.$refs.rscoListTree.setChecked(t,!0)})})}).catch(function(){})},getInfo:function(){var e=this;this.$http.json().post("/admin/sys-role/info",{id:this.id}).then(function(t){var r=t.data;if(200!==r.code)return e.$message.error(r.message);e.dataForm=i()({},e.dataForm,r.data),e.dataFormOrigin=i()({},e.dataFormOrigin,r.data)}).catch(function(){})},dataFormSubmit:r.n(n)()(function(){var e=this;this.$refs.dataForm.validate(function(t){if(t){e.dataForm.rscoIdList=[].concat(o()(e.$refs.rscoListTree.getCheckedKeys()),o()(e.$refs.rscoListTree.getHalfCheckedKeys()));var r=e.id?"/admin/sys-role/upd":"/admin/sys-role/add";e.$http.post(r,i()({},e.dataForm)).then(function(t){var r=t.data;r&&200===r.code?e.$message({message:"操作成功",type:"success",duration:500,onClose:function(){e.visible=!1,e.$emit("refreshDataList")}}):e.$message.error(r.message)})}})},1e3,{leading:!0,trailing:!1})}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-dialog",{staticClass:"mod-role-edit",attrs:{title:e.id?"修改":"新增","close-on-click-modal":!1,visible:e.visible},on:{"update:visible":function(t){e.visible=t}}},[r("el-form",{ref:"dataForm",attrs:{model:e.dataForm,rules:e.dataRule,"label-width":"120px"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.dataFormSubmit()}}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"编码",prop:"code"}},[r("el-input",{attrs:{placeholder:"编码"},model:{value:e.dataForm.code,callback:function(t){e.$set(e.dataForm,"code",t)},expression:"dataForm.code"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"名称"},model:{value:e.dataForm.name,callback:function(t){e.$set(e.dataForm,"name",t)},expression:"dataForm.name"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:20}},[r("el-form-item",{attrs:{label:"备注",prop:"remark"}},[r("el-input",{attrs:{placeholder:"备注"},model:{value:e.dataForm.remark,callback:function(t){e.$set(e.dataForm,"remark",t)},expression:"dataForm.remark"}})],1)],1)],1),e._v(" "),r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:14}},[r("el-form-item",{attrs:{label:"资源授权",size:"mini"}},[r("el-tree",{ref:"rscoListTree",attrs:{data:e.rscoList,props:{label:"name",children:"children"},"node-key":"id","show-checkbox":""}})],1)],1)],1)],1),e._v(" "),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取消")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dataFormSubmit()}}},[e._v("确定")])],1)],1)},staticRenderFns:[]};var c=r("VU/8")(l,d,!1,function(e){r("fzvG")},null,null);t.default=c.exports},fzvG:function(e,t,r){var a=r("yfKG");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r("rjj0")("6f5ec699",a,!0)},yfKG:function(e,t,r){(e.exports=r("FZ+f")(!1)).push([e.i,"\n.mod-role-edit .el-dialog{\n  width: 45%\n}\n",""])}});