<template>
    <form @submit.prevent="handleSubmit">
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required></textarea>
        <button >Update Project</button>
    </form>
</template>

<script>
/* to update */
// - add a submit handler to update the project
// - make a fetch (PATCH) request to the uri to update project
// - redirect to homepage when done

export default{
    props: ['id'],
    data() {
        return {
            title: '',
            details: '',
            uri: 'http://localhost:3000/projects/' + this.id
        }
    },
    mounted() {
        fetch(this.uri)
        .then(res => res.json())
        .then(data => {
            this.title = data.title
            this.details = data.details
        })
    },
    methods: {
        handleSubmit() {
            fetch(this.uri, {
                method: 'PATCH',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({ title: this.title, details: this.details})
            }).then(() => {
                this.$router.push('/')
            }).catch((err) => console.log(err))
    } 
    }
}
</script>

<style scoped>
form{
    background:white;
    padding:20px;
    border-radius:10px;
}
label {
margin:20px 0 10px 0;
color:#bbb;
text-transform: uppercase;
font-size:14px;
font-weight:bold;
letter-spacing:1px;
display:block;
}
input {
padding:10px;
border:0;
border-bottom: 1px solid #ddd;
width:100%;
box-sizing:border-box;
}
textarea {
padding:10px;
border: 1px solid #ddd;
width:100%;
box-sizing:border-box;
height:100px;
}
form button {
padding:10px;
border:0;
border-radius: 6px;
display: block;
margin:20px auto 0;
background: #00ce89;
color:white;
font-size:16px;
}
</style>