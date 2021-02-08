import {BaseParser} from '@xl-form-create/core';
import {isUndef} from '@xl-form-create/utils';


export default class Parser extends BaseParser {

    render(children) {
        return this.vNode.select(this.$render.inputVData(this).props('options', this.rule.options), children);
    }

    toFormValue(val) {
        return isUndef(val) ? undefined : val;
    }
}

