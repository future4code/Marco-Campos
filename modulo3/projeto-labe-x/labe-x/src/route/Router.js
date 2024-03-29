import { BrowserRouter, Switch , Route } from "react-router-dom"
import  AdminHomePage  from "../pages/AdminHomePage"
import  ApplicationFormPage  from "../pages/ApplicationFormPage"
import  CreateTripPage  from "../pages/CreateTripPage"
import  HomePage  from "../pages/HomePage"
import  ListTripsPage  from "../pages/ListTripsPage"
import  LoginPage  from "../pages/LoginPage"
import  TripDetailsPage  from "../pages/TripDetailsPage"


function Router () {
  return (

      <BrowserRouter>
        <Switch>
        
          <Route exact path={"/"} >
            <HomePage/>
          </Route>
        
          <Route exact path={"/trips/list"}>
            <ListTripsPage/>
          </Route>
            
          <Route exact path={"/trips/application"}> 
            <ApplicationFormPage/>
          </Route>
        
          <Route exact path={"/login"}>
            <LoginPage/>
          </Route>
        
          <Route exact path={"/admin/trips/list"}>
            <AdminHomePage/>
          </Route>
        
          <Route exact path={`/admin/trips/id`}>     
            <TripDetailsPage/>
          </Route>
        
          <Route exact path={"/admin/trips/create"}>
            <CreateTripPage/>
          </Route>

        </Switch>    
      </BrowserRouter>
  )
}
export default Router
