export const validations = {
  data () {
    return {
      rules: {
        minDescriptionLength: val => (val && val.length) >= 10 || 'La descripción debe contener al menos 10 caracteres',
        required: val => (val !== undefined && val !== null && val !== '') || 'El campo es requerido'
      }
    }
  },
  methods: {
    async validate (form) {
      if (!form) return true
      for await (const key of Object.keys(form)) {
        if (this.$refs[key]) {
          await this.$refs[key].validate()
        }
      }
      return Object.keys(form).reduce((valid, key) => valid && (!this.$refs[key] || !this.$refs[key].hasError), true)
    },
    resetValidation (form) {
      if (!form) return
      Object.keys(form).forEach((key) => this.$refs[key] && this.$refs[key].resetValidation())
    }
  }
}
