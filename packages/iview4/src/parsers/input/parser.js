import {BaseParser} from '@xl-form-create/core';
import {$set} from '@xl-form-create/utils';


export default class Parser extends BaseParser {
    init() {
        let {props} = this.rule;
        if (props.autosize && props.autosize.minRows)
            $set(props, 'rows', props.autosize.minRows || 2);
    }
}
