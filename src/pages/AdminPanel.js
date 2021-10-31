import React, { useState } from "react";
import { useHistory } from "react-router";
import AddCourse from "../components/admin/AddCourse.js";
import Orders from "../components/admin/Orders.js";
import Overview from "../components/admin/Overview.js";
import Courses from "../components/admin/Courses.js";
import useAuth from "../hooks/useAuth.js";

const AdminPanel = () => {
  const history = useHistory();
  const { AllContexts } = useAuth();
  const { user } = AllContexts;
  const { uid } = user;
  const [active, setActive] = useState("Overview");
  return (
    <div>
      {uid !== "5SR1S1fW76UBrzUJW0bjxdxcdo73" ? (
        history.push("/home")
      ) : (
        <div>
          <div className="container-fluid">
            <div className="row my-3">
              <div className="col-3 border">
                <ul className="list-unstyled">
                  <li className="w-100 mb-2">
                    <input
                      onClick={() => setActive("Overview")}
                      className={
                        active === "Overview"
                          ? "w-100 bg-primary text-white d-block"
                          : "w-100 bg-white d-block"
                      }
                      type="button"
                      value="Overview"
                    />
                  </li>
                  <li className="w-100 mb-2">
                    <input
                      onClick={() => setActive("Orders")}
                      className={
                        active === "Orders"
                          ? "w-100 bg-primary text-white d-block"
                          : "w-100 bg-white d-block"
                      }
                      type="button"
                      value="Orders"
                    />
                  </li>
                  <li className="w-100 mb-2">
                    <input
                      onClick={() => setActive("Courses")}
                      className={
                        active === "Courses"
                          ? "w-100 bg-primary text-white d-block"
                          : "w-100 bg-white d-block"
                      }
                      type="button"
                      value="Courses"
                    />
                  </li>
                  <li className="w-100 mb-2">
                    <input
                      onClick={() => setActive("Add a Course")}
                      className={
                        active === "Add a Course"
                          ? "w-100 bg-primary text-white d-block"
                          : "w-100 bg-white d-block"
                      }
                      type="button"
                      value="Add a Course"
                    />
                  </li>
                </ul>
              </div>
              <div className="col-9">
                {(active === "Overview" && <Overview />) ||
                  (active === "Orders" && <Orders />) ||
                  (active === "Courses" && <Courses />) ||
                  (active === "Add a Course" && <AddCourse />)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
