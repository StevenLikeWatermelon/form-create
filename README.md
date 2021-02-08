<p align="center">
    <a href="http://www.form-create.com">
        <img width="200" src="http://file.lotkk.com/form-create.png">
    </a>
</p>


# form-create V2

[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/xaboy/form-create)
[![github](https://img.shields.io/badge/Author-xaboy-blue.svg)](https://github.com/xaboy)
[![version](https://badge.fury.io/js/@xl-form-create%2Fcore.svg)](https://www.npmjs.com/package/@xl-form-create/core)
[![npm](https://img.shields.io/npm/dt/@xl-form-create/core.svg)](https://www.npmjs.com/package/@xl-form-create/core)
[![document](https://img.shields.io/badge/Doc-welcome-red.svg)](http://www.form-create.com/en/v2/)


**Form-create is a form generator that can generate dynamic rendering, data collection, validation, and submission via JSON. And support for generating any Vue components. Combined with the built-in 17 common form components and custom components, complex forms can be easily handled.**

## [中文 README](https://github.com/xaboy/form-create/blob/2.0/README_zh-CN.md)

## Support
- **iViewUI 2.13.0+**
- **iViewUI 3.x**
- **iViewUI 4.x**
- **ElementUI 2.8.2+**
- **Ant-design-vue 1.5.3+**

If you have a form component suitable for form-create, please feel free to [click here to leave a message](https://github.com/xaboy/form-create/issues/124)

>  If it helps, you can click on "Star" in the upper right corner. Thank you!
>  The project is still being developed and improved. If there are any 'recommendations or questions, please ask [here](https://github.com/xaboy/form-create/issues/new)

> 本项目QQ讨论群[28963712](https://jq.qq.com/?_wv=1027&k=54aKUVw)

> [Update log](http://www.form-create.com/en/v2/guide/update.html)

- **Preview**

![demo1](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-live3.gif)

<details>
<summary><b>More</b></summary>

- **Form operations**

![demo2](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-live2.gif)

- **`group` component**

![demo3](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-group.gif)

- **`control` configuration**

![demo2](https://raw.githubusercontent.com/xaboy/form-create/dev/images/demo-live4.gif)
</details>

## Docs

<p>
    <a href="http://www.form-create.com/v2/">
        <strong>简体中文</strong>
    </a>
    <a href="http://www.form-create.com/en/v2/">
        <strong>English</strong>
    </a>
</p>



## Packages

| Name               | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| @xl-form-create/iview     | [iView Version](http://form-create.com/en/v2/iview/) |
| @xl-form-create/iview4     | [iView V4 Version](http://form-create.com/en/v2/iview/) |
| @xl-form-create/element-ui | [ElementUI Version](http://form-create.com/en/v2/element-ui/)     |
| @xl-form-create/ant-design-vue | [Ant-design-vue Version](http://form-create.com/en/v2/ant-design-vue/)     |



## Example

- [Demo case](https://github.com/HeyMrLin/fc-demo) ([Demo station](http://jeekweb.pro/form-create-demo))

- [Generate a form using the maker generator](https://jsrun.net/NQhKp/edit)

- [Generate a form using the json parameter](https://jsrun.net/NQhKp/edit)

- [Component example](https://jsrun.net/user/xaboy)



<details>
<summary><b>Legend</b></summary>

![https://raw.githubusercontent.com/xaboy/form-create/dev/images/sample110.jpg](https://raw.githubusercontent.com/xaboy/form-create/dev/images/sample110.jpg)
</details>


## Install

iview 2.x|3.x
```shell
npm install @xl-form-create/iview
```

iview 4.x
```shell
npm install @xl-form-create/iview4
```

elementUI
```shell
npm install @xl-form-create/element-ui
```

ant-design-vue
```shell
npm install @xl-form-create/ant-design-vue
```

## Import

**CDN:**

iviewUI
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="//unpkg.com/iview/dist/styles/iview.css">
<!-- import iView -->
<script src="//unpkg.com/iview/dist/iview.min.js"></script>
<!-- import form-create/iview -->
<script src="//unpkg.com/@xl-form-create/iview/dist/form-create.min.js"></script>
```

elementUI
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- import element -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
<!-- import form-create/element -->
<script src="//unpkg.com/@xl-form-create/element-ui/dist/form-create.min.js"></script>
```

ant-design-vue
```html
<!-- import Vue.js -->
<script src="//vuejs.org/js/vue.min.js"></script>
<!-- import stylesheet -->
<link href="https://unpkg.com/ant-design-vue@1.5.3/dist/antd.min.css" rel="stylesheet">
<!-- import moment -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/locale/zh-cn.js"></script>
<!-- import ant-design-vue -->
<script defer src="https://unpkg.com/ant-design-vue@1.5.3/dist/antd.js"></script>
<!-- import form-create -->
<script src="//unpkg.com/@xl-form-create/ant-design-vue/dist/form-create.min.js"></script>
```

**NodeJs:**

iviewUI
```js
import formCreate from '@xl-form-create/iview'
Vue.use(formCreate)
```

ElementUI
```js
import formCreate from '@xl-form-create/element-ui'
Vue.use(formCreate)
```

ant-design-vue
```js
import formCreate from '@xl-form-create/ant-design-vue'
Vue.use(formCreate)
```

## Usage

```html
<form-create ref="fc" v-model="fApi" :rule="rule" :option="option"></form-create>
```
NodeJs
```javascript
    import {maker} from 'form-create'
    export default {
        data () {
            return {
                fApi:{},
                model: {},
                rule:[
                    maker.input('goods_name','goods_name'),
                    maker.date('create_at','created_at')
                ],
                option:{
                    onSubmit:function (formData) {
                        alert(JSON.stringify(formData));
                    }
                }
            };
        },
        mounted:function(){
            this.model = this.fApi.model();
        }
    };
```
Browser
```javascript
    new Vue({
        el:'#app1',
        data:{
            fApi:{},
            model: {},
            rule:[
                formCreate.maker.input('goods_name','goods_name'),
                formCreate.maker.date('create_at','created_at')
            ],
            option:{
                onSubmit:function (formData) {
                    alert(JSON.stringify(formData));
                }
            }
        },
        mounted:function () {
            this.model = this.fApi.model();
        }
    });
```


## Demo

Download project
```sh
$ git clone https://github.com/xaboy/form-create.git
$ cd form-create
```
Install dependencies
```sh
$ npm run bootstrap
```
Iview 2.x|3.x Demo
```sh 
$ npm run dev:iview
```
Iview 4.x Demo
```sh 
$ npm run dev:iview4
```
ElementUI Demo
```sh 
$ npm run dev:ele
```
ant-design-vue Demo
```sh 
$ npm run dev:antd
```

## Thank

[时光弧线](https://github.com/shiguanghuxian)  |  [wxxtqk](https://github.com/wxxtqk)  |  [williamBoss](https://github.com/williamBoss)  |  [HeyMrLin](https://github.com/HeyMrLin)  |  [djkloop](https://github.com/djkloop) | [JetBrains](https://www.jetbrains.com/?from=form-create)

## Donation

![donation.jpg](https://raw.githubusercontent.com/xaboy/form-create/dev/images/donation.jpg)

## Contact

##### email : xaboy2005@qq.com

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present xaboy
