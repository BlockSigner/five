<template>
  <v-row id="pay-form" class="dark mx-0" justify="center">
    <v-col cols="12" sm="10" md="11" lg="9" xl="6">
      <div class="pay py-2 px-5 py-md-12 px-md-0 my-4 my-md-12">
        <div
          :class="[
            { 'text-center': $vuetify.breakpoint.smAndUp },
            { 'mx-auto': $vuetify.breakpoint.smAndUp },
            'pay__heading',
          ]"
        >
          <h2
            :class="[
              { 'display-1': $vuetify.breakpoint.smAndDown },
              { 'display-3': $vuetify.breakpoint.mdAndUp },
              'mb-6',
              'white--text',
            ]"
          >
            {{ $t('payment.title') }}
          </h2>
          <p
            :class="[
              { 'font-weight-bold': $vuetify.breakpoint.smAndDown },
              { headline: $vuetify.breakpoint.mdAndUp },
              'white--text',
            ]"
          >
            {{ $t('payment.subtitle') }}
          </p>
          <p :class="['white--text']">
            <small>{{ $t('payment.price_info3') }}</small>
          </p>
        </div>
        <div
          :class="[
            { 'text-center': $vuetify.breakpoint.smAndUp },
            { 'mx-auto': $vuetify.breakpoint.smAndUp },
            'pay__tag',
            'mt-12',
            'white--text',
          ]"
        >
          <strong>{{ $t('payment.price_info1') }}</strong>
          {{ $t('payment.price_info2') }}
          <br />
        </div>
        <!-- Form -->
        <div class="pay__flex">
          <v-card class="pay__card pa-4 pa-sm-6 my-12" outlined>
            <v-expand-transition>
              <div
                v-show="status === 'start' || status === 'error-during-payment'"
                class="pay__form"
              >
                <div class="display-5 skribbleu--text mb-3 mt-1">
                  <strong>{{ $t('payment.form.identification') }}</strong>
                </div>
                <v-form ref="form" v-model="validForm" :lazy-validation="lazy"
                  ><v-row>
                    <v-col class="py-0" cols="12" sm="6">
                      <v-text-field
                        v-model="firstName"
                        :rules="nameRules"
                        :label="$t('payment.form.first_name')"
                        :hint="$t('payment.form.name_hint')"
                        autocomplete="given-name"
                        required
                        outlined
                      ></v-text-field
                    ></v-col>
                    <v-col class="py-0" cols="12" sm="6">
                      <v-text-field
                        v-model="lastName"
                        :rules="nameRules"
                        :label="$t('payment.form.last_name')"
                        autocomplete="family-name"
                        :hint="$t('payment.form.name_hint')"
                        required
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :label="$t('payment.form.email')"
                    autocomplete="email"
                    required
                    outlined
                  ></v-text-field>
                  <div class="display-5 skribbleu--text mb-3 mt-1">
                    <strong>{{ $t('payment.form.payment') }}</strong>
                  </div>
                  <v-select
                    v-model="country"
                    :items="countryList"
                    class="pay__countries"
                    :label="$t('payment.form.country')"
                    autocomplete="country-name"
                    :rules="countryRules"
                    required
                    outlined
                  ></v-select>

                  <card
                    class="stripe-card"
                    :class="{ complete: completeStripe }"
                    :stripe="stripe_pk"
                    :options="stripeOptions"
                    @change="completeStripe = $event.complete"
                  />

                  <i18n
                    path="payment.form.terms"
                    tag="div"
                    for="payment.form.terms_linkText"
                    class="pay__consent text-center mt-8"
                  >
                    <a
                      @click.stop
                      class="link"
                      :href="$t('payment.form.terms_linkURL')"
                      target="_blank"
                      >{{ $t('payment.form.terms_linkText') }}</a
                    >
                  </i18n>
                  <div class="text-center mt-6">
                    <v-btn
                      @click="pay"
                      large
                      class="pay-with-stripe"
                      color="primary"
                      :disabled="!(validForm && completeStripe)"
                      :block="$vuetify.breakpoint.xsOnly"
                    >
                      {{ $t('payment.form.pay_now') }}
                    </v-btn>
                  </div>

                  <!-- Error during payment -->
                  <div
                    class="text-center mt-4"
                    v-if="status === 'error-during-payment'"
                  >
                    <p
                      v-if="stripePaymentErrorMsg !== ''"
                      class="caption red--text"
                    >
                      {{ stripePaymentErrorMsg }}
                    </p>
                    <p class="caption red--text">
                      {{ $t('payment.failure.during_payment') }}
                    </p>
                  </div>
                </v-form>
              </div>
            </v-expand-transition>

            <!-- Error after payment -->
            <div
              v-if="status === 'error-after-payment'"
              class="pay__error text--text text-center"
            >
              <p>
                {{ $t('payment.failure.after_payment.paragraph1') }}
              </p>
              <p>
                {{ $t('payment.failure.after_payment.paragraph2') }}
              </p>
              <div class="mt-10 text-center">
                <v-btn
                  @click="reSubmit"
                  large
                  color="primary"
                  :block="$vuetify.breakpoint.xsOnly"
                >
                  {{ $t('payment.failure.after_payment.send_again_button') }}
                </v-btn>
              </div>
            </div>

            <!-- Spinner Overlay -->
            <v-expand-transition>
              <div v-show="status === 'processing'" class="text-center">
                <v-progress-circular
                  indeterminate
                  color="primary"
                ></v-progress-circular>
              </div>
            </v-expand-transition>

            <!-- Success -->
            <v-expand-transition>
              <div
                v-show="status === 'paid'"
                class="pay__success pa-4 text--text text-center"
              >
                <h2
                  :class="[
                    { 'display-1': $vuetify.breakpoint.smAndDown },
                    { 'display-3': $vuetify.breakpoint.mdAndUp },
                    'mb-6',
                  ]"
                >
                  {{ $t('payment.success.title') }}
                </h2>
                <p>
                  {{ $t('payment.success.subtitle') }}
                </p>
                <v-btn
                  large
                  color="primary"
                  class="mt-6 mb-10"
                  :href="identURL"
                  target="_blank"
                >
                  {{ $t('payment.success.cta') }}
                </v-btn>
                <p
                  class="caption mb-0"
                  v-html="$t('payment.success.caption')"
                ></p>
              </div>
            </v-expand-transition>
          </v-card>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

import {
  Card,
  createPaymentMethod,
  handleCardPayment,
  // @ts-ignore
} from 'vue-stripe-elements-plus'

export default Vue.extend({
  name: 'ThePaymentForm',
  components: { Card },
  data() {
    return {
      status: 'start',
      completeStripe: false,
      stripe_pk: process.env.strPk,
      stripeOptions: {
        // see https://stripe.com/docs/stripe.js#element-options for details
        elements: {
          fonts: [
            {
              family: 'Averta',
              src:
                'url("https://www.videoident.me/_nuxt/fonts/48cfe38.woff2") format("woff2")',
              style: 'normal',
              weight: 400,
              display: 'swap',
              color: 'rgba(0, 0, 0, 0.6)',
            },
          ],
        },
        style: {
          base: {
            color: 'rgba(0, 0, 0, 0.6)',
            fontSize: '20px',
            fontFamily: 'Averta',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: 'rgba(0, 0, 0, 0.6)',
            },
          },
        },
      },
      country: null,
      countryList: [],
      validForm: true,
      firstName: '',
      lastName: '',
      countryRules: [
        (v: string) => !!v || this.$t('payment.form.country_is_required'),
      ],
      nameRules: [
        (v: string) => !!v || this.$t('payment.form.name_is_required'),
      ],
      email: '',
      emailRules: [
        (v: string) => !!v || this.$t('payment.form.email_is_required'),
        (v: string) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            v
          ) || this.$t('payment.form.email_must_be_valid'),
      ],
      lazy: false,

      paymentIntentID: '',
      identURL: '',
      stripePaymentErrorMsg: '',
    }
  },
  beforeMount() {
    // Get a list of all countries from i18n-iso-countries-library in the selected language
    // @ts-ignore
    const currentLanguage = this.$i18n.loadedLanguages[0].substring(3, 5)
    // @ts-ignore
    let rawCountries = this.$countries.getNames(currentLanguage)

    // With the "favourite" countries first
    const favouriteCountriesCodes = ['CH', 'DE', 'FR', 'AT']
    let favouriteCountries = []
    for (let key of favouriteCountriesCodes) {
      favouriteCountries.push({ value: key, text: rawCountries[key] })
    }
    // Separated by a divider
    favouriteCountries.push({ value: '', text: '', divider: true })

    // And the rest of the countries sorted alphabetically
    let additionalCountries = []
    for (let key in rawCountries) {
      // @ts-ignore
      if (!favouriteCountries.includes(key))
        additionalCountries.push({ value: key, text: rawCountries[key] })
    }
    additionalCountries.sort((a, b) => a.text.localeCompare(b.text))

    // Assign to dropdown
    // @ts-ignore
    this.countryList = [...favouriteCountries, ...additionalCountries]
  },
  methods: {
    pay() {
      this.status = 'processing'
      this.stripePaymentErrorMsg = ''

      // Async functions must be defined as arrow function so we can still scope Vue's "this"

      // Call Seven (our backend) to setup a payment event
      const setupPaymentIntent = async () => {
        try {
          return await this.$axios.$post('/api/setup_payment', {
            email: this.email,
            country: this.country,
          })
        } catch (error) {
          this.status = 'error-during-payment'
          throw error
        }
      }

      // Call Stripe to create a payment method
      const createPaymentMethodInStripe = async () => {
        try {
          return await createPaymentMethod('card', {})
        } catch (error) {
          this.status = 'error-during-payment'
          throw error
        }
      }

      // Call Stripe to execute payment
      const handleCardPaymentInStripe = async (
        clientSecret: string,
        paymentMethod: object
      ) => {
        try {
          const response = await handleCardPayment(clientSecret, paymentMethod)
          if ('error' in response) throw response.error

          // store formatted paymentIntentID so we can use it in other methods
          this.paymentIntentID = response.paymentIntent.id.replace('pi_', '')
        } catch (error) {
          this.status = 'error-during-payment'
          this.stripePaymentErrorMsg = error.message
          throw error
        }
      }

      // Call Seven (our backend) to create an identity request
      const createIdentityRequest = async () => {
        try {
          return await this.$axios.$post(
            `/api/create_ident/${this.paymentIntentID}`,
            {
              firstName: this.firstName,
              lastName: this.lastName,
            }
          )
        } catch (error) {
          this.status = 'error-after-payment'
          throw error
        }
      }

      // Call our backend to setup a payment intent and Stripe to create a payment method
      Promise.all([setupPaymentIntent(), createPaymentMethodInStripe()]).then(
        ([responsePaymentIntent, responsePaymentMethod]) => {
          // Once result from both is received, execute payment with Stripe
          handleCardPaymentInStripe(
            responsePaymentIntent.clientSecret,
            responsePaymentMethod.createPaymentMethod
          ).then(responseHandlePayment => {
            // Once response from Stripe is received, call our backend to create an identity request
            createIdentityRequest().then(responseIdentityRequest => {
              // Once result from the identity request is received, set ident url to show the user where to go
              this.identURL = responseIdentityRequest.identUrl
              this.status = 'paid'
            })
          })
        }
      )
    },
    // Re-submit request to create an identity request if payment was successful but identity request failed
    reSubmit() {
      this.status = 'processing'

      // Call Seven (our backend) to create an identity request
      const createIdentityRequest = async () => {
        try {
          return await this.$axios.$post(
            `/api/create_ident/${this.paymentIntentID}`,
            {
              firstName: this.firstName,
              lastName: this.lastName,
            }
          )
        } catch (error) {
          this.status = 'error-after-payment'
        }
      }

      // Call Seven to start an identity creation request
      createIdentityRequest().then(responseIdentityRequest => {
        // Once result from the identity request is received, set ident url to show the user where to go
        this.identURL = responseIdentityRequest.identUrl
        this.status = 'paid'
      })
    },
  },
})
</script>

<style lang="sass">
@import ~/assets/sass/_vars
@import ~/assets/sass/_mixins

.pay

  .stripe-card
    padding: 15px 8px
    border: 1px solid rgba(0,0,0,.38)
    border-radius: 4px

  &__heading
    max-width: 480px

  &__tag
    max-width: 600px
    padding: 20px 0
    border-top: 1px solid #fff
    border-bottom: 1px solid #fff

  &__consent
    font-size: .8rem

  &__card.v-card
    max-width: 580px
    margin-left: auto
    margin-right: auto
    +media(xs-only)
      margin-left: -20px
      margin-right: -20px

  &__countries.v-input
    font: 1rem/1 $averta
    color: $c-skribbleu

  &__form
    max-width: 580px

  &__success
    max-width: 580px

  &__error
    max-width: 580px
</style>
