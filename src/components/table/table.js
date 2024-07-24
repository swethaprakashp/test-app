import React, { useState } from 'react'
import '../../App.css'
import { Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Select, TextField, Box, MenuItem, InputLabel, FormControl, TablePagination, IconButton } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Rows } from '../../utils/rowData';

const TableComponent = () => {
  const [select, setSelect] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState('');

  
  const handleChangeTab = (event, newValue) => {
    setTab(newValue);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredData = Rows.filter((row) => row.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #dae0db',
      borderRadius: '12px',
      marginX: '25px'
    }}>
      <Box sx={{ display: 'flex', borderBottom: '1px solid #dae0db' }}>
        <Tabs
          value={tab}
          onChange={handleChangeTab}
          textColor="black"
          TabIndicatorProps={{
            style: {
              backgroundColor: 'black',
            },
          }}
        >
          <Tab label="All Clients" sx={{ textTransform: 'none', fontWeight: 600, fontSize: '18px' }} />
        </Tabs>
      </Box>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
        <Box sx={{ width: '40%', display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => setStartDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => setEndDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', justifyContent: 'center' }}>
          <FormControl sx={{ m: 1, width: '40%' }}>
            <InputLabel>Owner</InputLabel>
            <Select
              value={select}
              label="Owner"
              onChange={(e) => setSelect(e.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Client'}>Client</MenuItem>
            </Select>
          </FormControl>
          <TextField value={search} onChange={(e) => setSearch(e.target.value)} label="Search" variant="outlined" InputProps={{ endAdornment: <SearchIcon /> }} />
        </Box>
      </header>
      <TableContainer className='table-container'>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className='table-head'>No</TableCell>
              <TableCell className='table-head'>Date</TableCell>
              <TableCell className='table-head'>Name</TableCell>
              <TableCell className='table-head'>Contact</TableCell>
              <TableCell className='table-head'>Brief</TableCell>
              <TableCell className='table-head'>DMT</TableCell>
              <TableCell className='table-head'>Client Manager</TableCell>
              <TableCell className='table-head'>FollowUp</TableCell>
              <TableCell className='table-head'>Calls</TableCell>
              <TableCell className='table-head'>Meetings</TableCell>
              <TableCell className='table-head'>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index} className='table-row'>
                <TableCell className='table-cell'>{index + 1 + page * rowsPerPage}</TableCell>
                <TableCell className='table-cell'>{row.date}</TableCell>
                <TableCell className='table-cell'>{row.name}</TableCell>
                <TableCell className='table-cell'>{row.contact}</TableCell>
                <TableCell className='table-cell'>{row.brief}</TableCell>
                <TableCell className='table-cell'>{row.dmt}</TableCell>
                <TableCell className='table-cell'>{row.clientManager}</TableCell>
                <TableCell className='table-cell'>{row.followUp}</TableCell>
                <TableCell className='table-cell'>
                  <Box sx={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#ebda7c', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ab7d22' }}>{row.calls}</Box></TableCell>
                <TableCell className='table-cell'>
                  <Box sx={{ height: 30, width: 30, borderRadius: 15, backgroundColor: '#b7e69e', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #296e04' }}>
                    {row.meetings}
                  </Box>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={Rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

    </Box>
  )
}

export default TableComponent
