import {defineComponent} from "vue";
import {RouterView} from "vue-router";

export default defineComponent({
    name: "Test",
    components: {
        RouterView
    },
    setup() {
        return {}
    },
    render() {
        return (
            <div>
                <h1>Test</h1>
                <RouterView></RouterView>
            </div>
        )
    }
});
