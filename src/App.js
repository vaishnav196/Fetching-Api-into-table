
import "./App.css";
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.min.js';
import React, { useEffect, useState } from "react";

function App() {
  const [record, setrecord] = useState([]);
  const [modaldata, setmodaldata] = useState({
    id: "",
    title: "",
    body: "",
    name: "",
    username: "",
    email: "",
    address:''
  });

  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  
  const totalPages = Math.ceil(record.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = record.slice(startIndex, endIndex);


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?page=${currentPage}&limit=${itemsPerPage}`)
      .then((response) => response.json())
      .then((res) => setrecord(res));
  }, [currentPage,itemsPerPage]);

  const viewDetails = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((res) => setmodaldata(res));
  };


  return (
    <div className="App">
      <div className="container ">
        <div className="row">
          <div className="col">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th>id</th>
                  <th>title</th>
                  <th>body</th>
                  <th>view user</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>

                    <td>
                      <button
                        className="btn btn-outline-light"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={(e) => viewDetails(item.id)}
                      >
                        view details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                 selected user details
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body overflow-auto">
                    <table className="table table-sm  overflow-scroll  table-striped table-dark ">
                      <thead className="table-light  ">
                        <th>id</th>
                        <th>username</th>
                        <th>name</th>
                        <th>email</th>
                        <th>address</th>
                        <th>street</th>
                        <th>suite</th>
                        <th>Zipcode</th>
                      </thead>
                      <tbody className="table table-sm   ">
                        <tr className="  overflow-scroll   ">
                          <td>{modaldata.id}</td>
                          <td>{modaldata.username}</td>
                          <td>{modaldata.name}</td>
                          <td>{modaldata.email}</td>
                          <td>{modaldata.address.city}</td>
                          <td>{modaldata.address.street}</td>
                          <td>{modaldata.address.suite}</td>
                          <td>{modaldata.address.zipcode}</td>
                         
                         
                       
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item ">
      <a class="page-link" href="#" tabindex="-1" onClick={()=>{setCurrentPage(currentPage-1)}}>Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(1)}}>1</a></li>
    <li class="page-item " aria-current="page">
      <a class="page-link" href="#" onClick={()=>{setCurrentPage(2)}}>2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(3)}}>3</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(4)}}>4</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(5)}}>5</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(6)}}>6</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(7)}}>7</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(8)}}>8</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(9)}}>9</a></li>
    <li class="page-item"><a class="page-link" href="#" onClick={()=>{setCurrentPage(10)}}>10</a></li>
    <li class="page-item">
      <a class="page-link" href="#" onClick={()=>{setCurrentPage(currentPage+1)}}>Next</a>
    </li>
  </ul>
</nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;






