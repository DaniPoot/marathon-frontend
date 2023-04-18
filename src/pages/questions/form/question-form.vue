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
  props: {
    questionId: {
      type: [String, Number]
    }
  },
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
      formToValidate: {}
    }
  },
  async created () {
    await this.getInformation() 
    this.loadQuestion()
  },
  computed: {
    ...mapGetters('accounts', ['userId']),
    isUpdating () {
      return !!this.questionId
    }
  },
  watch: {
    async 'form.subject' () {
      const topics = await this.getTopicsBySubject({ subject: this.form.subject })
      this.topics = topics.map(v => ({ value: v.id, label: v.name }))
      if (this.isUpdating && (typeof this.form.topic === 'object')) {
        this.form.topic = this.topics.find(topic => topic.label === this.form.topic.name).value
        this.formToValidate = JSON.parse(JSON.stringify(this.form))
      }
    }
  },
  methods: {
    ...mapActions('questions', ['createQuestion', 'assignAnswersToQuestions', 'getQuestionById', 'updateQuestion']),
    ...mapActions('answers', ['createAnswer', 'getAnswersByQuestion', 'updateAnswer', 'updateAnswerRelation']),
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
        isCorrect: false,
        isNew: true
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
        if (this.isUpdating) {
          await this.updateAllInQuestion()
        } else {
          await this.createNewQuestions()
        }
      } catch (e) {
        console.log({ e })
      }
    },
    async createNewQuestions () {
      const [question, answers] = await Promise.all([this.createQuestionByForm(), this.createAnswersByForm()])
      console.log({ question, answers })
      if (question && answers) {
        const answersToAssign = this.formatAnswersToQuestion(answers)
        const questionWithAnswers = await this.assignAnswersToQuestions({ id: question.id, answers: answersToAssign })
        if (questionWithAnswers) {
          this.$router.push({ name: 'question-list' })
        }
      }
    },
    async loadQuestion () {
      if (!this.questionId) return
      const question = await this.getQuestionById({ id: this.questionId })
      console.log({ question })
      if (!question) {
        // Mostrar mensaje 
        this.$router.push({ name: 'question-list' })
        return
      }
      const { description, dificulty, topic, id: questionId } = question

      const answersResponse = await this.getAnswersByQuestion({ questionId })

      const answers = answersResponse.map(answer => ({
        key: answer.id,
        description: answer.description,
        isCorrect: answer.questions[0].questions_answers.is_correct,
        questionsAnswersId: answer.questions[0].questions_answers.id
      }))

      this.form = {
        difficulty: this.difficulties.find(v => v.label === dificulty.name).value,
        subject: this.subjects.find(v => v.label === topic.subject.name).value,
        topic,
        description,
        answers
      }

      this.formToValidate = JSON.parse(JSON.stringify(this.form))
    },
    verifyToUpdate () {
      let updateQuestion = false
      let updateAnswers = false
      let updateRelations = false

      const questionData = {}
      const answersToChange = []
      const relationsToChange = []
      let newAnswers = []

      const formKeys = Object.keys(this.form)
      formKeys.forEach((key) => {
        const isArray = Array.isArray(this.formToValidate[key])
        if (!isArray) {
          const isDifferent = this.formToValidate[key] !== this.form[key]
          updateQuestion = isDifferent
          questionData[key] = this.form[key]
        } else {

          newAnswers = this.form.answers.filter(answer => answer.isNew)

          this.form.answers.filter(answer => !answer.isNew).forEach(answer => {
            const answerToValidate = this.formToValidate.answers.find(ans => ans.key === answer.key)
            
            const isDifferentDescription = answer.description !== answerToValidate.description
            const changeAnswer = answer.isCorrect !== answerToValidate.isCorrect
            if (isDifferentDescription) {
              updateAnswers = true
              answersToChange.push({
                id: answer.key,
                description: answer.description
              })
            }

            if (changeAnswer) {
              console.log('changeAnswer', answer)
              updateRelations = true
              relationsToChange.push({
                id: answer.questionsAnswersId,
                isCorrect: answer.isCorrect
              })
            }
          })
        }
      })
      return {
        updateQuestion,
        updateAnswers,
        updateRelations,
        questionData,
        answersToChange,
        relationsToChange,
        newAnswers
      }
    },
    async updateAllInQuestion () {
      const { updateQuestion: _updateQuestion, updateAnswers, updateRelations, questionData, answersToChange, newAnswers, relationsToChange } = this.verifyToUpdate()
      const promises = []
      
      if (newAnswers.length > 0) {
        const answers = newAnswers.map(ans => {
          const answer = { 
            description: ans.description,
            created_by: this.userId
          }
          return this.createAnswer({ answer })
        })
        promises.push(...answers)
      }

      if (_updateQuestion) promises.push(this.updateQuestion({ id: this.questionId, question: questionData }))
      if (updateAnswers) {
        console.log({ answersToChange })
        answersToChange.forEach(answer => {
          console.log({ id: answer.id, answer: { description: answer.description } })
          promises.push(this.updateAnswer({ id: answer.id, answer: { description: answer.description } }))
        })
      }

      if (updateRelations) {
        relationsToChange.forEach(relation => {
          promises.push(this.updateAnswerRelation({ id: relation.id, relation: { is_correct: relation.isCorrect } }))
        })
      }

      const promisesReturn = await Promise.all(promises)

      if (newAnswers.length > 0) {
        const answersToAssign = newAnswers.map((answer, index) => ({
          id: promisesReturn[index].id,
          is_correct: answer.isCorrect,
          created_by: this.userId
        }))
        const questionWithAnswers = await this.assignAnswersToQuestions({ id: this.questionId, answers: answersToAssign })
      }

    }
  },
}
</script>

<style>
  
</style>
