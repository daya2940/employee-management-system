import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
export const Dashboard = () => {
  const data = [
    {
      id: 1,
      name: "test1",
      age: "11",
      gender: "male",
      email: "test1@gmail.com",
      phoneNo: "9191919191",
    },
    {
      id: 2,
      name: "test2",
      age: "12",
      gender: "male",
      email: "test2@gmail.com",
      phoneNo: "9292929292",
    },
    {
      id: 3,
      name: "test3",
      age: "13",
      gender: "male",
      email: "test3@gmail.com",
      phoneNo: "9393939393",
    },
  ];
  return (
    <div className="container">
      <div>
        {data.map((item) => {
          return (
            <div className="card mt-2" style={{ width: "auto" }} key={item.id}>
              <div className="card-body">
                <h5 className="card-title">
                  <BsFillPersonFill className="mr-1" /> {item.name}
                </h5>
                <h6>Age - {item.age}</h6>
                <h6>Gender - {item.gender}</h6>
                <p className="card-text">
                  <span>email - {item.email}</span>
                  <span className="ml-3">phoneno- {item.phoneNo}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
