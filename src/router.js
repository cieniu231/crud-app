import { createWebHistory, createRouter } from "vue-router";
import ItemList from "./components/ItemList.vue";
import ItemDetail from "./components/ItemDetail.vue";
import Register from "./components/Register.vue";
import Cart from "./components/Cart.vue";

const routes = [
    {
        path: "/item",
        alias: "/item",
        name: "item",
        component: () => import("./components/ItemList.vue")
    },
    {
        path: "/createaccount",
        alias: "/createaccount",
        name: "createaccount",
        component: () => import("./components/CreateAccount.vue")
    },
    {
        path: "/register",
        component: () => import("./components/Register.vue")
    },
    {
        path: "/login",
        component: () => import("./components/Login.vue")
    },
    {
        path: "/profile",
        component: () => import("./components/Profile.vue")
    },
    {
        path: "/item/category/:categoryItem",
        name: "top-details",
        component: ItemList,
        props: route => ({
            categoryItem: route.params.categoryItem
        }) 
    },
    {
        path: "/item/men/:id",
        name: "item-details",
        component: ItemDetail,
        props: route => ({
            id: route.params.id
        }) 
    },
    {
        path: "/cart",
        name: "cart",
        component: Cart

    },
    {
        path: "/add",
        name: "add",
        component: () => import("./components/AddItem.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;