# VUE 3 Resume Context 📜

- 1 [VUE CLI](#vue-cli)</br>
- 2 [Architecture](#architecture)</br>
- 3 [Components Concepts](#components-concepts)</br>
    - 3.1 [Creating a Component](#creating-a-component)</br>
- 4 [Directives](#directives)</br>

</br>
</br>

## VUE CLI

For create a new VUE project, we can use the VUE CLI to build a vue project architecture.

Access the link below and follow the steps:

https://cli.vuejs.org/

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

## Components Concepts

In VUE.js, everything is a component. And these components are Single File Component (SFC), his maske up 
with:

- **TEMPLATE**: In template is our our HTML structure
- **SCRIPT**: In script is our javascript code
- **STYLE**: In style is our CSS code.

</br>

### <ins>Creating a Component</ins>

In Component folder, create a new .vue file. 
The name would be named with <ins>two words</ins>, with <ins>PascalCase</ins>. For example:

`TheHeader.vue`
`SubmmitButton.vue`

</br>

## <ins>Importing and declaring Component Globally</ins>

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

## <ins>Importing and declaring Component Locally</ins>

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

## <ins>Using Component</ins>

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

## Directives

Directives are be VUE instructions. lets see these instructions below:

</br>

## <ins>Conditional Directives</ins>

These directives, will show some content based on some condition.

`v-show`: Use for show some content if the condition is <ins>TRUE</ins> or FALSE. Example:

    <template>
      <span v-show="showText" >Hello world</span>
    </template>

    <script setup>
    const showText = true
    <script>

  Or:

    <template>
      <span v-show="showText === textEnable" >Hellow world</span>
    </template>

    <script setup>
      const showText = true
      const textEnable = true
    </script>


The <nis>v-show,</nis> makes the content to be loaded in DOM, even if the condition is false. But he input a style: **dipslay: none;** if the condition was false.

</br>

`v-if`: Use for show some content if the condition is **TRUE** or **FALSE**. Example:

    <template>
      <span v-show="showText" >Hello world</span>
    </template>

    <script setup>
    const showText = true
    <script>

The diference between **v-if** of **v-show**, is **v-if** not be loaded at DOM, if the condition is not met.

</br>

`v-else-if`: Use for gives continue the condition logic, if you have more than one content based on the conditions you may have. Example:

    <template>
      <span v-if="text === primaryText">Hello World</span>
      <span v-else-if="text === secundaryText">Hello VUE 3</span>
    </template>

    <script setup>
      const text = 'Hello VUE 3'
      const primaryText = 'Hello Word'
      const secundaryText = 'Hello VUE 3'
    </script>

</br>

`v-else`: Use for show a content if the previous conditions is not be met. Exemple:

    <template>
      <span v-if="text === primaryText">Hello World</span>
      <span v-else-if="text === secundaryText">Hello VUE 3</span>
      <span v-else>Hello everyone</span>
    </template>

    <script setup>
      const text = 'Hello VUE 3'
      const primaryText = 'Hello Word'
      const secundaryText = 'Hello VUE 3'
    </script>

**Obs**: We necessarily need use **v-if** before, and exactly before using the **v-else** and **v-else-if**.

**Official Docs:**https://vuejs.org/api/built-in-directives.html

</br>
</br>