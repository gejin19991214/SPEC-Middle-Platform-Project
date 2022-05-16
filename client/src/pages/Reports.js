import React, { useState, useEffect } from "react";
import "./Reports.css";
// import Paper from '@mui/material/Paper';
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import PCard from "../components/PCard";

const Reports = () => {
  const [CPU, setCpu] = useState(200);
  const [Memory, setMemory] = useState(10000);
  const [Processor, setProcessor] = useState('');
  const [Rating, setRaing] = useState(0.1);

  const [productInfos, setProductInfos] = useState([]);

  function createData(SystemName, CPUCores, ProcessorName, Memory, Grade) {
    return { SystemName, CPUCores, ProcessorName, Memory, Grade };
  }

  useEffect(() => {
    fetch("/filter/" + CPU + '/' + Memory + '/' + Processor + '/' + Rating)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      let allData = [];
      for(const d in data) {
        const t = createData(
          data[d].system_name,
          data[d].cpu2006_cpu2017_cores,
          data[d].processor_name,
          data[d].mem_details,
          data[d].grade
        );
        allData.push(t);
      }
      setProductInfos(allData);
    })
  }, [CPU, Memory, Processor, Rating]);

  return (
    <div className="reports">
      <div className="filter">
        <table>
          <tbody>
            <tr>
              <td>
                <span className="category">cpu_cores</span>
              </td>
              <td>
                <button
                  onClick={() => {
                    CPU === 32 ? setCpu(0) : setCpu(32);
                  }}
                  className={CPU === 32 ? "btnClass clicked" : "btnClass"}
                >
                  &lt; 32
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    CPU === 64 ? setCpu(0) : setCpu(64);
                  }}
                  className={CPU === 64 ? "btnClass clicked" : "btnClass"}
                >
                  &lt; 64
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    CPU === 1000 ? setCpu(0) : setCpu(1000);
                  }}
                  className={CPU === 1000 ? "btnClass clicked" : "btnClass"}
                >
                  Others
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="category">Memory</span>
              </td>
              <td>
                <button
                  onClick={() => {
                    Memory === 192 ? setMemory(10000) : setMemory(192);
                  }}
                  className={Memory === 192 ? "btnClass clicked" : "btnClass"}
                >
                  &lt; 192g
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Memory === 384 ? setMemory(10000) : setMemory(384);
                  }}
                  className={Memory === 384 ? "btnClass clicked" : "btnClass"}
                >
                  &lt; 384g
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Memory === 9999 ? setMemory(10000) : setMemory(9999);
                  }}
                  className={Memory === 9999 ? "btnClass clicked" : "btnClass"}
                >
                  others
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="category">Processor</span>
              </td>
              <td>
                <button
                  onClick={() => {
                    Processor === 'Intel' ? setProcessor('') : setProcessor('Intel');
                  }}
                  className={Processor === 'Intel' ? "btnClass clicked" : "btnClass"}
                >
                  Intel
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Processor === 'AMD' ? setProcessor('') : setProcessor('AMD');
                  }}
                  className={Processor === 'AMD' ? "btnClass clicked" : "btnClass"}
                >
                  AMD
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Processor === '%' ? setProcessor('') : setProcessor('%');
                  }}
                  className={Processor === '%' ? "btnClass clicked" : "btnClass"}
                >
                  Others
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <span className="category">Rating</span>
              </td>
              <td>
                <button
                  onClick={() => {
                    Rating === 2 ? setRaing(0.1) : setRaing(2);
                  }}
                  className={Rating === 2 ? "btnClass clicked" : "btnClass"}
                >
                  &gt; 2
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Rating === 1 ? setRaing(0.1) : setRaing(1);
                  }}
                  className={Rating === 1 ? "btnClass clicked" : "btnClass"}
                >
                  &gt; 1
                </button>
              </td>
              <td>
                <button
                  onClick={() => {
                    Rating === 0.2 ? setRaing(0.1) : setRaing(0.2);
                  }}
                  className={Rating === 0.2 ? "btnClass clicked" : "btnClass"}
                >
                  Others
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="whitespace"></div>
      </div>
      <div className="result">
        <Container className="contain">
          <Grid container spacing={3}>
            {productInfos.map((productInfo, index) => (
              <Grid item key={index} xs={12} md={5} lg={4}>
                <PCard productInfo={productInfo} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Reports;
