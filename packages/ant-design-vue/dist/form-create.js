/*!
 * @xl-form-create/ant-design-vue v1.0.20
 * (c) 2018-2021 xaboy
 * Github https://github.com/xaboy/form-create
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@xl-form-create/utils'), require('@xl-form-create/core'), require('moment')) :
  typeof define === 'function' && define.amd ? define(['exports', '@xl-form-create/utils', '@xl-form-create/core', 'moment'], factory) :
  (global = global || self, factory(global.formCreate = {}, global.utils, global.createFormCreate, global.moment));
}(this, (function (exports, utils, createFormCreate, moment) { 'use strict';

  var createFormCreate__default = 'default' in createFormCreate ? createFormCreate['default'] : createFormCreate;
  moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

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

  function _extends() {
    return _extends = Object.assign || function (a) {
      for (var b, c = 1; c < arguments.length; c++) {
        for (var d in b = arguments[c], b) {
          Object.prototype.hasOwnProperty.call(b, d) && (a[d] = b[d]);
        }
      }

      return a;
    }, _extends.apply(this, arguments);
  }

  var normalMerge = ["attrs", "props", "domProps"],
      toArrayMerge = ["class", "style", "directives"],
      functionalMerge = ["on", "nativeOn"],
      mergeJsxProps = function mergeJsxProps(a) {
    return a.reduce(function (c, a) {
      for (var b in a) {
        if (!c[b]) c[b] = a[b];else if (-1 !== normalMerge.indexOf(b)) c[b] = _extends({}, c[b], a[b]);else if (-1 !== toArrayMerge.indexOf(b)) {
          var d = c[b] instanceof Array ? c[b] : [c[b]],
              e = a[b] instanceof Array ? a[b] : [a[b]];
          c[b] = d.concat(e);
        } else if (-1 !== functionalMerge.indexOf(b)) {
          for (var f in a[b]) {
            if (c[b][f]) {
              var g = c[b][f] instanceof Array ? c[b][f] : [c[b][f]],
                  h = a[b][f] instanceof Array ? a[b][f] : [a[b][f]];
              c[b][f] = g.concat(h);
            } else c[b][f] = a[b][f];
          }
        } else if ("hook" == b) for (var i in a[b]) {
          c[b][i] = c[b][i] ? mergeFn(c[b][i], a[b][i]) : a[b][i];
        } else c[b] = a[b];
      }

      return c;
    }, {});
  },
      mergeFn = function mergeFn(a, b) {
    return function () {
      a && a.apply(this, arguments), b && b.apply(this, arguments);
    };
  };

  var helper = mergeJsxProps;

  function styleInject(css, ref) {
    if (ref === void 0) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') {
      return;
    }

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

  var css = ".fc-upload-btn, .fc-files {\n    display: inline-block;\n    width: 104px;\n    height: 104px;\n    text-align: center;\n    line-height: 104px;\n    border: 1px solid #c0ccda;\n    border-radius: 4px;\n    overflow: hidden;\n    background: #fff;\n    position: relative;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, .1);\n    margin-right: 4px;\n    box-sizing: border-box;\n}\n\n.form-create .form-create .ant-form-item {\n    margin-bottom: 22px;\n}\n\n.form-create .form-create .ant-form-item .ant-form-item {\n    margin-bottom: 0px;\n}\n\n.form-create .form-create .ant-form-item.ant-form-item-with-help {\n    margin-bottom: 3px;\n}\n\n.form-create .form-create .ant-form-item .ant-form-item.ant-form-item-with-help {\n    margin-bottom: -22px;\n}\n\n.form-create .__fc_h {\n    display: none;\n}\n\n.form-create .__fc_v {\n    visibility: hidden;\n}\n\n.fc-files img {\n    width: 100%;\n    height: 100%;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.fc-upload .fc-upload-cover {\n    opacity: 0;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, .6);\n    transition: opacity .3s;\n}\n\n.fc-upload .fc-upload-cover i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n\n.fc-files:hover .fc-upload-cover {\n    opacity: 1;\n}\n\n.fc-upload .ant-upload {\n    display: block;\n}\n\n.fc-hide-btn .ant-upload {\n    display: none;\n}\n";
  var style = {"fc-upload-btn":"fc-upload-btn","fc-files":"fc-files","form-create":"form-create","ant-form-item":"ant-form-item","ant-form-item-with-help":"ant-form-item-with-help","__fc_h":"__fc_h","__fc_v":"__fc_v","fc-upload":"fc-upload","fc-upload-cover":"fc-upload-cover","ant-upload":"ant-upload","fc-hide-btn":"fc-hide-btn"};
  styleInject(css);

  var parseFile = function parseFile(file, uid) {
    return {
      url: file,
      name: getFileName(file),
      status: 'done',
      uid: uid + 1
    };
  },
      getFileName = function getFileName(file) {
    return utils.toString(file).split('/').pop();
  },
      parseUpload = function parseUpload(file) {
    return {
      url: file.url,
      file: file
    };
  };

  var upload = {
    name: 'fc-antd-update',
    props: {
      limit: {
        type: Number,
        default: 0
      },
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
      value: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      onSuccess: {
        type: Function,
        required: true
      },
      onHandle: {
        type: Function,
        default: function _default(file) {
          this.previewImage = file.url;
          this.previewVisible = true;
        }
      },
      modalTitle: String,
      previewMask: undefined
    },
    data: function data() {
      var fileList = this.value.map(parseFile);
      return {
        defaultUploadList: fileList,
        previewImage: '',
        previewVisible: false,
        uploadList: fileList.map(parseUpload)
      };
    },
    watch: {
      value: function value(n) {
        var fileList = n.map(parseFile);
        this.$refs.upload.sFileList = fileList;
        this.uploadList = fileList.map(parseUpload);
      }
    },
    methods: {
      initChildren: function initChildren() {
        if (!utils.hasSlot(this.children, 'default')) this.children.push(this.makeBtn());
      },
      makeBtn: function makeBtn() {
        var h = this.$createElement;
        return h("div", [h("AIcon", {
          "attrs": {
            "type": "plus"
          }
        })]);
      },
      handleChange: function handleChange(_ref) {
        var file = _ref.file,
            fileList = _ref.fileList;
        var list = this.uploadList;

        if (file.status === 'done') {
          this.onSuccess(file, fileList);
          if (file.url) list.push({
            url: file.url,
            file: fileList[fileList.length - 1]
          });
          this.input();
        } else if (file.status === 'removed') {
          list.forEach(function (v, i) {
            if (v.file === file) {
              list.splice(i, 1);
            }
          });
          this.input();
        }
      },
      input: function input() {
        this.$emit('input', this.uploadList.map(function (v) {
          return v.url;
        }));
      }
    },
    render: function render() {
      var _this = this;

      var h = arguments[0];
      var isShow = !this.limit || this.limit > this.uploadList.length;
      this.initChildren();

      var ctx = _objectSpread2({}, this.ctx);

      ctx.on = utils.deepExtend({}, ctx.on || {});
      return h("div", {
        "class": _defineProperty({}, style['fc-hide-btn'], !isShow)
      }, [h("AUpload", helper([{}, ctx, {
        "on": {
          "preview": this.onHandle.bind(this),
          "change": this.handleChange
        },
        "ref": "upload",
        "attrs": {
          "defaultFileList": this.defaultUploadList
        }
      }]), [this.children]), h("aModal", {
        "attrs": {
          "mask": this.previewMask,
          "title": this.modalTitle,
          "footer": null
        },
        "model": {
          value: _this.previewVisible,
          callback: function callback($$v) {
            _this.previewVisible = $$v;
          }
        }
      }, [h("img", {
        "style": "width: 100%",
        "attrs": {
          "src": this.previewImage
        }
      })])]);
    }
  };

  var NAME = 'fc-antd-frame';
  var frame = {
    name: NAME,
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
        default: 'folder'
      },
      width: {
        type: [Number, String],
        default: 500
      },
      height: {
        type: [Number, String],
        default: 370
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
      }
    },
    methods: {
      key: function key(unique) {
        return NAME + unique + this.unique;
      },
      closeModel: function closeModel(close) {
        this.$emit(close ? '$close' : '$ok');

        if (this.reload) {
          this.$off('$ok');
          this.$off('$close');
        }

        this.frameVisible = false;
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
        return h("AInput", helper([{}, {
          "props": props
        }, {
          "key": this.key('input')
        }]), [h("AIcon", {
          "attrs": {
            "type": this.icon
          },
          "slot": "addonAfter",
          "on": {
            "click": this.showModel
          }
        }), this.fileList.length ? h("AIcon", {
          "attrs": {
            "type": "close-circle"
          },
          "slot": "suffix",
          "on": {
            "click": function click() {
              return _this.fileList = [];
            }
          }
        }) : null]);
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
        return h("AIcon", {
          "attrs": {
            "type": this.handleIcon === true || this.handleIcon === undefined ? 'eye-o' : this.handleIcon
          },
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
        return h("AIcon", {
          "attrs": {
            "type": "delete"
          },
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
          return _this4.makeItem(index, [h("AIcon", {
            "attrs": {
              "type": "file"
            },
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
        }, [h("AIcon", {
          "attrs": {
            "type": this.icon,
            "theme": "filled"
          }
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
        var node = [];
        if (!footer) return node;
        if (closeBtn) node.push(h("AButton", {
          "on": {
            "click": function click() {
              return _this8.onCancel() !== false && _this8.closeModel(true);
            }
          }
        }, [closeBtnText]));
        if (okBtn) node.push(h("AButton", {
          "attrs": {
            "type": "primary"
          },
          "on": {
            "click": function click() {
              return _this8.onOk() !== false && _this8.closeModel();
            }
          }
        }, [okBtnText]));
        return node;
      }
    },
    render: function render() {
      var _this9 = this;

      var h = arguments[0];
      var type = this.type;
      var Node;
      if (type === 'input') Node = this.makeInput();else if (type === 'image') Node = this.makeImages();else Node = this.makeFiles();
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
      return h("div", [Node, h("aModal", {
        "attrs": {
          "mask": this.previewMask,
          "title": modalTitle,
          "footer": null
        },
        "model": {
          value: _this9.previewVisible,
          callback: function callback($$v) {
            _this9.previewVisible = $$v;
          }
        }
      }, [h("img", {
        "attrs": {
          "alt": "example",
          "src": this.previewImage
        },
        "style": "width: 100%"
      })]), h("aModal", helper([{}, {
        "props": _objectSpread2({
          width: width,
          title: title
        }, this.modal)
      }, {
        "attrs": {
          "visible": this.frameVisible
        },
        "on": {
          "cancel": function cancel() {
            return _this9.closeModel(true);
          }
        }
      }]), [this.frameVisible || !this.reload ? h("iframe", {
        "ref": "frame",
        "attrs": {
          "src": src,
          "frameborder": "0"
        },
        "style": {
          'height': height,
          'border': '0 none',
          'width': '100%'
        }
      }) : null, h("div", {
        "slot": "footer"
      }, [this.makeFooter()])])]);
    }
  };

  var NAME$1 = 'fc-antd-group';
  var group = {
    name: NAME$1,
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
        return h("AIcon", {
          "key": "a".concat(key),
          "attrs": {
            "type": "plus-circle"
          },
          "style": "font-size:".concat(this.fontSize, "px;cursor:").concat(this.disabled ? 'not-allowed;color:#c9cdd4' : 'pointer', ";"),
          "on": {
            "click": this.add
          }
        });
      },
      delIcon: function delIcon(key) {
        var _this6 = this;

        var h = this.$createElement;
        return h("AIcon", {
          "key": "d".concat(key),
          "attrs": {
            "type": "minus-circle"
          },
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
      }) : h("AIcon", {
        "key": 'a_def',
        "attrs": {
          "type": "plus-circle"
        },
        "style": "font-size:".concat(this.fontSize, "px;vertical-align:middle;color:").concat(this.disabled ? '#c9cdd4;cursor: not-allowed' : '#606266;cursor:pointer', ";"),
        "on": {
          "click": this.add
        }
      }) : h("div", {
        "key": 'con'
      }, [keys.map(function (key, index) {
        var rule = _this8.cacheRule[key];
        return h("ARow", {
          "attrs": {
            "align": "middle",
            "type": "flex"
          },
          "key": key,
          "style": "background-color:#f5f7fa;padding:10px;border-radius:5px;margin-bottom:10px;"
        }, [h("ACol", {
          "attrs": {
            "span": button ? 20 : 24
          }
        }, [h("FormCreate", {
          "on": {
            "change": _this8.formData,
            "on-reload": _this8.formData,
            "set-value": _this8.formData,
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
        })]), button ? h("ACol", {
          "attrs": {
            "span": 2,
            "pull": 1,
            "push": 1
          }
        }, [_this8.makeIcon(keys.length, index, key)]) : null]);
      })]);
    }
  };

  var components = [upload, frame, group];

  var Parser =
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
        return this.vNode.checkbox(this.$render.inputVData(this).props({
          'options': this.rule.options
        }), children);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name = 'checkbox';
  var checkbox = {
    parser: Parser,
    name: name
  };

  var FORMAT_TYPE = {
    date: 'YYYY-MM-DD',
    month: 'YYYY-MM',
    week: 'YYYY-wo',
    range: 'YYYY-MM-DD HH:mm:ss'
  };

  var _getType = function getType(type) {
    if (['date', 'month', 'week', 'range'].indexOf(type) === -1) return 'date';
    return type;
  };

  var toMoment = function toMoment(val) {
    return val instanceof moment ? val : moment(val);
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
      key: "toFormValue",
      value: function toFormValue(value) {
        var parseValue,
            type = this.getType();
        var isArr = Array.isArray(value);

        if (type === 'range') {
          if (isArr) {
            parseValue = value.map(function (v) {
              return v ? toMoment(v) : null;
            });
          } else {
            parseValue = [];
          }
        } else {
          parseValue = isArr ? (value[0] ? toMoment(value[0]) : null) || null : value ? toMoment(value) : null;
        }

        return parseValue;
      }
    }, {
      key: "toValue",
      value: function toValue(formValue) {
        var format = this.getFormat();
        if (Array.isArray(formValue)) return formValue.map(function (v) {
          return v ? v.format(format) : v;
        });else return formValue ? formValue.format(format) : formValue;
      }
    }, {
      key: "getFormat",
      value: function getFormat() {
        return this.rule.props.format || (this.el ? this.el.format : '') || FORMAT_TYPE[_getType(this.rule.props.type)];
      }
    }, {
      key: "getType",
      value: function getType() {
        return _getType(this.rule.props.type);
      }
    }, {
      key: "render",
      value: function render(children) {
        var type = this.getType() + 'Picker';
        return this.vNode[type](this.$render.inputVData(this), [children]);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$1 = 'datePicker';
  var datePicker = {
    parser: Parser$1,
    name: name$1
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
    parser: Parser$2,
    name: name$2
  };

  var name$3 = 'hidden';

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
      value: function render() {
        return [];
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var hidden = {
    parser: parser,
    name: name$3
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
      key: "render",
      value: function render(children) {
        var type = this.rule.props.type;
        if (['textarea', 'search'].indexOf(type) === -1) type = 'input';
        var Type = type === 'textarea' ? 'ATextarea' : type === 'search' ? 'AInputSearch' : 'AInput';
        return this.vNode.make(Type, this.$render.inputVData(this), [children]);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$4 = 'input';
  var input = {
    parser: Parser$3,
    name: name$4
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
        return this.vNode.radio(this.$render.inputVData(this).props({
          'options': this.rule.options
        }), children);
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$5 = 'radio';
  var radio = {
    parser: Parser$4,
    name: name$5
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
      key: "render",
      value: function render(children) {
        return this.vNode.select(this.$render.inputVData(this).props('options', this.rule.options), children);
      }
    }, {
      key: "toFormValue",
      value: function toFormValue(val) {
        return utils.isUndef(val) ? undefined : val;
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$6 = 'select';
  var select = {
    parser: Parser$5,
    name: name$6
  };

  var toMoment$1 = function toMoment(val, format) {
    return val instanceof moment ? val : moment(val, format);
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
      key: "toFormValue",
      value: function toFormValue(value) {
        return value ? toMoment$1(value, this.getFormat()) : null;
      }
    }, {
      key: "toValue",
      value: function toValue(formValue) {
        return formValue ? formValue.format(this.getFormat()) : formValue;
      }
    }, {
      key: "getFormat",
      value: function getFormat() {
        return this.rule.props.format || (this.el ? this.el.format : '') || 'HH:mm:ss';
      }
    }]);

    return Parser;
  }(createFormCreate.BaseParser);

  var name$7 = 'timePicker';
  var timePicker = {
    parser: Parser$6,
    name: name$7
  };

  var parser$1 =
  /*#__PURE__*/
  function (_BaseParser) {
    _inherits(parser, _BaseParser);

    function parser(handle, rule, id) {
      var _this;

      _classCallCheck(this, parser);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(parser).call(this, handle, rule, id));
      _this.modelEvent = 'check';
      var props = _this.rule.props;
      if (!props.replaceFields) props.replaceFields = {
        key: 'id'
      };else if (!props.replaceFields.key) props.replaceFields.key = 'id';
      return _this;
    }

    _createClass(parser, [{
      key: "render",
      value: function render(children) {
        var data = this.$render.inputVData(this).props('checkedKeys', this.$handle.getFormData(this)).props('checkable', true).get();
        return this.vNode.tree(data, [children]);
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var name$8 = 'tree';
  var tree = {
    parser: parser$1,
    name: name$8
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
        var _this = this;

        var data = this.$render.inputVData(this).get();
        return this.vNode.upload({
          props: _objectSpread2({}, data.props, {
            ctx: data,
            children: children,
            value: this.$handle.getFormData(this)
          }),
          on: {
            input: function input(v) {
              _this.$render.onInput(_this, v);
            }
          }
        });
      }
    }, {
      key: "toFormValue",
      value: function toFormValue(value) {
        return utils.toArray(value);
      }
    }, {
      key: "toValue",
      value: function toValue(formValue) {
        return this.rule.props.limit === 1 ? formValue[0] || '' : formValue;
      }
    }]);

    return parser;
  }(createFormCreate.BaseParser);

  var name$9 = 'upload';
  var upload$1 = {
    parser: parser$2,
    name: name$9
  };

  var parsers = [checkbox, datePicker, frame$1, hidden, input, radio, select, timePicker, tree, upload$1];

  var UNDEF = undefined;
  function getConfig() {
    return {
      form: {
        hideRequiredMark: false,
        layout: 'horizontal',
        labelAlign: 'right',
        labelCol: {
          span: 4
        },
        wrapperCol: {
          span: 20
        },
        colon: UNDEF,
        validateOnRuleChange: true
      },
      row: {
        gutter: 0,
        type: UNDEF,
        align: UNDEF,
        justify: UNDEF
      },
      info: {
        type: 'popover',
        placement: 'topLeft',
        icon: 'question-circle-o'
      },
      submitBtn: {
        disabled: false,
        ghost: false,
        icon: 'upload',
        loading: false,
        shape: UNDEF,
        size: UNDEF,
        type: 'primary',
        block: true,
        innerText: '提交',
        htmlType: UNDEF,
        show: true,
        col: UNDEF,
        click: UNDEF
      },
      resetBtn: {
        disabled: false,
        ghost: false,
        icon: 'sync',
        loading: false,
        shape: UNDEF,
        size: UNDEF,
        type: 'default',
        block: true,
        innerText: '重置',
        htmlType: UNDEF,
        show: false,
        col: UNDEF,
        click: UNDEF
      }
    };
  }

  var nodes = {
    button: 'a-button',
    icon: 'a-icon',
    slider: 'a-slider',
    rate: 'a-rate',
    upload: 'fc-antd-update',
    cascader: 'a-cascader',
    timePicker: 'a-time-picker',
    datePicker: 'a-date-picker',
    rangePicker: 'a-range-picker',
    weekPicker: 'a-week-picker',
    monthPicker: 'a-month-picker',
    'switch': 'a-switch',
    select: 'a-select',
    checkbox: 'a-checkbox-group',
    radio: 'a-radio-group',
    inputNumber: 'a-input-number',
    search: 'a-input-search',
    textarea: 'a-textarea',
    formItem: 'a-form-model-item',
    form: 'a-form-model',
    frame: 'fc-antd-frame',
    col: 'a-col',
    row: 'a-row',
    tree: 'a-tree',
    autoComplete: 'a-auto-complete',
    group: 'fc-antd-group'
  };

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
        if (!parser.rule.props.size && this.options.form.size) parser.vData.props('size', this.options.form.size);
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
      key: "getItemCol",
      value: function getItemCol(parser, field) {
        var col = this.getGetCol(parser, field);
        return Object.keys(col).length ? col : undefined;
      }
    }, {
      key: "makeFormItem",
      value: function makeFormItem(parser, child) {
        var fItemUnique = "fItem".concat(parser.key).concat(this.unique),
            isVertical = this.propsData.props.layout === 'vertical',
            rule = parser.rule,
            field = parser.field,
            formItemRefName = parser.formItemRefName,
            col = this.getGetCol(parser),
            _this$propsData$props = this.propsData.props,
            layout = _this$propsData$props.layout,
            _col = _this$propsData$props.col,
            propsData = this.vData.props({
          prop: field,
          labelCol: isVertical ? {} : this.getItemCol(parser, 'labelCol'),
          wrapperCol: isVertical ? {} : this.getItemCol(parser, 'wrapperCol'),
          rules: rule.validate,
          required: rule.props.required
        }).key(fItemUnique).ref(formItemRefName).class(rule.className).get(),
            node = this.vNode.formItem(propsData, [child, this.makeFormPop(parser, fItemUnique)]);
        return layout === 'inline' || _col === false ? node : this.makeCol(col, parser, fItemUnique, [node]);
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
              svn = [titleProp.title || ''],
              isTool = isTooltip(info);

          if (rule.info) {
            svn.push(this.vNode.make(isTool ? 'ATooltip' : 'APopover', {
              props: _objectSpread2({}, info, _defineProperty({}, isTool ? 'title' : 'content', rule.info)),
              key: "pop".concat(unique)
            }, [this.vNode.icon({
              props: {
                type: info.icon || 'question-circle-o',
                size: 16
              }
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
        return this.propsData.props.layout === 'inline' ? btn : btn.length ? this.vNode.col({
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
          }
        }, [submitBtn.innerText])]);
      }
    }]);

    return Form;
  }(createFormCreate.BaseForm);

  var name$a = 'datePicker';
  var datePicker$1 = ['date', 'month', 'week'].reduce(function (initial, type) {
    initial[type] = createFormCreate.creatorTypeFactory(name$a, type);
    return initial;
  }, {
    dateRange: createFormCreate.creatorTypeFactory(name$a, 'range'),
    datetimeRange: createFormCreate.creatorTypeFactory(name$a, function (m) {
      return m.props({
        type: 'range',
        showTime: true
      });
    })
  });

  var name$b = 'frame';
  var types = {
    frameInputs: ['input', 0],
    frameFiles: ['file', 0],
    frameImages: ['image', 0],
    frameInputOne: ['input', 1],
    frameFileOne: ['file', 1],
    frameImageOne: ['image', 1]
  };
  var maker = Object.keys(types).reduce(function (maker, key) {
    maker[key] = createFormCreate.creatorTypeFactory(name$b, function (m) {
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

  var name$c = 'input';
  var maker$1 = ['password', 'url', 'email', 'text', 'textarea', 'search'].reduce(function (maker, type) {
    maker[type] = createFormCreate.creatorTypeFactory(name$c, type);
    return maker;
  }, {});
  maker$1.idate = createFormCreate.creatorTypeFactory(name$c, 'date');

  var name$d = 'select';
  var select$1 = {
    selectMultiple: createFormCreate.creatorTypeFactory(name$d, 'multiple', 'mode'),
    selectTags: createFormCreate.creatorTypeFactory(name$d, 'tags', 'mode'),
    selectCombobox: createFormCreate.creatorTypeFactory(name$d, 'combobox', 'mode')
  };

  var name$e = 'slider';
  var slider = {
    sliderRange: createFormCreate.creatorTypeFactory(name$e, true, 'range')
  };

  var name$f = 'upload';
  var types$1 = {
    image: ['image', 0],
    file: ['file', 0],
    uploadFileOne: ['file', 1],
    uploadImageOne: ['image', 1]
  };
  var maker$2 = Object.keys(types$1).reduce(function (maker, key) {
    maker[key] = createFormCreate.creatorTypeFactory(name$f, function (m) {
      return m.props({
        uploadType: types$1[key][0],
        maxLength: types$1[key][1]
      });
    });
    return maker;
  }, {});
  maker$2.uploadImage = maker$2.image;
  maker$2.uploadFile = maker$2.file;

  var maker$3 = _objectSpread2({}, datePicker$1, {}, maker, {}, maker$1, {}, select$1, {}, slider, {}, maker$2),
      names = ['autoComplete', 'cascader', 'datePicker', 'frame', 'inputNumber', 'radio', 'rate', 'switch', 'rate', 'slider', 'timePicker', 'group'];

  names.forEach(function (name) {
    maker$3[name] = createFormCreate.creatorFactory(name);
  });
  maker$3.auto = maker$3.autoComplete;
  maker$3.number = maker$3.inputNumber;
  maker$3.time = maker$3.timePicker;

  maker$3.hidden = function (field, value) {
    return createFormCreate.creatorFactory('hidden')('', field, value);
  };

  var modelEvents = {
    'input': 'change.value',
    'switch': {
      prop: 'checked',
      event: 'change'
    }
  };
  ['autoComplete', 'cascader', 'inputNumber', 'rate', 'slider', 'change', 'timePicker', 'datePicker', 'select'].forEach(function (n) {
    return modelEvents[n] = 'change';
  });

  createFormCreate.VNode.use(nodes);
  var drive = {
    ui: "ant-design-vue",
    version: "".concat("1.0.20"),
    formRender: Form,
    components: components,
    parsers: parsers,
    makers: maker$3,
    getConfig: getConfig,
    modelEvents: modelEvents
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
