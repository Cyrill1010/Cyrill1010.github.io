(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{4569:function(t,e,s){"use strict";s("d189")},c4cf:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",[s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"row justify-center items-start content-start text-center"},[s("div",{staticClass:"column"},[s("div",{staticClass:"column q-col-gutter-lg"},[s("div",{staticClass:"col text-h5"},[t._v("Create Studyset")]),s("div",{staticClass:"col"},[s("div",{staticClass:"text-subtitle1"},[t._v("Name")]),s("q-input",{attrs:{filled:"",label:"studyset name"},model:{value:t.studysetName,callback:function(e){t.studysetName=e},expression:"studysetName"}})],1),s("div",{staticClass:"row justify-center full-width"},[s("div",{staticClass:"q-pr-md"},[s("div",{staticClass:"text-subtitle1"},[t._v("Select Folder")]),s("q-select",{staticStyle:{width:"200px"},attrs:{clearable:"",filled:"",color:"purple-12",options:t.folders,label:"folder"},model:{value:t.selectedFolder,callback:function(e){t.selectedFolder=e},expression:"selectedFolder"}})],1),s("div",[t._v("OR")]),s("div",{staticClass:"q-pl-md"},[s("div",{staticClass:"text-subtitle1"},[t._v("\n\t\t\t\t\t\t\t\tCreate new Folder\n\t\t\t\t\t\t\t")]),s("q-input",{attrs:{filled:"",label:"folder name"},model:{value:t.newFolderName,callback:function(e){t.newFolderName=e},expression:"newFolderName"}})],1)])])])]),s("q-separator",{attrs:{spaced:""}}),s("div",{staticClass:"column"},[s("q-list",[s("q-item-label",{attrs:{header:""}},[t._v("Terms")]),t._l(t.inputs,(function(e,a){return s("q-item",{key:a,staticClass:"bg-grey-2 q-my-sm",staticStyle:{height:"48px"}},[s("q-item-section",[s("q-item-label",{staticClass:"row"},[s("q-input",{staticClass:"col",attrs:{placeholder:"Definition",rounded:"",standout:"bg-grey-4",borderless:"",dense:""},model:{value:e.key,callback:function(s){t.$set(e,"key",s)},expression:"el.key"}}),s("q-input",{staticClass:"col",attrs:{placeholder:"Solution",standout:"bg-grey-4",borderless:"",dense:"",rounded:""},model:{value:e.value,callback:function(s){t.$set(e,"value",s)},expression:"el.value"}})],1)],1)],1)}))],2)],1),s("div",{staticClass:"row",staticStyle:{position:"fixed",bottom:"16px",right:"16px"},attrs:{id:"cancelAndCreateButtons"}},[s("q-btn",{staticClass:"col",on:{click:t.cancel}},[t._v("Cancel")]),s("q-btn",{staticClass:"col",on:{click:function(e){return t.$store.dispatch("database/addStudySet",{folderName:t.selectedFolder,newFolder:t.newFolderName,name:t.studysetName})}}},[t._v("\n\t\t\t\tCreate\n\t\t\t")])],1)],1)])},l=[],i=(s("ddb0"),s("52cd")),c=s.n(i);let o=[...Array(5).keys()].map((()=>({key:"",val:""})));var d={data(){return{selectedFolder:"",newFolderName:"",studysetName:"",inputs:o}},methods:{cancel(){this.inputs.map((()=>({key:"",val:""}))),this.$router.go(-1)}},computed:{folders(){return console.log(c.a.query(this.$store.state.database.folders,"$[*].folderName")),c.a.query(this.$store.state.database.folders,"$[*].folderName")}}},n=d,r=(s("4569"),s("2877")),u=s("9989"),m=s("27f9"),p=s("ddd8"),v=s("eb85"),b=s("1c1c"),f=s("0170"),y=s("66e5"),C=s("4074"),q=s("9c40"),w=s("eebe"),h=s.n(w),k=Object(r["a"])(n,a,l,!1,null,"59b31879",null);e["default"]=k.exports;h()(k,"components",{QPage:u["a"],QInput:m["a"],QSelect:p["a"],QSeparator:v["a"],QList:b["a"],QItemLabel:f["a"],QItem:y["a"],QItemSection:C["a"],QBtn:q["a"]})},d189:function(t,e,s){}}]);