<template>

<div class="container ">
    
        
    <div class="row" >       
        <div class="col ">
            <div class="card " style="width: 18rem; ">
                <router-link :to="{ name: 'ProductosView', params: { id: producto.id }}" style="a:visited,  a:hover, a:active
{
    color: #000000;
    text-decoration: none;
}
a:link {
    text-decoration: none;
    color: black;
}" >
                    <div class="card-body clic" >
                        <h5 class="card-title">{{producto.nombre}} </h5>
                        <img :src="producto.imagen" style="width:100%;">
                        <p class="card-text">{{producto.descripcion}}</p>
                        <div class="producto-relacionado-precio">Precio:{{producto.precio}} BOB</div>
                        <div>                    
                            <div>
                                <button class="color-box clic" v-for="color of producto.colores" :style="`background:${color}`"></button>                
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>  
</div>
</template>

<script>
    export default {
        name: 'tarjeta',
        data(){
           
        },
        methods: {   
                    
        },
        props: {
            producto: Object
        },
        computed: {
        },
        mounted() {
           
        },
        components: {

        }
    }
</script>
<style></style>