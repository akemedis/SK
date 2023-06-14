<template>
  <div class="flex flex-col items-center h-[110vh] min-h-[800px]">
    <div
      class="
        flex
        flex-col
        justify-center
        items-center
        max-w-fit
        rounded-2xl
        duration-200
      "
    >
      <form
        class="
          flex flex-col
          justify-around justify-self-center
          m-1
          p-7
          rounded-2xl
          max-w-sm
        "
        id="sign"
      >
        <div class="flex justify-center max-h-[125px] m-5 sm:mt-[150px] mt-[250px]">
          <div class="flex w-1/4 xs:w-1/8 mr-5">
            <img src="../assets/images/frog_icon.png" alt="">
          </div>
          <div class="flex flex-wrap justify-start">
            <p class=" text-center font-creatures text-[150%]">
              Ribbit... ribbit..
            </p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center">
          <div class="flex items-center mb-6">
            <div class="">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  pr-4
                  hidden
                "
                for="inline-full-name"
                placeholder="fullname"
              >
                Full Name
              </label>
            </div>
            <div class="">
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
                  font-creatures font-medium text-[150%]
                "
                id="inline-full-name"
                type="text"
                placeholder="Name"
                ref="name"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  md:mb-0
                  pr-4
                  hidden
                "
                for="inline-full-name"
                placeholder="fullname"
              >
                Email
              </label>
            </div>
            <div class="">
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
                  font-creatures font-medium text-[150%]
                "
                id="inline-full-name"
                type="text"
                placeholder="Your email"
                ref="email"
              />
            </div>
          </div>
          <div class="flex items-center mb-6">
            <div class="">
              <label
                class="
                  block
                  text-gray-500
                  font-bold
                  md:text-right
                  mb-1
                  pr-4
                  hidden
                "
                for="inline-password"
              >
                Password
              </label>
            </div>
            <div class="">
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
                  font-creatures font-medium text-[150%]
                "
                id="inline-password"
                type="password"
                placeholder="Your password"
                ref="password"
              />
            </div>
          </div>
          <div
            class="
              flex  
              rounded-lg
              px-4
              my-4
              hover:scale-110
              hover:cursor-pointer
              duration-200
            "
          >
            <button
              class="decoration-red-500 duration-1000 p-1 hover:animate-pulse font-creatures font-medium text-[175%]"
              @click="sign_up(name, email, password)"
              type="button"
            >
              Join the ride
            </button>
          </div>
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

</style>
