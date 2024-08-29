<template>
  <v-app id="inspire">
    <v-app-bar
      class="px-3"
      density="compact"
      flat
    >
      <v-spacer></v-spacer>

      <v-tabs
        color="grey-darken-2"
        centered
      >
        <v-tab
          v-for="link in links"
          :key="link"
          :text="link"
        ></v-tab>
      </v-tabs>
      <v-spacer></v-spacer>

      <v-avatar
        class="hidden-sm-and-down"
        color="grey-darken-1"
        size="32"
      ></v-avatar>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <!-- v-col
            cols="12"
            md="2"
          >
            <v-sheet
              min-height="268"
              rounded="lg"
            >
            </v-sheet>
          </v-col> -->

          <v-col
            cols="12"
            md="12"
          >
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
              <v-empty-state
                headline="Pero que ha pasao'h 😅"
                title="Se vienen cositas"
                text="Estamos trabajando para usted 🐕"
                :image="logo"
                ></v-empty-state>
            </v-sheet>
          </v-col>

          <!-- <v-col
            cols="12"
            md="2"
          >
            <v-sheet
              min-height="268"
              rounded="lg"
            >
            </v-sheet>
          </v-col> -->
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  const links = [
    'Home',
    'Contacto',
    'Nosotros',
  ]
</script>

<script>
import logo from '@/assets/images/logo.jpg'
  export default {
    data: () => ({
      links: [
        'Home',
        'Contacto',
        'Nosotros',
      ],
    }),
  }
</script>