<template></template>
<script setup lang="ts">
let arr = 'helloWorld'

const d = (arr) => {
    for(let i=0;i<4;i++){
        if(i<3){
            console.log('ng');
            return;
          
        }else{
            console.log('ok')
        }
    }
  
}

console.log(d('aabcdd'), 'test')


</script>