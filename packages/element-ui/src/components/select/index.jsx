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
        return <XlSelect {...ctx.data}>{ctx.props.options.map((props, index) => {

            const slot = props.slot ? toDefSlot(props.slot, h) : [];

            return <XlOption {...{props}}
                key={NAME + index + ctx.props.unique}>{slot}</XlOption>
        }).concat(ctx.chlidren)}</XlSelect>;
    }
}