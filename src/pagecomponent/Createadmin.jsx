import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, TextareaAutosize, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Contentbox from '../sharedcomponent/Contentbox';

function Createadmin(props) {

  const [name, nameSet] = useState('');
  const [email, emailSet] = useState('');
  const [phone, phoneSet] = useState('');
  const [selectRegion, selectRegionSet] = useState('');
  const [gender, genderSet] = useState('');
  const [userRights, userRightsSet] = useState([]);

  // checkbox Ctrl
  const userRightsList = [
    { id: 'normalUser', name: 'Normal User' },
    { id: 'standardUser', name: 'Standard User' },
    { id: 'businessUser', name: 'Business User' },
  ]

  const handleChange = event => {
    const { checked, value } = event.currentTarget;
    userRightsSet(
      prev => checked
        ? [...prev, value]
        : prev.filter(val => val !== value)
    );
  };
  // checkbox Ctrl end

  useEffect(() => {
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Contentbox Title='Create Admin' subTitle='Supper Admin Create Users'>
            <Grid container spacing={3}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField label="Enter Name" name="name" value={name} onChange={(e) => { nameSet(e.target.value) }} fullWidth color="secondary" variant="standard" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField label="Enter Email" name="email" value={email} onChange={(e) => { emailSet(e.target.value) }} fullWidth color="secondary" variant="standard" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <TextField label="Enter Phone" name="phone" value={phone} onChange={(e) => { phoneSet(e.target.value) }} fullWidth color="secondary" variant="standard" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <FormControl fullWidth variant="standard" color="secondary">
                  <InputLabel id="demo-simple-select-label">Select Region</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Age"
                    value={selectRegion}
                    onChange={(e) => { selectRegionSet(e.target.value) }}>
                    <MenuItem value="Pakistan">Pakistan</MenuItem>
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Srilanka">Srilanka</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <FormLabel component="legend">Select Gender</FormLabel>
                <FormControlLabel
                  value="Male"
                  control={<Radio size="small" checked={gender === 'Male'} value="Male" onChange={() => genderSet('Male')} color="secondary" variant="standard" />}
                  label="Male"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio size="small" checked={gender === 'Female'} value="Female" onChange={() => genderSet('Female')} color="secondary" variant="standard" />}
                  label="Female"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio size="small" checked={gender === 'Other'} value="Other" onChange={() => genderSet('Other')} color="secondary" variant="standard" />}
                  label="Other"
                  labelPlacement="end"
                />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <FormLabel component="legend">Select User Rights</FormLabel>
                {userRightsList.map(item => (
                  <FormControlLabel
                    control={<Checkbox
                      key={item.toString()}
                      id={item.id}
                      value={item.id}
                      checked={userRights.some(val => val === item.id)}
                      onChange={handleChange}
                      size="small"
                      variant="standard"
                      color="secondary" />}
                    label={item.name}
                    labelPlacement="end"
                  />
                ))}
              </Grid>
            </Grid>
            <Button style={{ marginTop: 15 }} color="secondary" variant="contained">Create User</Button>
          </Contentbox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Createadmin;