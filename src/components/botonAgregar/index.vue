<template>
  <div>
      <button type="button">{{textoBoton}}</button>
  </div>
</template>

<script>
export default {
    name: 'BotonAgregar',
    props:{
        textoBoton: String
    },
}
</script>

<style>
    button{
        color: white;
        padding: 10px;
        background-color: #000b5e;
        border: 2px solid #000b5e;
        border-radius: 10px;
        cursor: pointer;                
    }
    
    button:hover{
        background-color: #021496;
    }
</style>