import React from "react";
import Styles from "./batchChat.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { normalAxios } from "../axios/axiosInstance";
import { useState } from "react";
import { BsMessenger, BsFillChatSquareTextFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import StudentChat from "./StudentChat";

const BatchChat = () => {
  let { batchcode } = useParams();
  let [indiualBatch, setIndiualBatch] = useState([]);
  let [searchStud, setSearchStud] = useState("");
  useEffect(() => {
    async function fetchIndiual() {
      let { data } = await normalAxios.get(`/batch/batch_list/${batchcode}`);
      setIndiualBatch(data.fetchBatchList);
      console.log(data.fetchBatchList);
    }
    fetchIndiual();
  }, []);
  return (
    <div className={Styles.ChatBlock}>
      <section className={Styles.chatBlockSec}>
        <p>Chat</p>
        {indiualBatch.map(res => {
          return (
            <>
              <article className={Styles.chatDetails}>
                <aside className={Styles.chatDataBlock}>
                  <h1>
                    <BsMessenger />
                    <sup>{res.batchcode}</sup>
                  </h1>
                  <main>
                    <FaUserAlt />
                    <h1>{res.trainer}</h1>
                  </main>
                  <main>
                    <BsFillChatSquareTextFill />
                    <h1>Broad Cast Messages</h1>
                  </main>
                  <main>
                    <TbMessages />
                    <h1>Student Message</h1>
                  </main>
                </aside>
                <aside className={Styles.chatStudentsList}>
                  <main>
                    <TbMessages />
                    <input
                      type="text"
                      placeholder=" Search Chat"
                      value={searchStud}
                      onChange={e => setSearchStud(e.target.value)}
                    />
                  </main>
                  <div>
                    {res.addstudents
                      .filter(data => {
                        if (
                          data.username
                            .toLowerCase()
                            .includes(searchStud.toLocaleLowerCase())
                        ) {
                          return data;
                        }
                      })
                      .map(x => {
                        return (
                          <>
                            <div className={Styles.Studentslist}>
                              <main>
                                <FaUserAlt />
                              </main>
                              <aside>
                                <h4>{x.username}</h4>
                              </aside>
                            </div>
                          </>
                        );
                      })}
                  </div>
                </aside>
                <aside className={Styles.studentChatBlock}>
                  <StudentChat />
                </aside>
              </article>
            </>
          );
        })}
      </section>
    </div>
  );
};

export default BatchChat;
