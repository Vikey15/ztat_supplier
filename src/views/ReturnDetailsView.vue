<template>
  <div class="bg-gray-50">
    <h3 class="text-lg font-bold p-5">Return Details</h3>

    <div class="flex justify-between m-5">
      <div class="bg-white flex flex-row items-center p-4 rounded-md">
        <Icon
          icon="mingcute:left-line"
          class="text-gray-400 mr-2"
          height="25"
        />
        <button class="font-semibold">Return Details</button>
      </div>

      <div class="bg-white flex flex-row items-center p-4 rounded-md">
        <Icon icon="bi:printer" class="text-gray-400 size-5 mr-2" />
        <button class="font-semibold">Print Details</button>
      </div>
    </div>

    <div class="bg-white rounded-md m-5">
      <div class="bg-white flex flex-row items-center p-4 rounded-md">
        <img src="../assets/images/pending.png" />
        <button class="font-semibold ml-3 text-amber-500">Pendings</button>
      </div>

      <hr class="m-2" />

      <div class="m-5 my-10 bg-gray-50 rounded-md p-2">
        <div class="flex flex-row justify-between">
          <h3 class="font-semibold">Chikue chute</h3>
          <h3>Date</h3>
          <h3>QAR 210.98</h3>
        </div>

        <div class="flex flex-row justify-between">
          <h3 class="text-primary-dark font-semibold">ORD-20241025</h3>
          <h3>11-04-2024</h3>
          <h3>Qty:1</h3>
        </div>
      </div>

      <hr class="m-2" />

      <div
        class="flex justify-center items-center m-5 my-10 p-3 border-2 border-primary-dark rounded-xl"
      >
        <button class="text-primary-dark font-bold">Mark as in Progress</button>
      </div>
    </div>

    <div class="bg-white rounded-md m-5">
      <div class="bg-white flex flex-row items-center p-4 rounded-md">
        <div class="bg-pink-100 rounded-full p-4">
          <img src="../assets/images/rupeeSymbol.png" class="w-6" />
        </div>
        <button class="font-semibold ml-3 text-primary-dark">Paid</button>
      </div>

      <hr class="m-2" />

      <div>
        <div class="flex justify-between m-5">
          <h3 class="font-bold text-gray-400">1item</h3>
          <h3 class="font-bold text-gray-400">$210.89</h3>
        </div>

        <div class="flex justify-between m-5">
          <h3 class="font-bold text-gray-400">AU Standar Delivery(1.00 kg)</h3>
          <h3 class="font-bold text-gray-400">$10.89</h3>
        </div>

        <div class="flex justify-between m-5">
          <h3 class="font-bold text-gray-400">GST(AU)10%</h3>
          <h3 class="font-bold text-gray-400">$2.74</h3>
        </div>

        <div class="flex justify-between m-5">
          <h3 class="font-bold">Total</h3>
          <h3 class="font-bold">$22.90</h3>
        </div>
      </div>

      <hr class="m-2" />

      <div class="flex justify-between m-5">
        <h3 class="font-bold text-gray-400">Paid by customer</h3>
        <h3 class="font-bold text-gray-400">$227.90</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>
