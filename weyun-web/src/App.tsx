import {defineComponent} from "vue";
import {RouterView} from "vue-router";

export default defineComponent({
    components: {
        RouterView
    },
    setup() {
        return () => (
            <RouterView></RouterView>
        )
    },
    name: "app"
})
