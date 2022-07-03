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

Obs:Computed can't be called on events.

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


Short-Hands

  V-on:
  For V-on (events) we can use just "@". Ex:

    v-on:click="add(1)"

    Is the same that:

    @click="add(1)"

  V-bind
  And for V-bind, we can use ":". Ex:

    v-bind:value="name"

    is the same that:

    :value="name"

Remember to be consistent in the use of your choice.


=========================== Class 21 ===========================

Time to practice!

Acces to challenge 3 and resolve that!


=========================== Class 22 ===========================


-Dynamic Inline Styling

  To use dinamic style, the Vue use a especial sintax on HTML file.
  First of all, we need to create a shape to select our element to 
  style.

  1- Create de Js file:

    const app = Vue.createApp ({
      data() {
        return {
          boxASelected: false,
          boxBSelected: false,
          boxCSelected: false
        }
      },
      methods: {
        boxSelected(box) {
          if(box === 'A') {
            this.boxASelected = true
          } else if(box === 'B') {
            this.boxBSelected = true
          } else if(box === 'C') {
            this.boxCSelected = true
          }
        }
      }
    })

    app.mount('#styling')

    It's not the best form to create a select element code, but
    it's serve for know.

    
  Second, we need to create our HTML with our elements to style:

  HTML file:

    <section id="styling">
      <div class="demo" :style="{borderColor: boxASelected ? 'red' : '#CCC'}" @click="boxSelected('A')"></div>
      <div class="demo" @click="boxSelected('B')"></div>
      <div class="demo" @click="boxSelected('C')"></div>
    </section>

  
  Know let's take a look on first Element "demo".
  1- We input the method to select, with "A" parameter, for our JS file knows
  what element we are going to style.

  2- We add the style propertie, and add the prefix ":" (v-bind). but
  to use Vue values on the propertie Style, Class, etc... We need to 
  use the special sintax with curly braces({ }) ex:

    :style="{'border-color': 'red'}"

    // We can remove the simples quotes, and replace with CamelCase:
    
    :style="{borderColor: 'red'}"

    // We also can use a simple logic in there:

    :style="{borderColor: boxASelected ? 'red' : '#CCC'}" 

    // If boxASelect is true, the border color is red, else 
    the border color is gray.


See the code running in the example 10 folder.



=========================== Class 23 ===========================


-Dynamic Classes

So now, suppose you want to style a element, but your style has
many properties, and use inline style is not appropriate.

Now, we learn how to add classes wich Vue. Step by Step:

  1-Create the class ou CSS File:

    .active {
      border-color: red;
      background-color: salmon;
    }

  2-Create your Js File, wich rules to active the class:

    const app = Vue.createApp ({
      data() {
        return {
          boxASelected: false,
          boxBSelected: false,
        }
      },
      methods: {
        boxSelected(box) {
          if(box === 'A') {
      //look that, the code changes for your opposite value.
            this.boxASelected = !this.boxASelected
          } else if(box === 'B') {
            this.boxBSelected = !this.boxBSelected
          }
        }
      }
    })

  3-Create de HTML file:


    <section id="styling">
      <div class="demo" :class="active" @click="boxSelected('A')"></div>
      // Or with conditions True or False:
      <div class="demo" :class="{active: boxASelected}" @click="boxSelected('A')"></div>
      <div class="demo" :class="{active: boxBSelected}" @click="boxSelected('B')"></div>
    </section>

  Check the sintax, the default class is added like a normal sintax ("class="demo"),
  but for dynamic classes with Vue, the sintax is based in True or False, being the 
  first parameter the class name created in CSS file, and the second is the corresponding
  value for "true" or "false".

  So:

    :class="{active: boxASelected}"

  It's the same as "Active class is true or false"

See the coding running in the example 11 folder.
    

=========================== Class 24 ===========================

Computed with Dynamic Styles.

So, how to remove the logic in the HTML file about the last class?

If you have a many class styles or the logic is very extensive, 
you can use Computed. Ex:

  HTML file:

    <section id="styling">
      <div class="demo" :class="changeStyle" @click="boxSelected('A')"></div>
      <div class="demo" :class="{active: boxBSelected}" @click="boxSelected('B')"></div>
      <div class="demo" :class="{active: boxCSelected}" @click="boxSelected('C')"></div>
    </section>

    const app = Vue.createApp ({
      data() {
        return {
          boxASelected: false,
          boxBSelected: false,
          boxCSelected: false
        }
      },
      computed: {
        changeStyle() {
          return {active: this.boxASelected}
        }
      },
      methods: {
        boxSelected(box) {
          if(box === 'A') {
            this.boxASelected = !this.boxASelected
          } else if(box === 'B') {
            this.boxBSelected = !this.boxBSelected
          } else if(box === 'C') {
            this.boxCSelected = !this.boxCSelected
          }
        }
      }
    })

    The a look, in the first element A, we can use a computed for
    corresponding the "{active: boxASelected}".

See this code running in the example 12 folder


=========================== Class 25 ===========================


A simple sintax extra, for the classes is the class lists in HTML

You can add a more than one class in a element, use the below sintax:

    <div :class="[demo, {active: boxASelected}]" @click="boxSelected('A')"></div>

See that code running in the example 13 folder.


=========================== Class 26 ===========================


Time to practice. 

Look the challenge 4 and resolve that.


=========================== Class 27 ===========================


Module Summary

Acces the link:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463232#overview



########################### Module 3 ###########################


=========================== Class 01 ===========================


- Rendering Content Conditionally

For the rendering conditional content, you can use the special Vue propertie
"v-if", like a Js propertie "if". ex:

  HTML File

    <p v-if="goals === 0"> No goals have been added yet - please start adding some! </p>

  Js File:

    const app = Vue.createApp({
      data() {
        return { 
          goal: '',
          goals: [], 
        };
      },
    })

Check that code running in example 1 folder.



=========================== Class 02 ===========================


- More Deep on Conditional Content

As we can imagine, the Vue also suported the JS properties "else if()" and
"else()". And you can use typing: v-else-if, or "v-else". ex:


    <p v-if="goals === 0"> No goals have been added yet - please start adding some! </p>
    <ul v-else>
        <li>Goal</li>
    </ul>

But remember! This just works if you put one below or above the other, if there is
a another element between the sintax, that not works.


Se that code running in the example 2 folder.



=========================== Class 03 ===========================


-V-Show

A alternative to "v-if", is "v-show"... V-show, similar to v-if but
don't works together "v-else-if" and "v-else", and another feature is 
that no remove the element when de condition is false, the element continue
being part of the DOM, but commented.

  Ex:

    <p v-show="goals === 0"> No goals have been added yet - please start adding some! </p>
    

Use the v-show when the element appears for many times in your page, 
because v-show has a more performance than v-if


See the code running in the example 3 folder.



=========================== Class 04 ===========================


- Loops 1/2

If you need to repeat element following a list, you can use "v-for".
Ex:

    <ul>
      <li v-for="goal in goals">{{ goal }}</li>
    </ul>

Remember! The element that running in list, just can be accessed inside
of the f-vor element.

Check the code running in example 3 folder.


=========================== Class 05 ===========================

- Loops 2/2

V-For tricks:

  We have more ways to work with For:

  1- Show the index. 
  You can show the index of the value printed. Ex:

    <li v-for="(goal, index) in goals">{{ goal }} - {{ index }}</li>

  2- Work with Objects.
  We can running a objet with V-For. Ex:

    <ul>
      <li v-for="(user in users">{{ user }}</li>
    </ul>

  And we can show the key of value:

    <ul>
      <li v-for="(value, key) in users">{{ key }}: {{ value }}</li>
    </ul>

  And finally, the index:

    <ul>
      <li v-for="(value, key, index) in users">{{ key }}: {{ value }} - {{ index }}</li>
    </ul>

So, when we work with lists, "v-for" has the following parameters:

    v-for(value, index) in list

And when we work on objects:

    v-for(value, key, index) in list


Looke the code running in example 4 folder



=========================== Class 04 ===========================


- Remove item

So how we can remove the item, with your index, it's very simple:

First of all, we need to create a new method to remove:

    remove(idx) {
      this.goals.splice(idx, 1)
    }

Second step, we need to add this method in our element. 
Remember! We just can acces the index (we need), inside of the 
element that v-for is running.

    <li v-for="(goal, index) in goals" @click="removeGoals(index)">{{ goal }} - {{ index }}>


See the coding running in example 4 folder.


=========================== Class 05 ===========================

- Key

So, we can a little problem when we use the v-for. Sometimes, the 
elements that be shown, can inherit the properties of another elements
when are interacted.

Because of this, the Vue offer a special atribute that we can use
to specify which child have this properties. The atribute is key.

So we can use the anything of value, but is recomended to use items
ID. But for our little example, we use the value of index list:

    <li v-for="(goal, index) in goals" :key="goal" @click="removeGoals(index)">{{ goal }} - {{ index }}</li>


Check this code running in the example 4 folder.


=========================== Class 06 ===========================

Time to practice, check the challenge 1 folder and resolved.




########################### Module 5 ##############################



=========================== Class 01 ===========================

THis is class is a introduction about the Vue behind the scenes

For more, access the link:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463362#overview


=========================== Class 02 ===========================

Reactivity on datas

So how data reactivities work behind the scenes on Vue?

See on: 

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463370#overview



=========================== Class 03 ===========================


- More than one Vue App.

In a single page, we can have more than one Vue app, but de properties can't be
mixed. 

So to use, is very simple... Just code on after another. Ex:

  HTML file: 

    <section id="app">
      <h2>How Vue Works</h2>
      <input type="text" @input="saveInput">
      <button @click="setText">Set Text</button>
      <p>{{ message }}</p>
    </section>
    <section id="elementA">
      <h2>{{ name }}</h2>
    </section>
    <section id="elementB">
      <h2>{{ name }}</h2>
    </section>

  Js File:

    const appA = Vue.createApp({
      data() {
        return {
          name: 'Caio'
        }
      }
    })

    const appB = Vue.createApp({
      data() {
        return {
          name: 'Montenegro'
        }
      }
    })

    appA.mount('#elementA')
    appB.mount('#elementB')



=========================== Class 04 ===========================


