import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Badge,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import TaskContainer from "./components/TaskContainer/TaskContainer.js";

// import BootstrapTable from "react-bootstrap-Table-next";
// import paginationFactory from 'react-bootstrap-Table2-paginator';
// import MUIDataTable from "mui-dataTables";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";

import s from "./Users.module.scss";
import mock from "./mock.js";

const Categories = function () {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstCat] = useState(mock.firstCat);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [TableDropdownOpen, setTableMenuOpen] = useState(false);

  const pageSize = 15;
  const firstTablePagesCount = Math.ceil(firstCat.length / pageSize);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  }

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  }

  const transactionMenuOpen = (id) => {
    setTransactions(
      firstCat.map(transaction => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    )
  }


  return (
    <div>
      <Row>
        <Col>
          <Row className="mb-4">
            <Col>
              <div className="mb-4">
                <Button color="primary" className="">
                  Créer une catégorie
                </Button>
              </div>
              <Widget>
                <div className={s.tableTitle}>
                  <div className="headline-2">Ressources</div>
                  <div className="d-flex">
                    <a href="/#"><img src={searchIcon} alt="Search" /></a>
                    <a href="/#"><img src={funnelIcon} alt="Funnel" /></a>
                    <a href="/#"><img className="d-none d-sm-block" src={cloudIcon} alt="Cloud" /></a>
                  </div>
                </div>
                <div className="widget-table-overflow">
                  <Table className={`table-striped table-borderless table-hover ${s.statesTable}`} responsive>
                    <thead>
                      <tr>
                        <th></th>
                        <th className="w-25">NOM</th>
                        <th className="w-25">NB DE RESSOURCES</th>
                        <th className="w-25">DATE DE CRÉATION</th>
                        <th className="w-25">STATUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstCat
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map(item => (
                          <tr key={uuidv4()}>
                            <td></td>
                            <td>{item.name}</td>
                            <td>{item.nbRess}</td>
                            <td>{item.date}</td>
                            <td><Badge color={item.color}>{item.status}</Badge></td>
                            <td>
                              <Dropdown
                                className="d-none d-sm-block"
                                nav
                                isOpen={item.dropdownOpen}
                                toggle={() => transactionMenuOpen(item.id)}
                              >
                                <DropdownToggle nav>
                                  <img className="d-none d-sm-block" src={moreIcon} alt="More ..." />
                                </DropdownToggle>
                                <DropdownMenu >
                                  <DropdownItem>
                                    {item.status !== "Actif" ?
                                      <div>Activer</div> :
                                      <div>Désactiver</div>}
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <div>Voir les ressources liées</div>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <div>Modifier</div>
                                  </DropdownItem>
                                  <DropdownItem>
                                    <div>Supprimer</div>
                                  </DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>


                  <Pagination className="pagination-borderless" aria-label="Page navigation example">
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage - 1)}
                        previous
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) =>
                      <PaginationItem active={i === firstTableCurrentPage} key={i}>
                        <PaginationLink onClick={e => setFirstTablePage(e, i)} href="#top">
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    )}
                    <PaginationItem disabled={firstTableCurrentPage >= firstTablePagesCount - 1}>
                      <PaginationLink
                        onClick={e => setFirstTablePage(e, firstTableCurrentPage + 1)}
                        next
                        href="#top"
                      />
                    </PaginationItem>
                  </Pagination>


                </div>
              </Widget>
            </Col>
          </Row>

        </Col>
      </Row>
    </div>
  )
}

export default Categories;
