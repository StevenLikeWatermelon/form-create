import {BaseParser} from '@xl-form-create/core';


export default class Parser extends BaseParser {

    render(children) {
        let type = this.rule.props.type;
        if (['textarea', 'search'].indexOf(type) === -1) type = 'input';

        const Type = (type === 'textarea' ? 'ATextarea' : (type === 'search' ? 'AInputSearch' : 'AInput'));
        return this.vNode.make(Type, this.$render.inputVData(this), [children])
    }
}
