<template>
  <v-app>
    <Sidebar />
    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My Demo</v-toolbar-title>

      <div class="ml-auto" v-if="$auth.loggedIn">
        <v-icon class="mr-2">mdi-account</v-icon>
        {{$auth.user.name}}
      </div>

    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
      <nuxt />

      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import Sidebar from '~/components/sidebar'

export default {
  components: {
    Sidebar
  },
  props: {
    source: String,
  },
  methods: {

  },
  created () {
  },
}
</script>