<template>
    <div>
        user
    </div>
</template>

<script>
export default {
    name:'User',
    data() {
        return {
            name: 'user'
        }
    },
    beforeRouteEnter (to, from, next) {
        // ...
        // eslint-disable-next-line
        console.log(next,'-----------beforeRouteEnter------------',this,'***')
        // next(vm => {
        // // eslint-disable-next-line
        //     console.log(vm)
        // })
        // eslint-disable-next-line
        console.log('next later')
        // next()
    },
    mounted() {
        
    }
}
</script>