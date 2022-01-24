import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import useForm, {Form } from '../useForm';
import {Controls} from '../controls/Controls';
import { getDepartment } from "../../services/services";
import { api } from "../../services/services";

const initialfval = {
    id: 0,
    first_name: '',
    last_name: '',
    department: '',
    email: '',
    gender: 'male',
    avatar:''
};



const UsersForm = (props)=>{
    const [values, setValues,errors, setErrors, handleInputChange] = useForm(initialfval);
    const {recordForEdit, setOpenPopup, setNotify, type} = props;
    useEffect(()=>{
        if(recordForEdit !== null){
            setValues({...recordForEdit});
        }
    }, [recordForEdit])
    const validate = ()=>{
        let temp = {};
        temp.first_name = values.first_name ? "":"This field is requred!";
        temp.last_name = values.last_name ? "":"This field is requred!";
        temp.email = (/$^|.+@.+..+/).test(values.email) ? "":"This field is requred!";
        setErrors({...temp});

        return Object.values(temp).every(x=> x === "");
    };
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let resp;
        if(type === 'edit'){
            resp = await api.patch('/users', values);

        }else{
            resp = await api.post('/users', values);
        }
        console.log(resp);
        setOpenPopup(false);
        setNotify({isOpen: true, type: "success", message: "submitted successfully!"})

    };

    return (
            <Form onSubmit={handleSubmit}>
            <Grid container>
                 <Grid item xs={6}>
                     <Controls.Input  name="first_name" label="First Name" value={values.first_name} onChange={handleInputChange}/>
                     <Controls.Input  name="last_name" label="Last Name" value={values.last_name} onChange={handleInputChange}/>
                     <Controls.Input  name="email" label="Email" value={values.email} onChange={handleInputChange}/>
                 </Grid>
                 <Grid item xs={6}>
                    {/* <Controls.RadioGroups name="gender" label="Gender" value={values.gender} onChange={handleInputChange} items={genderinit}/> */}
                    <Controls.Input name="avatar" label="Avatar Link" value={values.avatar} onChange={handleInputChange}/>
                    {/* <Controls.Select name="department" label="Department" value={values.department} onChange={handleInputChange} option={getDepartment()}/> */}
                    <div>
                        <Controls.Button type="submit" text="Submit" />
                        <Controls.Button onClick={()=>{setValues({...initialfval})}} color="default"  text="Reset" />
                    </div>
                 </Grid>

             </Grid>
             </Form>
        );
};


export default UsersForm;