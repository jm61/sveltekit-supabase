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
  default: () => Routes
});
var import_index_489d52f8 = require("../../chunks/index-489d52f8.js");
var import_todoStore_e574f326 = require("../../chunks/todoStore-e574f326.js");
var import_supabase_js = require("@supabase/supabase-js");
const Todo = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<div class="${"flex shadow-md border rounded-lg my-2 pl-2"}"><input type="${"checkbox"}" name="${"completed"}" ${todo.completed ? "checked" : ""} class="${"mr-2 form-checkbox h-5 w-5"}">

	<h2 class="${"bg-gray-200 px-2 font-bold"}">Cat: <span class="${"text-green-600"}">${(0, import_index_489d52f8.e)(todo.category)}</span></h2>

	<h2 class="${"px-2 bg-orange-300 font-bold"}"><span${(0, import_index_489d52f8.a)("class", `${todo.completed ? "line-through" : ""}`, 0)}>Todo: ${(0, import_index_489d52f8.e)(todo.text)}</span></h2>
    <button class="${"ml-auto text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"}" type="${"button"}">Del</button></div>`;
});
const TodoForm = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_user;
  $$unsubscribe_user = (0, import_index_489d52f8.b)(import_todoStore_e574f326.u, (value) => value);
  let todo = "";
  let category = "";
  $$unsubscribe_user();
  return `<form class="${"form my-6"}"><div class="${"flex flex-col text-sm mb-2"}"><label for="${"todo"}" class="${"font-bold mb-2 text-gray-800 "}">Todo </label>
		<input type="${"text"}" name="${"todo"}" placeholder="${"ex. Learn about authentication in Next.js"}" class="${"appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_489d52f8.a)("value", todo, 0)}>
		<label for="${"cat"}" class="${"font-bold mb-2 text-gray-800 "}">Category </label>
		<input type="${"text"}" name="${"category"}" placeholder="${"ex. Learn about authentication in Next.js"}" class="${"appearance-none shadow-sm border border-gray-200 p-2 focus:outline-none focus:border-gray-500 rounded-lg "}"${(0, import_index_489d52f8.a)("value", category, 0)}></div>
	<button type="${"submit"}" class="${"w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"}">Add Todo
	</button></form>`;
});
const Routes = (0, import_index_489d52f8.c)(($$result, $$props, $$bindings, slots) => {
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_todos = (0, import_index_489d52f8.b)(import_todoStore_e574f326.t, (value) => $todos = value);
  $$unsubscribe_todos();
  return `<main><h1 class="${"text-2xl font-bold text-center text-gray-800 md:text-3xl"}">My Todos
    </h1>
    ${(0, import_index_489d52f8.v)(TodoForm, "TodoForm").$$render($$result, {}, {}, {})}
    ${(0, import_index_489d52f8.f)($todos, (todo) => {
    return `${(0, import_index_489d52f8.v)(Todo, "Todo").$$render($$result, { todo }, {}, {})}`;
  })}</main>`;
});
module.exports = __toCommonJS(stdin_exports);
