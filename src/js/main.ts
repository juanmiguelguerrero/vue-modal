
// Carga como dice Microsoft
// Instalo esto: npm install --save-dev vue vue-loader vue-template-compiler
// Sigo estos pasos: https://github.com/Microsoft/TypeScript-Vue-Starter#typescript-vue-starter




import Vue from 'vue';
import BaseModal from "@/components/modal.vue";

// Ejemplo 1
// Cargamos el componente dentro de nuestra instancia Vue
// 
new Vue({
    el: "#app",
    components: { BaseModal }
// En este caso utiliza sintaxis camelCase
});

// Ejemplo 2
// Damos un nombre al componente dentro de la instancia
// 
// new Vue({ 
//     el: "#app",
//     components: { "base-modal": BaseModal }
// // En este caso podríamos usar cualquier nombre para el tag
// });

// Ejemplo 3
// Cargamos el componente de manera global.
// En este caso no es necesario declararlo como dependencia
// dentro de la instancia Vue
// 
// Vue.component('base-modal', BaseModal);
// new Vue({
//     el: "#app",
// });