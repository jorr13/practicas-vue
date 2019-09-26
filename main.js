const app = new Vue({
    el : '#app',
    data: {
        titulo :'hola mundo con vue',
        frutas : [
            {nombre :'manzana', cantidad:10},
            {nombre :'pera', cantidad:11},
            {nombre :'cambur', cantidad:0},
        ],
        nuevaFruta:'',
        total :0
    },
    methods:{
        agregarFruta(){
           this.frutas.push({
                nombre: this.nuevaFruta, cantidad :0
           });
           this.nuevaFruta = '';
        }
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total = this.total + fruta.cantidad;
            }
            return this.total;
        }
    },
})