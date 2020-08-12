<template>
  <section class="container">
    <div>
      <div v-if="loggedIn()" class="content">
        <h2>ログイン中です</h2>
        <nuxt-link class="button is-warning" to="/logout">
          <span class="icon">
            <i class="fa fa-sign-out"></i>
          </span>
          <span>Logout</span>
        </nuxt-link>
      </div>

      <div v-if="!loggedIn()" class="content">
        <h2>ログインしてください</h2>
        <nuxt-link class="button is-primary" to="/login">
          <span class="icon">
            <i class="fa fa-sign-in"></i>
          </span>
          <span>Login</span>
        </nuxt-link>
      </div>
      <button class="button is-primary" @click="ping">Ping</button>
      <button class="button is-danger" @click="secured">Secured</button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    loggedIn() {
      return this.$auth0.isAuthenticated();
    },
    async ping() {
      const ret = await this.$axios.$get('/api/v1/ping')
      console.log(ret)
    },
    async secured() {
      const ret = await this.$axios.$get('/api/v1/secured', {
        headers: { Authorization: 'Bearer ' + this.$auth0.getIdToken() }
      })
      console.log(ret)
    }
  },
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

