<template>
<FormulateForm
  @submit="onSubmit"
>
  <navbar-dashboard></navbar-dashboard>
  <h1> {{ isUpdating ? `Asignatura: ${subjectId}` : 'Nueva Asignatura' }} </h1>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Materia"
          label="Asignatura"
          validation="required|min:5"
          placeholder="Nombre de la asignatura"
          class="mb-0"
          :validation-messages="{
            required: 'La asignatura es requerida',
            min: 'La asignatura debe contener al menos 10 caracteres'
          }"
          v-model="form.name"
        />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <FormulateInput
        type="submit"
        :label="isUpdating ? 'Editar asignatura' : 'Registrar asignatura'"
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
    subjectId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      form: {
        name: undefined
      },
    }
  },
  created () {
    this.loadSubject()
  },
  computed: {
    ...mapGetters('accounts', ['userId']),
    isUpdating () {
      return !!this.subjectId
    }
  },
  methods: {
    ...mapActions('subjects', ['createSubject','updateSubject', 'getSubjectById']),
    async onSubmit () {
      if (this.isUpdating) await this.onSubmitUpdate()
      else await this.onSubmitCreate()
    },
    async onSubmitCreate () {
      try {
        const subject = await this.createSubject({ subject: { ...this.form, created_by: this.userId } })
        console.log({ subject })
        if (subject) {
          this.$router.push({ name: 'subjects-list' })
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async onSubmitUpdate () {
      try {
        const subject = await this.updateSubject({ subject: { ...this.form }, id: this.subjectId })
        if (subject) {
          this.$router.push({ name: 'subjects-list' })
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async loadSubject () {
      if (!this.subjectId) return
      const subject = await this.getSubjectById({ id: this.subjectId })
      console.log({ subject })
      if (!subject) {
        // Mostrar mensaje 
        this.$router.push({ name: 'subjects-list' })
        return
      }
      const { name } = subject
      this.form = {
        name
      }
    }
  },
}
</script>
  
<style>
  
</style>
