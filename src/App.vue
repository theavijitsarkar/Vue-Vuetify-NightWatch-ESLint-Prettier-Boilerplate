<template>
  <v-app>
    <v-toolbar app style="background-color: #225C9B" dark v-if="showToolbar">
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        style="color: #fff"
      ></v-toolbar-side-icon>
      <v-toolbar-title class="cb_main_title">Machine Sense</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu
          flat
          bottom
          origin="center center"
          transition="scale-transition"
          :nudge-bottom="55"
        >
          <template
            v-slot:activator="{
              on,
            }"
          >
            <v-btn flat fab v-on="on" style="color: #fff">
              <v-icon>face</v-icon>
            </v-btn>
          </template>

          <v-list style="padding: 0px; cursor: pointer">
            <v-list-tile>
              <v-list-tile-title>Change password</v-list-tile-title>
            </v-list-tile>
            <v-list-tile>
              <v-list-tile-title @click="logout">Sign out</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="sideNav"
      v-if="showToolbar"
      fixed
      app
      width="250"
    >
      <v-list
        class="pa-1"
        style="background-color: #375b82; box-shadow: 2px 2px 10px #cecece !important"
      >
        <v-list-tile avatar>
          <img
            class="cb_title_img"
            src="https://cdn.shopify.com/s/files/1/2987/8756/t/3/assets/logo.png?2053"
            alt="Machine Sense"
          />
        </v-list-tile>
      </v-list>

      <v-list class="pt-0">
        <v-divider style="margin-bottom: 30px"></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>people</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="cb_subtitle">Users</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          :to="{
            name: 'Inventory',
          }"
        >
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="cb_subtitle">Inventory</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          :to="{
            name: 'Monitor',
          }"
        >
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="cb_subtitle">Monitor</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          :to="{
            name: 'Location',
          }"
        >
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="cb_subtitle">Machines</v-list-tile-title>
        </v-list-tile>

        <v-list-tile
          :to="{
            name: 'Resource',
          }"
        >
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="cb_subtitle">Resources</v-list-tile-title>
        </v-list-tile>

        <v-footer class="justify-center pl-0" inset app>
          <span>&copy; 2019 Machine Sense</span>
        </v-footer>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      sideNav: false,

      //
    };
  },
  computed: {
    showToolbar() {
      console.log(this.$router.currentRoute.name);

      if (this.$router.currentRoute.name != 'Login') return true;
      else return false;
    },
  },
  methods: {
    logout() {
      this.$router.replace({
        name: 'Login',
      });
    },
  },
};
</script>

<style scoped>
.cb_title {
  font-size: 20px;
  letter-spacing: 0.5px;
}
.cb_subtitle {
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;
}
.cb_main_title {
  font-size: 21px;
  color: #fff;
  margin-left: 2px;
}
.v-toolbar__content {
  height: 60px;
}
.cb_select {
  margin-top: 8px;
}
.cb_title_img {
  height: 30px;
  margin-left: 10px;
  margin-top: 5px;
}
@media only screen and (max-width: 600px) {
  .cb_main_title {
    font-size: 18px;
    margin-left: -2px;
    word-wrap: break-word;
  }
  .cb_select {
    margin-top: 4px;
    font-size: 8px;
  }
}
</style>
