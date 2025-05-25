<script setup>
import { ref } from 'vue';

const transactions = ref([
  { id: 1, date: '2024-02-20', description: 'Sales Revenue', amount: 5000, type: 'income' },
  { id: 2, date: '2024-02-19', description: 'Office Supplies', amount: -150, type: 'expense' },
  { id: 3, date: '2024-02-18', description: 'Consulting Fee', amount: 2000, type: 'income' },
]);
</script>

<template>
  <div class="transactions-view">
    <v-card>
      <v-card-title class="text-h5 mb-2">
        Transactions
        <v-spacer></v-spacer>
        <v-btn color="primary" prepend-icon="mdi-plus">
          Add Transaction
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th class="text-right">Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="transaction in transactions" :key="transaction.id">
              <td>{{ new Date(transaction.date).toLocaleDateString() }}</td>
              <td>{{ transaction.description }}</td>
              <td class="text-right" :class="transaction.amount >= 0 ? 'success--text' : 'error--text'">
                ${{ Math.abs(transaction.amount).toLocaleString() }}
              </td>
              <td>
                <v-btn icon size="small" color="primary">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-btn icon size="small" color="error" class="ml-2">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.transactions-view {
  padding: $spacing-md;
}
</style>