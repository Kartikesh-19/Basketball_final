import React, { useState } from 'react';
import Validation from './Validation';
import Button from '@material-ui/core/Button';


const Compose = (props) => {
    console.log(props, "vikass ka data")

    const [errors, setErrors] = useState({});
    console.log(props, "vaikkkkkkkkkkkkkkkkkkk")
    const [disp, setDisp] = useState(false);
    const [disp1, setDisp1] = useState(false);
    const [disp2, setDisp2] = useState(false);
    const [disp3, setDisp3] = useState(false);
    const [disp4, setDisp4] = useState(false)

    const handleChange = (e) => {
        const { value, name } = e.target;
        props.setData({ ...props.data, [name]: value })
        console.log("Data", props.data)
        //setErrors(Validation(props))
        // if(e.target.name=== "fname" && e.target.value =="")
        // {
        //     setShow(true)
        // }

        // console.log(props.data.fname==="");
        if (props.data.fname === "") {
            setDisp(true)
        }
        else {
            setDisp(false)
        }
        if (props.data.lname === "") {
            setDisp1(true)
        }
        else {
            setDisp1(false)
        }
        if (props.data.height === "") {
            setDisp2(true)
        }
        else {
            setDisp2(false)
        }
        if (props.data.position === "") {
            setDisp3(true)
        }
        else {
            setDisp4(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setErrors(Validation(props))

        props.setData({ fname: "", lname: "", height: "", position: "" });
        console.log("form submitted", props.Playerdata)

        if (props.data.fname !== "" && props.data.lname !== "" && props.data.height !== "" && props.data.position !== "") {
            props.Playerdata.push(props.data)
        }




    }


    const SaveClick = () => {



        if (props.data.fname === "" && props.data.lname === "" && props.data.height === "" && props.data.position === "") {

            setDisp4(true)
        }
        else {
            setDisp4(false)
        }




    }

    const NextButton = () => {

        props.setForm(1)

        
    }
    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="fname"placeholder="First Name" value={props.data.fname}onChange={handleChange} />
                    <br/>
                    {disp && <label style={{ color: "red" }}>This field is required</label>}
                    <br/>
                    {errors.fname && <p style={{ color: "red" }} className="error">{errors.fname}</p>}
                    <input type="text" name="lname" placeholder="Last Name" value={props.data.lname} onChange={handleChange} />
                    <br/>
                    {disp1 && <label style={{ color: "red" }}>This field is required</label>}
                    <br/>
                    {errors.lname && <p style={{ color: "red" }} className="error">{errors.lname}</p>}

                    <input type="text" name="height" placeholder="height" maxLength={9} pattern="[+-]?\d+(?:[.,]\d+)?" value={props.data.height} onChange={handleChange} />
                    <br></br>
                    {disp2 && <label style={{ color: "red" }}>This field is required</label>}
                    <br></br>
                    {errors.height && <p style={{ color: "red" }} className="error">{errors.height}</p>}

                    <select type="text"
                        name="position"
                        placeholder="Position"
                        onChange={handleChange}>

                        <option value="Select-Position">-Select-Position-</option>
                        <option value="Point Guard">Point Guard(PG)</option>
                        <option value="Shooting Guard">Shooting Guard(SG)</option>
                        <option value="Small Forward">Small Forward(SF)</option>
                        <option value="Power Forward">Power Forward(PF)</option>
                        <option value="Center">Center(C)</option>
                    </select>
                    <br></br>
                    {disp3 && <label style={{ color: "red" }}>This field is required</label>}

                    {errors.position && <p style={{ color: "red" }} className="error">{errors.position}</p>}
                    {/* <button type="submit" className= "button" onClick={(e)=>SaveClick(e)}>Save</button> */}
                    {/* <Button type="submit" color="primary"  size="medium" className="button" onClick={(e)=>SaveClick(e)} >
                       Save
                    </Button> */}

                    <Button variant="contained" color="primary" type="submit" onClick={(e) => SaveClick(e)}>
                        Save
                    </Button>
                    <Button variant="contained" ml={2} color="secondary" type="button" onClick={() => NextButton()}>NEXT</Button>
                    {/* <button type="button" className="button1" onClick={()=>props.setShow(1)}>Next</button> */}
                </form>
            </div>
        </>
    )
}

export default Compose;
