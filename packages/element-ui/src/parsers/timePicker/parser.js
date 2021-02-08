import {BaseParser} from '@xl-form-create/core';

export default class Parser extends BaseParser {

    init() {
        const props = this.rule.props;
        if (!props.valueFormat) props.valueFormat = 'HH:mm:ss';
    }
}

