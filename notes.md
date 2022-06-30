=========================== Class 1 =========================

For a better understanding about the reasons to use Vue.js, we will build a simple page with vanilla JS.

See the Code in example 1 folder.

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


See the code in example 2 folder.

=========================== Class 3 =========================


- How to connect Js with HTML.

1- Create a Vue App
    First you need create a Vue App, and you can create this typing in your
    js file the object:
    
        Vue.createApp()

2- Mount the App
    Mount the app for use the code in your HTML, and set the parameter
    the class or ID of father element.:

        app.mount('#user-goal')

3- Use createApp properties
    Now you cant yse the createApp basics properties in your js.file.
    First use the data properties for set your vars/lets/const's:

        const app = Vue.createApp({
            data() {
                return {
                courseGoal: 'Finish the course and learn the Vue.'
                }
            }
        })

See the codes in exemple 3 folder.


=========================== Class 4 =========================


- Interpolation.

So, for use the Vue datas, on the HTML file, you need to use 
double curly braces on HTML element. Ex:

   Js file:

    const app = Vue.createApp({
      data() {
        return {
          courseGoal: 'Finish the course and learn the Vue.'
        }
      }
    }) 

  HTML:

    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
    </section>

Remember: 
  You just can use interpolation in HTML VUe app element, seted in
  app.mount().


See the code in example 3 folder.


=========================== Class 5 =========================


V-Bind

If you need use Vue data with HTML tags and atributes you need to use
the "v-bind" as prefix:

  js.file:

      const app = Vue.createApp({
        data() {
          return {
            courseGoal: 'Finish the course and learn the Vue.',
            vueLink: 'https://vuejs.org'
          }
        }
      })

  HTML file:

    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
      <p>learn more <a v-bind:href="vueLink" target="_blank">about Vue</a></p>
    </section>

See the code in the example 3 folder.



=========================== Class 6 ===========================


-Methods

  Methods are functions with you can use direct in your HTML file,
  and you create them on Methods in your Vue.createApp():

  Js file:

    const app = Vue.createApp({
      data() {
        return {
          courseGoal: 'Finish the course and learn the Vue.',
          vueLink: 'https://vuejs.org'
        }
      },
      methods: {
        outputGoal() {
          const randomNumber = Math.random()
          if (randomNumber < 0.5) {
            return 'Learn Vue'
          } else {
            return 'Master Vue'
          }
        }
      }
    })

  HTML file:

    <section id="user-goal">
      <h2>My Course Goal</h2>
      <p>{{ courseGoal }}</p>
      <p>{{ outputGoal() }}</p>
      <p>learn more <a v-bind:href="vueLink" target="_blank">about Vue</a></p>
    </section>

See the code in example 3 folder.


=========================== Class 7 ===========================


-Call Datas in js code.
  If you need call the data properties in your js file, you need to use
  the prefix "this." before your data name. Ex:

    const app = Vue.createApp({
      data() {
        return {
          courseGoalA: 'Finish the course and learn the Vue.',
          courseGoalB: 'Master Vue and build amazing apps',
          vueLink: 'https://vuejs.org'
        }
      },
      methods: {
        outputGoal() {
          const randomNumber = Math.random()
          if (randomNumber < 0.5) {
            return this.courseGoalA
          } else {
            return this.courseGoalB
          }
        }
      }
    })


See the Code in the js file in example 4 folder.



=========================== Class 8 ===========================


-Output HTML tags from js file.
  If you need output html tags from your Js file, you need to 
  use the Vue propertie "v-html". Ex:

    const app = Vue.createApp({
      data() {
        return {
          courseGoalA: 'Finish the course and learn the Vue.',
          courseGoalB: '<h2>Master Vue and build amazing apps</h2>', 
          vueLink: 'https://vuejs.org'
        }
      },
      methods: {
        outputGoal() {
          const randomNumber = Math.random()
          if (randomNumber < 0.5) {
            return this.courseGoalA
          } else {
            return this.courseGoalB
          }
        }
      }
    })

But, you need to use this method with care. Because your 
app is more exposed to script attacks. 


See the code in example 5 folder


=========================== Class 9 ===========================

Time to practice. See the Challenge 1 folder.



=========================== Class 10 ===========================


-Event Binding 1/2
  A simple way to add a event listener in a HTML element is the
  vue method "v-on". We can use the prefix "v-on" for add a event
  directly in the element tag. Ex:

  HTML file:

    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="counter++">Add</button>
      <button v-on:click="counter--">Reduce</button>
      <p>Result: {{ counter }}</p>
    </section>

  js file:

    const app = Vue.createApp({
      data() {
        return {
          counter: 0
        }
      }
    }) 

    app.mount('#events')

See the code in the exemple 6 folder.



=========================== Class 11 ===========================


-Event Binding 2/2
  Now, there is a way is as functional as previous example. You would 
  know, that js code logics don't be in HTML file. So you can use
  the methods of VueApp, to include this logic. Ex:

  html file:

    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="counter++">Add</button>
      <button v-on:click="reduce()">Reduce</button>
      <p>Result: {{ counter }}</p>
    </section>

  js file:

    const app = Vue.createApp({
      data() {
        return {
          counter: 0
        }
      },
      methods: {
        reduce() {
          this.counter--
        }
      }
    }) 

    app.mount('#events')


See the code in the exemple 6 folder.



=========================== Class 12 ===========================


-Event Arguments
  
  You can use argument in the methods, directly in HTML file event.
  For example, see the new button "Reduce 5":

  HTML file

    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="counter++">Add</button>
      <button v-on:click="reduce()">Reduce</button>
      <button v-on:click="reduce(5)">Reduce 5</button>
      <p>Result: {{ counter }}</p>
    </section>

  Js file:

    const app = Vue.createApp({
      data() {
        return {
          counter: 0
        }
      },
      methods: {
        reduce() {
          this.counter--
        },
        reduce(num) {
          this.counter = this.counter - num
        }
      }
    }) 

See the code in the example 6 folder.


=========================== Class 13 ===========================


-Native Event Object

  We can use the natives events objects directly in our HTML element
  event. In our Js file, just we set event as a parameter Ex:

  HTML file

    <section id="events">
      <h2>Events in Action</h2>
      <input type="text" v-on:input="setName">
      <p>Your name {{ name }}</p>
    </section>

  JS File

    const app = Vue.createApp({
      data() {
        return {
          name: ''
        }
      },
      methods: {
        setName(event) {
          this.name = event.target.value
        }
      }
    }) 

    app.mount('#events')

If you need to use a seconde paremeter in your function, you need add
"$" before the "event" parameter. Like this:

  HTML file

    <section id="events">
      <h2>Events in Action</h2>
      <input type="text" v-on:input="setName($event, 'Montenegro')">
      <p>Your name {{ name }}</p>
    </section>

  JS File

      const app = Vue.createApp({
        data() {
          return {
            name: ''
          }
        },
        methods: {
          setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName
          }
        }
      }) 

      app.mount('#events')

See the code running in example 6 folder



=========================== Class 14 ===========================


- Event Modifiers

We can change the com behavior of events, as we change in Vanilla JS.
Remember the event.prevent. That stop the default behavior of browser.

And for do this, we have two ways:

1-
  
  HTML file:

    <form v-on:submit="submitFormA">
      <input type="text">
      <button>Send</button>
    </form>

  Js File:

    const app = Vue.createApp({
      methods: {
        submitFormA(event) {
          event.preventDefault()
          alert("Sended")
        }
      }
    }) 

    app.mount('#events')

2- 

  HTML file:

    <form v-on:submit.prevent="submitFormB">
    <input type="text">
    <button>Send</button>
    </form>

  Js file:

    const app = Vue.createApp({
      method: {
        submitFormB() {
          alert('Sended')
        }
      }
    })

There many modifier for each event, for exemple:

    v-on:click
    v-on:click.right
    v-on:keypup
    v-on:keyup.enter

Check the JS documentation for more event modifiers.

See this code running in the example 6 folder.


=========================== Class 14 ===========================


- V-once

So, in a fictional scenario, you need to show a data just once.
But your code manipulate this data elsewhere... How to show the 
once without after manipulates?

It's simple, using v-once. Like this:

  HTML File

    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="counter++">Add</button>
      <button v-on:click="reduceA()">Reduce</button>
      <button v-on:click="reduceB(5)">Reduce 5</button>
      <p v-once>Starting Counter: {{ counter }}</p>
      <p>Result: {{ counter }}</p>
    </section>

  Js File

    const app = Vue.createApp({
      data() {
        return {
          counter: 0 
        }
      },
      methods: 
      reduceA() {
        this.counter--
      },
      reduceB(num) {
        this.counter = this.counter - num
      }
    }) 
  
Look, the first time the element is shown, the element do not 
update the "Counter" anymore.


=========================== Class 15 ===========================

Time to practice.

See the challenge in the challenge 2 folder


=========================== Class 16 ===========================


- V-Model
  Due the often that we use v-bind:value with v-on:input. The Vue
  created a extra method, that substitute the both methods. Ex:

  HTML code

        <input type="text" v-bind:value="name" v-on:input="saveName()">
        <button v-on:click="resetName">Reset Name</button>
        <p>Your Name: {{ name }}</p>

        this, is the same that:

        <input type="text" v-model="name">
        <button v-on:click="resetName">Reset Name</button>
        <p>Your Name: {{ name }}</p>


Check the example in example 7 folder



=========================== Class 17 ===========================


- Methods Called in HTML
  
  We already know which methods can be called via interpollation
  wich double curly braces, but that we don't know is:
  Whenever something change in the page, the Vue will go execute 
  the method, because he need see if something that, use a datas 
  inside to the method.

  So, methods can be bad for our performance.

  For see that, acces the example 7 folder, and click at Add and
  remove buttons. And you can see on the browser console, the 
  method "setFullName()", being called.



=========================== Class 18 ===========================


- Computed Properties

For resolve the refresh problem which methods cause, you can use
Computed properties.

Computeds, are defined like a methods, but the computeds just
only call if the element has a interpolation being  triggered.

The config is:

  HTML File 

    In computeds, you should never use parentheses
    <p>{{ example }}</p>

  js File

    const app = Vue.createApp() {
      computed: {
        example() {
          console.log("hello Computed")
        }
      }
    }

See the code in the example 8 folder 



=========================== Class 19 ===========================


- Watchers
        
If you need to monitor a data propertie or a computed propertie, 
you can use Watch Properties. Watchers be functions like a Computeds
which running in specifics ocasions. 

Watch just running, when the Data wich him monitoring be changing.

The sintax for use Watch is similar to Computed and Method sintax, but
wich a difference, the Watch always must be named wich the Data name that
is monitoring. Ex:

  HTML FIle:

    <section id="events">
      <h2>Events in Action</h2>
      <button v-on:click="add(10)">Add 10</button>
      <button v-on:click="reduce(5)">Subtract 5</button>
      <p>Result: {{ counter }}</p>
    </section>


  Js file

    const app = Vue.createApp({
      data() {
        return {
          counter: 0
        }
      },
      watch: {
        resetCounter() {
          if(this.counter > 10) {
            this.counter = 0
          }
        }
      },
      methods: {
        add(num) {
          this.counter++
        },
        reduce(num) {
          this.counter--
        }
      }
    })


Take a look, if the counter is greater than 10, the counter is reseted
to zero.

See de code running in the example 9 folder.



=========================== Class 20 ===========================
