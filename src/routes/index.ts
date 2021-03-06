import LoginView from "../views/login/LoginView";
import CurrenciesView from "../views/currencies/CurrenciesView";
import FormCurrencyView from "../views/currencies/form/FormCurrencyView";
import CategoriesView from "../views/categories/CategoriesView";
import FormCategoryView from "../views/categories/form/FormCategoryView";
import ClientView from "../views/clients/form/FormClientView";
import ClientsView from "../views/clients/ClientsView";
import TransactionsView from "../views/transactions/TransactionsView";
import TransactionView from "../views/transactions/form/FormTransactionView";
import ReportsView from "../views/reports/ReportsView";
import BalanceView from "../views/balance/BalanceView";
import withAuthentication from "../helpers/hoc/withAuthentication";

const routes = [
    {
        path: '/login',
        component: LoginView,
        exact: true
    },
    {
        path: '/clients',
        component: withAuthentication(ClientsView),
        exact: true
    },
    {
        path: '/clients/:id',
        component: withAuthentication(ClientView),
        exact: true
    },
    {
        path: '/clients/new',
        component: withAuthentication(ClientView),
        exact: true
    },
    {
        path: '/categories',
        component: withAuthentication(CategoriesView),
        exact: true
    },
    {
        path: '/categories/:id',
        component: withAuthentication(FormCategoryView),
        exact: true
    },
    {
        path: '/categories/new',
        component: withAuthentication(FormCategoryView),
        exact: true
    },
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
    {
        path: '/reports',
        component: withAuthentication(ReportsView),
        exact: true
    },
    {
        path: '/transactions',
        component: withAuthentication(TransactionsView),
        exact: true
    },
    {
        path: '/transactions/:id',
        component: withAuthentication(TransactionView),
        exact: true
    },
    {
        path: '/transactions/new',
        component: withAuthentication(TransactionView),
        exact: true
    },
    {
        path: '/profile/:id',
        component: withAuthentication(ClientView),
        exact: true
    },
    {
        path: '/balance',
        component: withAuthentication(BalanceView),
        exact: true
    }
]

export default routes
