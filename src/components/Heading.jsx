import {defineComponent, h} from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    setup(props, {slots}) {
        //JSX Syntax Sugar
        // const tag = 'h' + props.level
        // return () => <tag>{slots.default()}</tag>
        //createVnode
        return () => h(
            'h' + props.level,
            {},
            slots.default()
        )
    }
})