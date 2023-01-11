<template>
  <div class="flex justify-center">
    <div
      class="
        flex
        justify-center
        mt-10
        mb-10
        bg-gradient-to-b
        from-purple-600
        via-blue-700
        to-cyan-600
        max-w-fit
        rounded-2xl
        shadow-md shadow-gray-300
        hover:shadow-2xl hover:shadow-blue-200
        duration-200
        sm:scale-80 sm:invisible
      "
    >
      <form
        class="
          flex flex-wrap
          justify-center justify-self-center
          m-1
          p-7
          rounded-2xl
          max-w-sm
          bg-gray-100
          visible
          sm:visible sm:bg-white sm:p-1
        "
        id="sign"
      >
        <div
          class="
            block
            p-2
            mb-8
            font-anu font-medium
            text-2xl
            bg-gradient-to-r
            from-purple-600
            via-blue-700
            to-cyan-600
            bg-clip-text
          "
        >
          <h1 class="text-transparent">SHAPE &nbsp THE &nbsp FUTURE</h1>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="
                block
                text-gray-500
                font-bold
                md:text-right
                mb-1
                md:mb-0
                pr-4
              "
              for="inline-full-name"
              placeholder="fullname"
            >
              Full Name
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:bg-white focus:border-blue-500
                font-roboto font-medium
              "
              id="inline-full-name"
              type="text"
              placeholder="Jane Doe"
              ref="name"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="
                block
                text-gray-500
                font-bold
                md:text-right
                mb-1
                md:mb-0
                pr-4
              "
              for="inline-full-name"
              placeholder="fullname"
            >
              Email
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:bg-white focus:border-blue-500
                font-roboto font-medium
              "
              id="inline-full-name"
              type="text"
              placeholder="janedoe@gmail.com"
              ref="email"
            />
          </div>
        </div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-1/3">
            <label
              class="
                block
                text-gray-500
                font-bold
                md:text-right
                mb-1
                md:mb-0
                pr-4
              "
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="
                bg-gray-200
                appearance-none
                border-2 border-gray-200
                rounded
                w-full
                py-2
                px-4
                text-gray-700
                leading-tight
                focus:outline-none focus:bg-white focus:border-blue-500
              "
              id="inline-password"
              type="password"
              placeholder="******************"
              ref="password"
            />
          </div>
        </div>
        <div
          class="
            block
            border border-2 border-gray-300
            rounded-lg
            p-1
            font-technica
            shadow-md shadow-gray-200
            m-8
            mt-4
            mb-4
            hover:scale-110
            hover:shadow-xl
            hover:shadow-blue-200
            hover:border-blue-400
            duration-200
          "
        >
          <button
            class="decoration-red-500 duration-1000 p-1 hover:animate-pulse"
            @click="sign_up(name, email, password)"
            type="button"
          >
            Join the ride
          </button>
        </div>
      </form>
    </div>
  </div>
  <!-- <div class="custom-shape-divider-bottom-1673077320 xsm:hidden sm:hidden">
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        class="shape-fill"
      ></path>
    </svg>
  </div> -->
</template>

<script setup>
// setting data from form
const name = ref(null);
const email = ref(null);
const password = ref(null);
var result = null;

// defining the sign_up function
function sign_up(name, email, password) {
  if (name.value !== '' && email.value !== '' && password.value !== '') {
    const signingUp = async () => {
      console.log('lvl1');
      const { data, error } = await supabase.auth
        .signUp({
          email: email.value,
          password: password.value,
        })
        .then((result) => {
          if (result.error) {
            alert(result.error.error_description || result.error.message);
            return;
          } else {
            console.log(result.data);
            result = result.data;
            alert(
              'I blew you over an email, check it and confirm, then you can log in'
            );
            return;
          }
        });
    };
    signingUp();
  } else {
    alert('You gotta fill out ALL the fields lol');
  }
}
</script>

<style>
.custom-shape-divider-bottom-1673077320 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.custom-shape-divider-bottom-1673077320 svg {
  position: relative;
  display: block;
  width: calc(128% + 1.3px);
  height: 375px;
}

.custom-shape-divider-bottom-1673077320 .shape-fill {
  fill: #2563eb;
}

/* #back {
  background-image: url(../assets/images/fish_concept.png);
  background-size: cover;
} */
</style>
