import { useEffect, useState } from "react";
import {Table, TableBody, TableCell, TableHead,Button, TableRow, styled } from "@mui/material";

import { getUsers } from "../service/api";


const StyledTable = styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`;

const Thead = styled(TableRow)`
    background:#000;
    & > th{
        color:#fff;
        font-size:20px;
    }
`

const TBody = styled(TableRow)`
    & > td{
        font-size:20px;
    }
`
const AllUser=()=>{

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        getUsersDetails();
    },[]);

    const getUsersDetails=async()=>{
        let response = await getUsers();
        setUsers(response.data);
    }
    
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map(user=>(
                        <TBody>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}}>Delete</Button>
                                <Button variant="contained" color="secondary">Edit</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUser;