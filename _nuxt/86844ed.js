(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{494:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return r})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return c}));var o="user_0AAXFoXBuQt5yzoPnkLLl",r="FNAME___",d="___FNAME",c="______"},715:function(t,e,n){"use strict";n.r(e),n.d(e,"toggleActiveStateScript",(function(){return s}));var o=n(494),s={props:["editableData","jsonPath","fileName"],data:function(){return{dev:this.isDevAndLocal(),preview:this.$store.state.preview.enabled,editableDataCopy:this.editableData}},methods:{isDevAndLocal:function(){return!1},toggleActive:function(){this.editableDataCopy=!this.editableDataCopy,this.$emit("edited",o.d+this.fileName+o.b+this.editableDataCopy+o.c+this.jsonPath)}},mounted:function(){},watch:{editableData:function(t){this.editableDataCopy=t},"$store.state.preview.enabled":function(t){this.preview=t}}}}}]);