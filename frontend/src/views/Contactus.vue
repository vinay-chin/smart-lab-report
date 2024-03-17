<script setup>

</script>

<template>

    <div class="bg-gray-900 min-h-screen flex items-center justify-center">
        <div class="container mx-auto px-4">
            <div class="bg-gray-800 rounded-lg p-8">
                <h2 class="text-3xl font-bold text-white mb-8">Contact Us</h2>
                <form @submit.prevent="handleSubmit">
                    <div class="flex flex-col mb-4">
                        <label for="name" class="text-lg font-bold text-white mb-2">Name</label>
                        <input type="text" id="name" name="name"
                            class="bg-gray-700 text-white border border-gray-600 p-2 rounded" required>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="email" class="text-lg font-bold text-white mb-2">Email</label>
                        <input type="email" id="email" name="email"
                            class="bg-gray-700 text-white border border-gray-600 p-2 rounded" required>
                    </div>
                    <div class="flex flex-col mb-4">
                        <label for="message" class="text-lg font-bold text-white mb-2">Message</label>
                        <textarea id="message" name="message"
                            class="bg-gray-700 text-white border border-gray-600 p-2 rounded h-40" required></textarea>
                    </div>
                    <div class="flex justify-center">
                        <button type="submit"
                            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send
                            Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>