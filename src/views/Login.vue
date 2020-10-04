<template lang="pug">
  v-app#inspire
    v-main
      v-container.fill-height(fluid='')
        v-row(align='center' justify='center')
          v-col(cols='12' sm='8' md='4')
            v-card.elevation-12
              v-toolbar(v-bind:color="MainStore.loginError ? 'red' : 'primary'" dark='' flat='')
                v-toolbar-title 
                  | Login 
                  span(v-if="MainStore.loginError") - failed to login
                  span(v-if="MainStore.sessionExpired") - Your session has expired
              v-card-text
                v-form
                  //- v-select(:items="users" label="User" outlined v-model="user")
                  //- v-select(:items="servers" label="Server" outlined v-model="server")
                  v-text-field(label='Login' name='login' prepend-icon='fa-user' type='text' v-model:value="user.username")
                  v-text-field#password(label='Password' name='password' prepend-icon='fa-lock' type='password' v-model:value="user.password") 
              v-card-actions
                v-spacer
                  v-btn(color='primary', @click="login(user)") Login
                  span(v-if="MainStore.isLoggingIn && !MainStore.loginError") logging in...

  </template>

<script>
import { MainStore } from "@/store/Main.mobx";
import { Service, Loader } from "mobx-store-model";

export default {
  data() {
    return {
      MainStore,
      user: {
        username: "",
        password: "",
      },
      server: "http://localhost:3000",
      servers: [
        {
          text: "Localhost",
          value: "http://localhost:3000",
        },
        {
          text: "Azure",
          value: "https://bolt-schedular-backend.azurewebsites.net",
        },
      ],
      users: [
        {
          text: "super@super.com",
          value: { username: "super@super.com", password: "super123" },
        },
        {
          text: "admin@admin.com",
          value: { username: "admin@admin.com", password: "admin123" },
        },
        {
          text: "noadmin@noadmin.com",
          value: { username: "noadmin@noadmin.com", password: "noadmin123" },
        },
      ],
    };
  },
  watch: {
    server(url) {
      Service.setBaseUrl(url);
      return url;
    },
  },
  methods: {
    async login(creds) {
      await MainStore.login(creds);

      if (MainStore.isLoggedIn) {
        await Loader.init();
        this.$router.push("/orders");
      }
    },
  },
};
</script>
