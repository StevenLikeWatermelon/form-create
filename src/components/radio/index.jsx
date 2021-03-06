import {uniqueId} from '@form-create/utils';

const NAME = 'fc-elm-radio';

export default {
    name: NAME,
    functional: true,
    props: {
        options: {
            type: Array,
            default: () => ([])
        },
        type: String,
        unique: {
            default: () => uniqueId()
        },
    },
    render(h, ctx) {
        return <XlRadioGroup {...ctx.data}>{ctx.props.options.map((opt, index) => {
            const props = {...opt};
            const Type = ctx.props.type === 'button' ? 'XlRadioButton' : 'XlRadio';
            delete props.value;
            return <Type {...{props}} key={NAME + Type + index + ctx.unique}/>;
        }).concat(ctx.chlidren)}</XlRadioGroup>
    }
}
