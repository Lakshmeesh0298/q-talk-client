import React from "react";
import { useState } from "react";
import Styles from "./batchRegister.module.css";
import axiosInstance from "../axios/axiosInstance";
const RegisterBatch = () => {
  let [batchcode, setBatchCode] = useState("");
  let [subject, setSubject] = useState("");
  let [course, setBranch] = useState("");
  let [branch, setCourse] = useState("");
  let [date_time, setBratchDateTime] = useState("");
  let [trainer, setTrainer] = useState("");
  let [tracker, setTracker] = useState();
  let [file, setFile] = useState();
  let handeleSubmit = async e => {
    e.preventDefault();
    let payload = {
      batchcode,
      subject,
      course,
      branch,
      date_time,
      trainer,
      tracker,
      file,
    };
    console.log(payload);

    let data = await axiosInstance.post("/batch/batch_create", payload);
    console.log(data);
  };

  return (
    <div className={Styles.BatchRegisterBlock}>
      <form onSubmit={handeleSubmit} encType="multipart/form-data">
        <p></p>
        <div>
          <label htmlFor="">Batch Code</label>
          <input
            type="text"
            value={batchcode}
            onChange={e => setBatchCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Subject</label>
          <select value={subject} onChange={e => setSubject(e.target.value)}>
            <option value="">---select--</option>
            <option value="manual">Manual</option>
            <option value="automation">Automation</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Course</label>
          <select value={course} onChange={e => setCourse(e.target.value)}>
            <option value="">---select--</option>
            <option value="Classic selenium">Classic selenium</option>
            <option value="java">Javaa</option>
            <option value="javascript">JavaScipt</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Branch</label>
          <select value={branch} onChange={e => setBranch(e.target.value)}>
            <option value="">---select--</option>
            <option value="Rajajinagar">Rajajinagar</option>
            <option value="Btm">Btm</option>
            <option value="Btr">Btr</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Batch date and time</label>
          <input
            type="date"
            name=""
            id=""
            value={date_time}
            onChange={e => setBratchDateTime(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Trainer</label>
          <select value={trainer} onChange={e => setTrainer(e.target.value)}>
            <option>-----------</option>
            <option value="sayad">Sayad</option>
            <option value="keshaw">Keshaw</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Tracker</label>
          <select value={tracker} onChange={e => setTracker(e.target.value)}>
            <option>-----------</option>
            <option value="sindu">Sindu</option>
            <option value="sindu frnd">Sindu frnd</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Add Students</label>
          <input
            type="file"
            name="file"
            onChange={e => setFile(e.target.files[0])}
          />
        </div>
        <div>
          <button>save</button>
          <button>cancel</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterBatch;
