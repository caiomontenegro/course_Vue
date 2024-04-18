# VUE 3 Resume Context 📜

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

**<ins>Creating a Component</ins>**

In Component folder, create a new .vue file. 
The name would be named with <ins>two words</ins>, with <ins>PascalCase</ins>. For example:

`TheHeader.vue`
`SubmmitButton.vue`

</br>

**<ins>Importing and declaring Component Globally</ins>**

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

**<ins>Importing and declaring Component Locally</ins>**

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

**<ins>Using Component</ins>**

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

