import React, { useState, useEffect } from 'react';
import { Grid, Container, Input, TextField, Button, Switch, item, FormControl, Radio, FormControlLabel, InputLabel, Select, FormLabel, MenuItem, Checkbox, label } from '@mui/material';
import { styled } from '@mui/material/styles';
import Contentbox from '../sharedcomponent/Contentbox';
import PostData from "../sharedcomponent/Postdata";
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

function ReportedpostDetail(props) {

  const getIndex = props.location.state;
  console.log('get post id', getIndex); 

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
          <Contentbox Title='Reported Post' subTitle='Reported Post Detail'>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid container spacing={3}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <p className='fetchTitle' style={{ paddingTop: 50, paddingBottom: 45 }}>Post Picture</p>
                  <p className='fetchTitle'>Post Creator Name</p>
                  <p className='fetchTitle'>Post Desc</p>
                  <p className='fetchTitle'>Post Date</p>
                  <p className='fetchTitle'>User Id</p>
                  <p className='fetchTitle'>Like</p>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  {loadingState ?
                    <Stack spacing={0.3}>
                      <Skeleton variant="rectangular" width={240} height={110} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                      <Skeleton variant="text" width={240} height={27} />
                    </Stack>
                    :
                    <data>
                      <p className='fetchValue'><img width={240} height={97} src={PostData.filter((x) => x.id === getIndex)[0].postPhoto} alt="" /></p>
                      <p className='fetchValue'>{PostData.filter((x) => x.id === getIndex)[0].postCreatorName}</p>
                      <p className='fetchValue'>{PostData.filter((x) => x.id === getIndex)[0].postDesc}</p>
                      <p className='fetchValue'>{PostData.filter((x) => x.id === getIndex)[0].postDate}</p>
                      <p className='fetchValue'>{PostData.filter((x) => x.id === getIndex)[0].userId}</p>
                      <p className='fetchValue'>{PostData.filter((x) => x.id === getIndex)[0].like}</p>
                    </data>}
                </Grid>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <div className='btnCtrl'><Button color="secondary" variant="contained">Delete Post</Button></div>
                <div className='btnCtrl'>
                  <FormControlLabel
                    value="start"
                    control={<Switch color="secondary" />}
                    label="Mark Defult"
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

export default ReportedpostDetail;


























