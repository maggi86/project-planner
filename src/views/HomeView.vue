<template>
  <div class="home">
    <filterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <SinglePage :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
/* challenge */ 
// when the filter changes (current), only show those projects
// eg. if we click 'completed' only show completed projects
// use a computed property called filteredProjects to do this

import SinglePage from "@/components/SinglePage.vue"
import filterNav from "@/components/filter.vue"

export default{

  name: 'HomeView',
  components: {
    SinglePage,
    filterNav
  },
  data() {
    return {
      projects: [],
      current:'all'
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))

  },
  methods: {
    handleDelete(id){
      this.projects = this.projects.filter((project) => {
        return project.id !== id
      })
    },
    handleComplete(id) {
      let p = this.projects.find(project => {
        return project.id === id
      })
      p.complete = !p.complete
    }
  },
  computed: {
    filteredProjects() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      } if (this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  }
}
</script>
