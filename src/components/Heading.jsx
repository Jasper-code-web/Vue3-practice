import {defineComponent, h} from 'vue'

export default defineComponent({
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    //createVnode
    // setup(props, {slots}) {
    //     return () => h(
    //         'h' + props.level,
    //         {},
    //         slots.default()
    //     )
    // }

    //JSX Syntax Sugar
    setup(props, {slots}) {
        const tag = 'h' + props.level
        return () => <tag>{slots.default()}</tag>
    }
})