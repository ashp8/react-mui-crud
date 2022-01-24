import { Table, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel } from "@material-ui/core";
import React, { useState } from "react";
import {api} from '../services/services';

const useStyles = makeStyles(theme=>({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            color: theme.pallete.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        }
    },

}));

const useTable = (records, headCells)=>{
    const classes = useStyles();

    const pages = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(pages[page]);

    const TblContainer = props => (<Table className={classes.table}>
            {props.children}
    </Table>);

    const TblHead = props => (
        <TableHead>
            <TableRow>
                {
                    headCells.map(head=>(
                        <TableCell key={head.id}><TableSortLabel>{head.label}</TableSortLabel></TableCell>
                    ))
                }
            </TableRow>
        </TableHead>
    );

    const handleChangePage = (event, newPage)=>{
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event)=>{
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    }

    const recordsAfterPagingAndSorting = async()=>{
        const resp = await api.get(`users?page=${page}&per_page=${rowsPerPage}`);
        if(resp.data.data){
            return resp.data.data;
        }
    };

    const TblPagination = ()=>(<TablePagination
        component="div"
        page = {page}
        count={records.length}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={pages} 
        onPageChange={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        />)

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    };
};

export default useTable;