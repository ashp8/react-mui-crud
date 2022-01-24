import React, {useEffect, useState} from "react";
import  UsersForm  from "./UsersForm";
import  Popup  from "../Popup";
import { PeopleOutlineTwoTone, Search, Add as AddIcon, EditOutlined, Close} from "@material-ui/icons";
import PageHeader from "../PageHeader";
import {TablePagination, makeStyles, Paper, TableBody, TableCell, InputAdornment } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import useTable from "../useTable";
import { api } from "../../services/services";
import {Controls} from '../controls/Controls';
import Notification from "../Notification";
import ConfirmDialog from "../ConfirmDialog";
import UserInfo from "./UserInfo";

const useStyles = makeStyles(theme=>({
    pageContent:{
        margin: theme.spacing(1),
        padding: theme.spacing(3)
    },
    img: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
    },
    searchInput: {
        width: '60%'
    },
    addButton: {
        position: 'absolute',
        right: '10px',
    }
    
}));

const Users = ()=>{
    const classes = useStyles();
    const [records, setRecords] = useState([]);
    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);
    const [filter, setfilter] = useState([]);
    const [recordForEdit, setRecordForEdit] = useState(null);
    const [notify, setNotify] = useState({isOpen: false, message: '', type: ''});
    const [confirmDialog, setConfirmDialog] = useState({isOpen: false, title: '', subTitle: ''});
    const [openPopup, setOpenPopup] = useState(false);
    const [openInfoPopup, setOpenInfoPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [edit, setedit] = useState('noedit');

    const headCells = [
        {id: 'avatar', label: "Avatar"},
        {id: 'id', label: "ID"},
        {id: 'first_name', label: "First Name"},
        {id: 'last_name', label: "Last Name"},
        {id: 'email', label: "Email"},
        {id: 'actions', label: "Actions"},
    ];


    useEffect(()=>{
        async function getData(){
            const resp = await api.get(`users?page=${page+1}`);
            if(resp.data.data){
                setRecords(resp.data.data);
            }
        }
        getData();
   }, [])
   const {TblContainer, TblHead } = useTable(records, headCells);
  

   const handleChangePage = async (event, newPage)=>{
        setPage(newPage);
        await recordsAfterPagingAndSorting(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const recordsAfterPagingAndSorting = async(newPage)=>{
        const resp = await api.get(`users?page=${newPage + 1}`);
        if(resp.data.data){
            setRecords(resp.data.data);
        }
    };

    const handleSearch = (e)=>{
        let target = e.target;
        setfilter(records.filter(x=>x.email.includes(target.value)));

        
    }
    const openInPopup = (item)=>{
        setRecordForEdit(item);
        setOpenPopup(true);
    }
    const onDelete = (id)=>{
        //dete operation goes here.
        if(window.confirm("You sure, you wanna delete the rocords?")){
        setNotify({
            isOpen: true,
            message: "Deleted Successfully!",
            type: 'error'
        });
        }

    };


    return (
        <React.Fragment>
            <PageHeader title=" Users" subTitle="add new user" icon={<PeopleOutlineTwoTone fontSize="large"/>}/>
            <Paper className={classes.pageContent}>

                <Controls.Input 
                    className={classes.searchInput}
                    label="Search Users" 
                    InputProps = {{
                        startAdornment: (
                        <InputAdornment position="start">
                            <Search/>
                        </InputAdornment>)
                    }}
                    onChange={handleSearch}
                
                />
                <Controls.Select value="" name="department" label="Users"  option={records.map(n=>({id: n.id, title: n.first_name + " " + n.last_name}))}/>
                <Controls.Button
                variant="outlined"
                startIcon={<AddIcon/>}
                className={classes.addButton}
                onClick={()=>setOpenPopup(true)}
                text="Add New" />

                <TblContainer>
                    <TblHead/>
                     <TableBody>
                       { filter.length > 0? filter.map(item =>(
                                <>
                                <TableRow key={item.id} onClick={()=>{
                                    setSelectedUser({...item});
                                    setTimeout(()=>{setSelectedUser(null)}, 8000);
                                }}>
                                    <TableCell><img className={classes.img} src={item.avatar} alt=""/></TableCell>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.first_name}</TableCell>
                                    <TableCell>{item.last_name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        color="primary"
                                        onClick = {()=>{
                                            openInPopup(item);
                                            setedit('edit');
                                            setTimeout(()=>setedit('noedit'), 3000);
                                            }}>
                                            <EditOutlined fontSize="small"/>
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                        onClick={()=>{
                                            setConfirmDialog({isOpen: true, title:"You sure??", subTitle: "Should you?"});

                                            // onDelete(item.id);
                                        }}
                                        color="secondary" >
                                            <Close fontSize="small"/>
                                        </Controls.ActionButton>

                                    </TableCell>
                                </TableRow>
                                {(selectedUser!== null && selectedUser.id == item.id) ? <UserInfo data={selectedUser}/>: ""}
                                </>
                                
                            )):records.map(item =>(
                                <>
                                <TableRow key={item.id} onClick={()=>{
                                    setSelectedUser({...item});
                                    setTimeout(()=>{setSelectedUser(null)}, 8000);
                                }}>
                                    <TableCell><img className={classes.img} src={item.avatar} alt=""/></TableCell>
                                    <TableCell>{item.id}</TableCell>
                                    <TableCell>{item.first_name}</TableCell>
                                    <TableCell>{item.last_name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>
                                        <Controls.ActionButton
                                        onClick = {()=>{
                                            openInPopup(item);
                                            setedit('edit');
                                            setTimeout(()=>setedit('noedit'), 3000);

                                        }}
                                        color="primary" >
                                            <EditOutlined fontSize="small"/>
                                        </Controls.ActionButton>
                                        <Controls.ActionButton
                                        onClick={()=>{
                                            setConfirmDialog({isOpen: true, title:"You sure??", subTitle: "Should you?"});

                                            // onDelete(item.id);
                                        }}
                                        color="secondary" >
                                            <Close fontSize="small"/>
                                        </Controls.ActionButton>

                                    </TableCell>
                                </TableRow>
                                {(selectedUser!== null && selectedUser.id == item.id) ? <UserInfo data={selectedUser}/>: ""}
                                </>
                            ))
                       } 
                    </TableBody> 
                </TblContainer>
                {/* <TblPagination/> */}
                <TablePagination
                    component="div"
                    page = {page}
                    count={records.length}
                    rowsPerPage={rowsPerPage}
                    rowsPerPageOptions={pages} 
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    />
            </Paper>
            <Popup
                title="User Form"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <UsersForm 
                    setOpenPopup={setOpenPopup}
                    setNotify={setNotify}
                    type={edit}
                    recordForEdit={recordForEdit}
                />
            </Popup>
        <Notification notify={notify} setNotify={setNotify}/>
        <ConfirmDialog confirmDialog={confirmDialog} data={selectedUser} setConfirmDialog={setConfirmDialog} />
        </React.Fragment>
    );

};


export default Users;