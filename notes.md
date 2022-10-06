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
only call if the element has a interpolation being triggered.

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

- Provide & Injection 1/4

Sometimes, we need to create a new components just to use like a
data route. And this, can be a problem. Supose if you need to
pass a data, for a net element. For this you need to send the data
to the child element first, and his will take care to send the data
to che net component.

Ex:

Check this video to see more:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463558#questions

=========================== Class 13 ============================

- Provide & inject 2/4

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

- Provides & Injection 3/4

As was commented previously, we canse the Provides and Injections
for functions and methods, the inplement is different:

Injection:
The injection is similar, use normally:

1- Provide:

    provide() {
      return {
        function: this.functionA
      }
    }

1- Inject:

    <button @click="function"></button>

    //remeber to use parameter if is required

    export default {
      'function'
    }

Check the code running on the example 7 folder.

=========================== Class 15 ============================

- Provides & Injection 4/4

So when shoud we use the provides and injections and not props and
methods?

For default, use the props and methods... But when we need to pass
datas and function for net components, choose the provides and injection.

=========================== Class 16 ============================

- Resume of the module:

Check the resume module on:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21463582#questions

########################### Module 09 ###########################

=========================== Class 01 ============================

- Global vs Local Components.

Supose we have a component, and that component is used only once
in a spefic other component.

We don't need to register the component globally. We can register
the component directly on component user.

For this, register the component on the parent script tag:

    <script>
      import BadgeList from './components/BadgeList.vue';

      export default {
        compoents: {
          BadgeList
          or
          'badge-list': BadgeList
          or
          BadgeList: BadgeList
        }
      }
    </script>

In the template tag:

    <template>

      <badge-list>
      </badge-list>

      or

      <BadgeList />

    </template>

See this code running in that example 1 folder

=========================== Class 02 ============================

- Scoped Style

If you need to style a component, and this componant is a parent,
your style will be replicate to child components.

But if you need to restrict this style to a parent component, you
can use the "scoped style":

You just need add the word "scoped" in our style tag:

    <style scoped></style>

Check this code running on the example 1 folder, in BadgeList.vue
file

=========================== Class 03 ============================

- Slots 1/5

If We have a component and his just have style, like a card, and
we wish to insert another component with dynamic props and datas,
we need to use Slots

Without slot, the vue can't render the component child.

Ex:

Supose this is a card component:

    <template>
        <div>
          <slot></slot>
        </div>
    </template>

And this, is a component, with dynamic datas:

    <card-component>
      <header>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </header>
      <p>{{ infoText }}</p>
    </card-component>

So with slots, we can render all the components, that are
in the card component.

See this code running on the example 1 folder.

=========================== Class 04 ============================

- Slots 2/5

If your need to use more than one slot, how can vue identify which
is which?

It's simple, naming the slots. Use the name especial property
on slot tag, and call using v-slot especial property. Ex:

1- Naming your slot

    <slot name="header"></slot>

2- Call the slot using the name:

    <template v-slot:header></template>

      If you will use just one slot, we can call
      the v-slot in a comum tag, without template tag

    v-slot = #

3- We can use the a only one slot without name, this
slot will be DEFAULT:

Confirm looking this code running on the example 1 folder

=========================== Class 05 ============================

- Slots 3/5

But remember, the component that has slot need be receive the style
directly on your component vue file.

Check the example on example 1 folder.

=========================== Class 06 ============================

- Slots 4/5

  - Default content

  Supose we have a situation, where we need add a slot, but which
  slot is not aways render the dynamic content.

  Is this case, we can render a default content.

  Just to type the default content inside of the slots tags.

  Ex:

        <slot name="header">
          <p>Hello world</p>
        </slot>

  And, when you used this slot without content, the default
  content be showed.

  But if we check the browser console, in the case of the default
  content is not be required, the default content will be showed
  in comentary content.

  For resolve that, we can use de dollar signal with v-if/v-show:

        <header v-if="$slots.header"

  Check the change, turn the mod in badgelist.vue file in
  components folder. This foder be in example 1 folder.

  - Slots datas

  If you need to know more about the data slots, we can use
  a special vue property. The Mount.

  Like this:

        export default {
          mounted() {
            console.log(this.$slots)
          }
        }

=========================== Class 06 ============================

- Slots 5/5

We have another possible situation, that props can hel us...

If we need a another component, and we need to use a dinamic content
on caller component... So, just we use the slots, but if the slot
works with components data...

On this case use scoped slots.

    <li v-for="goal in goals" key="goal">
      <slot :item="goal"></slot>
    </li>

    export default {
      data() {
        return {
          goals: [
            'Finish the course', 'Learn Vue'
          ]
        }
      }
    }

For pass this datas for the caller component, we use
v-bind + data.

And for call, we use v-slot:

    <template #default="slotProps">
              shorthand for default
    </template>

the slotProps call, wall props/datas declared on the
slot tag

And now we can use the props on the caller component:

    template #default="slotProps">
      <h2>{{ slotProps.item }}</h2>

      remember, we declared item === 'goals'
      and goals it's our list

    </template>

Check the code running on the new component CourseGoals.vue,
and App.vue on the example 1 folder.

=========================== Class 07 ============================

Dynamic Components 1/2

if we need to show a dynamic component, the vue present for us
a special tag: Component tag

Firts, create two components: Active Goals, and Manage Goals.

And in the parent component, we will to create two buttons, and
each buttons will show a component.

- Active Goals
- Manage Goals

After we need to create a new data for store which component
we want to show.

    data() {
      return {
        component: 'active-goals'
        // we using a active-goals as default.
      }
    }

Now, we create a method for the buttons:

    methods: {
      seletctComponent(cmp) {
        this.component = cmp
      }
    }

Lastly, we call the component using the tags:

    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>

    // And, instead to call the components by their name, we call using
    the tag component

    <component :is="selectedComponent"></component>

    // we use the is property with v-bind for set our data component,
    and render him.

Check the code running, with and without component tag the example 2 folder.

=========================== Class 08 ============================

Dynamic Component 2/2

SUpose one of the components, have a input field, and after that
user input something, he change the component after press a
button component (last example).

When the user click back to correct component, your data will be
lost.

So for this, we use the keep-alive tag.

It's simples, just use that tag above the component tag. Like this:

    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>

Now, the user don't lose your data...

=========================== Class 09 ============================

Finishing this module, we have another problem... And for understand
him, we need to construct the example problem. Check the link below
to construc the example.

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21526252#notes

=========================== Class 10 ============================

- Teleporting Elements

In our lastly example, we have a problem... The dialog is render in
a general div, and this is not semanctic. The correct way, is render the
dialog on the body, for example...

So how to transfer the dialog to another place?

It's simples, using the teleport special vue property:

    <teleport to="body">

    // here we set, the destiny of our content.

      <error-alert v-if="inputIsInvalid">
        <h2>Input is invalid!</h2>
        <p>Please enter at least a few characters...</p>
        <button @click="confirmError">Okay</button>
      </error-alert>
    </teleport>

Check this code running on the example 2 folder.

=========================== Class 11 ============================

- Fragments:

When we see the many tags loose on the single template, in VUE 2
we need to encapsulate them in a another tag, like a div...

Test this, on the MenageGoals.vue file component in the example 2
folder.

=========================== Class 12 ============================

Style Guide.

So, for naming the Vue components, the docs recomends us to follow
some rules...

But, the guide has two special rules:

For base components, like a cards styles. Use:

    BaseCard.vue

For single components, used once.

    TheHeader.vue

For for rules, access de vue site.

=========================== Class 13 ============================

-Moving to a different folder Structure.

So, work with single Component folder is very hard in big
projects... So for that, we can create a sub folders components.

Classified with his features.

Check the example on the example 2 folder.

########################### module 10 ###########################

PROJECT



########################### module 11 ###########################


=========================== Class 01 ============================

Inputs (1/5)

Input text (v-model)

As we'll saw, we can use v-model to get input values, and manipulate
them using Data and methods.

Ex:

Template:

    <form @submit.prevent="submitForm">
      <input id="user-name" name="user-name" type="text" v-model="userName" />
    <form>

  The .prevent, makes impossible browser to refresh the page, and we lost
  our datas.

Script
    data() {
      return {
        userName: ''
      }
    },
    methods: {
      submitForm: {
        console.log('Username: 'this.userName)
        this.userName = ''
      }
    }

Check the example works in Module 11 Folder.


=========================== Class 02 ============================


inputs (2/5)

Number Inputs 

In the same way that we using a input number, in backstage we receive a number on
string format.

So, how we can resolve this? Like this:

Diferent of our last example, where we define the data with a empty
string, now we use the the null value:

Template: 

    <form @submit.prevent="submitForm">
      <input id="age" name="age" type="number" v-model="userAge">
    <form>

  If v-model is a type number input, the Vue turn the string input a number
  automatically.

Script
  
    data() {
      return {
        userAge = null
      }
    },
    methods: {
      submitForm() {
        console.log(this.userAge)
      }
    }


=========================== Class 03 ============================


inputs (3/5)

Dropsdowns inputs:

Again, we'll use the v-model, but em on Dropsdowns, the best is 
use some dropdown value with default.

Example:

Template:

    <form @submit.prevent="submitForm">
      <div>
        <select v-model="select">
          <option value="google">Google</option>
          <option value="wom">Word of mouth</option>
          <option value="newspaper">Newspaper</option>
        </select>
      </div>
    <form>

Script:

    data() {
      return {
        select = 'wom'
      }
    },
    methods: {
      submitForm() {
        console.log(`Select is: ${this.select}`)
        this.select = 'wom'
      }
    }
  
Take look on this example in Module 11 folder.



=========================== Class 04 ============================


inputs (4/5)

Checkbox and radio buttons

How you should know, we can use v-model in the checkbox options and
radio buttons. Let's see:

Checkbox:

- More than one options:

We can confirm several checkbox options, so first in case of more than
one option, we need to create a list data for receive the options
selecteds.


  Script:

    data() {
      return {
        options: []
      }
    },
    methods: {
      confirmForm() {
        console.log(`Options selected: ${options}`)
        this.options: []
      }
    }

  template: 

    <form @submit.prevent="confirmForm">
      <div class="form-control">
        <input type="checkbox" name="videos" value="videos" id="videos" v-model="options">
        <label for="videos">videos</label>
        <input type="checkbox" name="photos" value="photos" id="photos" v-model="options">
        <label for="photos"> 
      </div>
    </form>

  Notice: we add the values, for descriminate what option we choosing
  in our js method.


- Just one option

If we have only one checkbox option, (commun in confirm terms) 
automatically, the value returned is true or false:

  Script:

    data() {
      return {
        agree: false
      }
    },
    methods: {
      agreeTerms() {
        console.log(`Terms acepted? ${this.agree}`)
        this.agree = false
      }
    }

  template:

    <form @submit.prevente="agreeTerms">
      <div class="form-control">
        <input type="checkbox" name="agree" id="agree" v-model="agree" />
        <label for="for"> I agree the terms and conditions</label>
      <div>
    </form>

    
  How we are use a submit event, and we have only one option checkbox,
  the vue will take care of changing the checkbox value for True or False.


Radios buttons:

For radios buttons, we also use the v-model to get their values. But, 
for the on the data that will receive the value, should have like default
value "null". 

And each tag radio input, should receive a single value, for the Vue know
which value was chosen.

  template:

    <form @submit.prevent="submitForm">
      <div class="form-control">
        <input type="radio" name="video" id="video" v-model="option" />
        <label for="video"> Videos </label>
        <input type="radio" name="photo" id="photo" v-model="option" />
        <label for="photo"> Photos </label>
      </div>
    </form>

  script: 

    data() {
      return {
        option: null
      }
    },
    methods: {
      submitForm() {
        console.log(`Option selected: ${this.option}`)
        this.option = null
      }
    }

Check the example on module 11 folder



=========================== Class 05 ============================


Valid Inputs

Exist any forms for validate our inputs and forms. Here we are
make one of them:

Here, we will create one of them:

  Script: 

    data() {
      return {
        value: 'valid',
        userName: ''
      }
    },
    methods: {
      submitForm() {
        console.log(`Username: ${this.userName}`)
      },
      validateUser() {
        if(this.userName === '') {
          this.value = 'invalid'
        } else {
          this.value = 'valid'
        }
      }
    }

    Now, we have another function method. And it's is responsible 
    to validate our UserName.

  Template

    <form @submit.prevent="submitForm">
      <div class="form-control" :class={invalidInput: value === 'invalid'}>
        <input type="text" name="user-name" id="user-name" v-model.trim="userName"
        @blur="validateUser"
        <p v-if="value === 'invalid">
          Please insert a valid username.
        </p>
      </div>
    <form>

    Take a look above, we use the "trim" method together the v-model, 
    for the browser remove the spaces in the end and start of string

    We also add a new class, if the data "value" is the same of "invalid"
    we alternate the style.

    For finish, we present a paragraph if the "userName" is valid, using
    v-if.


  CSS:

    .form-control.invalid input {
      border-color: red;
    }

    .form-control.invalid label {
      color: red;
    }

Check this example running on the 11 folder.



=========================== Class 06 ============================


Custom Controls

Supose that we have a custom component, like a button or other input type.
And this custom component, receive custom data that we configure.

How we get the values?

First of all, we'll make our example. 

Check the RatingControl component, on the module 11 folder.




=========================== Class 07 ============================


Get Custom Control value.

For this, we can use v-model, but under the covers the vue works with
diferent form.

First we need to pass the a prop for our component:

  Script

    props: ['modelValue'],
    data() {
      return {
        activeOption: this.modelValue
      }
    }

After we need to send a emit, for give data for parent:


  script

    props: ['modelValue'],
    emits: ['update:modelValue'],
    data() {
      return {
        activeOpetion: this.modelValue
      }
    },
    methods: {
      activate(option) {
        this.activeOption = option
        this.$emit('update:modelValue', option)
      }
    }




########################### module 12 ###########################


=========================== Class 01 ============================

Why we need back-end?

We need to save our data, and send requests for consult or 
change de datas.


=========================== Class 02 ============================


Add Back-end

We need a simple back end for our app, and we use the Google
FireBase on our course.

For this, we just need to create google acount and access the 
Firebase site.

After, create a Realtime Database.


=========================== Class 03 ============================



How to send the our requets?

We have some alternatives, a popular alternative is Axios, but
for this course, we use the Fetch 



=========================== Class 04 ============================


Send request for FireBase.

Fetch:

  First add complete the ULR Firebase with file for save our 
  data:

    fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json')

    We complete the URL with surveys.json, because FireBase force us.

  Now, we need add other parameter as an object: the Header of our request wich request parameter:

    fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json',
    {
      method: 'POST',    //method POST
      headers: {
        'Content-Type': 'application/json'  //type of content: (json)
      }
    })

  Now, we are pass the datas by body:

    fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json',{
      method: 'POST',
      headers: {
        'Content-Type': 'applicaton/json'
      },
      body: {
        name: this.enteredName,
        rating: this.chosenRating
      }
    })

  Now, our Firebase Database, will create a ID for this data, and save them

Check the example running on the module 12 folder.



=========================== Class 05 ============================


HTTP Requests and methods(verbs)

GET - Request datas
POST - Send and save data
DELETE - Delete datas from Database
PUT - Substitute all representations in the server
PATCH - Update parcial thing in the data.




=========================== Class 06 ============================


Axios 

The fetch is a browse method to send HTTP request, but we can
use librarys to sent request of simple form. For example Axios

First we need to instal axios as a dependence of our application:

    npm install -D axios

After that, we need import axios in our component:

    <script>
    import axios from 'axios'
    export default{

      axios.post('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json'{
        name:this.enteredname,
        rating: this.chosenRating,
      })
    }
    </script>



=========================== Class 07 ============================



Getting Data

So now, we need to present the data on the scree, for this we'll use
the fetch for make GET HTTP Request.

First create method:

  Template: 

    <button @click="getData"> View Datas </button>

  script: 

    methods: {
      getData() {
        fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json')
      }
    }

    The fetch works with GET Request for default, so we don't need to set header and body

Now we need to think on the delay that fetch has for get the data, so FETCH will use
promisses:

  script:
  
    methods: {
      getData() {
        fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json').then((response) => {    // this function is for wating datas
          if (response.ok) {   // if we correctly receive the datas with json file
            return response.json()   //return json file with datas
          }
        }).then((data)=> { //here, this function running after the firs then has been executed
          console.log(data)
        })
      }
    }

We are already receiving the data, but on json file. We need to transfer the data for a list
in the client, and present them:

  Create a list, to receive the json data:

    data() {
      return {
        results: []
      }
    }

Now we need to populate the results list, with the objects json:


    methods: {
      getData() {
        fetch('https://vue-course-demo-46ae1-default-rtdb.firebaseio.com/surveys.json').then((response) => {    // this function is for wating datas
          if (response.ok) {   // if we correctly receive the datas with json file
            return response.json()   //return json file with datas
          }
        }).then((data)=> { //here, this function running after the firs then has been executed
          cons temporaryResults= [] // We create new list for manipulate the Datas
          for(const id in data) { // Loop for push IDs of datas on the temporaryList
            temporaryResults.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            })
          }
          this.results = temporaryResults // We officialy populate the result list.
        })
      }
    }

Check this example on module 12 folder.




=========================== Class 08 ============================


Loading Data Without click on button.


We can show the datas, without need click the button.

If we remember the life cicle of app, we will see the mounted is
responsible for mounted Vue instance and render data if this 
change.

So we just need to create a mounted hook on our end script section 
section, and call the function that make the HTTP request:

  Script:

    mounted() {
      this.loadExperiences()
    }

Check the module 12 folder for look this example. (Maybe the code is
commented on UserExperience file.)




=========================== Class 09 ============================



Add Loading message.


If we need to show a loading message while our request is not 
load?

First, create a new data with boolean value:

Script:

  Create New Data:

    data() {
      return {
        isLoading: false
      }
    }

  As soon as request start, change the value of new data:

    methods() {
      loadExperiences() {
        this.isLoading = false
      }
    }
  
  After of request receive the values, we turn back the original
  value of new Data (isLoading):

    then((data)=> {
      this.isLoading = false
    })


For conclude, we need to add dinamic content on our HTML component
section, for show the loading message:

HTML:

  Create a new content if the value of new data (isLoading) if it is
  fake:

    <p if="isLoading">Loading...</p>
    <ul if="!isLoading">
      (( component that render the datas ))
    </ul>

Check that code running on module 12 folder in UserExperience file component.



=========================== Class 10 ============================


Don't Data Base case

Supose that we don't need any data on our back-end database. 

In this case, is very easy. We just need to consult our result array
and add a another dinamic content, in case of empty array. Cause our
array is populate with our back-end datas

HTML:

    <p v-if="isLoading">Loading...</p>

  Firts, we need to create a new rule for empty database/array:

    <p v-if="isLoading"> Loading... </p>
    +
    <p v-else-if="!isLoading && (!results || results.length === 0">
      The database is empty
    </p>

    New rule: if loading is false, and results are fase or length less
    than 0

  For finish, we need to increase changes in our last rule, for show the 
  datas:

    <p v-if="isLoading"> Loading... </p>
    <p v-else-if="!isLoading && (!results || results.length === 0">
      The database is empty
    </p>
    +
    <p v-else-if="!isLoading && results && results.length > 0">
      <component that show data>
    </p>

    Rule Change: If loading is false, results array is true, and length 
    of results is greater than 0


See the code working on the module 12 folder, UserExperience file component.




=========================== Class 11 ============================


Get Errors


Supose we have a error on our request, for this we need to use Catch
method for resolve.


Check the script for resolve:

Script:

    1- Set new data error, with null value cause we don't erro error yet

    data() {
      return {
        error: null 
      }
    }

    2- After .then promisses, we will create the .catch method. And he, 
    will execute a new function if .then's failed.

    .catch((error)=> {
      console.log(error)      // show the error
      this.isLoading = false    // For don't showwing loading permanently
      this.error = 'Failed to fetch datas, please try again later' 
      // ^ the error message that we use in our page.
    })

    Remember to return the error value to null before fetch in method begin lines.
    line 42 on the UserExperience component. at module 12.

HTML:

    Now, we gonna insert new rule, for show a error paragraph:

    After the success case, we should put the error case immediately:

    <p v-if="isLoading">Loading...</p>

    <p v-else-if="!isLoading && error">
      {{ error }}
    </p>


Check this example working on the UserExperience component in the module 12 folder.




=========================== Class 12 ============================



Server Errors


We alse can receive server erros, usually we can receive erros from the server
and this errors are sended with 400 or 500 code errors...

Lets to resolve this:

Script:

    1- Create new Then, with two conditions: Response OK and Response not OK.

    .then(response => {
      if(reponse.ok) {
        // conditions if response is ok
      } else {
        throw new Error('Could not save data!')
        // throw new Error, we use for create a new object error, and insert a image error
      }
    })
    .catch((error)=> {
      console.log(error)
      this.error = error.message
      // Now that erros is an object, we call your message.
    })

HTML:

    <p v-if="error">
      {{ error }}
    </p>


Now we can handdle erros.

See the code running in the LearningSurvey component at module 12 folder





########################### module 13 ###########################


Multi and Single-page


=========================== Class 01 ============================

Routes (1/3)

Routing Setup 

So, we can create routes with personal URL for our unique HTML content.

For this, we need to follow the steps bellow:

  Install the vue-router package:


    npm install --save vue-router

  
  In main.js file, import the package:


    import {createRouter, createWebHistory} from 'vue-router'

    //create router for create routes, and createWebHistory for
    create a navigation web createWebHistory on the browser

    const router = createRouter({
      history: createWebHistory(),
      routes: []
    })
  
Let's conclude the setup on the next class


=========================== Class 02 ============================


Routes (2/3)

Registering & Rendering Routes

Configuring the main.js

  1- Import the component files:


    import TeamsList from './components/teams/TeamsList.vue'
    import UsersList from './components/users/UsersList.vue'


  2 - Add the path and component name on the router:


    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/teams', component: TeamsList}
        // path is URL Path, and component is name of component imported above ^
      ]
    })

  3 - For finish, use the 'use' method for allow the app use another
  packages:


    app.use(router)


Now is important know, we don't need import the components that we using
for routes. Neither locally nor globally.


  So, in the component that call the components routes, substitute the 
  components for special component route:

    <router-view> </router-view>



=========================== Class 03 ============================

Routes(3/3)

Now we need to configure the links, that direct us for the component
pages.

For that, we use the router link:

  1- It's simples, just substitute the old button or link for
  router link tag:

    <router-link> </router-link>

  2- And configure the link for router:

    <router-link to="/teams"> Team </router-link>

  
  Now the vue will do the rest for us.

Check this example on the TheNavigation component in the module 13



=========================== Class 04 ============================


Style Router-view


Router-vew has a special class to style. The mainly are two:

1-router-link-active
2-router-link-exact-active

We can se both, if we inspect the router-view when we click him.

The diference is on the route. If you need to style only simple route,

  example:

    localhost:3000/users

  use the router-link-exact-active

  Now, if you want to style all chields routes:

    localhost:3000/users/womens

  use the router-link-active


We can customise this class in the main.js file. Example:

  After configure the routes in router:

    routes: [
      //.....
    ],
    linkActiveClass: 'allRoutes'

Check the example on TheNavigation component in the module 13




=========================== Class 05 ============================


Programmatic navigation

Supose that we have a form, and after send datas by form, the page
should be change content.

For this, we use $router methods:

  First, create a new simple button for this example:

    <button @click="confirmInput"> Confirm </button>

  After, we need to create the method confirmInput, and
  send the $router method:


    methods: {
      confirmInput() {
        this.$router.push('/teams')
        //Push to insert the new path ou the router history, 

      }
    }

It's very simple, we need other router methods, like:

    $router.back() to return the last content page
    $router.forward() to go for next content, after come back content.


Check the exampele on the UsersList component file in the module 13 folder



=========================== Class 06 ============================


Send params with routes:


Sometimes, we need to send datas as params through the routes.

It's simple, the real work is to use the datas on your components.

  1 - On our main.js file, import the component that receive the 
  params:

    import TeamMembers from './components/teams/TeamMembers.vue'

  2 - Now, add a new route, with name of param:

    {path: '/teams/:teamId', component: tamMbembers}  

    // When we input the ':' before the route, means all that 
    are after the ':' be params

  3 - Rembemer, always that we use a params with our route, 
  register them last, for avoid mistakes.


Check the TeamMembers.vue file for see the code running, in the module 13 folder.

Link with more explanations:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879340#overview




=========================== Class 07 ============================


- Navigation & Dinamics Paths. 


If we need work with dinamic links, we can use router link dinamics:

  1 - Create our dinamic link:

    <router-link> View Members </router-link>

  Now, we have two ways: 

  1- Set the dinamic link in the router-link tag:

    HTML:

    <router-link :to="/teams/ + dinamicValue"> View Members </router-link>

    Script:

    data() {
      return {
        dinamicValue = 'supose'
      }
    }

  2- Set the route with Computed:

    HTML:

    <router-link :to="membersTeamURL"> View Members </router-link>

    Script:

    data() {
      return {
        dinamicValue = 'supose'
      }
    },
    computed: {
      membersTeamURL() {
        return `/team/${this.dinamicValue}`
        // It's wrong way, seee the class 12 to correct way.
      }
    }

Check this code running on the TeamsItem component on the module 13 folder.



=========================== Class 08 ============================



Update Params Data with Watchers


When we are in the dinamic URL on our Browser, and we change
the dinamic param, but in the same route. The browser don't do
nothing, because he use the cache, instead destruct and create
a new DOM.


So for resolve this, we use the watchers for resolve this.


  Script:

    methods: {
      loadTeamMembers(route) {
        // code
      } 
    }
    watch: {
      $route(newRoute) {
        // ^^^ the watcher will be executed when $route receive a new Route param

        this.loadTeamMembers(newRoute)
        // And after execute this method ^^^
      }
    }

Check the example runnin on the teamMembers component in the module 13 folder.



=========================== Class 09 ============================


Passing Params as Props.


Is much better use props than params route. Because our component that
receive the datas is more usefull.

So for this, we just need to insert the name of props in the component:

  Script Component

    props: ['teamId']

And lastly, allow the props on the route:

  Main.js

    { path: '/teams/:teamId', component: Teste, props: true}


Check the coments on the TeamMembers component file in the module 13 folder 
to see the code.



=========================== Class 10 ============================



Redirecting & "Catch All" routes

It's alse possible difine more than one route for a unique 
component. 

For this use 'alias' param route.

    {path: '/teams', component: TeamsList, alias: '/'}

    //with this, both the routes: /teams and / direct the user for TeamList component.


Beyond that, we can redirect the user to a route if them access anoter route


    {path: '/', redirect: '/teams'}

    // Here, the URL in the browser will change togeter with content


But if the user, type a undefine route, we can use Catch All:


    {path: '/:notFound(.*)', component: NotFound}
    // or, we simple can redirect the user a another valid route.

    remember to register that in the as the last router, for not
    create a overlap.


Se the code on the main.js file in the module 13 folder.




=========================== Class 11 ============================


Nested Routes 

We can insert routes, inside of another route. That is Nested Routes.

For this, we need use children params routes:

    {path: '/teams', component: TeamList, children: [
      {path: '/:user', component: UserList}
    ]}    

  The second step, is create a router-view tag on the parent route
  component:

    <template>
      <router-view></router-view>
    </template>

  The logic is the same for roots paths.


See the code on the main.js and TeamsList.vue component in the
module 13 folder.



=========================== Class 12 ============================


Named Routes

It's better call dinamic routes, using props and named routes.
That way, we have less work to change route datas:


  Component HTML:

    <router-link :to="teamMembersUrl"> View Members </router-link>

  Component Script:

    props: [
      'id', 
      'name', 
      'memberCount'
    ],
    Computed: {
      teamMembersUrl() {
        return {name = 'team-members', params: {teamId: this.id}}
      }
    }

    Look, with only name of route, in a object, the Vue, find
    the correct Route, and you don't need update the paths
    on script components.

  Main.js

    { name: 'teams',
     path: '/teams', 
     component: TeamsList, 
     children: [
      { name: 'team-members',  path: ':teamId', component: TeamMembers, props: true} 
    ]}


Check this code running on the main.js and teamsItem Component in the module 13 
folder.



=========================== Class 13 ============================



Query Params (Optional)


It's used for find and loading component, but maybe can be used
for pass extra information for some component.

For use, we need to use query parameter route.

  Component Script:

    computed: {
      teamMembersUrl() {
        // return `'/teams/${this.id}`
        return {
          name: 'team-members',
          params: { teamId: this.id },
          query: { sort: 'asc' },
        };
      },
    }

  Now we can extract the query, with:

    console.log(this.$route.query)




=========================== Class 14 ============================


Multiple Components with only one router.


We can render more than one component in the same router. For this
we need named the components. Like this:

  1- Call another router-view tag for the other component in the
  route:

  HTML

    <template>
      <div>
        <router-view></router-view>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </template>

  
  2- In the Main.js file, chose the route that receive the other 
  component to render, and change the "component" parameter for 
  "components" parameter (on plural). That parameter, receive 
  an object, and this object receive the components with names:

    
  JS:

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {path: '/teams', components: {
          default: TeamsList,   // Default Component
          footer: TeamsFooter.
        }}
      ]
    })

  3- Now, we will descriminate which component should be render
  in each router-view tag, using his names:

  HTML 

    <template>
      <div>
        <router-view></router-view>   // Caution: tag without name, is default value
      </div>
      <div>
        <router-view name="footer"></router-view>
      </div>
    </template>


Check this code running in the mains.js file, and App.js file in the Module 13 
folder.



=========================== Class 15 ============================


Controlling the Scroll

For improve the user experience, we can controll the scroll according with
page change:

The method is scrollBehavior.

This method, use 3 params:

- To (for where the user click)
- from (From where user comes)
- savedPostion (last postion of user was)

Using:

  Main.js: 

  After paths, put scrollBehavior:

      path{...},
    ],
    scrollBehavior(to, from, savedPosition) {
      if(savedPosition) {
        return savedPosition
      }
      return {left: 0, top: 0}
    }

    Here we sayed: If we have a last saved Postion, return there. But if not, 
    go to the top.

See this code running on the main.js file, in the module 13 folder.

Check the class in this link:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879382#overview



=========================== Class 16 ============================


Navigation Guards (1/4)

We can block navigation user, if he don't fulfill a condition.

For this we use the guard. The guards are methods: "beforeEach", and
inside of beforeEach(), we can create some methods that executed before
the paths is called:

  Main.js 

    router.beforeEach(function(to, from, next))
    // to = for where we go
    // from = where we from
    // next = the method that be executed
      console.log(to, from)
      next(false) = block the navigation
      next() or next(true) = allow the navigation
      next('/route') = redirect a some route

Check this code running on the main.js file in the module 13 folder.

Link for this class:
https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879388#overview



=========================== Class 17 ============================


navigation Guards (2/4)


Before Each for especific route (Before Enter):

  First way: After send the path configs main.js, insert:

     { path: '/users', components: {
      default: UsersList,
      footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('users beforeEnter') 
        console.log(to, from)
        next()
      }
     }

  Second way: On component, insert the method (BeforeRouteEnter):

    beforeRouteEnter(to, from, next) {
      console.log(to, from)
      next()
    }


Guard for updated component:


  In the component, use the method (BeforeRouteUpdate):

    beforeRouteUpdate(to, from, next) {
      console.log(to, from)
      next()
    }


Chech this code running on the main.js, UserList component file and TeamMembers
component file in the module 13 folder



=========================== Class 18 ============================



Navigation Guards (3/4)


Also exists another guard for before nevigations, is the afterEach:

We use to send datas about navigation:

  Main.js 

    router.afterEach(function(to, from) {
      console.log('Global AfterEach') 
      console.log(to, from)
    })


See the code running on the main.js file in the module 13 folder.

Link for video:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879402#overview





=========================== Class 19 ============================



Navigation Guards (4/4)


The last guard, is the RouteLeave. 

That guard, is executed when the user leave the page. An example for 
his use, is when the user don't save your datas in forms.

Ex:

  Component:

  HTML

    <template>
      <button @click="saveChange">Save the Changes</button>
    </template>

  JS:

    data() {
      return {
        changeSaved: false
      }
    },
    methods: {
      saveChange() {
        this.changeSaved = true
      },
      beforeRouteLeave(to, from, next) {
        if(this.changeSaved === true) {
          next() // Changes saved, go straight.
        } else {
          next(changeSaved) // ChangeSaved is false by default, so block
        }
      }
    }


lik for video class:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879406#overview





=========================== Class 20 ============================


Meta Fields


There is another router propertie, that we can use. The Meta.

The Meta store any kind of value, and this value can be use
in any local of our route (where $route is avaiable)

And we can use the values in our guards.

Ex:

  Main.js

    { name: 'teams',
      path: '/teams', 
      meta: {needsAuth: true},
      components: {
        default: TeamsList,
        footer: TeamsFooter,
     }, 


    router.beforeEach(function(to, from, next) {
      console.log('Global-members') 
      console.log(to, from)
      if (to.meta.needsAuth) {
        console.log('Needs auth!')
        next()
      } else {
        next()
      }
    }

Link for the explanation:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879416#overview




=========================== Class 21 ============================


Organazing


For conclude this module, let's organize the our route content.

First, is important em big apps, create a new page with name
"Pages", for store de component that render as page.

Second, create a new js file, with the name "router.js". And 
there, put all router logic, and in the end export the router with:

    export default router

And in main.js file, import the router:

    import router from './router.js'





########################### module 14 ###########################


=========================== Class 01 ============================


VUEX

Vuex is for help us manege the stats, where stat is equals data.
He replace the provide inject, cause his is more easy to manipulate
the states.


First, install the vuex with:

    npm install --save vuex@next

    @next = latest version


Create the Vuex store:

  In main.js file:

    import { createStore } from 'vuex'

    const store = createStore({
      state() {
        return {
          //here our datas/states
          counter: 0  
        }
      }
    })

    app.use(store)


On the component, we can use the state with:

    {{ $store.state.'state name' }}

    On that example:

    <h3>
      {{ $store.state.counter }}
    </h3>


Check this example on the main.js file and app.vue component in them
module 14 folder.



=========================== Class 02 ============================


Connect states:

So, for use our last class states, we can use the computeds.

Ex:

  Template:
    
    <template>
      <h3>{{ counter }} </h3>
      <button @click="addOne">Add one more </button>
    </template>


  Js:

    computed: {
      counter() {
        return this.$store.state.counter
      }
    },
    methods: {
      addOne() {
        this.$store.state.counter++
        // we are plus one more on uor counter.
      }
    }

We can use this component, in another new component, if we want.



=========================== Class 03 ============================


Mutations

So, if we work with the same state in diferent components, we 
need to repeat the creation of the methods. And that, leave your
app maintenance hard.

So for that, we can create a methods, inside of Mutations, and the 
components, call this mutation for use the same logic method.

For that, follow the code:

  Main.js

    const store = createStore() {
      state() {
        return {
          counter: 0
        }
      },
      mutations: {
        increment(state) {
          state.counter = state.counter + 2
        }
      }
    }

Now, we just need call this mutation in your components:

  Template:

    <template>
      <h3>{{ counter }} </h3>
      <button @click="addOne"> Add 1 </button>  
    </template>

  Js:

    methods: {
      addOne() {
        this.$store.commit('increment')
        // now we use commit method, and use the name of mutation
        in his parameter.
      }
    }


Check that code running on the main.js file, ChangeCounter and App.vue
components in the module 14 folder.



=========================== Class 04 ============================


Payloads


Payloads are a method for use parametes on our mutations methods.

So suppose we need to increase a dinamic value, on our mutations:

  Main.js:

    mutations: {
      increase(state, payload) {  // We can named, as we want.
        state.counter = state.counter + payload.value
      }
    }

    On that example, we use payload as object value. But We
    can use any kind of value, as strings, number, boleeans, etc..

  Component Js:

    methods: {
      addOne() {
        this.$store.commit('increase', {value: 10})

        // but we also can type this, as:

        this.$store.commit({
          type: 'increase', 
          value: 10
        })
      }
    }

Check this example code running on the main.js file and 
app.js component, in the module 14 folder.




=========================== Class 05 ============================


Getters

So, if we need to modify the state values, before to use them
in mutations, we can use Getters.

Getters, will modify the states and we can call them on our 
components, whitout need calculate in the component.

  Main.js:

    const store = createStore ({
      state() {
        return {
          counter: 0
        }
      },
      getters: {
        finalCounter(state) {
          state.counter = state.counter * 2
        }
      }
    })

  Component:

    <template>
      <h3> {{ counter }} </h3>
    </template>

    <script>
    export default {
      computed: {
        counter() {
          return this.$store.getters.finalCounter
        }
      }
    }
    </script>



But, we can use a getter, inside of other getter. For this, we 
can use the seconde parameter in the getter. 

All the getters, has two parameters, the first is the state.
And the second is the other getter, that we want to use.

Ex:

  Mains.js:

      const store = createStore({
        state() {
          return {
            counter = 0
          }
        },
        getters: {
          finalCounter(state) {
            state.counter = state.counter / 2
          },
          secondCounter(_, getter) {// we don't need use the state parameter, cause the getter that we use on the second parameter, already has access.

            const second = getters.finalCounter // here we call the first getter
            if (second > 0) {
              return 'Finish'
            } else {
              return second
            }
          }
        }
      })


Check that example on the Main.js file, FovoriteValue component and App component
in the module 14 folder.

link for this class:

https://www.udemy.com/course/vuejs-2-the-complete-guide/learn/lecture/21879732#overview


