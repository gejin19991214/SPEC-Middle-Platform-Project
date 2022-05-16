import React, { useState } from "react";
import "./Products.css";
import { BsSearch } from "react-icons/bs";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typed from "react-typed";

const Products = () => {
  // const [backendData, setbackendData] = useState();
  // useEffect(() => {
  //   fetch("/getAll")
  //     .then((response) => {
  //       return response.text();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setbackendData(data);
  //     });
  // }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showTable, setShowTable] = useState(false);


  function createData(CPUCores, Memory, Processor, OperatingSystem) {
    return { CPUCores, Memory, Processor, OperatingSystem };
  }

  const handleSearch = () => {
    setShowTable(true);
    fetch("/search/" + searchTerm)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let allData = [];
        for (const d in data) {
          const t = createData(
            data[d].cpu_cores,
            data[d].new_memory_des,
            data[d].processor_name,
            data[d].system_name
          );
          allData.push(t);
        }
        setSearchResult(allData);
      });
  };

  return (
    <div className="products">        
      <div className="search">
        <div className="searchInputs">
          <Typed
            strings={["Search for products"]}
            typeSpeed={40}
            backSpeed={50}
            attr="placeholder"
            loop
          >
            <input
              type="text"
              className="inputField"
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </Typed>
          <button type="submit" className="btn" onClick={handleSearch}>
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="productInfo">
        {showTable && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>CPUCores</TableCell>
                  <TableCell align="left">Memory</TableCell>
                  <TableCell align="left">Processor</TableCell>
                  <TableCell align="left">OperatingSystem</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {searchResult.map((row, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.CPUCores}
                    </TableCell>
                    <TableCell align="left">{row.Memory}</TableCell>
                    <TableCell align="left">{row.Processor}</TableCell>
                    <TableCell align="left">{row.OperatingSystem}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Products;
