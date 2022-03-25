import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";


import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const [checkboxes, setCheckboxes] = useState([true, false])

  const toggleCheckbox = (id) => {
    setCheckboxes(checkboxes => checkboxes
      .map((checkbox, index) => index === id ? !checkbox : checkbox))
  }

  const cat1 =
  {
    "titre": "Actualités",
    "desc": "Informations liée à l'actualitée",
    "nb": "7"
  }

  const cat2 =
  {
    "titre": "Aides",
    "desc": "Aides versée à la population",
    "nb": "4"
  }

  const cat3 =
  {
    "titre": "Etudiants",
    "desc": "Ressources liées à la vie étudiante",
    "nb": "2"
  }

  const cat = [cat1, cat2, cat3];

  return (
    <div>
      <Row>
        <Col className="pr-grid-col" xs={12} lg={8}>
          <Row className="gutter mb-4">


            {/* Widget activite des ressources */}
            <Col className="mb-4 mb-md-0" xs={12} md={6}>
              <Widget className="">
                <div className="d-flex justify-content-between widget-p-md">
                  <div className="headline-3 d-flex align-items-center">Activité des ressources</div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; Semaine &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Journée</DropdownItem>
                      <DropdownItem>Semaine</DropdownItem>
                      <DropdownItem>Mois</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                <ApexActivityChart className="pb-4" />
              </Widget>
            </Col>

            {/* Widget cat plus active */}
            <Col xs={12} md={6}>
              <Widget className="widget-p-md">
                <div className="d-flex justify-content-between">
                  <div className="headline-3 d-flex align-items-center">Catégories les plus actives</div>
                  <UncontrolledDropdown>
                    <DropdownToggle caret>
                      &nbsp; Semaine &nbsp;
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem>Journée</DropdownItem>
                      <DropdownItem>Semaine</DropdownItem>
                      <DropdownItem>Mois</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                {cat.map((cat) =>
                  <div key={uuidv4()} className={`mt-4 ${s.widgetBlock}`}>
                    <div className={s.widgetBody}>
                      <div className="d-flex">
                        <div className="d-flex flex-column">
                          <p className="body-2">{cat.titre}</p>
                          <p className="body-3 muted">{cat.desc}</p>
                        </div>
                      </div>
                      <div className="body-3 muted">
                        {cat.nb}
                      </div>
                    </div>
                  </div>
                )}
              </Widget>
            </Col>


          </Row>

          {/* <Row className="gutter mb-4">
            <Col xs={12}>
              <Widget className="widget-p-none">
                <div className="d-flex flex-wrap align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center col-12 col-xl-6 p-sm-4">
                    <p className="headline-1">Upgrade your plan</p>
                    <p className="body-3">So how did the classical Latin become so </p>
                    <div className="d-flex justify-content-between my-4">
                      <Button className="rounded-pill mr-3" color="primary">Go Premium</Button>
                      <Button className="rounded-pill body-3" outline color="dark">Try for free</Button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center col-12 col-xl-6">
                    <img className="p-1 img-fluid" src={upgradeImage} alt="..." />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row> */}


          {/* Statistique d'ordre général */}
          <Row className="gutter">
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartRed} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-red" className={`progress-xs ${s.mutedPink}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col className="mb-4 mb-xl-0" xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartYellow} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-yellow" className={`progress-xs ${s.mutedYellow}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartTeal} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="secondary-cyan" className={`progress-xs ${s.mutedTeal}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col>
            <Col xs={6} sm={6} xl={3}>
              <Widget className="widget-p-sm">
                <div className={s.smallWidget}>
                  <div className="d-flex mb-4">
                    <img className="py-1 mr-2 img-fluid" src={heartViolet} alt="..." />
                    <div className="d-flex flex-column">
                      <p className="headline-3">Text</p>
                      <p className="body-2">Num<span className="body-3 muted">/ ber</span></p>
                    </div>
                  </div>
                  <div>
                    <Progress color="violet" className={`progress-xs ${s.mutedViolet}`} value="75" />
                  </div>
                </div>
              </Widget>
            </Col>
          </Row>

          
        </Col>


        {/* Widget publication de ressources */}
        <Col className="mt-4 mt-lg-0 pl-grid-col" xs={12} lg={4}>
          <Widget className="widget-p-lg">
            <div className="headline-3 d-flex align-items-center">Publication de ressources</div>

            {/* Stats global ressources */}
            <div className={s.userParams}>
              <div className="d-flex flex-column">
                <p className="headline-3">4</p>
                <p className="body-3 muted">En attente</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">6</p>
                <p className="body-3 muted">Dépublié</p>
              </div>
              <div className="d-flex flex-column">
                <p className="headline-3">7</p>
                <p className="body-3 muted">Publiée</p>
              </div>
            </div>
            {/* Fin stats global ressources */}


            {/* Statistique */}
            <div className={s.goals}>
              <div className={s.goalsTitle}>
                <p className="headline-3">Statistiques</p>
              </div>
              <div className="d-flex flex-column mt-3">
                <div className={s.activity}>
                  <p className="body-2">Publié / En attente</p>
                  <p className="body-2">7 / <span className="body-3 muted">4</span></p>
                </div>
                <Progress className="progress-xs" multi>
                  <Progress bar color="success" value="70" />
                  <Progress bar color="warning" value="40" />
                </Progress>
              </div>
            </div>
            {/* Fin statistique */}

          

            {/* Zone téléchargement rapport */}
            <div className="d-flex justify-content-between mt-5">
              <div className="headline-3 d-flex align-items-center">Rapport</div>
              <UncontrolledDropdown>
                <DropdownToggle caret>
                  &nbsp; Semaine &nbsp;
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>Journée</DropdownItem>
                  <DropdownItem>Semaine</DropdownItem>
                  <DropdownItem>Mois</DropdownItem>
                  <DropdownItem>Année</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <a className={`btn-primary ${s.statsBtn}`} href="#top" role="button">
              <img className={s.pieImg} src={statsPie} alt="..." />
              <div>
                <p className="headline-2">RAPPORT</p>
                <p className="body-3">Télécharger un rapport</p>
              </div>
            </a>
            {/* Fin zone téléchargement rapport */}
          </Widget>
        </Col>
      </Row>
    </div>
  )
}

export default Dashboard;
