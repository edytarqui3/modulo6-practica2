<template>
    
<div class="container" v-if="producto" >

    <div class="row">
        <h3>{{producto.nombre}}</h3>
    </div>
    <div class="row" >
        <div class="col-12 col-sm-6 col-md-4 " >
            <img :src="producto.imagen" alt="" style="width:100%;">
        </div>
        <div class="col-12 col-sm-6  col-md-8">
                <h6>{{ producto.descripcion }}</h6>
            <div class="p-3 mb-2 text-white" :style="`${configuracionPagina.precioEstilos}`">
                Precio: {{producto.precio}} BOB
            </div>
            <h5>Color</h5>
            <div>
                <button class="color-box clic" v-for="color of producto.colores" :style="`background:${color}`"
                @click="select_color(color)" >
                </button>
            </div>
            <h5>Cantidad</h5>
            <div class="quantity">
                <button v-on:click="pedido.cantidad -= 1; 
                if(pedido.cantidad<=0) pedido.cantidad=1">-</button> 
                <div>{{pedido.cantidad}}</div>
                <button v-on:click="pedido.cantidad += 1">+</button>
            </div>
       
            <div class="buy-box" v-show="pedido.cantidad>0 && pedido.color!=null" >
                <button type="button" class="btn btn-primary" v-on:click="comprar(producto)">Comprar</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'productos',
        props: {
            producto: Object
        },
        data(){
            return {

                configuracionPagina: {
                    marca: "MegaDron",
                    menuColor: "lightblue",
                    footerColor: "slategrey",
                    precioEstilos: "background: orangered; color: white; font-weight: bold",
                    menus: [
                        {
                            etiqueta: "Inicio",
                            url: "?"
                        },
                        {
                            etiqueta: "Tienda",
                            url: "?"
                        }
                    ]
                },
              
                pedido: {
                    id:null,
                    cantidad: 1,
                    color:null
                },
                
            }
        },
        methods: {             
            
                comprar: function (producto) {
                    this.pedido.id=producto.id
                    var json =JSON.stringify(this.pedido);
                    alert(json)
                },
                select_color: function (producto) {
                    this.pedido.color=producto
                },
                increment_quantity: function (producto) {
                    this.pedido.cantidad++
                },
                decrement_quantity: function (producto) {
                    if (this.pedido.cantidad==1) {
                    } else { this.pedido.cantidad-- }
                },
          

        },
        computed: {
         
        },
        mounted() {
        },
        components: {
        }
    }
</script>
<style>
    
</style>