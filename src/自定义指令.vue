<template>
  <div>
    <input type="text" v-focus v-model="qwe" v-number="qwe">
    <p v-color="Color" @click="Color='pink'">改变颜色</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            Color:'red',
            qwe:''
        }
    },
    directives:{
        focus:{
            inserted(el){
                el.focus();
            }
        },
        color:{
            inserted(el,color){
                el.style.color = color.value
            },
            update(el,color){
                el.style.color = color.value
            }
        },
        number:{
            inserted(el,bind,vnode){
                console.log(vnode);
                // console.log(bind);
                el.value = el.value.replace(/\D/g,'')
                vnode.context[bind.expression]=el.value
            },
            update(el,bind,vnode){
                el.value = el.value.replace(/\D/g,'')
                vnode.context[bind.expression]=el.value
            }
        }
    }
}
</script>

<style>
</style> 