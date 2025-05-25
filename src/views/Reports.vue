<script setup>
import { ref } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const expenseData = ref({
  labels: ['Utilities', 'Rent', 'Supplies', 'Marketing', 'Salaries'],
  datasets: [{
    data: [1200, 3000, 800, 1500, 5000],
    backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56',
      '#4BC0C0',
      '#9966FF'
    ]
  }]
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false
};
</script>

<template>
  <div class="reports-view">
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>Expense Distribution</v-card-title>
            <v-card-text>
              <div style="height: 400px;">
                <Pie :data="expenseData" :options="chartOptions" />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.reports-view {
  padding: $spacing-md;
}
</style>