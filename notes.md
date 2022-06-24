=========================== Class 1 =========================

For a better understanding about the reasons to use Vue.js, we will build a simple page with vanilla JS.

=========================== Class 2 =========================

Now, we rebuild the class 1 page with a simple VUE.js, and now, we can understand better.

For this simple example, acces the official Vue website, 
get the VUE link, for work without packages:

<script src="https://unpkg.com/vue@3"></script>

Put above that old js link, in your HTML file, and after you 
can use Vue.js

After, you will type the JS code in another form. Follows this steps:

1- Create a Vue App
    First you need create a Vue App, and you can create this typing in your
    js file the object:
    
        Vue.createApp()

2- Set the datas you will work with.
    For this, type on the function "data" on Vue.createApp, and this function
    will return a object with your datas. Ex:

        Vue.createApp({
            data() {
                return {
                    names: [],
                    Age: '',
                }
            }
        })

3- Connect the datas with your HTML file contents.
    Now you need to use a special HTML atribute. This atribute just be seen
    if you using Vue. So the special atribute is " v-model="" ". Ex:
    
        <input v-model="age">

4- Set the Methods
    The function you use, will be declared on function methods, in your Vue App.
    And you can call the datas with "this." js method. After you need to use this
    method, put in your HTML file the special atribute "v-for", this method works
    like a function FOR, (a loop)
    Ex:

         Js.file:

         Vue.createApp({
            data() {
                return {
                    ages: [],
                    age: '',
                }
            },
            methods() {
                addAge() {
                    this.ages.push(this.age)
                }
            }
        })

        html.file:
            <li v-for="goal in goals">{{ goal }}</li>
    
    

5- Configure the Place for Code.
    lastly, we need to set where our js code is run. Add in your Vue app, the
    last info ".mount" and pass with parameter the father element. ex:

    js.file

     Vue.createApp({
        data() {
            return {
                ages: [],
                age: '',
            }
        },
        methods() {
            addAge() {
                this.ages.push(this.age)
            }
        }
    }).mount("#app")


    html.file

    <ul id="app">
        <li v-for="goal in goals">{{ goal }}</li>
    </ul>

There is a practical example in the class files.


