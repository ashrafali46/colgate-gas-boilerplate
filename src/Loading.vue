<template>
    <v-app>
        <v-container class="fill-height" fluid>
            <v-row justify="center" align="center">
                <v-col class="shrink" align="center">
                    <img src="@/assets/logo.svg" class="py-2" />
                    <v-progress-linear
                        color="red"
                        indeterminate
                        rounded
                        height="6"
                        wdith="100"
                    />
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>
