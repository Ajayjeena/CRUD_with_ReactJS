import {Button,styled, FormControl, FormGroup, Input, InputLabel, Typography } from "@mui/material"
import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import { getUser, editUser } from "../service/api";
const Container = styled(FormGroup)`
    width:50%;
    margin:5% auto 0 auto ;
    & > div{
        margin-top:20px;
    }
`
const initialValues = {
    name:'',
    username:'',
    email:'',
    phone:''
}
const EditUser=()=>{
    const [user, setUser] = useState(initialValues);
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(()=>{
        getUserDate();
    },[]);

    const getUserDate=async()=>{
        let response = await getUser(id);
        setUser(response.data);
    }
    const onValueChange=(e)=>{
        console.log( e.target.value);
        setUser({...user, [e.target.name]:e.target.value});
    }
    const addUserDetails=async ()=>{
        await editUser(user,id);
        navigate('/all');
    }
    return (
        <Container>
            <Typography variant="h4">Edit USer</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Username</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="username" value={user.username}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="email" value={user.email}/>
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="phone" value={user.phone}/>
            </FormControl>
            <FormControl>
                <Button onClick={()=>addUserDetails()}variant="contained">Edit USer</Button>
            </FormControl>
        </Container>
    )
}

export default EditUser;