var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in a){var o=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){a[e]=t},e.parcelRequired7c6=o);var r=o("kEUo3");const l={form:document.querySelector(".feedback-form"),email:document.querySelector('input[name="email"]'),message:document.querySelector('textarea[name="message"]')};l.form.addEventListener("input",(0,r.throttle)((e=>{const t={email:l.email.value,message:l.message.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));const n=(e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){e.message}})("feedback-form-state");n&&(l.email.value=n.email,l.message.value=n.message),l.form.addEventListener("submit",(e=>{e.preventDefault(),console.log({email:l.email.value,message:l.message.value}),l.form.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.f21e49a3.js.map
