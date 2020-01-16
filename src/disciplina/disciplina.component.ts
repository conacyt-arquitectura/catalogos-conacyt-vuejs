import { NestedSelectComponent } from "@conacyt/nested-select";
import Component from "vue-class-component";
import { Prop, Vue } from "vue-property-decorator";
import { Options, defaultConfig } from '@/catalogo.component';

@Component({
    components: {
        'nested-select': NestedSelectComponent
    },
    computed: {
        model: {
            get() { return (<any>this).value; },
            set(v) { (<any>this).$emit('input', v); }
        }
    }
})
export default class DisciplinaComponent extends Vue {

    @Prop({ required: true, type: Object })
    readonly value!: any;

    @Prop({ required: false, default: true, type: Boolean })
    public readonly required!: boolean;

    public get options(): Options {
        return (<any>this).$CATALOGOS_DEFAULT_OPTIONS || defaultConfig;
    }

    public readonly hierarchyModel = [
        {
            path: "/areas-conocimiento",
            prop: "id",
            label: "descripcionEsp",
            selectLabel: "Area de conocimiento: "
        },
        {
            path: "/areas-conocimiento/[id]/campos",
            prop: "id",
            label: "descripcionEsp",
            selectLabel: "Campo: "
        },
        {
            path: "/campos/[id]/disciplinas",
            prop: "id",
            label: "descripcionEsp",
            selectLabel: "Disciplinas: "
        }
    ];
}