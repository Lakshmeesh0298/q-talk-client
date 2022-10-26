import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { Link } from "react-router-dom";
import Styles from "./batchList.module.css";
import { BsMessenger } from "react-icons/bs";
const BatchList = () => {
  let [batchList, setBatchList] = useState([]);
  let [searchBatch, setSearchBatch] = useState("");
  // let [searchTrainer, setSearcTrainer] = useState("");

  useEffect(() => {
    async function demo() {
      let fetchData = await axiosInstance.get("/batch/batch_list");
      let finalBatchlistData = fetchData.data;
      setBatchList(finalBatchlistData.fetchBatchList);
    }
    demo();
  }, []);

  let filterData = batchList;

  return (
    <>
      <section className={Styles.BatchListBlock}>
        <div className={Styles.batchlistbody}>
          <p>Batch List</p>
          <div className={Styles.serachBlock}>
            <input
              type="text"
              placeholder="batch code / trainer"
              value={searchBatch}
              onChange={e => setSearchBatch(e.target.value)}
            />
            {/* <input
              type="text"
              placeholder="trainer"
              value={searchTrainer}
              onChange={e => setSearcTrainer(e.target.value)}
            /> */}
          </div>
          <div className={Styles.batchTable}>
            <table>
              <thead>
                <td>Batch List</td>
                <td>Branch</td>
                <td>Subject</td>
                <td>Course</td>
                <td>Trainer</td>
                <td>Total Students</td>
                <td>View Chat</td>
              </thead>
              <>
                {filterData
                  .filter(data => {
                    if (searchBatch == "") {
                      console.log("emty");
                      return data;
                    } else if (
                      data.batchcode
                        .toLowerCase()
                        .includes(searchBatch.toLocaleLowerCase()) ||
                      data.trainer
                        .toLowerCase()
                        .includes(searchBatch.toLocaleLowerCase())
                    ) {
                      console.log("batch");
                      return data;
                    }
                    // else if (
                    //   data.trainer
                    //     .toLowerCase()
                    //     .includes(searchTrainer.toLocaleLowerCase())
                    // ) {
                    //   console.log("trainer");
                    //   return data;
                    // }
                  })
                  .map(x => {
                    return (
                      <tbody>
                        <td>{x.batchcode}</td>
                        <td>{x.branch}</td>
                        <td>{x.subject}</td>
                        <td>{x.course}</td>
                        <td>{x.trainer}</td>
                        <td>{x.addstudents.length}</td>
                        <td>
                          <Link to={`/${x.batchcode}`}>
                            <BsMessenger />
                          </Link>
                        </td>
                      </tbody>
                    );
                  })}
              </>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default BatchList;
