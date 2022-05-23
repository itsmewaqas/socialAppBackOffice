import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, TextareaAutosize, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Autocomplete from '@mui/material/Autocomplete';
import Contentbox from '../sharedcomponent/Contentbox';
import Usersdata from "../sharedcomponent/Usersdata";
import { RichTextEditor } from '@mantine/rte';

function Message(props) {

  const [selectRegion, selectRegionSet] = useState('');
  const [selectEmail, selectEmailSet] = useState('');
  const [createMessage, createMessageSet] = useState('');

  const getEmail = (value) => {
    selectEmailSet(value);
    console.log(value);
  }

  useEffect(() => {
  }, []);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Contentbox Title='Message' subTitle='Create Message'>
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
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
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Autocomplete
                  multiple
                  id="tags-standard"
                  options={Usersdata}
                  onChange={(e, value) => getEmail(value)}
                  getOptionLabel={(option) => option.userEmail}
                  defaultValue={Usersdata ? [] : null}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      color="secondary"
                      label="Select Email"
                      placeholder="Select Email"
                    />
                  )}
                />
              </Grid>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <InputLabel id="demo-simple-select-label">Create Message</InputLabel>
                <RichTextEditor
                  styles={{
                    root: { color: '#512774' },
                    toolbar: { color: '#512774' },
                    toolbarInner: { color: '#512774' },
                    toolbarGroup: { color: '#512774' },
                    toolbarControl: { color: '#512774' },
                  }}
                  value={createMessage}
                  style={{ minHeight: 200, marginBottom: 15 }}
                  onChange={createMessageSet}
                />
              </Grid>
            </Grid>
            <Button color="secondary" variant="contained">Send Message</Button>
          </Contentbox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Message;