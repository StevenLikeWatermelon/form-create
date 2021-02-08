import {BaseParser} from '@xl-form-create/core';

export default class parser extends BaseParser {
    render(children) {
        let rule = this.rule, slot = rule.props.slot || {};

        return this.vNode.switch(this.$render.inputVData(this).scopedSlots({
            open: () => slot.open,
            close: () => slot.close
        }).get(), children);
    }
}
