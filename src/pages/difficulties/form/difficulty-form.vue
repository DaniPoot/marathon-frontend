<template>
<FormulateForm
  @submit="onSubmit"
>
  <h1> {{ isUpdating ? `Difficultad: ${difficultyId}` : 'Nueva Difficultad' }} </h1>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Difficultad"
          label="Difficultad"
          validation="required|min:5"
          placeholder="Nombre de la difficultad"
          class="mb-0"
          :validation-messages="{
            required: 'La difficultad es requerida',
            min: 'La difficultad debe contener al menos 10 caracteres'
          }"
          v-model="form.name"
        />
    </div>
  </div>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Orden"
          label="Orden"
          validation="required|number|matches:/^[0-9]+$/"
          inputmode="numeric"
          placeholder="Orden de la difficultad"
          class="mb-0"
          :validation-messages="{
            required: 'El orden es requerido',
            min: 'El orden debe ser un numero positivo',
            matches: 'El orden solo puede ser entero'
          }"
          v-model="form.order"
        />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <FormulateInput
        type="submit"
        :label="isUpdating ? 'Editar dificultad' : 'Registrar dificultad'"
      />
    </div>
  </div>
</FormulateForm>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { validations }  from '@/utilities/validations'

export default {
  name: 'question-form',
  props: {
    difficultyId: {
      type: [String, Number]
    }
  },
  mixins: [validations],
  data () {
    return {
      form: {
        name: undefined,
        order: undefined
      },
    }
  },
  created () {
    this.loadDifficulty()
  },
  computed: {
    ...mapGetters('accounts', ['userId']),
    isUpdating () {
      return !!this.difficultyId
    }
  },
  methods: {
    ...mapActions('difficulties', ['createDifficulty','updateDifficulty', 'getDifficultyById']),
    async onSubmit () {
      if (this.isUpdating) await this.onSubmitUpdate()
      else await this.onSubmitCreate()
    },
    async onSubmitCreate () {
      try {
        const difficulty = await this.createDifficulty({ difficulty: { ...this.form, created_by: this.userId } })
        console.log({ difficulty })
        this.$router.push({ name: 'difficulties-list' })
      } catch (e) {
        console.log({ e })
      }
    },
    async onSubmitUpdate () {
      try {
        const difficulty = await this.updateDifficulty({ difficulty: { ...this.form }, id: this.difficultyId })
        console.log({ difficulty })
        this.$router.push({ name: 'difficulties-list' })
      } catch (e) {
        console.log({ e })
      }
    },
    async loadDifficulty () {
      if (!this.difficultyId) return
      const difficulty = await this.getDifficultyById({ id: this.difficultyId })
      if (!difficulty) {
        // Mostrar mensaje 
        this.$router.push({ name: 'difficulties-list' })
      }
      const { name, order } = difficulty
      this.form = {
        name,
        order
      }
    }
  },
}
</script>

<style>
  
</style>
