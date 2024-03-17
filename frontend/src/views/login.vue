<script setup>

</script>

<template>

    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8">Log In</h2>
        <form @submit.prevent="login">
            <div class="flex flex-col mb-4">
                <label for="email" class="text-lg font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" class="border border-gray-300 p-2 rounded" required>
            </div>
            <div class="flex flex-col mb-4">
                <label for="password" class="text-lg font-bold mb-2">Password</label>
                <input type="password" id="password" name="password" class="border border-gray-300 p-2 rounded"
                    required>
            </div>
            <div class="flex justify-center">
                <button type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Log
                    In</button>
            </div>
        </form>
    </div>

</template>