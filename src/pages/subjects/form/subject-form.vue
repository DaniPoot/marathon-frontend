<template>
<FormulateForm
  @submit="onSubmit"
>
  <h1> {{ isUpdating ? `Materia: ${subjectId}` : 'Nueva Materia' }} </h1>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Materia"
          label="Materia"
          validation="required|min:5"
          placeholder="Nombre de la materia"
          class="mb-0"
          :validation-messages="{
            required: 'La materia es requerida',
            min: 'La materia debe contener al menos 10 caracteres'
          }"
          v-model="form.name"
        />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <FormulateInput
        type="submit"
        :label="isUpdating ? 'Editar materia' : 'Registrar materia'"
      />
    </div>
  </div>
</FormulateForm>
</template>
  
<script>
import { mapActions, mapGetters } from 'vuex'
  
export default {
  name: 'question-form',
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
