!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("axios"),require("vue-class-component"),require("vue-property-decorator")):"function"==typeof define&&define.amd?define(["exports","axios","vue-class-component","vue-property-decorator"],t):t((e=e||self)["hello-world"]={},e.axios,e.Component,e.vuePropertyDecorator)}(this,function(e,t,o,r){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,o=o&&o.hasOwnProperty("default")?o.default:o;var i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(e,t)};function n(e,t,o,r){var i,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,r);else for(var p=e.length-1;p>=0;p--)(i=e[p])&&(a=(n<3?i(a):n>3?i(t,o,a):i(t,o))||a);return n>3&&a&&Object.defineProperty(t,o,a),a}var a={areaConocimiento:{path:"/areas-conocimiento",valueProp:"id",textProp:"descripcionEsp"},campo:{path:"/areas-conocimiento/{id}/campos",valueProp:"id",textProp:"descripcionEsp"},disciplina:{path:"/campos/{id}/disciplinas",valueProp:"id",textProp:"descripcionEsp"},subdisciplina:{path:"/disciplinas/{id}/subdisciplinas",valueProp:"id",textProp:"descripcionEsp"}},p=function(e){function p(){var t=null!==e&&e.apply(this,arguments)||this;return t.options=[],t}return function(e,t){function o(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}(p,e),p.prototype.created=function(){this.schema=a[this.name],this.selectName="catalogo-select-"+this.name,this.url=this.host+this.context+this.schema.path+this.queryParameters,this.loadOptions(this.pathVariable,"")},p.prototype.loadOptions=function(e,o){var r=this,i=this.url.replace("{id}",e);t.get(i).then(function(e){r.options=e.data})},n([r.Prop({type:String,required:!1,default:""})],p.prototype,"host",void 0),n([r.Prop({type:String,default:"/services/catalogos/api"})],p.prototype,"context",void 0),n([r.Prop({type:String,default:""})],p.prototype,"pathVariable",void 0),n([r.Prop({type:String,default:""})],p.prototype,"queryParameters",void 0),n([r.Prop(String)],p.prototype,"label",void 0),n([r.Prop()],p.prototype,"value",void 0),n([r.Prop({type:String,required:!0,validator:function(e){return void 0!==a[e]}})],p.prototype,"name",void 0),n([r.Prop({type:String,default:"es"})],p.prototype,"lang",void 0),n([r.Prop({type:Boolean,default:!0})],p.prototype,"required",void 0),n([r.Watch("pathVariable")],p.prototype,"loadOptions",null),p=n([o],p)}(r.Vue);var s,c,l,u,d,f=(s={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("label",{attrs:{for:e.selectName}},[e._v(e._s(e.label))]),e._v(" "),o("select",{staticClass:"form-control",attrs:{name:e.selectName,id:e.selectName,required:e.required},on:{input:function(t){return e.$emit("input",e.options[t.target.selectedIndex-1])}}},[o("option",{attrs:{value:""}}),e._v(" "),e._l(e.options,function(t,r){return o("option",{key:r,domProps:{value:t[e.schema.valueProp],selected:e.value&&t[e.schema.valueProp]===e.value[e.schema.valueProp]}},[e._v(e._s(t[e.schema.textProp]))])})],2)])},staticRenderFns:[]},l=void 0,u=!1,(d=("function"==typeof(c=p)?c.options:c)||{}).__file="CatalogoComponent.vue",d.render||(d.render=s.render,d.staticRenderFns=s.staticRenderFns,d._compiled=!0,u&&(d.functional=!0)),d._scopeId=l,d),v={install:function(e,t){e.component("catalogo",f)}};e.CatalogoComponent=f,e.default=v,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=index.umd.js.map
