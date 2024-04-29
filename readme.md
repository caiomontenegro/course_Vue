# VUE 3 Resume Context 📜

- 1 [VUE CLI](#vue-cli)
- 2 [Architecture](#architecture)
- 3 [Components Concepts](#components-concepts)
    - 3.1 [Creating a Component](#creating-a-component)
    - 3.2 [Importing and declaring Component Globally](#importing-and-declaring-component-globally)
    - 3.3 [Importing and declaring Component Locally](#importing-and-declaring-component-locally)
    - 3.4 [Using Component](#using-component)
- 4 [Interpolation](#interpolation)
    - 4.1 [Text Interpolation](#text-interpolation)
    - 4.2 [Javascript Interpolation](#javascript-interpolation)
- 5 [Directives](#directives)
    - 5.1 [Bind Directive](#bind-directive)
    - 5.2 [Two Way Bind Directive](#two-way-bind-directive)
    - 5.3 [Conditional Directives](#conditional-directives)
    - 5.4 [Loop Directive](#loop-directive)
- 6 [Class and Styles Bindings](#class-and-styles-bindings)
    - 6.1 [Binding Class](#binding-class)
    - 6.2 [Binding Styles](#binding-styles)



</br>
</br>
</br>

## VUE CLI

For create a new VUE project, we can use the VUE CLI to build a vue project architecture.

Access the link below and follow the steps:

https://cli.vuejs.org/


</br>
</br>
</br>

## Architecture

The architecture project:

- `node_modules`: All modules necessaries to run our application.
- `public`: All public and static files that make up our application.
    - `favicon`: icon files.
- `src/source`: 
    - `assets`: That we have our image and styles files.
    - `components`: Our vue components files.
    - `app.vue`: the main component vue file.
    - `mains.js`: inside this file, we have a instance vue app.
    - `vue.config.js`: Special vue configs.
    - `package.json`: all scripts and dependencies rountines.
    - `package-lock.json`: Dependency version security lock.
    - `lin`: Here we configure the sintaxe patterns
    - `.gitignore`: Here we declare the files that don't send to our repository.

</br>
</br>
</br>

## Components Concepts

In VUE.js, everything is a component. And these components are Single File Component (SFC), his maske up 
with:

- **TEMPLATE**: In template is our our HTML structure
- **SCRIPT**: In script is our javascript code
- **STYLE**: In style is our CSS code.

</br>

### Creating a Component

In Component folder, create a new .vue file. 
The name would be named with <ins>two words</ins>, with <ins>PascalCase</ins>. For example:

`TheHeader.vue`
`SubmmitButton.vue`

</br>

### Importing and declaring Component Globally

If you use the same component, at all or almost pages. We can import the component globally. 
In <ins>main.js</ins> file, use the <ins>.component()</ins> method:

    import {createApp} from 'vue'
    import TheHeader from '.components/TheHeader.vue'
    import SubmmitButton from './components/SubmmitButton.vue'

    const app = createApp({})

    app.component('TheHeader', TheHeader)
    app.component('SubmmitBUtton', SubmmitButton)

    //or

    app
      .component('TheHeader', TheHeader)
      .component('SubmmitButton', SubmmitButton)

</br>

### Importing and declaring Component Locally

In a parent component, we need to import and declare de component that we want to use. Like this:

    <script setup>
      import TheHeader from './components/TheHeader.vue'
      import SubmmitButton from './components/SubmmitButton.vue'
    </script>

If you don't using the setup property. You can use this sintaxe:

    <script>
      import TheHeader from './components/TheHeader.vue'
      import SubmmitButton from './components/SubmmitButton.vue'

      export default {
        components: {
          TheHeader,
          SubmmitButton
        }
      }
    </script>

</br>

### Using Component

For using our component, use need to declare him inside of template, with <ins>kebab-case</ins>.Like this:

    <template>
      <the-header />
      <submmit-button />
    </template

Or:

    <template>
      <the-header></the-header>
      <submmit-button></submmit-button>
    </template>

**Official Docs:**https://vuejs.org/guide/components/registration.html

</br>
</br>
</br>

## Interpolation

We can use a reactive data and some logics, in our template component. For that we use the Interpolation, with
Mustache sintax (double curly braces).

</br>

### Text Interpolation

Using reactive data on your template. Example:

      <template>
        <span>{{ name }}</span>
      </template>

      <script>
        export default {
          data() {
            return {
              name: 'VUE 3'
            }
          }
        }
      </script>

We also use Objects, and Array lists in Mustache sintax.

</br>

### Javascript Interpolation

The interpolation, also accepts javascript language logics. Example:

  <ins>Concatenation:</ins>

    <template>
      <span>{{ name + '' + lastName}}</span>
    </template>

    export default {
      data() {
        return {
          name: 'VUE 3',
          lastName: 'The Knowledge'
        }
      }
    }

  <ins>Ternary Expression:</ins>

      <template>
        <span>{{ positiveNumber ? 'positve' : "negative" }}</span>
      </template>

      export default {
        data () {
          return {
            postiveNumber: True
          }
        }
      }

  <ins>Javascript methods and functions:</ins>

    <template>
      <span>{{ name.split('').reverse().join('') }}</span>
    </template>

    <script>
      export default {
        data() {
          return {
            name: 'Caio'
          }
        }
      }
    </script>

  <ins>Template String:</ins>

    <template>
      <span id="`${id}`">{{ name }}</span>
    </template>

    <script>
      export default {
        data() {
          return {
            id: 01,
            name: 'VUE 3'
          }
        }
      }
    </script>

**Official docs:** https://vuejs.org/guide/essentials/template-syntax.html#text-interpolation

</br>
</br>
</br>

## Directives

Directives are be VUE instructions. lets see these instructions below:

</br>

### Bind Directive

Directive to use a reactive data, on html properties. With this directive we can use dinamic values in our properties.

`v-bind`: Use the data bind directive as prefix for another HTML property. Example:

    <template>
      <img v-bind:src="imgURL" alt="Image">
    </template>

    <script>
    export default {
      data() {
        return {
          imgURL: '/path/src/img/myImage.png'
        }
      }
    }
    </script>

<ins>shorthand</ins>: The shorthand is ":" and "." for **props** modifiers. Example:

    <template>
      <img :src="imgURL" alt="Image">

      // For props:

      <div :someProperty.prop="someObject"></div>
      // equivalent to
      <div .someProperty="someObject"></div>
    </template>

    <script>
    export default {
      data() {
        return {
          imgURL: '/path/src/img/myImage.png'
        }
      }
    }
    </script>

</br>



<ins>Dinamic Attribute Name</ins>: We also can use the dinamic attribute with data bind. Check below example:

    <button v-bind:[key]="value"></button>
    // or
    <button :[key]="value"></button>

    <script>
    export default {
      data() {
        return {
          value: 01
        }
      }
    }
    </script>

</br>

### Two Way Bind Directive

The VUE offer us a directive to implement a two-way data binding, that is, the user receive some reactive data and he can change this data, and return him to system. The name of this directive is **v-model**.

`v-model`: Similar to the bind, but the user can change de value, and send him to the system on real time. It's extremely indicate to use on input data forms. 

  <ins>Text Input</ins>

    <template>
      <label for="name">Insert the name:</label>
      <input id="name" type="text" v-model="firstName"></input>
      {{ firstName }}
    </template>

    <script>
      export default {
        data() {
          return {
            firstName: 'Caio'
          }
        }
      }
    </script>

  Here, we've a simple form. The input value, is pre configured with "Caio", and the same data is render below the input. But if the user change de value in the input, automacally the firstName data, will be change. Let's check more examples:

  <ins>Select Input</ins>

    <template>
      <label for="country">Countries</label>
      <select id="country" v-model="country">
        <option value="Brazil">Brasil</option>
        <option value="Argentina">Argentina</option>
        <option value="Colombia">Colombia</option>
      </select>
      {{ country }}
    </template>

    <script>
      export default {
        data() {
          return {
            country: "Brasil"
          }
        }
      }
    </script>

  <ins>Radio Input</ins>

    <template>
      <label for="theme">Theme color</label>
      <input v-model="theme" type="radio" value="White">White</input>
      <input v-model="theme" type="radio" value="Black">Black</input>
      {{ 'You chosed :', theme}}
    </template>

    <script>
      export default {
        data() {
          return {
            theme:'White'
          }
        }
      }
    </script>

  <ins>Checkbox input 1/2</ins>
  For boolean data:

    <template>
      <label for="contract">Do you agree wit the terms?</label>
      <input id="contract" type="text" v-model="accepted">I agree</input>
      {{ accepted }}
    </template>


    <script>
      export default {
        data() {
          return {
            accepted: null
          }
        }
      }
    </script>

  <ins>Checkbox input 2/2</ins>
  For array list data:

    <template>
      <label for="colors">Choose your favorite colors</label>
      <input type="checkbox" value="blue" id="colors">blue</input>
      <input type="checkbox" value="red" id="colors">red</input>
      <input type="checkbox" value="green" id="colors">green</input>
      <input type="checkbox" value="yellow" id="colors">yellow</input>
      {{ 'Favorite Colors:', colors  }}
    </template>

    <script>
      export default {
        data() {
          return {
            colors: []
          }
        }
      }
    </script>



</br>

### Conditional Directives

These directives, will show some content based on some condition.

`v-show`: Use for show some content if the condition is <ins>TRUE</ins> or FALSE. Example:

    <template>
      <span v-show="showText" >Hello world</span>
    </template>

    <script>
    exporta default {
      data() {
        return: {
          showText: true
        }
      }
    }
    <script>

  Or:

    <template>
      <span v-show="showText === textEnable" >Hellow world</span>
    </template>

    <script>
    export default {
      data() {
        return {
          showText: true
          textEnable:  true
        }
      }
    }
    </script>


The <nis>v-show,</nis> makes the content to be loaded in DOM, even if the condition is false. But he input a style: **dipslay: none;** if the condition was false.

</br>

`v-if`: Use for show some content if the condition is **TRUE** or **FALSE**. Example:

    <template>
      <span v-show="showText" >Hello world</span>
    </template>

    <script>
    export default {
      data() {
        return {
          showText: true
        }
      }
    }
    <script>

The diference between **v-if** of **v-show**, is **v-if** not be loaded at DOM, if the condition is not met.

</br>

`v-else-if`: Use for gives continue the condition logic, if you have more than one content based on the conditions you may have. Example:

    <template>
      <span v-if="text === primaryText">Hello World</span>
      <span v-else-if="text === secundaryText">Hello VUE 3</span>
    </template>

    <script>
    export default {
      data() {
        return {
          text: 'Hello VUE 3',
          primaryText: 'Hello World',
          secundaryText: 'Hello VUE 3'
        }
      }
    }
    </script>

</br>

`v-else`: Use for show a content if the previous conditions is not be met. Exemple:

    <template>
      <span v-if="text === primaryText">Hello World</span>
      <span v-else-if="text === secundaryText">Hello VUE 3</span>
      <span v-else>Hello everyone</span>
    </template>

    <script>
    export default {
      data() {
        return {
          text: 'Hello VUE 3',
          primaryText: 'Hello World'
          secundaryText: 'Hello VUE 3'
        }
      }
    }
    </script>

**Obs**: We necessarily need use **v-if** before, and exactly before using the **v-else** and **v-else-if**.

**Official Docs:**https://vuejs.org/api/built-in-directives.html

</br>

### Loop Directive

Directives for render the content, several times. For this, we have only one directive.

`v-for`: This directives render the content, several times, traversing some array. It is very important, that we use the **key** property tag, for add a key id, for each content that will be render. Examples:

    <template>
      <span v-for="user in names" key="name">{{ user }}</span>
    </tempalte>

    <script>
      export default {
        data() {
          return {
            user: [Caio, Silvana, Evandro]
          }
        }
      }
    </script>

With Object:

    <template>
      <span v-for="user in users" :key="obj.id">{{ user.name }}</span>
    </template>

    <script>
    export default {
      data() {
        return {
          users: [
            {id: 0, name: Caio},
            {id: 1, name: Silvana},
            {id: 2, name: Evandro}
          ]
        }
      }
    }
    </script>

**Officia Docs**:https://vuejs.org/api/built-in-directives.html#built-in-directives

</br>
</br>
</br>

## Class and Styles Bindings

The VUE offer us a simple way to apply Dinamic Classes and Styles: Class and Style Bindings. For apply the dinamic class and styles, we'll use the [Data Bindin Concepts](#Bind-Directive).

</br>

### Binding Class

For apply the dinamic class, with bind is much simple. Look the below example:

    <template>
      <h1 :class="title" >Hello VUE 3</h1>
    </template>

    <script>
    export default {
      data() {
        return {
          title: 'titleStyle'
        }
      }
    }
    </script>

    <style>
    .titleStyle {
      color: blue;
    }
    </style>

When we use data bind in **class** or **styles** attributes, the **v-bind** suport **objects** and **arrays** as a value. And set some logics for use dinamic class and styles. 
Class with object example:


    <template>
      // title = class name
      // true = condition for apply the class, received from reactive data.
      <h1 :class="{ 'title': true }">Hello Vue</h1>
    </template>

    // More than one class

    <template>
      <h1 :class="{ 'title': true, homeTitle: false, subTitle: true}">Hello Vue</h1>
    </template>

    // IMPORTANT: The last classes declared subscribe the first classes

Class with array example:

    <template>
      // title = class name
      // true = condition for apply the class
      <h1 :class="['title', titleHome]">Hello Vue</h1>
    </template>

    // IMPORTANT: The last classes declared subscribe the first classes

Class with array and object example:

    <template>
      // title = class name
      // true = condition for apply the class
      <h1 :class="['title', {'titleHome': true}]">Hello Vue</h1>
    </template>

    // IMPORTANT: The last classes declared subscribe the first classes

**Tip**: We can transfer the attribute content to reactive data:

    <template>
      // title = class name
      // true = condition for apply the class
      <h1 :class="classList">Hello Vue</h1>
    </template>

    <script>
    export default {
      data() {
        return {
          classList=['title', {'titleHome': true}]
        }
      }
    }
    </script>

    // The same logic is valid for Objects.

We can apply some logic dinamic class when we use array format with **Ternary Expression**. Like that:

    <template>
      // isActive = reactive boolean data
      // activeClass = If true, apply activeClass
      // '' = If False, don't apply classe
      <span :class="[isActive ? activeClass : '', errorClass]">
        Hello Vue 3
      </span>
    </template>

</br>

### Binding Styles

The logic for apply dinamic styles on our component is the same such **dinamic classes**, but here we use only object value, and instead of using class name as a value, we'll use the css properties. Example:

    <template>
      <h1 :style="{'color': primaryColor, 'background-color': secundaryColor}">Hello VUE3</h1>
    </template>

    <script>
    export default {
      data() {
        return {
          primaryColor: blue,
          secundaryColor: black
        }
      }
    }
    </script>

    // or 

    <template>
      <h1 :style="styleClass">Hello VUE3</h1>
    </template>

    <script>
    export default {
      data() {
        return {
          styleClass={'color': primaryColor, 'background-color': secundaryColor}
          // or
          styleClass={color: primaryColor, backgroundColor: secundaryColor}
        }
      }
    }
    </script>

**Oficial Docs**:https://vuejs.org/guide/essentials/class-and-style.html#class-and-style-bindings



