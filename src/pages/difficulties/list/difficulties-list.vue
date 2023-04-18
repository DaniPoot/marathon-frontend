<template>
<section>
  <navbar-dashboard></navbar-dashboard>
  <div class="row">
    <h1>Dificultades</h1>
    <button type="button" class="btn btn-primary ml-auto" @click="goToForm">Nueva Dificultad</button>
  </div>
  <table-component :columns="columns" :rows="rows" class="mt-sm" >
    <template #body-cell-actions="{ row }">
      <table-actions @onDelete="onDeleteDifficulty(row.id)" @onEdit="onEditDifficulty(row.id)" />
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
          name: 'difficulty',
          label: 'Dificultad',
          field: row => row.name
        },
        {
          name: 'order',
          label: 'Order',
          field: row => row.order
        },
        {
          name: 'actions',
          label: 'Acciones',
        }
      ],
      rows: [] 
    }
  },
  created() {
    this.getDifficulties()
  },
  methods: {
    ...mapActions('difficulties', ['getAllDifficulties', 'deleteDifficulty']),
    async getDifficulties () {
      const difficulties = await this.getAllDifficulties()
      console.log({ difficulties })
      this.rows = difficulties
    },
    async onDeleteDifficulty (id) {
      try {
        const difficulty = await this.deleteDifficulty({ id })
        const { is_deleted } = difficulty
        if (is_deleted) {
          await this.getDifficulties()
        }
      } catch (error) {
        
      }
    },
    onEditDifficulty (difficultyId) {
      this.$router.push({ name: 'difficulty-edit', params: { difficultyId } })
    },
    goToForm () {
      this.$router.push({ name: 'difficulty-form' })
    }
  }
}
</script>

<style>
  
</style>
