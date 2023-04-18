<template>
<FormulateForm
  @submit="onSubmit"
>
<navbar-dashboard></navbar-dashboard>
  <h1> {{ isUpdating ? `Tema: ${topicId}` : 'Nuevo Tema' }} </h1>
  <div class="row pt-3">
    <div class="col">
      <div class="form-group">
        <FormulateInput
          v-model="form.id_subject"
          :options="subjects"
          type="select"
          placeholder="Selecciona una asignatura"
          label="Asignatura"
          validation="required"
          :validation-messages="{
            required: 'La asignatura es requerida',
          }"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Tema"
          label="Tema"
          validation="required|min:5"
          placeholder="Nombre del tema"
          class="mb-0"
          :validation-messages="{
            required: 'El tema es requerido',
            min: 'El tema debe contener al menos 10 caracteres'
          }"
          v-model="form.name"
        />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <FormulateInput
        type="submit"
        :label="isUpdating ? 'Editar tema' : 'Registrar tema'"
      />
    </div>
  </div>
</FormulateForm>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
import NavbarDashboard from '../../../components/NavbarDashboard'

export default {
  name: 'question-form',
  components: {
    NavbarDashboard
  },
  props: {
    topicId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      form: {
        name: undefined,
        id_subject: undefined
      },
      subjects: []
    }
  },
  created () {
    this.loadSubjects()
    this.loadTopic()
  },
  computed: {
    ...mapGetters('accounts', ['userId']),
    isUpdating () {
      return !!this.topicId
    }
  },
  methods: {
    ...mapActions('subjects', ['getSubjectsByUser']),
    ...mapActions('topics', ['createTopic','updateTopic', 'getTopicById']),
    async loadSubjects () {
      const subjects = await this.getSubjectsByUser({})
      this.subjects = subjects.map(v => ({ value: v.id, label: v.name }))
      console.log({ subjects: this.subjects })
    },
    async onSubmit () {
      if (this.isUpdating) await this.onSubmitUpdate()
      else await this.onSubmitCreate()
    },
    async onSubmitCreate () {
      try {
        const topic = await this.createTopic({ topic: { ...this.form, created_by: this.userId } })
        console.log({ topic })
        if (topic) {
          this.$router.push({ name: 'topics-list' })
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async onSubmitUpdate () {
      try {
        const topic = await this.updateTopic({ topic: { ...this.form }, id: this.topicId })
        if (topic) {
          this.$router.push({ name: 'topics-list' })
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async loadTopic () {
      if (!this.topicId) return
      console.log({ id: this.topicId })
      const topic = await this.getTopicById({ id: this.topicId })
      console.log({ topic })
      if (!topic) {
        // Mostrar mensaje 
        this.$router.push({ name: 'topics-list' })
        return
      }
      const { name, id_subject } = topic 
      this.form = {
        name,
        id_subject
      }
    }
  },
}
</script>
    
<style>
    
</style>
