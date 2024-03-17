<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
    labels: ['Before Food', 'After Breakfast'],
    datasets: [{
        label: 'Blood Sugar Data',
        backgroundColor: '#f87979',
        data: [120, 140],
        borderColor: '#FF6384',
        color: '#ffffff',
    }],
    color: '#ffffff'
}
const chartOptions = {
    responsive: true
}

</script>


<template>

    <div class="bg-gray-900 min-h-screen flex items-center justify-center">
        <div class="container mx-auto px-4">
            <div class="bg-gray-800 rounded-lg p-8">
                <h2 class="text-3xl font-bold text-white mb-8">Sample Test Results</h2>
                <div class="bg-gray-900 rounded-lg p-8">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:w-1/2">
                            <h3 class="text-lg font-bold text-white mb-2">Test Name</h3>
                            <p class="text-white mb-4">Blood Sugar Level</p>
                            <h3 class="text-lg font-bold text-white mb-2">Test Date</h3>
                            <p class="text-white mb-4">June 1, 2021</p>
                            <h3 class="text-lg font-bold text-white mb-2">Test Results</h3>
                            <p class="text-white mb-4">120 mg/dL</p>
                        </div>
                        <div class="md:w-1/2">
                            <h3 class="text-lg font-bold text-white mb-2">Interpretation</h3>
                            <p class="text-white mb-4">Your blood sugar level is slightly elevated. It's recommended to
                                consult with your healthcare provider for further evaluation and guidance.</p>
                            <h3 class="text-lg font-bold text-white mb-2">Graph</h3>
                            <Bar class="text-gray-50" id="blood sugar" :options="chartOptions" :data="chartData" aria-label="Blood sugar level (mg/dL) over time"/>
                            <p class="text-white mb-4">Blood sugar level (mg/dL) over time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>