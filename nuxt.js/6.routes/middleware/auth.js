export default defineNuxtRouteMiddleware((to,from)=>{

console.log(to);
console.log(from);

});

// for global middleware
// addRouteMiddleware/auth.global.js