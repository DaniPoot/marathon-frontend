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
              <router-view></router-view>
            </card>
        </div>
    </section>
</div>
</template>

<script>
export default {
}
</script>

<style>
  
</style>
