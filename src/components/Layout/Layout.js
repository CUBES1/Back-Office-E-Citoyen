// -- React and related libs
import React from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";
import Tables from "../../pages/tables/Tables";
import Users from "../../pages/users/users";
import Categories from "../../pages/categories/categories";
import Charts from "../../pages/uielements/charts/Charts";
import Icons from "../../pages/uielements/icons/IconsPage";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

// -- Component Styles
import s from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs url={props.location.pathname} />
          <Switch>
            <Route path="/administration" exact render={() => <Redirect to="template/dashboard"/>} />
            <Route path="/administration/dashboard" exact component={Dashboard}/>
            <Route path="/administration/typography" exact component={Typography} />
            <Route path="/administration/tables" exact component={Tables} />
            <Route path="/administration/users" exact component={Users} />
            <Route path="/administration/categories" exact component={Categories} />
            <Route path="/administration/notifications" exact component={Notifications} />
            <Route path="/administration/ui-elements" exact render={() => <Redirect to={"/administration/ui-elements/charts"} />} />
            <Route path="/administration/ui-elements/charts" exact component={Charts} />
            <Route path="/administration/ui-elements/icons" exact component={Icons} />
            <Route path="/administration/ui-elements/maps" exact component={Maps} />
            <Route path='*' exact render={() => <Redirect to="/error" />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
