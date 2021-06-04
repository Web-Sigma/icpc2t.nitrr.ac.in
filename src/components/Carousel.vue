<template> 
<div class="Carousel">
<slot> </slot>

<a class="prev" @click="prev">&#10094;</a>
<a class="next" @click="next">&#10095;</a>

 </div>
</template>


<script> 
export default{

data(){
    return {

    };
},
methods: {
next(){
this.$emit('next')
},
prev(){
this.$emit('prev')
},
},
} 
</script>

<style>
.prev {
    position:reative;
    height:400px;
}
.next {
    position:relative;
     height:400px;
   padding-left:600px;
}
</style>