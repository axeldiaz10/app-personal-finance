import LoginView from "../views/login/LoginView";
import CurrenciesView from "../views/currencies/CurrenciesView";
import FormCurrencyView from "../views/currencies/form/FormCurrencyView";
// import ClientView from "../views/clients/client/ClientView";
// import ClientsView from "../views/clients/ClientsView";
// import CategoriesView from "../views/categories/CategoriesView";
// import CategoryView from "../views/categories/category/CategoryView";
// import ReportsView from "../views/reports/ReportsView";
// import TransactionsView from "../views/transactions/TransactionsView";
// import BalanceView from "../views/balance/BalanceView";
// import TransactionView from "../views/transactions/trasaction/TransactionView";
import withAuthentication from "../helpers/hoc/withAuthentication";

const routes = [
    {
        path: '/login',
        component: LoginView,
        exact: true
    },
    // {
    //     path: '/clients',
    //     component: withAuthentication(ClientsView),
    //     exact: true
    // },
    // {
    //     path: '/clients/:id',
    //     component: withAuthentication(ClientView),
    //     exact: true
    // },
    // {
    //     path: '/clients/new',
    //     component: withAuthentication(ClientView),
    //     exact: true
    // },
    // {
    //     path: '/categories',
    //     component: withAuthentication(CategoriesView),
    //     exact: true
    // },
    // {
    //     path: '/categories/:id',
    //     component: withAuthentication(CategoryView),
    //     exact: true
    // },
    // {
    //     path: '/categories/new',
    //     component: withAuthentication(CategoryView),
    //     exact: true
    // },
    {
        path: '/currencies',
        component: withAuthentication(CurrenciesView),
        exact: true
    },
    {
        path: '/currencies/:id',
        component: withAuthentication(FormCurrencyView),
        exact: true
    },
    // {
    //     path: '/reports',
    //     component: withAuthentication(ReportsView),
    //     exact: true
    // },
    // {
    //     path: '/transactions',
    //     component: withAuthentication(TransactionsView),
    //     exact: true
    // },
    // {
    //     path: '/transactions/:id',
    //     component: withAuthentication(TransactionView),
    //     exact: true
    // },
    // {
    //     path: '/transactions/new',
    //     component: withAuthentication(TransactionView),
    //     exact: true
    // },
    // {
    //     path: '/profile/:id',
    //     component: withAuthentication(ClientView),
    //     exact: true
    // },
    // {
    //     path: '/balance',
    //     component: withAuthentication(BalanceView),
    //     data: { title: "Heroes List" },
    //     exact: true
    // }
]

export default routes
