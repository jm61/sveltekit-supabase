var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
var import_index_489d52f8 = require("../../chunks/index-489d52f8.js");
var import_todoStore_e574f326 = require("../../chunks/todoStore-e574f326.js");
var import_supabase_js = require("@supabase/supabase-js");
var app = "";
const Auth = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  let email;
  return `<h1 class="${"text-2xl font-bold text-center text-gray-800 md:text-3xl"}">Log In
</h1>
<p class="${"text-center mt-2"}">Sign in via magic link with your email below.</p>
<form class="${"form my-6"}"><div class="${"flex flex-col text-sm mb-2"}"><label for="${"email"}" class="${"font-bold mb-2 text-gray-800 "}">Email
        </label>
        <input type="${"email"}" name="${"email"}" placeholder="${"Your email"}" class="${"appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_489d52f8.a)("value", email, 0)}></div>
    <button type="${"submit"}" class="${"w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"}" ${""}>Log In
    </button></form>`;
});
const Navbar = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  const ls = JSON.parse(localStorage.getItem("supabase.auth.token"));
  const { expiresAt } = ls;
  const time = new Date(expiresAt * 1e3);
  return `<div class="${"my-4 flex justify-end"}"><div class="${"mr-auto text-gray-500 "}"><h3>Your session will expires at: <small>${(0, import_index_489d52f8.e)(new Date(time).toLocaleTimeString())}</small></h3></div>
    <button type="${"submit"}" class="${"shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"}">Log Out 
    </button></div>`;
});
const _layout = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_489d52f8.b)(import_todoStore_e574f326.u, (value) => $user = value);
  import_todoStore_e574f326.u.set(import_todoStore_e574f326.s.auth.user());
  import_todoStore_e574f326.s.auth.onAuthStateChange((_, session) => {
    import_todoStore_e574f326.u.set(session == null ? void 0 : session.user);
    if (session == null ? void 0 : session.user) {
      (0, import_todoStore_e574f326.l)();
    }
  });
  $$unsubscribe_user();
  return `<div class="${"container mx-auto my-6 max-w-lg"}">${$user ? `${(0, import_index_489d52f8.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}
        ${slots.default ? slots.default({}) : ``}` : `${(0, import_index_489d52f8.v)(Auth, "Auth").$$render($$result, {}, {}, {})}`}</div>`;
});
module.exports = __toCommonJS(stdin_exports);
