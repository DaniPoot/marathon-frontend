<template>
<section>
<navbar-dashboard></navbar-dashboard>
  <div class="row">
    <h1>Temas</h1>
    <button type="button" class="btn btn-primary ml-auto" @click="goToForm">Nuevo Tema</button>
  </div>
  <table-component :columns="columns" :rows="rows" class="mt-sm" >
    <template #body-cell-actions="{ row }">
      <table-actions @onDelete="onDeleteTopic(row.id)" @onEdit="onEditTopic(row.id)" />
    </template>
  </table-component>
</section>
</template>
<script>
import { mapActions } from 'vuex'
import TableComponent from '../../../components/Table.vue'
import TableActions from '../../../components/TableActions.vue'
import NavbarDashboard from '../../../components/NavbarDashboard'
  
export default {
  components: {
    TableComponent,
    TableActions,
    NavbarDashboard
  },
  data () {
    return {
      columns: [
        {
          name: 'id',
          label: 'Id',
          field: row => row.id
        },
        {
          name: 'tema',
          label: 'Tema',
          field: row => row.name
        },
        {
          name: 'materia',
          label: 'Materia',
          field: row => row.subject.name
        },
        {
          name: 'actions',
          label: 'Acciones',
        }
      ],
      rows: [] 
    }
  },
  created () {
    this.getTopics()
  },
  methods: {
    ...mapActions('topics', ['getTopicsByUser', 'deleteTopic']),
    async getTopics () {
      const topics = await this.getTopicsByUser({})
      console.log({ topics })
      this.rows = topics
    },
    async onDeleteTopic (id) {
      try {
        const topic = await this.deleteTopic({ id })
        const { is_deleted } = topic
        if (is_deleted) {
          await this.getTopics()
        }
      } catch (error) {
        
      }
    },
    onEditTopic (topicId) {
      this.$router.push({ name: 'topic-edit', params: { topicId } })
    },
    goToForm () {
      this.$router.push({ name: 'topic-form' })
    }
  },
}
</script>
<style>
</style>
