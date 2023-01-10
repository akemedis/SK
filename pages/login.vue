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
          <h1 class="text-transparent">WELCOME BACK MAN</h1>
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
            Authenticate
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
