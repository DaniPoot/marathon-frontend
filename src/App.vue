<template>
    <div id="app">
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <modal :show.sync="isLoading" modal-classes="modal-dialog-centered" modalContentClasses="bg-transparent shadow-none text-center" type="mini">
          <loader />
        </modal>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { FadeTransition } from 'vue2-transitions'
import Modal from '@/components/Modal.vue'
import Loader from '@/components/Loader'

export default {
  components: {
    FadeTransition,
    Modal,
    Loader
  },
  computed: {
    ...mapGetters('general', ['isLoading'])
  }
}
</script>
