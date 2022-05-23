import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, Switch, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Contentbox from '../sharedcomponent/Contentbox';
import Usersdata from "../sharedcomponent/Usersdata";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function UsersDetail(props) {

  const getIndex = props.location.state;
  console.log('get user id', getIndex);

  useEffect(() => {
  }, []);

  const [loadingState, loadingStateSet] = useState(true);

  setTimeout(() => {
    loadingStateSet(false);
  }, 3000);


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Contentbox Title='Users Detail' subTitle='Users Complete Detail'>

            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <p className='fetchTitle'>userName</p>
                  <p className='fetchTitle'>userEmail</p>
                  <p className='fetchTitle'>userStatus</p>
                  <p className='fetchTitle'>userGender</p>
                  <p className='fetchTitle'>userPhone</p>
                  <p className='fetchTitle'>userPassword</p>
                  <p className='fetchTitle'>userZipcode</p>
                  <p className='fetchTitle'>userCountry</p>
                  <p className='fetchTitle'>userState</p>
                  <p className='fetchTitle'>userCity</p>
                  <p className='fetchTitle'>userSignupDate</p>
                  <p className='fetchTitle'>userType</p>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {loadingState ?
                    <Stack spacing={0.3}>
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                    </Stack>
                    :
                    <data>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userName}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userEmail}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userStatus}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userGender}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userPhone}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userPassword}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userZipcode}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userCountry}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userState}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userCity}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userSignupDate}</p>
                      <p className='fetchValue'>{Usersdata.filter((x) => x.id === getIndex)[0].userType.join(", ")}</p>
                    </data>}
                </Grid>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className='btnCtrl'><Button color="secondary" variant="contained">Message</Button></div>
                <div className='btnCtrl'><Button color="secondary" variant="contained">Email</Button></div>
                <div className='btnCtrl'><Button color="secondary" variant="contained">Profile</Button></div>
                <div className='btnCtrl'><Button color="secondary" variant="contained">Post</Button></div>
                <div className='btnCtrl'>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Block"
                    labelPlacement="start"
                  />
                </div>
              </Grid>
            </Grid>
          </Contentbox>
        </Grid>
      </Grid>
    </div>
  );
}

export default UsersDetail;


























