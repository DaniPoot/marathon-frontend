<template>
<section>
  <div class="row">
    <h1>Preguntas</h1>
    <button type="button" class="btn btn-primary ml-auto" @click="goToForm">Nueva pregunta</button>
  </div>
  <table-component :columns="columns" :rows="rows" class="mt-sm" >
    <template #body-cell-actions="{ row }">
      <table-actions @onDelete="onDeleteQuestion(row.id)" />
    </template>
  </table-component>
</section>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import TableComponent from '../../../components/Table.vue'
import TableActions from '../../../components/TableActions.vue'

export default {
  components: {
    TableComponent,
    TableActions
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
          name: 'question',
          label: 'Pregunta',
          field: row => row.description
        },
        {
          name: 'difficulty',
          label: 'Dificultad',
          field: row => row.dificulty.name
        },
        {
          name: 'materia',
          label: 'Materia',
          field: row => row.topic.subject.name
        },
        {
          name: 'topic',
          label: 'Tema',
          field: row => row.topic.name
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
    this.getQuestions()
  },
  computed: {
    ...mapGetters('accounts', ['userId'])
  },
  methods: {
    ...mapActions('questions', ['getQuestionsByUser', 'deleteQuestion']),
    async getQuestions () {
      const questions = await this.getQuestionsByUser({ userId: this.userId })
      console.log({ questions })
      this.rows = questions
    },
    async onDeleteQuestion (id) {
      try {
        const question = await this.deleteQuestion({ id })
        const { is_deleted } = question
        if (is_deleted) {
          await this.getQuestions()
        }
      } catch (error) {
        
      }
    },
    onEditTopic (questionId) {
      this.$router.push({ name: 'question-edit', params: { questionId } })
    },
    goToForm () {
      this.$router.push({ name: 'question-form' })
    }
  }
}
</script>
<style>
  
</style>
