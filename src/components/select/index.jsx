import {toDefSlot, uniqueId} from '@form-create/utils';

const NAME = 'fc-elm-select';
export default {
    name: NAME,
    functional: true,
    props: {
        options: {
            type: Array,
            default: () => ([])
        },
        unique: {
            default: () => uniqueId()
        },
    },
    render(h, ctx) {
        return <xl-select {...ctx.data}>{ctx.props.options.map((props, index) => {

            const slot = props.slot ? toDefSlot(props.slot, h) : [];

            return <xl-option {...{props}}
                key={NAME + index + ctx.props.unique}>{slot}</xl-option>
        }).concat(ctx.chlidren)}</xl-select>;
    }
}