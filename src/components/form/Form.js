import React, {useState} from 'react';
import {useHistory} from "react-router"
import './form.css';
import { useQuery } from '@chakra-ui/react';

export default function Form(){

    const {  data, error, isLoading, isError }  = useQuery('form')

    const [form, setForm] = useState({
        name: "",
        phone: "",
    })

    const updateForm = (e) => {
        setForm ({
            ...form,
            [e.target.name]: e.target.value,
        })
        // console.log(e.target)
        // console.log(form)
    }


    //onSubmit redirect to a new page
    //use history.push. import from react-router-dom
    const history = useHistory();


    //"send" method using fetch
    const sendEmail = (e) => {

        e.preventDefault();

        const data = {
            service_id: 'service_z3p8h0m',
            template_id: 'template_svmf3nm',
            user_id: 'user_7Pf1rN0FgZQwrrMpFSw55',
            template_params: form
        };

    
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)
        })

        .then((result) => {
            console.log(result.statusText);
        }, (error) => {
            console.log(error.statusText);
        });
        
        e.target.reset();

        history.push("/portfolio")     //onSubmit redirect to a new page
    }



    return (
        <div className = "form-box">

            <h5 className = "form-step"> Fill in the form to report a problem </h5>

            <form onSubmit = { sendEmail }>


                <div className = "field4">
                

 
                <input 
                    type ="text" 
                    className = "form-input"
                    name ="designText" 
                    placeholder="Exact copy (words) in the design"
                    onChange ={updateForm} 
                    value = {form.designText}
                />

                <input 
                    type ="text" 
                    className = "form-input"
                    name ="budget" 
                    placeholder="Budget"
                    onChange ={updateForm} 
                    value = {form.budget}
                />

                <textarea 
                    type ="text" 
                    className = "form-input"
                    name ="comment" 
                    placeholder="Comments"
                    onChange ={updateForm} 
                    value = {form.comment}
                />
                </div>
                
                

                {/* SUBMIT button */}
                
                <button 
                type = "submit"
                id= "submitBtn"
                className = "submitBtn"
                > submit</button>
                

            </form>
            {/* end of form */}

        </div>
        // end of form-box
    )
}
