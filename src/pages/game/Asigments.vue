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
                <card shadow class="card-profile mt--300" no-body>
                    <div class="px-0">
                        <div class="row justify-content-center">
                            <div class="col-lg-7 mt-5">                  
                                <h2 class="h2 font-weight-bold text-center">Iniciar nueva partida</h2>          
                                <base-input alternative
                                    placeholder="Buscar Asignatura"
                                    class="mt-4"
                                    addon-left-icon="fa fa-search">
                                </base-input>
                            </div>
                        </div>
                        <div class="text-center mt-2 d-flex justify-content-around flex-wrap">
                            <card type="secondary" shadow class="col-lg-2 col-md-4 col-12 m-1">
                                <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">A</p> 
                                        <p class="font-weight-bold">Algoritmia</p>
                                    </div>
                                    <base-button type="primary btn-sm">SELECCIONADA</base-button>
                                </div>
                            </card>
                            <card type="secondary" shadow class="col-lg-2 col-md-4 col-12 m-1">
                                <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">PE</p> 
                                        <p class="font-weight-bold">Programación Estructurada</p>
                                    </div>
                                    <base-button type="neutral btn-sm">SELECCIONAR</base-button>
                                </div>
                            </card>
                            <card type="secondary" shadow class="col-lg-2 col-md-4 col-12 m-1">
                                <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">PO</p> 
                                        <p class="font-weight-bold">Programación Orientada a Objetos</p>
                                    </div>
                                    <base-button type="primary btn-sm">SELECCIONADA</base-button>
                                </div>
                            </card>
                            <card type="secondary" shadow class="col-lg-2 col-md-4 col-12 m-1">
                                <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">TL</p> 
                                        <p class="font-weight-bold">Teoría de lenguajes de programación</p>
                                    </div>
                                    <base-button type="neutral btn-sm">SELECCIONAR</base-button>
                                </div>
                            </card>
                            <card type="secondary" shadow class="col-lg-2 col-md-4 col-12 m-1">
                                <div class="card-body d-flex flex-column justify-content-between p-0 m-0 h-100">
                                    <div>
                                        <p class="mx-auto bg-primary d-flex align-items-center justify-content-center h1 font-weight-bold text-white rounded-circle" style="height:70px; width:70px">AP</p> 
                                        <p class="font-weight-bold">Administración de Proyectos</p>
                                    </div>
                                    <base-button type="neutral btn-sm">SELECCIONAR</base-button>
                                </div>
                            </card>
                        </div>
                        <div class="my-3 py-4 border-top text-center">
                            <div class="row justify-content-center">
                                <a href="/#/difficulty" class="btn btn-primary text-white btn-lg col-md-3 col-8" style="font-size:22px">SIGUIENTE</a>
                            </div>
                        </div>
                    </div>
                </card>
            </div>
        </section>
    </div>
</template>
<script>
export default {}
</script>
<style>
</style>
