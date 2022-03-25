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
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Button,
  Badge,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import TaskContainer from "./components/TaskContainer/TaskContainer.js";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";

import s from "./Tables.module.scss";
import mock from "./mock.js";

const Tables = function () {
  const [firstTable] = useState(mock.firstTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  

  const pageSize = 15;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  }





  const transactionMenuOpen = (id) => {
    setTransactions(
      firstTable.map(transaction => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    )
  }



  const toggleTask = (id) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
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
                  Ajouter une ressource
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
                        <th className="w-25">AUTEUR</th>
                        <th className="w-25">TITRE</th>
                        <th className="w-25">DATE DE PUBLICATION</th>
                        <th className="w-25">CATEGORIE</th>
                        <th className="w-25">STATUT</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map(item => (
                          <tr key={uuidv4()}>
                            <td></td>
                            <td className="d-flex align-items-center"><img className={s.image} src={item.img} alt="UserPP" /><span className="ml-3">{item.name}</span></td>
                            <td>{item.titre}</td>
                            <td>{item.date}</td>
                            <td>{item.categorie}</td>
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
                                    <div>Consulter</div>
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    {item.status !== "Publié" ?
                                      <div>Approuver</div> :
                                      <div>Désapprouver</div>}
                                  </DropdownItem>
                                  <DropdownItem divider />
                                  <DropdownItem>
                                    <div>Voir les commentaires</div>
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

export default Tables;
