<template>
    <div class="profile-page">
        <section class="section-profile-cover section-shaped my-0" style="height:350px">
            <div class="shape shape-style-1 shape-primary shape-skew alpha-4">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </section>
        <section class="section section-skew">
            <div class="container-fluid">
                <card shadow class="card-profile mt--300">
                    <div class="row d-flex justify-content-center mb-3">
                        <card shadow class="col-md-5 col-12 mx-4">
                            <p class="h4 text-primary font-weight-bold">Dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap flex-column flex-md-row">
                                <base-checkbox checked class="mr-3 mt-1">
                                    Fácil
                                </base-checkbox>
                                <base-checkbox class="mr-3 mt-1">
                                    Media
                                </base-checkbox>
                                <base-checkbox class="mr-3 mt-1">
                                    Difícil
                                </base-checkbox>
                            </div>
                        </card>
                        <card shadow class="col-md-5 col-12 mx-4 mt-4 mt-md-0">
                            <p class="h4 text-primary font-weight-bold">Ajuste de dificultad</p>
                            <div class="d-flex mt-3 mb-2 flex-wrap">
                                <base-radio name="radio1" class="mr-3 mt-1" v-model="radio.radio1">
                                    Manual
                                </base-radio>
                                <base-radio name="radio2" class="mr-3 mt-1" v-model="radio.radio1">
                                    Automática
                                </base-radio>
                                <base-radio name="radio3" class="mr-3 mt-1" v-model="radio.radio1">
                                    Inteligente
                                </base-radio>
                            </div>
                        </card>
                    </div>
                    <div class="asigments px-0 px-md-5" id="accordionExample">
                        <div>
                            <div class="card-header d-flex align-items-center" id="headingOne">
                                <p class="mb-0 bg-primary d-flex align-items-center justify-content-center font-weight-bold text-white rounded-circle" style="height:30px; width:30px">A</p> 
                                <h2 class="mb-0">
                                    <p class="mb-0 btn btn-link text-default" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Algoritmia
                                    </p>
                                </h2>
                            </div>
                            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 1</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 2</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 3</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 4</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 5</base-checkbox>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="card-header d-flex align-items-center flex-wrap" id="headingTwo">
                                <p class="mb-0 bg-primary d-flex align-items-center justify-content-center font-weight-bold text-white rounded-circle" style="height:30px; width:30px">PO</p> 
                                <h2 class="mb-0">
                                    <p class="mb-0 btn btn-link collapsed text-default" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Programación Orientada a Objetos
                                    </p>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div class="card-body">
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 1</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 2</base-checkbox>
                                    <base-checkbox checked class="ml-1 mb-2 font-weight-bold">Tema 3</base-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-3 py-4 border-top text-center">
                        <div class="row justify-content-center">
                            <a href="/#/" class="btn btn-primary text-white btn-lg col-md-3 col-8" style="font-size:22px">JUGAR</a>
                        </div>
                    </div>                    
                </card>
            </div>
        </section>
    </div>
</template>
<script>
$('.asigments').collapse()

export default {
  data() {
    return {
      radio: {
        radio1: 'radio1',
        radio2: 'radio2',
        radio3: 'radio3'
      },
    }
  }
}
</script>
<style>
</style>
