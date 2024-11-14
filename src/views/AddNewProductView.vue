<template>
    <div class="min-h-screen flex flex-row bg-gray-100 ">
        <SideMenuNew :is-active="sideMenu"/>
        <div :class="['flex-col','flex-grow']">
            <TopNav @sideMenu-visibility="handleUpdateBoolean" />
            <div class="mx-3 mt-3 p-2 bg-white rounded-3xl">

                <div class="flex justify-between items-center m-3">
                    <p class="text-center text-2xl text-gray-600 dark:text-gray-400 m-1 font-extrabold">Add New Product
                    </p>
                    <div class="flex justify-between space-x-2">
                        <button class="p-3 text-primary-dark border border-primary-dark rounded-lg font-semibold">
                            Discard
                        </button>
                        <button class="p-3 text-white bg-primary-dark rounded-lg font-semibold">
                            Save
                        </button>
                    </div>
                </div>

                <div
                    class="bg-gray-100  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-5 p-10 mx-auto rounded-3xl">
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Category</label>
                        <CustomDropDown />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Sub Category</label>
                        <CustomDropDown />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Segment</label>
                        <CustomDropDown />
                    </div>

                    <div class="flex justify-center items-center lg:col-span-3 xl:col-span-1">
                        <Icon icon="heroicons-outline:refresh" width="1.5em" height="1.5em" class="text-gray-600" />
                        <h4 class="text-center text-gray-600 dark:text-gray-400 m-1 font-medium">Refresh</h4>
                    </div>
                </div>

                <div class="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 
                gap-5 mt-5 p-10 mx-auto rounded-3xl">
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Product Name</label>
                        <CustomDropDown />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Product Code</label>
                        <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Brand Name</label>
                        <CustomDropDown />
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Model Name</label>
                        <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                    </div>
                </div>

                <div
                    class="grid grid-cols-1 sm:grid-cols-2 sm:space-x-5 md:grid-cols-2 md:space-x-5 lg:grid-cols-2 lg:space-x-5">

                    <div class="flex flex-col">
                    <div class="bg-gray-100 grid grid-cols-1 gap-5 mt-5 p-10 rounded-3xl">
                        <div class="flex flex-col space-y-2">
                            <label class="text-gray-600 font-bold">UOM</label>
                            <CustomDropDown />
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label class="text-gray-600 font-bold">Price</label>
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label class="text-gray-600 font-bold">Minimum Order Quantity</label>
                        <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label class="text-gray-600 font-bold">Expected Delivery Days</label>
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                    </div>

                    <div class="bg-gray-100 grid grid-cols-1 gap-5 mt-5 p-10 rounded-3xl">
                    
                    <div class="flex flex-col space-y-2">
                        <label class="text-gray-600 font-bold">Tags</label>

                        <div class="relative">
                            <input v-model="newTag" type="text"
                            class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                            <button @click="addTag"
                                class="absolute p-1 right-5 top-2 text-primary-dark border border-primary-dark rounded-lg font-semibold">
                                + Add
                            </button>
                        </div>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <span v-for="(tag, index) in tags" :key="index"
                                class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full flex items-center space-x-2">
                                <span>{{ tag }}</span>
                                <button @click="removeTag(index)" class="text-blue-600 font-bold">
                                    ×
                                </button>
                            </span>
                        </div>


                    </div>
                    <div class="flex flex-col space-y-2">
                        <div class="flex justify-between">
                            <label class="text-gray-600 font-bold">Description</label>
                            <p class="text-right text-gray-500">{{ description.length }}/2000</p>
                        </div>
                        <textarea v-model="description" rows="4" maxlength="2000"
                        class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-dark"></textarea>
                    </div>

                    <div class="flex flex-col space-y-2 mt-2">
    <div class="flex justify-start gap-3">
    <label class="text-gray-600 font-bold">Product Image</label>
    <Icon icon="gg:danger" width="1.5em" height="1.5em" class="text-gray-600"/>
    </div>
    <p class="text-gray-600 text-sm ">
      Select a product photo or drag and drop up to 5 photos at once here.
      <br/>
      Include min. 2 attractive photos to make the product more attractive to buyers.
    </p>

    <!-- Image Previews -->
    <div class="sm:flex md:flex lg:flex 2xl:flex gap-2 overflow-y-auto">
        <div class="justify-center items-center space-x-3 flex my-2
        sm:my-0 md:my-0 lg:my-0 2xl:my-0 ">
      <div
        v-for="(image, index) in images"
        :key="index"
        class="relative w-20 h-20 border border-dashed border-gray-300 rounded-lg overflow-hidden"
      >
        <img :src="image" alt="Product Image" class="w-full h-full object-cover" />
        <button
          @click="removeImage(index)"
          class="cursor-pointer absolute top-1 right-1 bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center"
        >
          ×
        </button>
      </div></div>
      <!-- Drag-and-Drop Areas -->
      <div class="justify-center items-center space-y-3
      sm:flex md:flex lg:flex 2xl:flex 
      sm:space-y-0 md:space-y-0 lg:space-y-0 2xl:space-y-0
      sm:space-x-3 md:space-x-3 lg:space-x-3 2xl:space-x-3">
      <div
      class="w-full h-32 flex items-center justify-center
       sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20 
       border-2 border-dashed border-gray-300 rounded-lg  text-gray-400 cursor-pointer"
      @dragover.prevent
      @drop.prevent="handleDrop($event, 'main')"
      @click="triggerFileInput('main')"
      v-if="images.length < 4"
    >
      <input
        ref="mainInput"
        type="file"
        class="hidden"
        accept="image/*"
        multiple
        @change="handleFileChange($event, 'main')"
      />
      <span
      class="flex flex-col items-center">
        <Icon icon="solar:gallery-linear" width="1.5em" height="1.5em" />
        Drop your image
      </span>
    </div>
    <div
    class="w-full h-32 flex items-center justify-center
     sm:w-20 sm:h-20 md:w-20 md:h-20 lg:w-20
      lg:h-20 xl:w-20 xl:h-20 2xl:w-20 2xl:h-20 
      border-2 border-dashed border-gray-300 rounded-lg  text-gray-400 cursor-pointer"
      @dragover.prevent
      @drop.prevent="handleDrop($event, 'thumbnail')"
      @click="triggerFileInput('thumbnail')"
    >
      <input
        ref="thumbnailInput"
        type="file"
        class="hidden"
        accept="image/*"
        @change="handleFileChange($event, 'thumbnail')"
      />
      <span v-if="thumbnail === null" class="flex flex-col items-center">
        <Icon icon="solar:gallery-linear" width="1.5em" height="1.5em" />
        Drop your thumbnail
      </span>
      <img v-else :src="thumbnail" alt="Thumbnail Image" class="w-full h-full object-cover rounded-lg" />
    </div>

</div>
 <!-- Drag-and-Drop Areas end-->


    </div>

    
      
    <p class="text-gray-600 text-xs mt-2">
      The image format is .jpg, .jpeg, .png and a minimum size of 300 x 300px
      <br/>
      (For optimal images use a minimum size of 700 x 700 px).
    </p>
  
    
                    </div>
                    
                    </div>
                </div> 

                    <div class="bg-gray-100 grid grid-cols-1 
                gap-5 mt-5 p-10 rounded-3xl">
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Product Information</label>
                            <CustomDropDown />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Flavors</label>
                            <CustomDropDown />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Diet Type</label>
                            <CustomDropDown />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Pack of</label>
                            <CustomDropDown />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Added Preservations</label>
                        <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                    </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Maximum Shelf Life</label>
                            <CustomDropDown />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Calorie Value</label>
                        <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                    </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Organic</label>
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Manufactured By</label>
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                        <div class="flex flex-col  space-y-2">
                            <label class="text-gray-600 font-bold">Model Number</label>
                            <input class="w-full p-3 text-gray-600 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-dark" />
                        </div>
                    </div>

                

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideMenuNew from '../components/SideMenuNew.vue';
import TopNav from '../components/TopNav.vue';
import { Icon } from '@iconify/vue';
import CustomDropDown from '../components/CustomDropDown.vue'
export default {
    name: 'addNewProductView',
    components: {
        TopNav,
        SideMenuNew,
        Icon,
        CustomDropDown
    },
    data() {
        return {
            sideMenu: false,
            newTag: "",
            tags: [],
            description: "",
             images: [],
      thumbnail: null,
        }
    },
    methods: {
        handleUpdateBoolean(newValue) {
            this.sideMenu = newValue;
        },
        addTag() {
            if (this.newTag.trim() !== "" && !this.tags.includes(this.newTag)) {
                this.tags.push(this.newTag);
                this.newTag = "";
            }
        },
        removeTag(index) {
            this.tags.splice(index, 1);
        },
        triggerFileInput(type) {
      if (type === 'main') {
        this.$refs.mainInput.click();
      } else {
        this.$refs.thumbnailInput.click();
      }
    },
    handleFileChange(event, type) {
      const files = event.target.files;
      this.processFiles(files, type);
    },
    handleDrop(event, type) {
      const files = event.dataTransfer.files;
      this.processFiles(files, type);
    },
    processFiles(files, type) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (type === 'main') {
            if (this.images.length < 4) {
              this.images.push(e.target.result);
            }
          } else if (type === 'thumbnail' && this.thumbnail === null) {
            this.thumbnail = e.target.result;
          }
        };
        reader.readAsDataURL(file);
      });
    },
    removeImage(index) {
        console.log(index,"removeImage index");
        
      this.images.splice(index, 1);
    },
    },
    
}
</script>

<style></style>