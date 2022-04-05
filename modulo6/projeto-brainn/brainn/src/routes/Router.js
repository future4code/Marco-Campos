import { BrowserRouter, Switch, Route } from "react-router-dom";
import DiaDeSorte from "../pages/DiaDeSorte/DiaDeSorte";
import LotoFacil from "../pages/LotoFacil/LotoFacil";
import LotoMania from "../pages/LotoMania/LotoMania";
import MegaSena from "../pages/MegaSena/MegaSena";
import Quina from "../pages/Quina/Quina";
import TimeMania from "../pages/TimeMania/TimeMania";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MegaSena />
        </Route>

        <Route exact path="/quina">
          <Quina />
        </Route>

        <Route exact path="/lotofacil">
          <LotoFacil />
        </Route>

        <Route exact path="/lotomania">
          <LotoMania />
        </Route>

        <Route exact path="/timemania">
          <TimeMania />
        </Route>

        <Route exact path="/diadesorte">
          <DiaDeSorte />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default Router;
