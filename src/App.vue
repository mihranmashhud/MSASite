<template>
  <v-app>
    <v-toolbar class="primary" dark>
      <v-toolbar-title>MSA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items >
        <v-btn flat href="/">Home</v-btn>
        <v-btn flat href="/Meetings">Meetings</v-btn>
        <v-btn flat href="/QandA">Q&#38A</v-btn>
        <v-btn flat href="/SignUp">SignUp</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view>
    </router-view>
  </v-app>
</template>

<script>
  export default {

  }

</script>
