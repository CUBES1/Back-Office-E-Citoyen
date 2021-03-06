import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";
import ressLogo from "../../assets/ressLogo_ico.svg";


const Sidebar = (props) => {

  const {
    activeItem = '',
    ...restProps
  } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false)

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true)
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false)
      }, 0);
    }
  }, [props.sidebarOpened])

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })} >
      <header className={s.logo}>
        <img src={ressLogo} width="50" />
        <span className={s.title}>Ressources <br /> Relationelles</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Dashboard"
          isHeader
          iconName={<i className={'eva eva-home-outline'} />}
          link="/administration/dashboard"
          index="dashboard"
        />
        <h5 className={s.navTitle}>Administration</h5>
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Ressources"
          isHeader
          iconName={<i className={'eva eva-file-outline'} />}
          link="/administration/tables"
          index="tables"
          badge="4"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Utilisateurs"
          isHeader
          iconName={<i className={'eva eva-people-outline'} />}
          link="/administration/users"
          index="users"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Cat??gories"
          isHeader
          iconName={<i className={'eva eva-archive-outline'} />}
          link="/administration/categories"
          index="categories"
        />

        <h5 className={s.navTitle}>Statistiques</h5>
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Graphiques"
          isHeader
          iconName={<i className={'eva eva-pie-chart-outline'} />}
          link="/administration/uielements"
          index="uielements"
          childrenLinks={[
            {
              header: 'Ressources', link: '/administration/charts/ressources',
            },
            {
              header: 'Cat??gories', link: '/administration/charts/categories',
            },
            {
              header: 'Utilisateurs', link: '/administration/charts/users',
            },
          ]}
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Rapport"
          isHeader
          iconName={<i className={'eva eva-arrow-circle-down-outline'} />}
          link="/administration/rapports"
          index="rapports"
        />

        {/* <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Typography"
          isHeader
          iconName={<i className={'eva eva-text-outline'}/>}
          link="/administration/typography"
          index="typography"
        /> */}
        {/* <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Tables"
          isHeader
          iconName={<i className={'eva eva-grid-outline'}/>}
          link="/administration/tables"
          index="tables"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="Notifications"
          isHeader
          iconName={<i className={'eva eva-bell-outline'}/>}
          link="/administration/notifications"
          index="notifications"
        />
        <LinksGroup
          onActiveSidebarItemChange={activeItem => props.dispatch(changeActiveSidebarItem(activeItem))}
          activeItem={props.activeItem}
          header="UI Elements"
          isHeader
          iconName={<i className={'eva eva-cube-outline'}/>}
          link="/administration/uielements"
          index="uielements"
          childrenLinks={[
            {
              header: 'Charts', link: '/administration/ui-elements/charts',
            },
            {
              header: 'Icons', link: '/administration/ui-elements/icons',
            },
            {
              header: 'Google Maps', link: '/administration/ui-elements/maps',
            },
          ]}
        /> */}
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(Sidebar));
