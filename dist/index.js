'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var tslib_1 = require('tslib');
var axios = _interopDefault(require('axios'));
var Component = _interopDefault(require('vue-class-component'));
var vuePropertyDecorator = require('vue-property-decorator');

var estatusSni = {
	valueProp: "idEstatusSni",
	textProp: "descEstatusSni"
};
var tipoInstitucion = {
	valueProp: "idTipoInstitucion",
	textProp: "descTipoInstitucion"
};
var catalogues = {
	estatusSni: estatusSni,
	tipoInstitucion: tipoInstitucion
};

var CatalogoComponent =
/** @class */
function (_super) {
  tslib_1.__extends(CatalogoComponent, _super);

  function CatalogoComponent() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.options = [];
    _this.schema = {};
    _this.selected = {};
    _this.selectName = "";
    _this.url = "";
    _this.lang = "es";
    return _this;
  }

  CatalogoComponent.prototype.created = function () {
    // Selecting schema
    if (this.name) {
      this.schema = catalogues[this.name];
    } // Build select name


    this.selectName = "catalogo-select-" + this.name; // Build url

    if (this.host) {
      this.url = this.url + this.host;
    }

    if (this.context) {
      this.url = this.url + this.context;
    }

    this.url = this.url + this.name + "?idioma=" + this.lang + this.parameters;
  };

  CatalogoComponent.prototype.mounted = function () {
    this.loadOptions();
  };

  CatalogoComponent.prototype.loadOptions = function () {
    var _this = this;

    axios.get(this.url).then(function (res) {
      _this.options = res.data;
    });
  };

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    required: true
  })], CatalogoComponent.prototype, "host", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    default: "/api"
  })], CatalogoComponent.prototype, "context", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    default: ""
  })], CatalogoComponent.prototype, "parameters", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop(String)], CatalogoComponent.prototype, "label", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: String,
    required: true,
    validator: function validator(value) {
      return Object.keys(catalogues).indexOf(value) !== -1;
    }
  })], CatalogoComponent.prototype, "name", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop(String)], CatalogoComponent.prototype, "lang", void 0);

  tslib_1.__decorate([vuePropertyDecorator.Prop({
    type: Boolean,
    default: false
  })], CatalogoComponent.prototype, "required", void 0);

  CatalogoComponent = tslib_1.__decorate([Component({
    name: "catalogo"
  })], CatalogoComponent);
  return CatalogoComponent;
}(vuePropertyDecorator.Vue);

/* script */
var __vue_script__ = CatalogoComponent;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('section', {
    staticClass: "catalogo"
  }, [_c('label', {
    attrs: {
      "for": _vm.selectName
    }
  }, [_vm._v(_vm._s(_vm.label))]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.selected,
      expression: "selected"
    }],
    attrs: {
      "name": _vm.selectName,
      "id": _vm.selectName,
      "required": _vm.required
    },
    on: {
      "input": function input($event) {
        return _vm.$emit('input', _vm.options[$event.target.selectedIndex]);
      },
      "change": function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.selected = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, _vm._l(_vm.options, function (option, optionIndex) {
    return _c('option', {
      key: optionIndex,
      domProps: {
        "value": option[_vm.schema.valueProp]
      }
    }, [_vm._v(_vm._s(option[_vm.schema.textProp]))]);
  }), 0)]);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = undefined;
/* scoped */

var __vue_scope_id__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* component normalizer */

function __vue_normalize__(template, style, script, scope, functional, moduleIdentifier, createInjector, createInjectorSSR) {
  var component = (typeof script === 'function' ? script.options : script) || {}; // For security concerns, we use only base name in production mode.

  component.__file = "CatalogoComponent.vue";

  if (!component.render) {
    component.render = template.render;
    component.staticRenderFns = template.staticRenderFns;
    component._compiled = true;
    if (functional) component.functional = true;
  }

  component._scopeId = scope;

  return component;
}
/* style inject */

/* style inject SSR */


var CatalogoComponent$1 = __vue_normalize__({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__);

var index = {
  install: function install(Vue, options) {
    Vue.component('catalogo', CatalogoComponent$1);
  }
};

exports.CatalogoComponent = CatalogoComponent$1;
exports.default = index;
//# sourceMappingURL=index.js.map
