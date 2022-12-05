<template>
    <!-- .prevent prevents ur data from being erased after u refresh page -->
    <form @submit.prevent="handleSubmit" >
        <label>Title:</label>
        <input type="text" v-model="title" required>
        <label>Details:</label>
        <textarea v-model="details" required></textarea>
        <button>Add Project</button>
    </form>
</template>

<script>
export default{
    data() {
        return{
            title: '',
            details: ''
        }
    },
    methods: {
        handleSubmit() {
            let project = {
                title: this.title,
                details: this.details,
                complete: false
            }
            fetch('http://localhost:3000/projects', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(project)
            }).then(() => {
                this.$router.push('/')
            }).catch((err) => console.log(err, message))
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