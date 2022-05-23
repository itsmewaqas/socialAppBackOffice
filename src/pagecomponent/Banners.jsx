import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Contentbox from '../sharedcomponent/Contentbox';

function Banners(props) {

  const [banner1, banner1Set] = useState('');
  const [banner2, banner2Set] = useState('');
  const [banner3, banner3Set] = useState('');

  useEffect(() => {
  }, []);

  console.log('sel banner1', banner1);
  console.log('sel banner2', banner2);
  console.log('sel banner3', banner3);

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Contentbox Title='Banners' subTitle='Add Banners'>
            <form className='fileUploadStyle'>
              <label>Select Banner 1</label>
              <input type="file" value={banner1} onChange={(e) => { banner1Set(e.target.value) }} />
            </form>
            <form className='fileUploadStyle'>
              <label>Select Banner 2</label>
              <input type="file" value={banner2} onChange={(e) => { banner2Set(e.target.value) }} />
            </form>
            <form className='fileUploadStyle'>
              <label>Select Banner 3</label>
              <input type="file" value={banner3} onChange={(e) => { banner3Set(e.target.value) }} />
            </form>
            <Button color="secondary" variant="contained">Add Banners</Button>
          </Contentbox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Banners;


























