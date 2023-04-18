<template>
<section>
<navbar-dashboard></navbar-dashboard>
  <div class="row">
    <h1>Asignaturas</h1>
    <button type="button" class="btn btn-primary ml-auto" @click="goToForm">Nueva Asignatura</button>
  </div>
  <table-component :columns="columns" :rows="rows" class="mt-sm" >
    <template #body-cell-actions="{ row }">
      <table-actions @onDelete="onDeleteSubject(row.id)" @onEdit="onEditSubject(row.id)" />
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
          name: 'materia',
          label: 'Materia',
          field: row => row.name
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
    this.getSubjects()
  },
  methods: {
    ...mapActions('subjects', ['getSubjectsByUser', 'deleteSubject']),
    async getSubjects () {
      const subjects = await this.getSubjectsByUser({})
      console.log({ subjects })
      this.rows = subjects
    },
    async onDeleteSubject (id) {
      try {
        const subject = await this.deleteSubject({ id })
        const { is_deleted } = subject 
        if (is_deleted) {
          await this.getSubjects()
        }
      } catch (error) {
        
      }
    },
    onEditSubject (subjectId) {
      this.$router.push({ name: 'subject-edit', params: { subjectId } })
    },
    goToForm () {
      this.$router.push({ name: 'subject-form' })
    }
  },
}
</script>
<style>
</style>
