# vue-without-build-tools

Vue can be used without build tools by adding script:

### <script src="https://unpkg.com/vue@3"></script>

then mounting the container ID in which you want to implement vue component. 
Like:

    <div id="main"> </div>
    component.mount('#main'); 

    in this component is the vue component made inside script file.

## API used for Random Users is

https://randomuser.me/api/

## Method used to fetch data is

fetch() with Promises (async, await);
 
