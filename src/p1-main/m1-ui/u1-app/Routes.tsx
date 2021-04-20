import React from "react";
import PreJunior from "../../../p2-homeworks/h5/pages/PreJunior";
import Error404 from "../../../p2-homeworks/h5/pages/Error404";
import {Route, Switch, Redirect} from "react-router-dom";
import Junior from "../../../p2-homeworks/h5/pages/Junior";
import IronJunior from "../../../p2-homeworks/h5/pages/IronJunior";

export const PATH = {
    PRE_JUNIOR: "/pre-junior",
    JUNIOR: "/junior",
    IRON_JUNIOR: "/iron-junior"
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/ }
            <Switch>
                {/*в начале мы попадаем на страницу "/" и переходим сразу на страницу PRE_JUNIOR*/ }
                {/*exact нужен чтоб указать полное совподение (что после "/" ничего не будет)*/ }
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.PRE_JUNIOR }/> }/>
                <Route path={ PATH.PRE_JUNIOR } render={ () => <PreJunior/> }/>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.JUNIOR }/> }/>
                <Route path={ PATH.JUNIOR } render={ () => <Junior/> }/>
                <Route path={ "/" } exact render={ () => <Redirect to={ PATH.IRON_JUNIOR }/> }/>
                <Route path={ PATH.IRON_JUNIOR } render={ () => <IronJunior/> }/>
                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/ }
                <Route render={ () => <Error404/> }/>
            </Switch>
        </div>
    );
}

export default Routes;
