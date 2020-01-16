import AreaConocimientoComponent from "./area-conocimiento/area-conocimiento.vue";
import CampoComponent from "./campo/campo.vue";
import { defaultConfig } from "./catalogo.component";
import CatalogoComponent from "./CatalogoComponent.vue";
import DisciplinaComponent from "./disciplina/disciplina.vue";
import SubdisciplinaComponent from "./subdisciplina/subdisciplina.vue";

export default {
  install(Vue: any, globalOptions: any) {
    const options = { ...defaultConfig, ...globalOptions };
    Vue.prototype.$CATALOGOS_DEFAULT_OPTIONS = options;
    Vue.component("catalogo", CatalogoComponent);
    Vue.component("area-conocimiento", AreaConocimientoComponent);
    Vue.component("campo", CampoComponent);
    Vue.component("disciplina", DisciplinaComponent);
    Vue.component("subdisciplina", SubdisciplinaComponent);
  }
};

export {
  CatalogoComponent,
  AreaConocimientoComponent,
  CampoComponent,
  DisciplinaComponent,
  SubdisciplinaComponent
};
