/* Summary: This component contains a h2 heading title for the CTA, a line of text under it, and a button underneath it. They are all centre aligned.
*/
Vue.component("simple_cta_component_1722039278", {
    template: `
    <div>
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="#" class="text-gray-800 dark:text-white text-xl font-bold">Logo</a>
                
                <div class="flex items-center">
                    <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</a>
                </div>
            </div>
        </nav>
        <nav class="bg-white shadow dark:bg-gray-800">
            <div class="container flex items-center justify-between p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                <a href="#" class="text-gray-800 dark:text-white text-xl font-bold">Logo</a>
                
                <div class="flex items-center">
                    <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">About</a>
                    <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact Us</a>
                </div>
            </div>
        </nav>

        <section id="cta-component" class="bg-gray-50 dark:bg-gray-800 flex-1">
            <div id="cta-inner-container" class="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <div id="cta-content" class="max-w-screen-sm mx-auto text-center">
                    <div id="cta-title-container" class="flex">
                        <h2 id="cta-title" class="flex-1 mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Discover Innovative New Products</h2>
                    </div>

                    <div id="cta-subtitle-container" class="flex">
                        <p id="cta-subtitle" class="flex-1 mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Stay ahead of the curve with our cutting-edge product discovery platform.</p>
                    </div>
                    
                    <div id="cta-button-container" class="flex">
                        <a id="cta-button" href="#" class="flex-1 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Explore New Products</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
        `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
