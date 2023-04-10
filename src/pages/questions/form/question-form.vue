<template>
<FormulateForm
  @submit="onSubmit"
>
  <h1> Nueva pregunta </h1>
  <div class="row">
    <div class="col-md-6">
      <FormulateInput
        v-model="form.difficulty"
        :options="difficulties"
        type="select"
        placeholder="Selecciona una dificultad"
        label="Difficultad"
        validation="required"
        :validation-messages="{
          required: 'La difficultad es requerida',
        }"
      />
    </div>
    <div class="col-md-6">
      <FormulateInput
        v-model="form.subject"
        :options="subjects"
        type="select"
        placeholder="Selecciona una materia"
        label="Materia"
        validation="required"
        :validation-messages="{
          required: 'La materia es requerida',
        }"
      />
    </div>
  </div>
  <div class="row pt-3">
    <div class="col">
      <div class="form-group">
        <FormulateInput
          v-model="form.topic"
          :options="topics"
          type="select"
          placeholder="Selecciona una tema"
          label="Tema"
          validation="required"
          :validation-messages="{
            required: 'El tema es requerido',
          }"
        />
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
        <FormulateInput
          type="text"
          name="Descripción"
          label="Descripción"
          validation="required|min:10"
          placeholder="Descripcion de la pregunta"
          class="mb-0"
          :validation-messages="{
            required: 'La descripción es requerida',
            min: 'La descripción debe contener al menos 10 caracteres'
          }"
          v-model="form.description"
        />
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <p class="h5">Respuestas</p>
    </div>
    <div class="col-1 q-ml-auto">
      <button type="button" rel="tooltip" class="btn btn-success btn-icon btn-sm btn-simple" data-original-title="" title="" @click="onAddAnswer">
        <i class="ni ni-fat-add pt-1"></i>
      </button>
    </div>
  </div>
  <div class="row items-center" v-for="answer of form.answers" :key="answer.key">
    <div class="col col-md-9">
      <div class="form-group">
        <FormulateInput
          type="text"
          name="Descripción"
          label="Descripción"
          validation="required|min:1"
          placeholder="Descripcion de la respuesta"
          class="mb-0"
          :validation-messages="{
            required: 'La descripción es requerida',
            min: 'La descripción debe contener al menos 10 caracteres'
          }"
          v-model="answer.description"
        />
      </div>
    </div>
    <div class="col col-md-3">
      <div class="form-group">
        <div class="custom-control custom-checkbox mb-3 mt-4 pt-3">
          <input class="custom-control-input" :id="answer.key" type="checkbox" v-model="answer.isCorrect">
          <label class="custom-control-label" :for="answer.key">Es correcta?</label>
        </div>
      </div>
    </div>
  </div>
  <div class="row mt-3">
    <div class="col">
      <FormulateInput
        type="submit"
        label="Register"
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
  mixins: [validations],
  data () {
    return {
      form: {
        difficulty: undefined,
        subject: undefined,
        topic: undefined,
        description: undefined,
        answers: [
          {
            key: Date.now(),
            description: undefined,
            isCorrect: false,
          }
        ]
      },
      difficulties: [],
      topics: [],
      subjects: [],
    }
  },
  created () {
    this.getInformation() 
  },
  computed: {
    ...mapGetters('accounts', ['userId'])
  },
  watch: {
    async 'form.subject' () {
      const topics = await this.getTopicsBySubject({ subject: this.form.subject })
      this.topics = topics.map(v => ({ value: v.id, label: v.name }))
    }
  },
  methods: {
    ...mapActions('questions', ['createQuestion', 'assignAnswersToQuestions']),
    ...mapActions('answers', ['createAnswer']),
    ...mapActions('difficulties', ['getAllDifficulties']),
    ...mapActions('subjects', ['getSubjectsByUser']),
    ...mapActions('topics', ['getTopicsBySubject']),
    async getInformation () {
      const [difficulties, subjects] = await Promise.all([this.getAllDifficulties(), this.getSubjectsByUser({})])
      this.difficulties = difficulties.map(v => ({ value: v.id, label: v.name }))
      this.subjects = subjects.map(v => ({ value: v.id, label: v.name }))
    },
    onAddAnswer () {
      const emptyAnswer = this.form.answers.some(answer => !answer.description)
      if (emptyAnswer) return
      this.form.answers.push({
        key: Date.now(),
        description: undefined,
        isCorrect: false
      })
    },
    onRemoveAnswer (id) {
      this.form.answers = this.form.answers.filter(answer => answer.id !== id)
    },
    createQuestionByForm () {
      const { description, topic, difficulty  } = this.form
      const question = {
        description,
        'id_topic': topic,
        'id_difficulty': difficulty,
        'created_by': this.userId
      }
      return this.createQuestion({ question })
    },
    createAnswersByForm () {
      console.log(this.form.answers)
      const answers = this.form.answers.map(ans => {
        const answer = { 
          description: ans.description,
          created_by: this.userId
        }
        return this.createAnswer({ answer })
      })
      return Promise.all(answers)
    },
    formatAnswersToQuestion (answers) {
      return answers.map((answer, index) => ({
        id: answer.id,
        is_correct: this.form.answers[index].isCorrect,
        created_by: this.userId
      }))
    },
    async onSubmit () {
      try {
        const [question, answers] = await Promise.all([this.createQuestionByForm(), this.createAnswersByForm()])
        console.log({ question, answers })
        if (question && answers) {
          const answersToAssign = this.formatAnswersToQuestion(answers)
          const questionWithAnswers = await this.assignAnswersToQuestions({ id: question.id, answers: answersToAssign })
          if (questionWithAnswers) {
            this.$router.push({ name: 'question-list' })
          }
        }
      } catch (e) {
        console.log({ e })
      }
    }
  },
}
</script>

<style>
  
</style>
