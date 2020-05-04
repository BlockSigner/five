<template>
  <div>
    <v-content>
      <v-container class="px-6 px-md-4">
        <script src="https://js.stripe.com/v3/" />
        <v-row justify="center">
          <v-col cols="12" sm="10" md="11" lg="9" xl="6">
            <div class="intro py-md-12 my-sm-4 my-md-12">
              <!-- Intro -->
              <h1
                :class="[
                  { 'display-1': $vuetify.breakpoint.smAndDown },
                  { 'display-4': $vuetify.breakpoint.mdAndUp },
                  'mb-6',
                ]"
              >
                {{ $t('intro.title') }}
              </h1>
              <p
                :class="[
                  { 'font-weight-bold': $vuetify.breakpoint.smAndDown },
                  { headline: $vuetify.breakpoint.mdAndUp },
                  'mb-6',
                ]"
              >
                {{ $t('intro.subtitle') }}
              </p>

              <i18n
                path="intro.content.paragraph1"
                tag="p"
                for="intro.content.paragraph1_linkText"
              >
                <a
                  class="link"
                  :href="$t('intro.content.paragraph1_linkURL')"
                  target="_blank"
                  >{{ $t('intro.content.paragraph1_linkText') }}</a
                >
              </i18n>
              <p>
                {{ $t('intro.content.paragraph2') }}
              </p>
              <p>
                {{ $t('intro.content.paragraph3') }}
              </p>

              <div class="intro__logos my-6">
                <div class="intro__logo identity-logo">
                  <img src="/identity-tm.png" alt="Identity.tm logo" />
                </div>
                <div class="intro__logo swisscom-logo">
                  <img
                    src="/swisscom-trust-services.png"
                    alt="Swisscom Trust Services logo"
                  />
                </div>
              </div>
              <div class="text-center">
                <v-btn
                  @click="$vuetify.goTo('#pay-form')"
                  class="intro__cta mt-md-6"
                  large
                  color="primary"
                  :block="$vuetify.breakpoint.xsOnly"
                  >{{ $t('intro.cta') }}</v-btn
                >
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="px-6 px-md-4">
        <v-row justify="center">
          <v-col cols="12" xl="9">
            <div class="steps py-2 py-md-12 my-4 my-md-12">
              <div
                :class="[
                  { 'text-center': $vuetify.breakpoint.smAndUp },
                  { 'mx-auto': $vuetify.breakpoint.smAndUp },
                  'steps__heading',
                ]"
              >
                <h2
                  :class="[
                    { 'display-1': $vuetify.breakpoint.smAndDown },
                    { 'display-3': $vuetify.breakpoint.mdAndUp },
                    'mb-6',
                  ]"
                >
                  {{ $t('steps.title') }}
                </h2>
                <i18n
                  path="steps.subtitle"
                  tag="p"
                  for="steps.subtitle_linkText"
                  :class="[
                    { 'font-weight-bold': $vuetify.breakpoint.smAndDown },
                    { headline: $vuetify.breakpoint.mdAndUp },
                  ]"
                >
                  <a :href="$t('steps.subtitle_linkURL')" target="_blank">{{
                    $t('steps.subtitle_linkText')
                  }}</a>
                </i18n>
              </div>
              <ol class="steps__list mt-8 mt-md-12 pa-0">
                <li>
                  <h3 class="headline">{{ $t('steps.step1.title') }}</h3>
                  <p>{{ $t('steps.step1.description') }}</p>
                </li>
                <li>
                  <h3 class="headline">{{ $t('steps.step2.title') }}</h3>
                  <p>{{ $t('steps.step2.description') }}</p>
                </li>
                <li>
                  <h3 class="headline">{{ $t('steps.step3.title') }}</h3>
                  <p>{{ $t('steps.step3.description') }}</p>
                </li>
              </ol>
              <div
                :class="[
                  { 'text-center': $vuetify.breakpoint.smAndUp },
                  'steps__footer',
                  'mt-8 mt-md-12',
                ]"
              >
                <p>{{ $t('steps.caption.paragraph1') }}</p>
                <p>{{ $t('steps.caption.paragraph2') }}</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>

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
              <small>Derzeit nur in deutscher Sprache verfügbar.</small>
            </div>
            <!-- Form -->
            <div class="pay__flex">
              <v-card class="pay__card pa-4 pa-sm-6 my-12" outlined>
                <v-expand-transition>
                  <div
                    v-show="
                      status === 'start' || status === 'error-during-payment'
                    "
                    class="pay__form"
                  >
                    <v-form
                      ref="form"
                      v-model="validForm"
                      :lazy-validation="lazy"
                      ><v-row>
                        <v-col class="py-0" cols="12" sm="6">
                          <v-text-field
                            v-model="firstName"
                            :rules="nameRules"
                            :label="$t('payment.form.first_name')"
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
                      {{
                        $t('payment.failure.after_payment.send_again_button')
                      }}
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
                    <p class="caption mb-0">
                      {{ $t('payment.success.caption') }}
                    </p>
                  </div>
                </v-expand-transition>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-container class="px-6 px-md-4">
        <v-row justify="center">
          <v-col cols="12" sm="10" md="11" lg="9" xl="6">
            <div class="faq py-2 py-md-12 my-2 my-md-12">
              <!-- FAQ -->
              <h2
                :class="{ 'text-center': $vuetify.breakpoint.smAndUp }"
                class="display-3 mb-6"
              >
                {{ $t('faq.title') }}
              </h2>
              <v-expansion-panels accordion flat multiple class="my-10">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question1.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question1.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question2.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question2.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question3.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p v-html="linkifySkribble($t('faq.question3.answer'))"></p>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question4.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question4.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question5.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <i18n
                      path="faq.question5.answer"
                      tag="p"
                      for="faq.question5.answer_linkText"
                    >
                      <a
                        class="link"
                        :href="$t('faq.question5.answer_linkURL')"
                        target="_blank"
                        >{{ $t('faq.question5.answer_linkText') }}</a
                      >
                    </i18n>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question6.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p v-html="linkifySkribble($t('faq.question6.answer'))"></p>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question7.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question7.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question8.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question8.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question9.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question9.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question10.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <p
                      v-html="linkifySkribble($t('faq.question10.answer'))"
                    ></p>
                  </v-expansion-panel-content>
                </v-expansion-panel>

                <v-expansion-panel>
                  <v-expansion-panel-header>
                    {{ $t('faq.question11.question') }}
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    {{ $t('faq.question11.answer') }}
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <v-container class="px-6 px-md-4">
        <!-- Temporary language switcher, to be replaced as soon as we have multi-region -->
        <!-- Disabled until VideoIdent works in English -->
        <!-- <v-row justify="center">
          <div class="footer text-center my-5">
            <div v-if="$i18n.locale === 'ch/de'">
              <strong>Deutsch</strong> |
              <nuxt-link
                :to="switchLocalePath('ch/en')"
                class="link"
                style="text-decoration: none;"
                >English</nuxt-link
              >
            </div>
            <div v-if="$i18n.locale === 'ch/en'">
              <nuxt-link
                :to="switchLocalePath('ch/de')"
                class="link"
                style="text-decoration: none;"
                >Deutsch</nuxt-link
              >
              |
              <strong>English</strong>
            </div>
          </div>
        </v-row> -->
        <v-row justify="center">
          <div class="footer text-center my-5">
            {{ $t('footer.built_by') }}
            <a
              :href="$t('global.skribbleURL')"
              target="_blank"
              class="skribble-logo mt-2"
            >
              <img src="/logo-skribble.svg" alt="Skribble logo" />
              <div>Skribble</div>
            </a>
          </div>
        </v-row>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import {
  Card,
  createPaymentMethod,
  handleCardPayment,
} from 'vue-stripe-elements-plus'

export default {
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
                //TODO: replace with deployed font in videoident.me
                'url("https://my.skribble.com/_nuxt/fonts/48cfe38.woff2") format("woff2")',
              style: 'normal',
              weight: 400,
              display: 'swap',
            },
          ],
        },
        style: {
          base: {
            color: '#293D66',
            fontSize: '20px',
            fontFamily: 'Averta',
            fontSmoothing: 'antialiased',
            '::placeholder': {
              color: '#65728E',
            },
          },
        },
      },
      country: null,
      countryList: [
        { value: 'ch', text: 'Schweiz' },
        { value: 'de', text: 'Deutschland' },
        { value: 'fr', text: 'Frankreich' },
        { value: 'at', text: 'Österreich' },
        { value: '', text: '', divider: true },
        { value: 'eg', text: 'Ägypten' },
        { value: 'al', text: 'Albanien' },
        { value: 'dz', text: 'Algerien' },
        { value: 'ao', text: 'Angola' },
        { value: 'am', text: 'Armenien' },
        { value: 'et', text: 'Äthiopien' },
        { value: 'au', text: 'Australien' },
        { value: 'be', text: 'Belgien' },
        { value: 'bj', text: 'Benin' },
        { value: 'ba', text: 'Bosnien und Herzegowina' },
        { value: 'br', text: 'Brasilien' },
        { value: 'bg', text: 'Bulgarien' },
        { value: 'cl', text: 'Chile' },
        { value: 'cn', text: 'China' },
        { value: 'dk', text: 'Dänemark' },
        { value: 'do', text: 'Dominikanische Republik' },
        { value: 'ec', text: 'Ecuador' },
        { value: 'ci', text: 'Elfenbeinküste' },
        { value: 'ee', text: 'Estland' },
        { value: 'fi', text: 'Finnland' },
        { value: 'gr', text: 'Griechenland' },
        { value: 'gb', text: 'Grossbritannien' },
        { value: 'hk', text: 'Hongkong' },
        { value: 'in', text: 'Indien' },
        { value: 'id', text: 'Indonesien' },
        { value: 'iq', text: 'Irak' },
        { value: 'ir', text: 'Iran' },
        { value: 'ie', text: 'Irland' },
        { value: 'il', text: 'Israel' },
        { value: 'it', text: 'Italien' },
        { value: 'jp', text: 'Japan' },
        { value: 'cm', text: 'Kamerun' },
        { value: 'ca', text: 'Kanada' },
        { value: 'kz', text: 'Kasachstan' },
        { value: 'co', text: 'Kolumbien' },
        { value: 'cg', text: 'Kongo' },
        { value: 'xk', text: 'Kosovo' },
        { value: 'hr', text: 'Kroatien' },
        { value: 'cu', text: 'Kuba' },
        { value: 'la', text: 'Laos' },
        { value: 'lv', text: 'Lettland' },
        { value: 'lb', text: 'Libanon' },
        { value: 'li', text: 'Liechtenstein' },
        { value: 'lt', text: 'Litauen' },
        { value: 'lu', text: 'Luxemburg' },
        { value: 'my', text: 'Malaysia' },
        { value: 'mt', text: 'Malta' },
        { value: 'ma', text: 'Marokko' },
        { value: 'mk', text: 'Mazedonien' },
        { value: 'mx', text: 'Mexiko' },
        { value: 'me', text: 'Montenegro' },
        { value: 'nz', text: 'Neuseeland' },
        { value: 'nl', text: 'Niederlande' },
        { value: 'ng', text: 'Nigeria' },
        { value: 'no', text: 'Norwegen' },
        { value: 'pk', text: 'Pakistan' },
        { value: 'pe', text: 'Peru' },
        { value: 'ph', text: 'Philippinen' },
        { value: 'pl', text: 'Polen' },
        { value: 'pt', text: 'Portugal' },
        { value: 'ro', text: 'Rumänien' },
        { value: 'ru', text: 'Russland' },
        { value: 'se', text: 'Schweden' },
        { value: 'sn', text: 'Senegal' },
        { value: 'rs', text: 'Serbien' },
        { value: 'sk', text: 'Slowakei' },
        { value: 'si', text: 'Slowenien' },
        { value: 'so', text: 'Somalia' },
        { value: 'es', text: 'Spanien' },
        { value: 'za', text: 'Südafrika' },
        { value: 'sy', text: 'Syrisch-Arabische Republik' },
        { value: 'th', text: 'Thailand' },
        { value: 'tg', text: 'Togo' },
        { value: 'cz', text: 'Tschechien' },
        { value: 'tn', text: 'Tunesien' },
        { value: 'tr', text: 'Türkei' },
        { value: 'ua', text: 'Ukraine' },
        { value: 'hu', text: 'Ungarn' },
        { value: 've', text: 'Venezuela' },
        { value: 'us', text: 'Vereinigte Staaten von Amerika' },
        { value: 'vn', text: 'Vietnam' },
        { value: 'by', text: 'Weissrussland' },
        { value: 'cy', text: 'Zypern' },
      ],
      validForm: true,
      firstName: '',
      lastName: '',
      countryRules: [v => !!v || this.$t('payment.form.country_is_required')],
      nameRules: [v => !!v || this.$t('payment.form.name_is_required')],
      email: '',
      emailRules: [
        v => !!v || this.$t('payment.form.email_is_required'),
        v =>
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

  components: { Card },
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
      const handleCardPaymentInStripe = async (clientSecret, paymentMethod) => {
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
    // Turns Skribble string into a link pointing to Skribble.com
    linkifySkribble(text) {
      console.log()
      // TODO: replace with lokalised skribble page
      return text.replace(
        'Skribble',
        `<a class="link" href="${this.$t(
          'global.skribbleURL'
        )}" target="_blank">Skribble</a>`
      )
    },
  },
}
</script>

<style lang="sass">
@import ~/assets/sass/_vars
@import ~/assets/sass/_mixins

.skribble-logo
  display: flex
  align-items: center
  font: bold 1.5rem/1 $averta
  color: $c-skribbleu

  img
    margin-right: 2px

.identity-logo img
  width: 150px
  max-width: 100%

.swisscom-logo img
  width: 242px
  max-width: 100%

.dark
  background-color: $c-skribbleu

.intro
  margin-left: auto
  margin-right: auto
  max-width: 680px

  &__logos
    display: flex
    align-items: center
    justify-content: center
    +media(sm-and-down)
      flex-direction: column
      align-items: flex-start

  &__logo
    margin: 0 20px
    +media(sm-and-down)
      margin: 10px
    +media(md-and-up)
      &:first-child
        margin-left: 0
      &:last-child
        margin-right: 0

  &__cta.v-btn:not(.v-btn--round).v-size--large
    min-width: 240px

.steps

  &__heading
    max-width: 480px

    a
      color: $c-skribbleu

  &__footer
    margin-left: auto
    margin-right: auto
    max-width: 680px

  &__list
    display: flex
    justify-content: center
    margin: 0
    list-style-type: none
    +media(sm-and-down)
      flex-wrap: wrap

    li
      flex: 0 1 31.33%
      margin: 0 2%
      padding-bottom: 10px
      background-color: #fff
      box-shadow: 0 1px 10px 0 rgba($c-grey-darker, .3)
      +media(sm-and-down)
        flex: 0 1 100%
        margin: 0
      @for $i from 1 through 3
        &:nth-child(#{$i})
          +media(sm-and-down)
            @if $i == 2
              margin: 24px 0
          h3:after
            content: '#{$i}'

    h3
      display: flex
      justify-content: space-between
      align-items: center
      &:after
        flex-basis: 20%
        font-size: 1.9rem
        text-align: right

    .headline
      padding: 20px
      margin-bottom: 20px
      border-bottom: 1px solid $c-border

    p
      margin: 10px 20px

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

.faq

  .theme--light.v-expansion-panels .v-expansion-panel
    color: $c-text

  .v-expansion-panel
    border-bottom: 1px solid $c-border
    &:first-child
      border-top: 1px solid $c-border

    &-header
      padding: 16px 0 16px 0
      font: bold 1rem/1.4 $averta
      color: $c-skribbleu
      +media(xs-only)
        font-size: .9rem

      &__icon
        padding-left: 20px

    &-content__wrap
      padding-left: 0

.footer
  font-size: .8rem

  .skribble-logo
    font: bold 1.5rem/1 $averta
    color: $c-skribbleu

  a
    text-decoration: none
</style>
