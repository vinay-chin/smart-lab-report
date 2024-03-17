<script setup>

</script>

<template>
    <div class="container mx-auto px-4 grid justify-center h-screen items-center">
        <div class="w-96 border border-teal-200 p-5 rounded-xl">
            <h2 class="text-3xl text-gray-50 font-bold mb-8">Sign Up</h2>
            <form @submit.prevent="signup">
                <div class="flex flex-col mb-4">
                    <label for="name" class="text-lg font-bold mb-2 text-gray-50">Name</label>
                    <input type="text" id="name" name="name" class="border border-gray-900 p-2 rounded" required>
                </div>
                <div class="flex flex-col mb-4">
                    <label for="email" class="text-lg font-bold mb-2 text-gray-50">Email</label>
                    <input type="email" id="email" name="email" class="border border-gray-900 p-2 rounded" required>
                </div>
                <div class="flex flex-col mb-4">
                    <label for="password" class="text-lg font-bold mb-2 text-gray-50">Password</label>
                    <input type="password" id="password" name="password" class="border border-gray-900 p-2 rounded"
                        required>
                </div>
                <div class="flex flex-col mb-4">
                    <label for="confirm-password" class="text-lg font-bold mb-2 text-gray-50">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        class="border border-gray-900 p-2 rounded" required>
                </div>
                <div class="flex justify-center">
                    <button type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign
                        Up</button>
                </div>
            </form>
        </div>
    </div>

</template>