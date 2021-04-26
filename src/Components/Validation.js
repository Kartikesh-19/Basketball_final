export default function Validation(props){
    console.log(props,"dattttttt")
    let errors ={};
    if(!props.data.fname){
        errors.fname="Name is Required."
    }
    else{
        errors.fname=""
    }
    if(!props.data.lname){
        errors.lname="LastName is Required."
    }
    else{
        errors.lname=""
    }
    
    if(!props.data.height){
        errors.height="Enter the height"
    }
    else{
        errors.height=""
    }
    if(!props.data.position=="default"){

        errors.position ="Enter the Player Position"
    }
    else{

        errors.position=""
    }
    return errors;
}
