<!-- eslint-disable vue/no-v-html -->
<template>
  <div>
    <!-- <pre>{{ login.result }}</pre> -->
    <div v-for="event in login.result" :key="event.id">
      <h1>{{ event.name }}</h1>
      <p v-html="event.description" />
      <nuxt-img :src="event.picture" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReservationPage',
  data () {
    return {
      login: null
    }
  },
  async fetch () {
    const URL = 'https://user-api.simplybook.me/login'
    const baseURL = 'https://user-api.simplybook.me/'

    const response = await fetch(URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(
        {
          jsonrpc: '2.0',
          method: 'getToken',
          params: ['vrcafe66', 'b7890d4a3134b6783fb8374efa9e33d34adbe202e12e068475f482cd234fd3f7'],
          id: 1
        }
      )
    })
    const Token = await response.json()

    const responseToken = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-company-Login': 'vrcafe66',
        'X-Token': Token.result
      },
      body: JSON.stringify(
        {
          jsonrpc: '2.0',
          method: 'getEventList',
          params: [],
          id: 2
        }
      )
    })
    this.login = await responseToken.json()
  }
}
</script>
