/*!
 * xl-form-create v1.0.22
 * (c) 2018-2021 stevenLikeWatermelon
 * 
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@form-create/utils'), require('@form-create/core')) :
  typeof define === 'function' && define.amd ? define(['exports', '@form-create/utils', '@form-create/core'], factory) :
  (global = global || self, factory(global.formCreate = {}, global.utils, global.createFormCreate));
}(this, (function (exports, utils, createFormCreate) { 'use strict';

  var createFormCreate__default = 'default' in createFormCreate ? createFormCreate['default'] : createFormCreate;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _extends(){return _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}var normalMerge=["attrs","props","domProps"],toArrayMerge=["class","style","directives"],functionalMerge=["on","nativeOn"],mergeJsxProps=function(a){return a.reduce(function(c,a){for(var b in a)if(!c[b])c[b]=a[b];else if(-1!==normalMerge.indexOf(b))c[b]=_extends({},c[b],a[b]);else if(-1!==toArrayMerge.indexOf(b)){var d=c[b]instanceof Array?c[b]:[c[b]],e=a[b]instanceof Array?a[b]:[a[b]];c[b]=d.concat(e);}else if(-1!==functionalMerge.indexOf(b)){for(var f in a[b])if(c[b][f]){var g=c[b][f]instanceof Array?c[b][f]:[c[b][f]],h=a[b][f]instanceof Array?a[b][f]:[a[b][f]];c[b][f]=g.concat(h);}else c[b][f]=a[b][f];}else if("hook"==b)for(var i in a[b])c[b][i]=c[b][i]?mergeFn(c[b][i],a[b][i]):a[b][i];else c[b]=a[b];return c},{})},mergeFn=function(a,b){return function(){a&&a.apply(this,arguments),b&&b.apply(this,arguments);}};var helper=mergeJsxProps;

  var NAME = 'fc-elm-checkbox';
  var checkbox = {
    name: NAME,
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      ctx: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: String
    },
    watch: {
      value: function value() {
        this.update();
      }
    },
    data: function data() {
      return {
        trueValue: [],
        unique: utils.uniqueId()
      };
    },
    methods: {
      onInput: function onInput(n) {
        this.$emit('input', this.options.filter(function (opt) {
          return n.indexOf(opt.label) !== -1;
        }).map(function (opt) {
          return opt.value;
        }));
      },
      update: function update() {
        var _this = this;

        this.trueValue = this.value ? this.options.filter(function (opt) {
          return _this.value.indexOf(opt.value) !== -1;
        }).map(function (option) {
          return option.label;
        }) : [];
      }
    },
    created: function created() {
      this.update();
    },
    render: function render() {
      var _this2 = this;

      var h = arguments[0];
      return h("XlCheckboxGroup", helper([{}, this.ctx, {
        "on": {
          "input": this.onInput
        },
        "model": {
          value: _this2.trueValue,
          callback: function callback($$v) {
            _this2.trueValue = $$v;
          }
        }
      }]), [this.options.map(function (opt, index) {
        var props = _objectSpread2({}, opt);

        var Type = _this2.type === 'button' ? 'ElCheckboxButton' : 'ElCheckbox';
        delete props.value;
        return h(Type, {
          "props": _objectSpread2({}, props),
          "key": NAME + Type + index + _this2.unique
        });
      }).concat(this.chlidren)]);
    }
  };

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".fc-upload-btn, .fc-files {\n    display: inline-block;\n    width: 58px;\n    height: 58px;\n    text-align: center;\n    line-height: 58px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    -webkit-box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.form-create .form-create .el-form-item {\n    margin-bottom: 22px;\n}\n\n.form-create .form-create .el-form-item .el-form-item {\n    margin-bottom: 0px;\n}\n\n.form-create .__fc_h {\n    display: none;\n}\n\n.form-create .__fc_v {\n    visibility: hidden;\n}\n\n.fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.fc-upload-btn {\n    border: 1px dashed #c0ccda;\n    cursor: pointer;\n}\n\n.fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    -webkit-transition: opacity .3s;\n    -o-transition: opacity .3s;\n    transition: opacity .3s;\n}\n\n.fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n.fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n.fc-upload .el-upload {\n    display: block;\n}\n\n\n.form-create .el-form-item .el-rate {\n    margin-top: 10px;\n}\n\n.form-create .el-form-item .el-tree {\n    margin-top: 7px;\n}\n\n.fc-hide-btn .el-upload {\n    display: none;\n}\n";
  var style = {"fc-upload-btn":"fc-upload-btn","fc-files":"fc-files","form-create":"form-create","el-form-item":"el-form-item","__fc_h":"__fc_h","__fc_v":"__fc_v","fc-upload":"fc-upload","fc-upload-cover":"fc-upload-cover","el-upload":"el-upload","el-rate":"el-rate","el-tree":"el-tree","fc-hide-btn":"fc-hide-btn"};
  styleInject(css);

  var NAME$1 = 'fc-elm-frame';
  var frame = {
    name: NAME$1,
    props: {
      type: {
        type: String,
        default: 'input'
      },
      field: {
        type: String,
        default: ''
      },
      helper: {
        type: Boolean,
        default: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      src: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        default: 'el-icon-upload2'
      },
      width: {
        type: String,
        default: '500px'
      },
      height: {
        type: String,
        default: '370px'
      },
      maxLength: {
        type: Number,
        default: 0
      },
      okBtnText: {
        type: String,
        default: '确定'
      },
      closeBtnText: {
        type: String,
        default: '关闭'
      },
      modalTitle: String,
      handleIcon: {
        type: [String, Boolean],
        default: undefined
      },
      title: String,
      allowRemove: {
        type: Boolean,
        default: true
      },
      onOpen: {
        type: Function,
        default: function _default() {}
      },
      onOk: {
        type: Function,
        default: function _default() {}
      },
      onCancel: {
        type: Function,
        default: function _default() {}
      },
      onLoad: {
        type: Function,
        default: function _default() {}
      },
      onBeforeRemove: {
        type: Function,
        default: function _default() {}
      },
      onRemove: {
        type: Function,
        default: function _default() {}
      },
      onHandle: {
        type: Function,
        default: function _default(src) {
          this.previewImage = this.getSrc(src);
          this.previewVisible = true;
        }
      },
      modal: {
        type: Object,
        default: function _default() {
          return {};
        }
      },
      srcKey: {
        type: [String, Number]
      },
      value: [Array, String, Number, Object],
      previewMask: undefined,
      footer: {
        type: Boolean,
        default: true
      },
      reload: {
        type: Boolean,
        default: true
      },
      closeBtn: {
        type: Boolean,
        default: true
      },
      okBtn: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        fileList: utils.toArray(this.value),
        unique: utils.uniqueId(),
        previewVisible: false,
        frameVisible: false,
        previewImage: ''
      };
    },
    watch: {
      value: function value(n) {
        this.fileList = utils.toArray(n);
      },
      fileList: function fileList(n) {
        var val = this.maxLength === 1 ? n[0] || '' : n;
        this.$emit('input', val);
        this.$emit('change', val);
      },
      src: function src(n) {
        this.modalVm && (this.modalVm.src = n);
      }
    },
    methods: {
      key: function key(unique) {
        return NAME$1 + unique + this.unique;
      },
      closeModel: function closeModel(close) {
        this.$emit(close ? '$close' : '$ok');

        if (this.reload) {
          this.$off('$ok');
          this.$off('$close');
        }

        this.frameVisible = false;
      },
      handleCancel: function handleCancel() {
        this.previewVisible = false;
      },
      showModel: function showModel() {
        if (this.disabled || false === this.onOpen()) return;
        this.frameVisible = true;
      },
      makeInput: function makeInput() {
        var _this = this;

        var h = this.$createElement;
        var props = {
          type: 'text',
          value: this.fileList.map(function (v) {
            return _this.getSrc(v);
          }).toString(),
          readonly: true
        };
        return h("XlInput", helper([{}, {
          "props": props
        }, {
          "key": this.key('input')
        }]), [this.fileList.length ? h("i", {
          "slot": "suffix",
          "class": "el-input__icon el-icon-circle-close",
          "on": {
            "click": function click() {
              return _this.fileList = [];
            }
          }
        }) : null, h("XlButton", helper([{
          "attrs": {
            "icon": this.icon
          }
        }, {
          "on": {
            'click': function click() {
              return _this.showModel();
            }
          }
        }, {
          "slot": "append"
        }]))]);
      },
      makeGroup: function makeGroup(children) {
        var h = this.$createElement;
        if (!this.maxLength || this.fileList.length < this.maxLength) children.push(this.makeBtn());
        return h("div", {
          "class": style['fc-upload'],
          "key": this.key('group')
        }, _toConsumableArray(children));
      },
      makeItem: function makeItem(index, children) {
        var h = this.$createElement;
        return h("div", {
          "class": style['fc-files'],
          "key": this.key('file' + index)
        }, _toConsumableArray(children));
      },
      valid: function valid(field) {
        if (field !== this.field) throw new Error('frame 无效的字段值');
      },
      makeIcons: function makeIcons(val, index) {
        var h = this.$createElement;

        if (this.handleIcon !== false || this.allowRemove === true) {
          var icons = [];
          if (this.type !== 'file' && this.handleIcon !== false || this.type === 'file' && this.handleIcon) icons.push(this.makeHandleIcon(val, index));
          if (this.allowRemove) icons.push(this.makeRemoveIcon(val, index));
          return h("div", {
            "class": style['fc-upload-cover'],
            "key": this.key('uc')
          }, [icons]);
        }
      },
      makeHandleIcon: function makeHandleIcon(val, index) {
        var _this2 = this;

        var h = this.$createElement;
        return h("i", {
          "class": this.handleIcon === true || this.handleIcon === undefined ? 'el-icon-view' : this.handleIcon,
          "on": {
            "click": function click() {
              return _this2.handleClick(val);
            }
          },
          "key": this.key('hi' + index)
        });
      },
      makeRemoveIcon: function makeRemoveIcon(val, index) {
        var _this3 = this;

        var h = this.$createElement;
        return h("i", {
          "class": "el-icon-delete",
          "on": {
            "click": function click() {
              return _this3.handleRemove(val);
            }
          },
          "key": this.key('ri' + index)
        });
      },
      makeFiles: function makeFiles() {
        var _this4 = this;

        var h = this.$createElement;
        return this.makeGroup(this.fileList.map(function (src, index) {
          return _this4.makeItem(index, [h("i", {
            "class": "el-icon-tickets",
            "on": {
              "click": function click() {
                return _this4.handleClick(src);
              }
            }
          }), _this4.makeIcons(src, index)]);
        }));
      },
      makeImages: function makeImages() {
        var _this5 = this;

        var h = this.$createElement;
        return this.makeGroup(this.fileList.map(function (src, index) {
          return _this5.makeItem(index, [h("img", {
            "attrs": {
              "src": _this5.getSrc(src)
            }
          }), _this5.makeIcons(src, index)]);
        }));
      },
      makeBtn: function makeBtn() {
        var _this6 = this;

        var h = this.$createElement;
        return h("div", {
          "class": style['fc-upload-btn'],
          "on": {
            "click": function click() {
              return _this6.showModel();
            }
          },
          "key": this.key('btn')
        }, [h("i", {
          "class": this.icon
        })]);
      },
      handleClick: function handleClick(src) {
        if (this.disabled) return;
        return this.onHandle(src);
      },
      handleRemove: function handleRemove(src) {
        if (this.disabled) return;

        if (false !== this.onBeforeRemove(src)) {
          this.fileList.splice(this.fileList.indexOf(src), 1);
          this.onRemove(src);
        }
      },
      getSrc: function getSrc(src) {
        return utils.isUndef(this.srcKey) ? src : src[this.srcKey];
      },
      frameLoad: function frameLoad(iframe) {
        var _this7 = this;

        this.onLoad(iframe);

        try {
          if (this.helper === true) {
            iframe['form_create_helper'] = {
              close: function close(field) {
                _this7.valid(field);

                _this7.closeModel();
              },
              set: function set(field, value) {
                _this7.valid(field);

                if (!_this7.disabled) _this7.$emit('input', value);
              },
              get: function get(field) {
                _this7.valid(field);

                return _this7.value;
              },
              onOk: function onOk(fn) {
                return _this7.$on('$ok', fn);
              },
              onClose: function onClose(fn) {
                return _this7.$on('$close', fn);
              }
            };
          }
        } catch (e) {
          console.log(e);
        }
      },
      makeFooter: function makeFooter() {
        var _this8 = this;

        var h = this.$createElement;
        var _this$$props = this.$props,
            okBtnText = _this$$props.okBtnText,
            closeBtnText = _this$$props.closeBtnText,
            closeBtn = _this$$props.closeBtn,
            okBtn = _this$$props.okBtn,
            footer = _this$$props.footer;
        if (!footer) return;
        return h("div", {
          "slot": "footer"
        }, [closeBtn ? h("XlButton", {
          "on": {
            "click": function click() {
              return _this8.onCancel() !== false && _this8.closeModel(true);
            }
          }
        }, [closeBtnText]) : null, okBtn ? h("XlButton", {
          "attrs": {
            "type": "primary"
          },
          "on": {
            "click": function click() {
              return _this8.onOk() !== false && _this8.closeModel();
            }
          }
        }, [okBtnText]) : null]);
      }
    },
    render: function render() {
      var _this9 = this;

      var h = arguments[0];
      var type = this.type;
      var node;
      if (type === 'input') node = this.makeInput();else if (type === 'image') node = this.makeImages();else node = this.makeFiles();
      var _this$$props2 = this.$props,
          _this$$props2$width = _this$$props2.width,
          width = _this$$props2$width === void 0 ? '30%' : _this$$props2$width,
          height = _this$$props2.height,
          src = _this$$props2.src,
          title = _this$$props2.title,
          modalTitle = _this$$props2.modalTitle;
      this.$nextTick(function () {
        if (_this9.$refs.frame) {
          _this9.frameLoad(_this9.$refs.frame.contentWindow || {});
        }
      });
      return h("div", [node, h("xl-dialog", {
        "attrs": {
          "modal": this.previewMask,
          "title": modalTitle,
          "visible": this.previewVisible
        },
        "on": {
          "close": this.handleCancel
        }
      }, [h("img", {
        "attrs": {
          "alt": "example",
          "src": this.previewImage
        },
        "style": "width: 100%"
      })]), h("xl-dialog", helper([{}, {
        "props": _objectSpread2({
          width: width,
          title: title
        }, this.modal)
      }, {
        "attrs": {
          "visible": this.frameVisible
        },
        "on": {
          "close": function close() {
            return _this9.closeModel(true);
          }
        }
      }]), [this.frameVisible || !this.reload ? h("iframe", {
        "ref": "frame",
        "attrs": {
          "src": src,
          "frameBorder": "0"
        },
        "style": {
          'height': height,
          'border': '0 none',
          'width': '100%'
        }
      }) : null, this.makeFooter()])]);
    }
  };

  var NAME$2 = 'fc-elm-radio';
  var radio = {
    name: NAME$2,
    functional: true,
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: String,
      unique: {
        default: function _default() {
          return utils.uniqueId();
        }
      }
    },
    render: function render(h, ctx) {
      return h("XlRadioGroup", helper([{}, ctx.data]), [ctx.props.options.map(function (opt, index) {
        var props = _objectSpread2({}, opt);

        var Type = ctx.props.type === 'button' ? 'ElRadioButton' : 'ElRadio';
        delete props.value;
        return h(Type, {
          "props": _objectSpread2({}, props),
          "key": NAME$2 + Type + index + ctx.unique
        });
      }).concat(ctx.chlidren)]);
    }
  };

  var NAME$3 = 'fc-elm-select';
  var select = {
    name: NAME$3,
    functional: true,
    props: {
      options: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      unique: {
        default: function _default() {
          return utils.uniqueId();
        }
      }
    },
    render: function render(h, ctx) {
      return h("XlSelect", helper([{}, ctx.data]), [ctx.props.options.map(function (props, index) {
        var slot = props.slot ? utils.toDefSlot(props.slot, h) : [];
        return h("XlOption", {
          "props": _objectSpread2({}, props),
          "key": NAME$3 + index + ctx.props.unique
        }, [slot]);
      }).concat(ctx.chlidren)]);
    }
  };

  var tree = {
    name: 'fc-elm-tree',
    props: {
      ctx: {
        type: Object,
        default: function _default() {
          return {
            props: {}
          };
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      type: {
        type: String,
        default: 'checked'
      },
      value: {
        type: [Array, String, Number],
        default: function _default() {
          return [];
        }
      }
    },
    watch: {
      value: function value() {
        this.setValue();
      }
    },
    methods: {
      makeTree: function makeTree() {
        var _this = this;

        var h = this.$createElement;
        return h("XlTree", helper([{
          "ref": "tree",
          "on": {
            "check-change": function checkChange() {
              return _this.updateValue();
            },
            "node-click": function nodeClick() {
              return _this.updateValue();
            }
          }
        }, this.ctx]), [this.children]);
      },
      onChange: function onChange() {
        this.updateValue();
      },
      updateValue: function updateValue() {
        var type = this.type.toLocaleLowerCase();
        var value;
        if (type === 'selected') value = this.$refs.tree.getCurrentKey();else value = this.$refs.tree.getCheckedKeys();
        this.$emit('input', value);
      },
      setValue: function setValue() {
        var type = this.type.toLocaleLowerCase();
        if (type === 'selected') this.$refs.tree.setCurrentKey(this.value);else this.$refs.tree.setCheckedKeys(utils.toArray(this.value));
      }
    },
    render: function render() {
      return this.makeTree();
    },
    mounted: function mounted() {
      this.setValue();
      this.updateValue();
    }
  };

  function parseFile(file, i) {
    return {
      url: file,
      name: getFileName(file),
      uid: i
    };
  }

  function getFileName(file) {
    return utils.toString(file).split('/').pop();
  }

  var NAME$4 = 'fc-elm-upload';
  var upload = {
    name: NAME$4,
    props: {
      ctx: {
        type: Object,
        default: function _default() {
          return {
            props: {}
          };
        }
      },
      children: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      onHandle: {
        type: Function,
        default: function _default(file) {
          this.previewImage = file.url;
          this.previewVisible = true;
        }
      },
      uploadType: {
        type: String,
        default: 'file'
      },
      maxLength: {
        type: Number,
        default: 0
      },
      allowRemove: {
        type: Boolean,
        default: true
      },
      previewMask: undefined,
      modalTitle: String,
      handleIcon: [String, Boolean],
      value: [Array, String]
    },
    data: function data() {
      return {
        uploadList: [],
        unique: utils.uniqueId(),
        previewVisible: false,
        previewImage: ''
      };
    },
    created: function created() {
      if (this.ctx.props.showFileList === undefined) this.ctx.props.showFileList = false;
      this.ctx.props.fileList = utils.toArray(this.value).map(parseFile);
    },
    watch: {
      value: function value(n) {
        if (this.$refs.upload.uploadFiles.every(function (file) {
          return !file.status || file.status === 'success';
        })) {
          this.$refs.upload.uploadFiles = utils.toArray(n).map(parseFile);
          this.uploadList = this.$refs.upload.uploadFiles;
        }
      },
      maxLength: function maxLength(n, o) {
        if (o === 1 || n === 1) this.update();
      }
    },
    methods: {
      key: function key(unique) {
        return NAME$4 + unique + this.unique;
      },
      isDisabled: function isDisabled() {
        return this.ctx.props.disabled === true;
      },
      onRemove: function onRemove(file) {
        if (this.isDisabled()) return;
        this.$refs.upload.handleRemove(file);
      },
      handleClick: function handleClick(file) {
        this.onHandle(file);
      },
      makeDefaultBtn: function makeDefaultBtn() {
        var h = this.$createElement;
        return h("div", {
          "class": style['fc-upload-btn']
        }, [h("i", {
          "class": "el-icon-upload2"
        })]);
      },
      makeItem: function makeItem(file, index) {
        var h = this.$createElement;
        return this.uploadType === 'image' ? h("img", {
          "attrs": {
            "src": file.url
          },
          "key": this.key('img' + index)
        }) : h("i", {
          "class": "el-icon-tickets",
          "key": this.key('i' + index)
        });
      },
      makeRemoveIcon: function makeRemoveIcon(file, index) {
        var _this = this;

        var h = this.$createElement;
        return h("i", {
          "class": "el-icon-delete",
          "on": {
            "click": function click() {
              return _this.onRemove(file);
            }
          },
          "key": this.key('ri' + index)
        });
      },
      makeHandleIcon: function makeHandleIcon(file, index) {
        var _this2 = this;

        var h = this.$createElement;
        return h("i", {
          "class": this.handleIcon === true || this.handleIcon === undefined ? 'el-icon-view' : this.handleIcon,
          "on": {
            "click": function click() {
              return _this2.handleClick(file);
            }
          },
          "key": this.key('hi' + index)
        });
      },
      makeProgress: function makeProgress(file, index) {
        var h = this.$createElement;
        return h("XlProgress", helper([{}, {
          "props": {
            percentage: file.percentage,
            type: 'circle',
            width: 52
          }
        }, {
          "style": "margin-top:2px;",
          "key": this.key('pg' + index)
        }]));
      },
      makeIcons: function makeIcons(file, index) {
        var h = this.$createElement;
        var icons = [];

        if (this.allowRemove || this.handleIcon !== false) {
          if (this.uploadType !== 'file' && this.handleIcon !== false || this.uploadType === 'file' && this.handleIcon) icons.push(this.makeHandleIcon(file, index));
          if (this.allowRemove) icons.push(this.makeRemoveIcon(file, index));
          return h("div", {
            "class": style['fc-upload-cover']
          }, [icons]);
        }
      },
      makeFiles: function makeFiles() {
        var _this3 = this;

        var h = this.$createElement;
        return this.uploadList.map(function (file, index) {
          return h("div", {
            "key": _this3.key(index),
            "class": style['fc-files']
          }, [file.percentage !== undefined && file.status !== 'success' ? _this3.makeProgress(file, index) : [_this3.makeItem(file, index), _this3.makeIcons(file, index)]]);
        });
      },
      makeUpload: function makeUpload() {
        var h = this.$createElement;
        return h("XlUpload", helper([{
          "ref": "upload",
          "style": {
            display: 'inline-block'
          }
        }, this.ctx, {
          "key": this.key('upload')
        }]), [this.children]);
      },
      initChildren: function initChildren() {
        if (!utils.hasSlot(this.children, 'default')) this.children.push(this.makeDefaultBtn());
      },
      update: function update() {
        var files = this.$refs.upload.uploadFiles.map(function (file) {
          return file.url;
        }).filter(function (url) {
          return url !== undefined;
        });
        this.$emit('input', this.maxLength === 1 ? files[0] || '' : files);
      },
      handleCancel: function handleCancel() {
        this.previewVisible = false;
      }
    },
    render: function render() {
      var _class;

      var h = arguments[0];
      var isShow = !this.maxLength || this.maxLength > this.uploadList.length;

      if (this.$refs.upload) {
        if (this.ctx.props.showFileList === undefined) this.ctx.props.showFileList = this.$refs.upload.showFileList;
        this.ctx.props.fileList = this.$refs.upload.fileList;
      }

      this.initChildren();
      return h("div", {
        "class": (_class = {}, _defineProperty(_class, style['fc-upload'], true), _defineProperty(_class, style['fc-hide-btn'], !isShow), _class)
      }, [[this.ctx.props.showFileList ? [] : this.makeFiles(), this.makeUpload()], h("xl-dialog", {
        "attrs": {
          "modal": this.previewMask,
          "title": this.modalTitle,
          "visible": this.previewVisible
        },
        "on": {
          "close": this.handleCancel
        }
      }, [h("img", {
        "attrs": {
          "alt": "example",
          "src": this.previewImage
        },
        "style": "width: 100%"
      })])]);
    },
    mounted: function mounted() {
      var _this4 = this;

      this.uploadList = this.$refs.upload.uploadFiles;
      this.$watch(function () {
        return _this4.$refs.upload.uploadFiles;
      }, function () {
        _this4.update();
      }, {
        deep: true
      });
    }
  };

  var NAME$5 = 'fc-elm-group';
  var group = {
    name: NAME$5,
    props: {
      rule: Object,
      rules: Array,
      expand: Number,
      button: {
        type: Boolean,
        default: true
      },
      formCreate: Object,
      max: {
        type: Number,
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      fontSize: {
        type: Number,
        default: 28
      }
    },
    data: function data() {
      return {
        option: utils.deepExtendArgs({}, this.formCreate.config || {}, {
          submitBtn: false,
          resetBtn: false,
          mounted: undefined,
          onReload: undefined
        }),
        len: 0,
        cacheRule: {},
        group$f: {}
      };
    },
    computed: {
      formRule: function formRule() {
        if (this.rule) return [this.rule];else if (this.rules) return this.rules;
        return [];
      }
    },
    watch: {
      disabled: function disabled(n) {
        var lst = this.group$f;
        Object.keys(lst).forEach(function (k) {
          lst[k].disabled(n);
        });
      },
      value: {
        handler: function handler(n) {
          var _this = this;

          var keys = Object.keys(this.cacheRule),
              total = keys.length,
              len = total - n.length;

          if (len < 0) {
            for (var i = len; i < 0; i++) {
              this.addRule();
            }

            for (var _i = 0; _i < total; _i++) {
              this.setValue(this.group$f[keys[_i]], n[_i]);
            }
          } else {
            if (len > 0) {
              for (var _i2 = 0; _i2 < len; _i2++) {
                this.removeRule(keys[total - _i2 - 1]);
              }

              this.subForm();
            }

            n.forEach(function (val, i) {
              _this.setValue(_this.group$f[keys[i]], n[i]);
            });
          }
        },
        deep: true
      }
    },
    methods: {
      formData: function formData() {
        var _this2 = this;

        var n = Object.keys(this.group$f).map(function (key) {
          return _this2.group$f[key].formData();
        });
        this.$emit('input', n);
        this.$emit('change', n);
      },
      setValue: function setValue($f, value) {
        if (this.rule) {
          var fields = $f.fields();
          if (!fields[0]) return;
          $f.setValue(fields[0], value);
        } else {
          $f.setValue(value);
        }
      },
      addRule: function addRule(emit) {
        var _this3 = this;

        var rule = this.copyRule();
        this.$set(this.cacheRule, ++this.len, rule);
        if (emit) this.$nextTick(function () {
          return _this3.$emit('add', rule, Object.keys(_this3.cacheRule).length - 1);
        });
      },
      add$f: function add$f(i, key, $f) {
        this.group$f[key] = $f;
        this.setValue($f, this.value[i]);
        this.subForm();
        this.$emit('itemMounted', $f, Object.keys(this.cacheRule).indexOf(key));
        this.formData();
      },
      subForm: function subForm() {
        var _this4 = this;

        this.$emit('fc.subForm', Object.keys(this.group$f).map(function (k) {
          return _this4.group$f[k];
        }));
      },
      removeRule: function removeRule(key, emit) {
        var _this5 = this;

        var index = Object.keys(this.cacheRule).indexOf(key);
        this.$delete(this.cacheRule, key);
        this.$delete(this.group$f, key);
        if (emit) this.$nextTick(function () {
          return _this5.$emit('remove', index);
        });
      },
      copyRule: function copyRule() {
        return createFormCreate.copyRules(this.formRule);
      },
      add: function add() {
        !this.disabled && this.addRule(true);
      },
      del: function del(key) {
        if (this.disabled) return;
        this.removeRule(key, true);
        this.subForm();
        this.formData();
      },
      addIcon: function addIcon(key) {
        var h = this.$createElement;
        return h("i", {
          "key": "a".concat(key),
          "class": "el-icon-circle-plus-outline",
          "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer', ";"),
          "on": {
            "click": this.add
          }
        });
      },
      delIcon: function delIcon(key) {
        var _this6 = this;

        var h = this.$createElement;
        return h("i", {
          "key": "d".concat(key),
          "class": "el-icon-remove-outline",
          "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer;color:#606266', ";"),
          "on": {
            "click": function click() {
              return _this6.del(key);
            }
          }
        });
      },
      makeIcon: function makeIcon(total, index, key) {
        var _this7 = this;

        if (this.$scopedSlots.button) return this.$scopedSlots.button({
          total: total,
          index: index,
          vm: this,
          key: key,
          del: function del() {
            return _this7.del(key);
          },
          add: this.add
        });

        if (index === 0) {
          return [this.max !== 0 && total >= this.max ? null : this.addIcon(key), this.min === 0 || total > this.min ? this.delIcon(key) : null];
        } else if (index >= this.min) {
          return this.delIcon(key);
        }
      },
      emitEvent: function emitEvent(name, args, index, key) {
        this.$emit.apply(this, [name].concat(_toConsumableArray(args), [this.group$f[key], index]));
      }
    },
    created: function created() {
      var d = (this.expand || 0) - this.value.length;

      if (d > 0) {
        for (var i = 0; i < d; i++) {
          this.value.push({});
        }
      }

      for (var _i3 = 0; _i3 < this.value.length; _i3++) {
        this.addRule();
      }
    },
    render: function render() {
      var _this8 = this;

      var h = arguments[0];
      var keys = Object.keys(this.cacheRule);
      var button = this.button;
      return keys.length === 0 ? this.$scopedSlots.default ? this.$scopedSlots.default({
        vm: this,
        add: this.add
      }) : h("i", {
        "key": 'a_def',
        "class": "el-icon-circle-plus-outline",
        "style": "font-size:".concat(this.fontSize, "px;vertical-align:middle;color:").concat(this.disabled ? '#c9cdd4;cursor: not-allowed' : '#606266;cursor:pointer', ";"),
        "on": {
          "click": this.add
        }
      }) : h("div", {
        "key": 'con'
      }, [keys.map(function (key, index) {
        var rule = _this8.cacheRule[key];
        return h("XlRow", {
          "attrs": {
            "align": "middle",
            "type": "flex"
          },
          "key": key,
          "style": "background-color:#f5f7fa;padding:10px;border-radius:5px;margin-bottom:10px;"
        }, [h("XlCol", {
          "attrs": {
            "span": button ? 20 : 24
          }
        }, [h("XlFormItem", [h("FormCreate", {
          "on": {
            "change": _this8.formData,
            "set-value": _this8.formData,
            "on-reload": _this8.formData,
            "emit-event": function emitEvent(name) {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }

              return _this8.emitEvent(name, args, index, key);
            },
            "mounted": function mounted($f) {
              return _this8.add$f(index, key, $f);
            }
          },
          "attrs": {
            "rule": rule,
            "option": _this8.option
          }
        })])]), button ? h("XlCol", {
          "attrs": {
            "span": 2,
            "pull": 1,
            "push": 1
          }
        }, [_this8.makeIcon(keys.length, index, key)]) : null]);
      })]);
    }
  };

  var components = [checkbox, frame, radio, select, tree, upload, group];

  var parser =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      value: function render(children) {
        var _this = this;

        var data = this.$render.inputVData(this, true).get();
        return this.vNode.checkbox({
          props: {
            ctx: data,
            type: data.props.type,
            options: this.rule.options,
            value: this.$handle.getFormData(this),
            children: children
          },
          on: {
            input: function input(n) {
              _this.$render.onInput(_this, n);
            }
          }
        });
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var name = 'checkbox';
  var checkbox$1 = {
    parser: parser,
    name: name
  };

  var DEFAULT_FORMATS = {
    date: 'yyyy-MM-dd',
    month: 'yyyy-MM',
    datetime: 'yyyy-MM-dd HH:mm:ss',
    week: 'yyyywWW',
    timerange: 'HH:mm:ss',
    daterange: 'yyyy-MM-dd',
    monthrange: 'yyyy-MM',
    datetimerange: 'yyyy-MM-dd HH:mm:ss',
    year: 'yyyy'
  };

  var Parser =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (!props.valueFormat) props.valueFormat = DEFAULT_FORMATS[props.type] || DEFAULT_FORMATS['date'];
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$1 = 'datePicker';
  var datePicker = {
    parser: Parser,
    name: name$1
  };

  var Parser$1 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      value: function render(children) {
        var data = this.$render.inputVData(this).props('field', this.field);
        return this.vNode.frame(data, children);
      }
    }, {
      key: "closeModel",
      value: function closeModel() {
        this.el.closeModel && this.el.closeModel();
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$2 = 'frame';
  var frame$1 = {
    parser: Parser$1,
    name: name$2
  };

  var name$3 = 'hidden';

  var parser$1 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      value: function render() {
        return [];
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var hidden = {
    parser: parser$1,
    name: name$3
  };

  var Parser$2 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (props && props.autosize && props.autosize.minRows) utils.$set(props, 'rows', props.autosize.minRows || 2);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$4 = 'input';
  var input = {
    parser: Parser$2,
    name: name$4
  };

  var Parser$3 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "toFormValue",
      value: function toFormValue(value) {
        return this.rule.options.filter(function (opt) {
          return opt.value === value;
        }).reduce(function (initial, opt) {
          return opt.label;
        }, '');
      }
    }, {
      key: "toValue",
      value: function toValue(parseValue) {
        return this.rule.options.filter(function (opt) {
          return opt.label === parseValue;
        }).reduce(function (initial, opt) {
          return opt.value;
        }, '');
      }
    }, {
      key: "render",
      value: function render(children) {
        return this.vNode.radio(this.$render.inputVData(this).props({
          'options': this.rule.options
        }), children);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$5 = 'radio';
  var radio$1 = {
    parser: Parser$3,
    name: name$5
  };

  var Parser$4 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      value: function render(children) {
        return this.vNode.select(this.$render.inputVData(this).props('options', this.rule.options), children);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$6 = 'select';
  var select$1 = {
    parser: Parser$4,
    name: name$6
  };

  var Parser$5 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "toFormValue",
      value: function toFormValue(value) {
        var rule = this.rule,
            isArr = Array.isArray(value),
            props = rule.props,
            min = props.min || 0,
            parseValue;

        if (props.range === true) {
          parseValue = isArr ? value : [min, parseFloat(value) || min];
        } else {
          parseValue = isArr ? parseFloat(value[0]) || min : parseFloat(value);
        }

        return parseValue;
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$7 = 'slider';
  var slider = {
    parser: Parser$5,
    name: name$7
  };

  var parser$2 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser() {
      _classCallCheck(this, parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(parser).apply(this, arguments));
    }

    _createClass(parser, [{
      key: "render",
      value: function render(children) {
        return this.vNode.switch(this.$render.inputVData(this).get(), children);
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var name$8 = 'switch';
  var iswitch = {
    parser: parser$2,
    name: name$8
  };

  var Parser$6 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (!props.valueFormat) props.valueFormat = 'HH:mm:ss';
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$9 = 'timePicker';
  var timePicker = {
    parser: Parser$6,
    name: name$9
  };

  var Parser$7 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "init",
      value: function init() {
        var props = this.rule.props;
        if (utils.isUndef(props.nodeKey)) utils.$set(props, 'nodeKey', 'id');
        if (utils.isUndef(props.props)) utils.$set(props, 'props', {
          label: 'title'
        });
      }
    }, {
      key: "render",
      value: function render(children) {
        var _this = this;

        var data = this.$render.parserToData(this).get();
        return this.vNode.tree({
          props: {
            ctx: data,
            children: children,
            value: this.$handle.getFormData(this),
            type: data.props.type
          },
          ref: this.refName,
          key: this.key,
          on: {
            input: function input(value) {
              _this.$render.onInput(_this, value);
            }
          }
        });
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$a = 'tree';
  var tree$1 = {
    parser: Parser$7,
    name: name$a
  };

  var Parser$8 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(Parser, _BaseParser);

    function Parser() {
      _classCallCheck(this, Parser);

      return _possibleConstructorReturn(this, _getPrototypeOf(Parser).apply(this, arguments));
    }

    _createClass(Parser, [{
      key: "render",
      value: function render(children) {
        var _this = this;

        var ctx = this.$render.parserToData(this).get();
        var key = this.key,
            refName = this.refName;
        delete ctx.props.fileList;
        var props = {
          uploadType: ctx.props.uploadType,
          maxLength: ctx.props.limit,
          modalTitle: ctx.props.modalTitle,
          handleIcon: ctx.props.handleIcon,
          onHandle: ctx.props.onHandle,
          allowRemove: ctx.props.allowRemove,
          previewMask: ctx.props.previewMask,
          value: this.$handle.getFormData(this),
          ctx: ctx,
          children: children
        };
        return this.vNode.upload({
          props: props,
          key: key,
          ref: refName,
          on: {
            input: function input(n) {
              _this.$render.onInput(_this, n);
            }
          }
        });
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$b = 'upload';
  var upload$1 = {
    parser: Parser$8,
    name: name$b
  };

  var parsers = [checkbox$1, datePicker, frame$1, hidden, input, radio$1, select$1, slider, iswitch, timePicker, tree$1, upload$1];

  function getConfig() {
    return {
      form: {
        inline: false,
        labelPosition: 'right',
        labelSuffix: undefined,
        hideRequiredAsterisk: false,
        labelWidth: '125px',
        showMessage: true,
        inlineMessage: false,
        statusIcon: false,
        validateOnRuleChange: true,
        disabled: false,
        size: undefined
      },
      row: {
        gutter: 0,
        type: undefined,
        align: undefined,
        justify: undefined,
        tag: 'div'
      },
      info: {
        type: 'popover',
        trigger: 'hover',
        placement: 'top-start',
        icon: 'el-icon-warning'
      },
      submitBtn: {
        type: 'primary',
        size: 'medium',
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: 'el-icon-upload',
        width: '100%',
        autofocus: false,
        nativeType: 'button',
        innerText: '提交',
        show: true,
        col: undefined,
        click: undefined
      },
      resetBtn: {
        type: 'default',
        size: 'medium',
        plain: false,
        round: false,
        circle: false,
        loading: false,
        disabled: false,
        icon: 'el-icon-refresh',
        width: '100%',
        autofocus: false,
        nativeType: 'button',
        innerText: '重置',
        show: false,
        col: undefined,
        click: undefined
      }
    };
  }

  var nodes = {
    button: 'el-button',
    icon: 'i',
    slider: 'el-slider',
    rate: 'el-rate',
    upload: 'fc-elm-upload',
    cascader: 'el-cascader',
    colorPicker: 'el-color-picker',
    timePicker: 'el-time-picker',
    datePicker: 'el-date-picker',
    'switch': 'el-switch',
    select: 'fc-elm-select',
    checkbox: 'fc-elm-checkbox',
    radio: 'fc-elm-radio',
    inputNumber: 'el-input-number',
    input: 'el-input',
    formItem: 'el-form-Item',
    form: 'el-form',
    frame: 'fc-elm-frame',
    col: 'el-col',
    row: 'el-row',
    tree: 'fc-elm-tree',
    autoComplete: 'el-autocomplete',
    group: 'fc-elm-group'
  };

  var upperCaseReg = /[A-Z]/;
  function isAttr(name, value) {
    return !upperCaseReg.test(name) && (utils.isString(value) || utils.isType(value, 'Number'));
  }

  function isTooltip(info) {
    return info.type === 'tooltip';
  }

  var Form =
  /*#__PURE__*/
  function (_BaseForm) {
    _inherits(Form, _BaseForm);

    function Form() {
      _classCallCheck(this, Form);

      return _possibleConstructorReturn(this, _getPrototypeOf(Form).apply(this, arguments));
    }

    _createClass(Form, [{
      key: "inputVData",
      value: function inputVData(parser) {
        var props = parser.rule.props || {};
        parser.vData.attrs(Object.keys(props).reduce(function (initial, val) {
          if (isAttr(val, props[val])) initial[val] = props[val];
          return initial;
        }, {}));
        if (!props.size && this.options.form.size) parser.vData.props('size', this.options.form.size);
      }
    }, {
      key: "validate",
      value: function validate(call) {
        this.getFormRef().validate(function (valid) {
          call && call(valid);
        });
      }
    }, {
      key: "validateField",
      value: function validateField(field, call) {
        this.getFormRef().validateField(field, call);
      }
    }, {
      key: "resetField",
      value: function resetField(parser) {
        this.vm.$refs[parser.formItemRefName].resetField();
      }
    }, {
      key: "clearValidateState",
      value: function clearValidateState(parser) {
        var fItem = this.vm.$refs[parser.formItemRefName];

        if (fItem) {
          fItem.validateMessage = '';
          fItem.validateState = '';
        }
      }
    }, {
      key: "beforeRender",
      value: function beforeRender() {
        this.propsData = this.vData.props(this.options.form).props({
          model: this.$handle.formData,
          rules: this.$handle.validate,
          key: 'form' + this.unique
        }).ref(this.refName).nativeOn({
          submit: utils.preventDefault
        }).class(this.options.form.className).class('form-create', true).key(this.unique).get();
      }
    }, {
      key: "render",
      value: function render(vn) {
        if (vn.length > 0) vn.push(this.makeFormBtn());
        return this.vNode.form(this.propsData, [this.options.row === false ? vn : this.makeRow(vn)]);
      }
    }, {
      key: "makeRow",
      value: function makeRow(vn) {
        var _class = {},
            row = this.options.row || {};
        if (row.class) _class[row.class] = true;
        return this.vNode.row({
          props: row || {},
          key: 'fr' + this.unique,
          class: _class
        }, vn);
      }
    }, {
      key: "container",
      value: function container(child, parser) {
        return this.makeFormItem(parser, child);
      }
    }, {
      key: "makeFormItem",
      value: function makeFormItem(parser, child) {
        var fItemUnique = "fItem".concat(parser.key).concat(this.unique),
            rule = parser.rule,
            field = parser.field,
            formItemRefName = parser.formItemRefName,
            col = this.getGetCol(parser),
            labelWidth = !col.labelWidth && !rule.title ? 0 : col.labelWidth,
            _this$propsData$props = this.propsData.props,
            inline = _this$propsData$props.inline,
            _col = _this$propsData$props.col,
            propsData = this.vData.props({
          prop: field,
          // label: rule.title,
          // labelFor: unique,
          rules: rule.validate,
          labelWidth: utils.toString(labelWidth),
          required: rule.props.required
        }).key(fItemUnique).ref(formItemRefName).class(rule.className).get(),
            node = this.vNode.formItem(propsData, [child, this.makeFormPop(parser, fItemUnique)]);
        return inline === true || _col === false ? node : this.makeCol(col, parser, fItemUnique, [node]);
      }
    }, {
      key: "makeFormPop",
      value: function makeFormPop(_ref, unique) {
        var rule = _ref.rule;

        if (rule.title) {
          var titleProp = utils.isString(rule.title) ? {
            title: rule.title
          } : rule.title;
          var info = this.options.info || {},
              svn = [titleProp.title || ''];

          if (rule.info) {
            svn.push(this.vNode.make(isTooltip(info) ? 'el-tooltip' : 'el-popover', {
              props: _objectSpread2({}, info, {
                content: rule.info
              }),
              key: "pop".concat(unique)
            }, [this.vNode.icon({
              class: [info.icon || 'el-icon-warning'],
              slot: isTooltip(info) ? 'default' : 'reference'
            })]));
          }

          return this.vNode.make('span', _objectSpread2({}, titleProp, {
            slot: 'label'
          }), svn);
        }
      }
    }, {
      key: "makeCol",
      value: function makeCol(col, parser, fItemUnique, VNodeFn) {
        var _cls;

        if (col.span === undefined) col.span = 24;
        var cls = (_cls = {}, _defineProperty(_cls, style.__fc_h, !!parser.rule.hidden), _defineProperty(_cls, style.__fc_v, !!parser.rule.visibility), _cls);
        if (col.class) cls[col.class] = true;
        return this.vNode.col({
          props: col,
          class: cls,
          key: "".concat(fItemUnique, "col1")
        }, VNodeFn);
      }
    }, {
      key: "makeFormBtn",
      value: function makeFormBtn() {
        var btn = [],
            submitBtnShow = false !== this.vm.buttonProps && false !== this.vm.buttonProps.show,
            resetBtnShow = false !== this.vm.resetProps && false !== this.vm.resetProps.show;
        if (submitBtnShow) btn.push(this.makeSubmitBtn(resetBtnShow ? 19 : 24));
        if (resetBtnShow) btn.push(this.makeResetBtn(4));
        return this.propsData.props.inline === true ? btn : btn.length ? this.vNode.col({
          props: {
            span: 24
          },
          key: "".concat(this.unique, "col2")
        }, btn) : [];
      }
    }, {
      key: "makeResetBtn",
      value: function makeResetBtn(span) {
        var _this = this;

        var resetBtn = this.vm.resetProps,
            props = resetBtn.col || {
          span: span,
          push: 1
        };
        return this.vNode.col({
          props: props,
          key: "".concat(this.unique, "col3")
        }, [this.vNode.button({
          key: "frsbtn".concat(this.unique),
          props: resetBtn,
          on: {
            'click': function click() {
              var fApi = _this.$handle.fCreateApi;
              utils.isFunction(resetBtn.click) ? resetBtn.click(fApi) : fApi.resetFields();
            }
          },
          style: {
            width: resetBtn.width
          }
        }, [resetBtn.innerText])]);
      }
    }, {
      key: "makeSubmitBtn",
      value: function makeSubmitBtn(span) {
        var _this2 = this;

        var submitBtn = this.vm.buttonProps,
            props = submitBtn.col || {
          span: span
        };
        return this.vNode.col({
          props: props,
          key: "".concat(this.unique, "col4")
        }, [this.vNode.button({
          key: "fbtn".concat(this.unique),
          props: submitBtn,
          on: {
            'click': function click() {
              var fApi = _this2.$handle.fCreateApi;
              utils.isFunction(submitBtn.click) ? submitBtn.click(fApi) : fApi.submit();
            }
          },
          style: {
            width: submitBtn.width
          }
        }, [submitBtn.innerText])]);
      }
    }]);

    return Form;
  }(createFormCreate.BaseForm);

  var name$c = 'datePicker';
  var datePicker$1 = ['year', 'month', 'date', 'dates', 'week', 'datetime', 'datetimeRange', 'dateRange'].reduce(function (initial, type) {
    initial[type] = createFormCreate.creatorTypeFactory(name$c, type.toLowerCase());
    return initial;
  }, {});

  var name$d = 'frame';
  var types = {
    frameInputs: ['input', 0],
    frameFiles: ['file', 0],
    frameImages: ['image', 0],
    frameInputOne: ['input', 1],
    frameFileOne: ['file', 1],
    frameImageOne: ['image', 1]
  };
  var maker = Object.keys(types).reduce(function (maker, key) {
    maker[key] = createFormCreate.creatorTypeFactory(name$d, function (m) {
      return m.props({
        type: types[key][0],
        maxLength: types[key][1]
      });
    });
    return maker;
  }, {});
  maker.frameInput = maker.frameInputs;
  maker.frameFile = maker.frameFiles;
  maker.frameImage = maker.frameImages;

  var name$e = 'input';
  var maker$1 = ['password', 'url', 'email', 'text', 'textarea'].reduce(function (maker, type) {
    maker[type] = createFormCreate.creatorTypeFactory(name$e, type);
    return maker;
  }, {});
  maker$1.idate = createFormCreate.creatorTypeFactory(name$e, 'date');

  var name$f = 'select';
  var select$2 = {
    selectMultiple: createFormCreate.creatorTypeFactory(name$f, true, 'multiple'),
    selectOne: createFormCreate.creatorTypeFactory(name$f, false, 'multiple')
  };

  var name$g = 'slider';
  var slider$1 = {
    sliderRange: createFormCreate.creatorTypeFactory(name$g, true, 'range')
  };

  var name$h = 'timePicker';
  var timePicker$1 = {
    time: createFormCreate.creatorTypeFactory(name$h, function (m) {
      return m.props.isRange = false;
    }),
    timeRange: createFormCreate.creatorTypeFactory(name$h, function (m) {
      return m.props.isRange = true;
    })
  };

  var name$i = 'tree';
  var types$1 = {
    'treeSelected': 'selected',
    'treeChecked': 'checked'
  };
  var tree$2 = Object.keys(types$1).reduce(function (maker, key) {
    maker[key] = createFormCreate.creatorTypeFactory(name$i, types$1[key]);
    return maker;
  }, {});

  var name$j = 'upload';
  var types$2 = {
    image: ['image', 0],
    file: ['file', 0],
    uploadFileOne: ['file', 1],
    uploadImageOne: ['image', 1]
  };
  var maker$2 = Object.keys(types$2).reduce(function (maker, key) {
    maker[key] = createFormCreate.creatorTypeFactory(name$j, function (m) {
      return m.props({
        uploadType: types$2[key][0],
        maxLength: types$2[key][1]
      });
    });
    return maker;
  }, {});
  maker$2.uploadImage = maker$2.image;
  maker$2.uploadFile = maker$2.file;

  var maker$3 = _objectSpread2({}, datePicker$1, {}, maker, {}, maker$1, {}, select$2, {}, slider$1, {}, timePicker$1, {}, tree$2, {}, maker$2),
      names = ['autoComplete', 'cascader', 'colorPicker', 'datePicker', 'frame', 'inputNumber', 'radio', 'rate', 'group'];

  names.forEach(function (name) {
    maker$3[name] = createFormCreate.creatorFactory(name);
  });
  maker$3.auto = maker$3.autoComplete;
  maker$3.number = maker$3.inputNumber;
  maker$3.color = maker$3.colorPicker;

  maker$3.hidden = function (field, value) {
    return createFormCreate.creatorFactory('hidden')('', field, value);
  };

  createFormCreate.VNode.use(nodes);
  var drive = {
    ui: "element-ui",
    version: "".concat("1.0.22"),
    formRender: Form,
    components: components,
    parsers: parsers,
    makers: maker$3,
    getConfig: getConfig
  };

  var _createFormCreate = createFormCreate__default(drive),
      FormCreate = _createFormCreate.FormCreate,
      install = _createFormCreate.install;

  if (typeof window !== 'undefined') {
    window.formCreate = FormCreate;

    if (window.Vue) {
      install(window.Vue);
    }
  }

  var maker$4 = FormCreate.maker;

  exports.default = FormCreate;
  exports.maker = maker$4;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
