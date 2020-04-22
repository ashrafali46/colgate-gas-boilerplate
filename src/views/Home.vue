<template>
    <v-container>
        <v-form ref="form" v-model="valid">
            <v-text-field
                v-model="name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
            ></v-text-field>

            <v-select
                v-model="select"
                :items="items"
                :rules="[(v) => !!v || 'Item is required']"
                label="Item"
                required
            ></v-select>

            <v-checkbox
                v-model="checkbox"
                :rules="[(v) => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox>

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
            >
                Validate
            </v-btn>

            <v-btn color="error" class="mr-4" @click="reset">
                Reset Form
            </v-btn>

            <v-btn color="warning" @click="resetValidation">
                Reset Validation
            </v-btn>
        </v-form>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'home',
    components: {},
    data: () => {
        return {
            valid: true,
            name: '',
            nameRules: [
                (v): string | true => !!v || 'Name is required',
                (v): string | true =>
                    (v && v.length <= 10) ||
                    'Name must be less than 10 characters',
            ],
            email: '',
            emailRules: [
                (v): string | true => !!v || 'E-mail is required',
                (v): string | true =>
                    /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            select: null,
            items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            checkbox: false,
        };
    },

    methods: {
        validate(): void {
            (this.$refs.form as any).validate();
        },
        reset(): void {
            (this.$refs.form as any).reset();
        },
        resetValidation(): void {
            (this.$refs.form as any).resetValidation();
        },
    },
});
</script>
