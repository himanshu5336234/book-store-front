import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../popup/popup";
import "./index.css";
export const Addauthor = () => {
  const [handlePopup, setHandlePopup] = React.useState(false);
  const [AutherID, setAutherID] = React.useState({id:0,addbook:false});

  const { AuthorData } = useSelector((state) => ({
    AuthorData: state.user.AuthorData,
  }));
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: "GET_AUTHOR_DATA" });
  }, [AuthorData]);

  const handle = useCallback(() => {
    setHandlePopup(!handlePopup);
  }, [handlePopup]);


  const handler =({id,status})=>{

    setAutherID({id:id,addbook:status})

    setHandlePopup(true)
  }
  return (


    <div id="container">
        {handlePopup && <Popup setHandlePopup={setHandlePopup} AutherID={AutherID}/>}
      <nav>
        <div className="nav-container">
          <h2>Authers</h2>
          <button onClick={()=>{handler({id:0,status:false})}} className="Add-btn">Add New Author</button>
        </div>
      </nav>

      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>D-O-B</th>
            <th>Add Books</th>
          </tr>
          {AuthorData.length>0? (
            <>
              {AuthorData.map((item) => {
                return (
                  <tr key={(item._id).toString()}>
                    <td className=" gray">{item.Name}</td>
                    <td className=" gray">{item.Age}</td>
                    <td className=" gray">{item.Dob}</td>
                    <td><button classname="book-btn" onClick={()=>{handler({id:item._id,status:true})}} >Add book</button></td>
                  </tr>
                );
              })}
            </>
          ):<></>}
        </tbody>
      </table>
    </div>
  );
};

{
  /* <table class="tab">
            <tbody><tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
           
            <tr><td class="gray">714-69-5617</td><td>Sally Whebell</td><td>07-Aug-2020<br><spam class="gray">2:29 AM</spam></td><td class="gray">$634.2</td><td class="Delivered">Delivered</td></tr><tr><td class="gray">752-42-3160</td><td>Emmery Grizard</td><td>11-Mar-2020<br><spam class="gray">3:14 PM</spam></td><td class="gray">$518.23</td><td class="New">New</td></tr><tr><td class="gray">671-99-4274</td><td>Alano Carnaman</td><td>09-Oct-2020<br><spam class="gray">11:41 AM</spam></td><td class="gray">$400.34</td><td class="New">New</td></tr><tr><td class="gray">359-13-4724</td><td>Huey Coombes</td><td>16-Nov-2020<br><spam class="gray">6:35 PM</spam></td><td class="gray">$559.06</td><td class="Delivered">Delivered</td></tr><tr><td class="gray">302-50-0415</td><td>Rex Pilsworth</td><td>26-Feb-2020<br><spam class="gray">2:02 PM</spam></td><td class="gray">$347.03</td><td class="Delivered">Delivered</td></tr><tr><td class="gray">332-24-5988</td><td>Lou Udale</td><td>25-Jun-2020<br><spam class="gray">11:41 PM</spam></td><td class="gray">$645.82</td><td class="InTransit">InTransit</td></tr><tr><td class="gray">239-32-6080</td><td>Penni Blight</td><td>30-May-2020<br><spam class="gray">8:15 PM</spam></td><td class="gray">$472.53</td><td class="Packed">Packed</td></tr><tr><td class="gray">579-80-0751</td><td>Elberta Farress</td><td>25-Jun-2020<br><spam class="gray">4:42 PM</spam></td><td class="gray">$774.63</td><td class="InTransit">InTransit</td></tr><tr><td class="gray">494-62-5297</td><td>Danya Regan</td><td>27-May-2020<br><spam class="gray">6:33 AM</spam></td><td class="gray">$785.02</td><td class="New">New</td></tr><tr><td class="gray">373-65-1146</td><td>Alexandros Fiddyment</td><td>15-Mar-2020<br><spam class="gray">12:42 AM</spam></td><td class="gray">$461.99</td><td class="Packed">Packed</td></tr><tr><td class="gray">649-95-4216</td><td>Nissy Dalglish</td><td>22-Dec-2019<br><spam class="gray">5:08 AM</spam></td><td class="gray">$252.63</td><td class="InTransit">InTransit</td></tr></tbody></table> */
}
