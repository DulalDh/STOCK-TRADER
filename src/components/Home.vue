<template>
    <div>
        <center><h1 style="color:green">Trade or View your Portfolio</h1></center>
        <h6 style="color:green">You may Save & Load your Data</h6>
        <h6 style="color:green">Click on 'End Day' to begin a New Day!</h6>
        <hr>
        <p style="color:green">Your Funds: {{ funds }}</p>
    </div>
</template>

<script>
    export default {
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    }
</script>