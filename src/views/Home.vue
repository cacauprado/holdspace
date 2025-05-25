<script setup>
import { ref, onMounted } from 'vue';
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const chartData = ref({
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 42, 60],
      borderColor: '#1976D2',
      backgroundColor: 'rgba(25, 118, 210, 0.1)',
      fill: true,
    }
  ]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    }
  }
};

const totalRevenue = ref(0);
const totalExpenses = ref(0);
const netProfit = ref(0);

onMounted(() => {
  // Simulated data - will be replaced with actual data from Supabase
  totalRevenue.value = 150000;
  totalExpenses.value = 85000;
  netProfit.value = totalRevenue.value - totalExpenses.value;
});
</script>

<template>
  <div class="home-view">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card class="mb-4">
            <v-card-text>
              <div class="text-h6 mb-2">Total Revenue</div>
              <div class="text-h4 primary--text">${{ totalRevenue.toLocaleString() }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="mb-4">
            <v-card-text>
              <div class="text-h6 mb-2">Total Expenses</div>
              <div class="text-h4 error--text">${{ totalExpenses.toLocaleString() }}</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card class="mb-4">
            <v-card-text>
              <div class="text-h6 mb-2">Net Profit</div>
              <div class="text-h4" :class="netProfit >= 0 ? 'success--text' : 'error--text'">
                ${{ netProfit.toLocaleString() }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Revenue Trend</v-card-title>
            <v-card-text>
              <div style="height: 400px;">
                <Line :data="chartData" :options="chartOptions" />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  padding: $spacing-md;
}
</style>