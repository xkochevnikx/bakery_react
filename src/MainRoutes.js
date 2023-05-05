import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PageMain from './Components/PageMain/PageMain';
import PageSecond from './Components/PageSecond/PageSecond';
import PageProduct from './Components/PageProduct/PageProduct';
import ProductDetails from './Components/Product/ProductDetails/ProductDetails';
import EditSectionProductList from './Components/EditSectionProduct/EditSectionProductList';
import EditProduct from './Components/EditProduct/EditProduct';
import Basket from './Components/Basket/Basket';
import PageMap from './Components/PageMap/PageMap';
import SignIn from './Components/Auth/SignIn';
import SignUp from './Components/Auth/SignUp';
import Account from './Components/Auth/Account';
import { UserContext } from './context/AuthContextProvider';

const MainRoutes = () => {
    const { user } = useContext(UserContext);

    // todo в роуте details/:id подставлен компонент ProductDetails. Когда переходим на этот путь компонент подгружается и в новый запрос на бэк (функция readOneProduct обёрнута в useEffect что бы отработать один раз при изменении id)  падает id из адресной строки.
    return (
        <Routes>
            <Route
                path='/'
                element={<PageMain />}
            />
            <Route
                path='/pagesecond'
                element={<PageSecond />}
            />
            <Route
                path='/pageproduct'
                element={<PageProduct />}
            />
            <Route
                path='/details/:id'
                element={<ProductDetails />}
            />
            <Route
                path='/basket'
                element={<Basket />}
            />
            <Route
                path='/map'
                element={<PageMap />}
            />
            <Route
                path='*'
                element={<PageNotFound />}
            />
            <Route
                path='/signIn'
                element={<SignIn />}
            />
            <Route
                path='/signUp'
                element={<SignUp />}
            />
            <Route
                path='/account'
                element={<Account />}
            />

            {user && user.email === 'xkochevnikx@protonmail.com' ? (
                <>
                    <Route
                        path='/adminpage'
                        element={<EditSectionProductList />}
                    />
                    <Route
                        path='/edit/:id'
                        element={<EditProduct />}
                    />
                </>
            ) : (
                <Route
                    path='*'
                    element={<PageNotFound />}
                />
            )}
        </Routes>
    );
};

export default MainRoutes;
