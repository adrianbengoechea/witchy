<template>
  <form class="form" @submit.prevent="submit">
    <div class="container">
      <div class="row">


        <div class="col-12">
          <div class="form-group my-2">

            <input type="email" name="login_email" class="form-control" placeholder="Your Email" v-model.lazy="$v.email.$model">
            <small class="text-danger text-left w-100 d-block pt-1" v-if="$v.email.$anyError == true">
              <template v-if="$v.email.required == false">
                This field is required.
              </template>
              <template v-else-if="$v.email.$invalid == true">
                This email is invalid.
              </template>
              <template v-else>
                Some value in this field is incorrect.  
              </template> 
            </small>

          </div>
        </div>

        <div class="col-12">
          <div class="form-group my-2">
            <input type="password" name="login_password" class="form-control" placeholder="Your Password" v-model="$v.password.$model">
          </div>
        </div>

        <div class="col-12">
          <div class="form-group my-2">
            <input type="submit" name="login_submit" class="form-control" value="Log In" :disabled="$v.$invalid == true">
          </div>
        </div>

        <!-- <pre>
          {{ $v }}
        </pre> -->


      </div>
    </div>
  </form>
</template>

<script>
import Velocity from "velocity-animate";
import { required, minLength, email } from 'vuelidate/lib/validators'

export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        animating: {
          toggle: true
        }
      },
      email: "",
      password: "",
    }
  },
  methods: {
    submit () {
      alert('submit');
    }
  },
  validations: {
    email: {
      required, email
    },
    password: {
      required
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  width: 90%;
  max-width: 700px;
  margin: 0 auto;
  display: block;
}

</style>