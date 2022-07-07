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

Check the code running in example 1 folder

=========================== Class 04 ===========================


- Templates

All the HTML code inside of the Vue app element, it's called
"Template".

And we define template with other form: in Vue.app Code. Ex:

  HTML file:

    <section id="elementB">
    </section>

  Js file:

    const appB = Vue.createApp({
      // remeber the use double crases
      template: `<p>{{ name }}</p>`,
      data() {
        return {
          name: 'Montenegro'
        }
      }
    })

See the code running on the example 1 folder


=========================== Class 05 ===========================


- Refs

The offer another way to capture data elements, this way is "Refs".
Use Refs to capture value elements coding?

    ref="text"

To use ref on your Vue app, just use:

    this.$ref.text.value

The refs, offers many datas about the element, for know about this
datas, coding:

    console.dir(this.$ref.text)


=========================== Class 06 ===========================

- Virtual DOM

So how Vue, read and update the DOM?

Read DOM, and update him demands many perfomance, so VUE create a
virtual DOM, and use that for compare with real DOM, and realise
your modifications.

Check that explanation for more about that:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463390#overview


=========================== Class 07 ===========================


- Vue lifecycle

So which is Vue lifecycle? It's not complex. Watch about it in:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463392#overview



=========================== Class 08 ===========================

- Vue Lifecycle - Practice

SO how VUe Lifecyle works on pracitice?

Check ou that link:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463394#overview




############################ Module 6 ###########################


=========================== Class 01 ===========================

- Components 1/2

Ok, check the example 1 folder, and run the code on the browser. After
test the Show/Hide Details and you can look our problem...

That problem, that we have resolve with components in the next class.


=========================== Class 02 ===========================


-Components 2/2

So now, lets see the step by step to how create our component.

THe components as mini apps, which contains your own datas, 
methods, computeds, etc...

And to declare that, follow the steps:

1 - Create de component:

  Below the create.app, and use the parameters:
  1- Name of component, use de dash between the works
  2- The properties of the normal app.

    app.component('friend-contat', {
      data() {
        return {

        }
      },
      methods: {
        
      }
    })

2- Type the template, before the data, remember to use
crases.

    app.component('friend-contat', {
      template: `
        <li>
          <h2>{{ friend.name }}</h2>
          <button @click="toggleDetails">{{ showDetails ? 'Hide' : 'Show' }} Details</button>
          <ul v-if="showDetails">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>
      `,
      data() {
        return {
        }
      },
      methods: {
      }
    })

3- Type usually the methods, and another properties.

    data() {
      return { 
        showDetails: false,
        friend: {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '888-888',
          email: 'manuel@email.com.br'
        },
      }
    },
    methods: {
      toggleDetails() {
        this.showDetails = !this.showDetails
      }
    }


4- In HTML file, type a new Tag, with component name:

    <friend-contact></friend-contact>


Now, see the code running in example 2 folder




####################### Module 7 ######################


=========================== Class 01 ===========================

This class is about the module introduction, see more on:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463430#overview



=========================== Class 02 ===========================


Until now, we use the HTML file openning in the browser without a server
and that, is not appropriate to develop a real project.
So let's understand more about the use of dev servers:


https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463440#overview



=========================== Class 03 ===========================


Know, is important understand, we use the vue, in your
basic form... And that, create difficults for debugs, 
read the code in bigger projects, and another things...

Read more about that in:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463444#overview



=========================== Class 04 ===========================

So let's start to install Vue.CLI...

Follow the step by step on:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463450#overview


=========================== Class 05 ===========================

After to run the command 

    vue create

And after

    run serve

You must have noticed, were created many files, 
of differents types. Let's see about them on:

  
  https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463454#overview



=========================== Class 06 ===========================

On this class, let's see about some main files.

Our mains folder is SRC(source) and Public.

On public folder, we have our main HTML file

And in src file, we have our components, that know 
are be created with VUe.files, which support HTML
JS and CSS on the same file.

Se more about that on:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463458#overview


=========================== Class 07 ===========================


FOr help us to develop a vue projects, intalls two
more extension on VS Code:

Vue Language Features
Vetur


=========================== Class 08 ===========================

Yet we have another files unexplored...

So, take a look a little bit on:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463462#overview


=========================== Class 09 ===========================

- New Project

So, let's remember how to start a new Vue project.

1- After install the Vue, run the code:

    vue create 'name of project'

2- Configure your project, you can use de default configuration.

3- If you get read project on the hub, or another place, install
the project models with:

    npm i 

  or

    npm intall

3- Run the server

    npm run serve

  And our server, is running on 8080 port.

4- Access page:

    localhost:8080


=========================== Class 10 ===========================


- Build Vue Project

So now, we will create a simple Vue Projec. 


1- Index.html

Our index HTML, on public folder is responsible for render our
Vue.app in Vue file.

    <div id="app"></div>

  On that div, our content is rendering


2- Main.js

On our main.js file we import the vue modules, App.Vue, and create
our app wich the App.vue with parameter and mounted him.

    import { createApp } from 'vue';

    import App from './App.vue'

    createApp(App).mount('#app');



3- App.vue

Here we import our components, we use two main tags:

  -Template

  Here we type our template(html), that we want to 
  render.

      <template>
        <h2>My Friends</h2>
        <ul>
          <li></li>
        </ul>
      </template>

  -script

  Here we type our Js code.

      data() {
        return {
          friends: [
            {
          id: 'carolina',
          name: 'Carolina Alto',
          phone: '777 777',
          email: 'carolina@email.com'
        },
        {
          id: 'gustavo',
          name: 'Gustavo do Alto',
          phone: '999 999',
          email: 'gustavo@email.com'
        }
          ]
        }
      }

  But remember, we need to export this code, 
  for our mains.js file. So we need to encapsulate
  that code, on export.:


      export default {
        data() {
          ...
        }
      }


Check the code running on the example 4 folder.



=========================== Class 11 ===========================


- Creating Components

1- Create a new folder named "components" on src folder

2- In there, create a new VUe.file with pascal case named
as name component.

    FriendContact.vue

3- In component file, create your script and template tags.

    <template></template>

    <script></script>

4- Create your script content in his tag.

  A- Open the export object:

    export default {

    }

  B- Code your js:

    export default {
      data() {
        return {
          detailsAreVisible: false,
          friends: {
            id: 'carolina',
            name: 'Carolina Alto',
            phone: '777 777',
            email: 'carolina@email.com'
          },
        }
      },
      methods: {
        toggleDatails() {
          this.detailsAreVisible = !this.detailsAreVisible
        }
      }
    }

5- Write your HTML file content:

    <template>
      <li>
        <h2>{{ friends.name }}</h2>
        <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
          <li>
            <strong>Phone:</strong>
            {{ friends.phone }}
          </li>
          <li>
            <strong>Email:</strong>
            {{ friends.email }}
          </li>
        </ul>
      </li>
    </template>

6- In mains.js file, import the Vue modules, and after
import the App.vue file, and FriendsContacts.vue component

    import { createApp } from 'vue';

    import App from './App.vue'
    import FriendsContacts from './components/FriendsContacts.vue'


7- Create our Vue App, instance the component and mount our app.

    const app = createApp(App)

    app.component('friends-contacts', FriendsContacts)

    app.mount('#app');


8- Lastly insert our new component tag ('friends-contacs')
in your template in App.vue.

    <ul>
      <friends-contacts></friends-contacts>
      <friends-contacts></friends-contacts>
    </ul>


=========================== Class 12 ===========================


-Style section

In our vue files, we also have style tag section. And is vey easy
and common to use.

On the App.vue:

-Open the style tag:

    <style></style>

And insert the styles



########################### Module 8 ############################



=========================== Class 1 ===========================


-Properties 1/5

On our last example, we can use the component for show us the data
friends. But we don't use the dinamic datas. 

Remebem on the example 1 page.

So now, let's see about the properties, and understand how that 
resolve our problem.

First, type on the script of component file, the props. Use 
the array to add your props. Ex:

    <script>
      export default {
        props: [
          'name',
          'phoneNumber',
          'emailAddress'
        ]
      }
    </script>

    Remember to use camelcase here, and Vue will take care to 
    transform to kebab case for use on HTML Component Tag.

On second step, use interpollation on component template:


    <template>
      <li>
        <h2>{{ name }}</h2>
        <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
          <li>
            <strong>Phone:</strong>
            {{ phoneNumber }}
          </li>
          <li>
            <strong>Email:</strong>
            {{ emailAddress }}
          </li>
        </ul>
      </li>
    </template>

And the last step, in your App.vue. Add our properties using kebab case
in our component tag. For this example, we type the data direct on the 
props:

    <ul>
      <friends-contacts
        name="Carolina Alto"
        phone-number="777 777"
        email-address="carolina@email.com"  
      ></friends-contacts>
      <friends-contacts
        name="Gustavo do Alto"
        phone-number="888 888"
        email-address="gustavo@email.com"
      ></friends-contacts>
    </ul>

Check this code running on the example 2 folder.



=========================== Class 2 ============================


- Props 2/5

Changing Props

The props, works with unidirectional data flow, so we can't modifier
parents data with child component. But we have a alternative for that.
And is simple, we can create a new data on the child component and 
give your value of parent data. Ex:

    data() {
      return {
        detailsAreVisible: false,
        friendIsFavorite: this.isFavorite
      }
    },

After, we can use the new data "friendIsFavorite", on the template
of component child, and his method.

  template:

    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
    <button @click="toggleDatails">{{detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <button @click="toggleFavorite">Favorite</button>

  Data:

    data() {
      return {
        detailsAreVisible: false,
        friendIsFavorite: this.isFavorite
      }
    },

  Method:

    toggleFavorite() {
      if(this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0'
      } else {
        this.friendIsFavorite = '1'
      }
    }

See that code running on the example 2 folder



=========================== Class 3 ============================


- Props 3/5

When we work on shared project, maybe is important set how the 
props of child component might be used. And for this, the props
have a other tools, which facilitate our job. For use this methods, 
the props becomes a object.

  -Type:
  We can use the type, to tell what data type might be used.
  Ex:

    type: String / Boolean / etc..

    Remember to type capital first letter
  
  -Required
  Serves us for descriminate if data is mandatory or not.
  Ex:

    required: true/false

  -Default
  We can use a default value, for the prop, mainly if the prop
  value isn't required
  Ex:

    default: '100'

    Ps: Default value might be obey the type prop.


  -Validator
  Is a function that return if prop value is correct or not.
  If value is not correct, the function return false in 
  browser console.


    validator: function(value) {
      return value === '1' || value === '0'
    } 

    If the prop value is different of 1 or 0, the validator
    returns 'false on our console'

  
Example of complete prop:

    props: {
      name: {
        type: String,
        required: true
      }, 
      phoneNumber: {
        type: String,
        required: true
      },
      emailAddress: {
        type: String,
        required: true
      },
      isFavorite: {
        type: String,
        required: false,
        default: '0',
        validator: function(value) {
          return value === '1' || value === '0'
        }
      }


See this code running on the example 3 folder.



=========================== Class 4 ============================


-Props 4/5


Other types to use on our props:

  string
  number
  boolean
  array
  object
  date
  function
  symbol



=========================== Class 5 ============================


-Props 5/5

For finish the props, it's time to see dinamic values using props.

So, supose our child component must work with parent component data,
or the type of some prop is "Boolean". We need to change the way 
that parent component works with props.

1- If we working with boolean type props, we don't need to use
validator, because with boolean props we have only two values.

2- On component tag, use v-bind to add dynamic value, and add
the value. Ex:

      <friends-contacts
        :email-address="friend.email" 
        :is-favorite="false" 
      ></friends-contacts>

3- If you need to repeat this component, for a data list, 
remember to use "v-for" with "key"

      <friends-contacts
        v-for="friend in friends"
        :key="friend.id"
        :email-address="friend.email" 
        :is-favorite="false" 
      ></friends-contacts>


=========================== Class 6 ============================





- Child for Parents Comunication

So, we also can stablish a comunication from child to parents 
components. That comunication is maked by events.Take a look:

Let's make a new event comunication, using the Toggle Favorite
Button, at exampe 4 folder.

1-Create the event

  On methods of child component (FriendContacts), create the 
  method, with "$emit":

    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite')
      }
    }

    For this events, is mandatory the use of kebab case.


2- Call the event
  On your parent component, inside of child component tag, 
  call the event with "v-on/:"

    <friends-contacts
      @toggle-favorite="toggleFavoriteStatus()"
    ></friends-contacts>

    Inside of the content, use a new method created on 
    parent component (next step)
  
3-New method parent
  For example, use the method below, and as argument the 
  data 

    methods: {
      toggleFavoriteStatus(friendID) {
        
      }
    }

4-Send child data for parent
  On the event method in child component(FriendsContacts) insert 
  your second parameter. You can insert as many as you want.


    methods: {
      toggleFavorite() {
        this.$emit('toggle-favorite', id)
      }
    }

5-Registeron child props.
  Register the data parameter on the child props

    props: {
      id: {
        type: String,
        require: true
      }
    }

6- Call the data(parent)
  Call the data on the parent component in the child tag 
  component:

    <friends-contacts
      :id="friend.id"
      @toggle-favorite="toggleFavoriteStatus()"
    ></friends-contacts>

    If you need to send a simple data by child to 
    parent, it's enough


7-Identify friend
  For our example, we yet need to find which friend
  be change his favorite status. So on the parente Component
  complete with:

     methods: {
      toggleFavoriteStatus(friendID) {
        const identifiedFriend = this.friends.find(
          (friend) => friend.id === friendID
        )
        identifiedFriend.isFavorite = !identifiedFriend.isFavorite
      }
    }


=========================== Class 8 ============================


- Define and Validations Emits


Counterpart of the props, the emits alse have a form to make his
validation and documentation.

That serve us for facilitate the code read, and debugg possible 
erros.

  - Documentation:
  Code after props properties: 

        emits: [
          'toggle-favorites'
        ]

    
  -Validation:
  Cod the validation with:

        emits: {
          'toggle-favorite': function(id) {
          if(id) {
              return true
            } else {
              console.warn('Id is missing')
              return false
            }
          }
        },



=========================== Class 8 ============================


Prop / Event falltrhough & Binding all props.

For this content, acess link below:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21526774#overview



=========================== Class 9 ============================


Create New Component:

So lets to create a new Component in our example 5 folder.
The component, will add a new contacts on the friend list.

1-In componentts folder create a new component file. Ex:


    NewFriend.vue


2-In mains.js file, register our new component with:


    import NewFriend from './components/NewFriend.vue'

    app.component('new-friend', NewFriend)


3-Build the simple template on our new component:


    <template>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text">
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input type="">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email">
        </div>
      </form>
    </template>

4-Create the script, begnning with datas:

    <script>
      export default {
        data() {
          return {
            name: '',
            phone: '',
            email: ''
          }
        }
      }
    </script>


5- Connect the data with inputs using v-model


    <template>
      <form>
        <div>
          <label for="name">Name</label>
          <input type="text" v-model="name">
        </div>
        <div>
          <label for="phone">Phone Number</label>
          <input type="tel" v-model="phone">
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email">
        </div>
      </form>
    </template>


6- Create the event, to send this data for the 
parent component.

  1- Create the emit:

     <script>
      export default {
        data() {
          return {
            name: '',
            phone: '',
            email: ''
          }
        },
        methods: {
          submitData() {
            this.$emit('add-contact',
            this.name,
            this.phone,
            this.email
            )
          }
        }
      }
    </script>

  2- Document the emit, above the data propertie:

     <script>
      export default {
        emits: [
          'add-contact'
        ]
        data() {
        ...
    </script>


7- Add style section if you want. 


8- Add the child component tag on the parent template
  component.

     <section>
      <header><h1>My Contact Friends</h1></header>
      <new-friend></new-friend>
      ...
     </section>

9- Create the event for push the datas from child to data list 
of parent component:

    methods: 
      addContact(name, phone, email) {
        const newContact = {
          id: new Date().toISOString(),
          name: name,
          phone: phone, 
          email: email,
          isFavorite: false
        }
        this.friends.push(newContact)
      }
    }

10- Add your method above, in your form tag component:

    <form @submit.prevent="addContact">

    the prevent method, block the page refresh

10- Lastly, use the method above in our child component tag
as value to emit


    <new-friend
      @add-contact="addContact"
    ></new-friend>


This is it, we created a new component with use emits and 
send data to parent component.


Check this code running on example 5 folder.



=========================== Class 10 ============================


- Delete Friend

Now, we will create a new component for delete contact friends.

This function wil be a button, the friendsContacts component, in
example 5 folder.

1- Create a button on the template component:

    <button>Delete</button>


2- Create a new emit, to comunite de parent of event, with the 
data friend ID, that will be deleted

    deleteFriend() {
      this.$emit('delete-friend', this. id)
    }

    another form to create the emit, is direct on the 
    event tag:

    <button @click="$emit('delete')">Delete</button>


3- Input the emit on the tag button, and register that on 
emit list

    
    <button @click="delete-friend">Delete</button>

    emits: [
      toggle-favorite,
      delete-friend,
    ]
  
4- On parent component, call the emit on the child tag component,
and insert a new method that we will be create


    @delete-friend="deleteContact"

5- Create a method of parent, to say "delete friend"

    methods: {
      deleteContact(friendID) {
        this.friends = this.friends.filter((friend) => friend.id !=== friendId)
      }
    }

    The filter method, return us a new array with the values that respect
    the condition. So in this case:

    (friend) => running like a for loop

    friend.id !=== friendId The condition, if friend.id is diferent of our
    friendID sended by child, add this friend a new list.

It's simple.


=========================== Class 11 ============================


Time to practice, check the main.js file on the Challenge folder
and resolve the challenge.


=========================== Class 12 ============================


Sometimes, we need to create a new components just to use like a 
data route. And this, can be a problem. Supose if you need to 
pass a data, for a net element. For this you need to send the data
to the child element first, and his will take care to send the data
to che net component. 

Ex:

Check this video to see more:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463558#questions



=========================== Class 13 ============================


- Provide & inject

To resolve the last class problem, the Vue offer the Provide and Inject 
methods.

The logic is: 
 
 1- The parent component Provide the data/method/computed/etc...

 2- And child/net can be injected with that data.

ex:

  1-Provide somthing:

    // Parent

    export default {
      data() {
        return {
          name: Caio
        }
      },
      provide: {
        name: Caio
      }
    }


  2-Inject on child

    export default {
      inject: [
        'name'
      ]
    }

CAUTION: we only can inject thing, from parents to child.

But, if we have the same data in use, and we need to provide
him?

In this case, de dinamic is don't work correctly

In this case, we need to convert provide to a method:


1- Create provide method:

    // Parent

    export default {
      data() {
        return {
          user: [
            {
              name: 'Caio',
              age: 29
            },
            {
              name: 'Carolina',
              age: 28
            }
          ]
        }
      },
      provide() {
        return {
          user: this.user
        }
      }
    }

Provides and injection is used on the example 7 folder.



=========================== Class 14 ============================



