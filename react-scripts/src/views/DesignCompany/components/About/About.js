import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Button, Typography, Divider, TextField} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import GenesisNFT from '../../../../assets/images/main/genesis_nft.jpg';
import Bnb from '../../../../assets/images/main/bnb.svg';

import { DescriptionCta } from 'components/molecules';
import { CardProduct } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  playIcon: {
    width: 40,
    height: 40,
    [theme.breakpoints.up('sm')]: {
      width: 80,
      height: 80,
    },
    [theme.breakpoints.up('md')]: {
      width: 80,
      height: 80,
    },
  },
}));

const About = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <span>
            Explore our
            {' '}
            <Typography component="span" variant="inherit" color="primary">
              Genesis NFT
            </Typography>
          </span>
        }
        subtitle="Our mission is to help you to grow your design skills, meet and connect with professional dsigners who share your passions."
        ctaGroup={[
          <Button color="primary" variant="contained" size="large" href="../app">
            Buy genesis NFT
          </Button>
        ]}
        data-aos="fade-up"
      />
      <CardBase withShadow liftUp variant="outlined" data-aos="fade-up">
          <Grid container justify="center" spacing={4}>
              <Grid item data-aos={'fade-up'}>
                  <Image
                      src={GenesisNFT}
                      alt="NG Finance's genesis NFT"
                      className={classes.image}
                      data-aos="flip-left"
                      data-aos-easing="ease-out-cubic"
                      data-aos-duration="2000"
                  />
              </Grid>
              <Grid item xs={12} sm={6} data-aos={'fade-up'}>
                  <Typography
                      variant="h5"
                      color="textPrimary"
                      className={classes.blogTitle}
                      align="left"
                  >
                      <i>NG Finance - Genesis NFT</i>
                  </Typography>
              </Grid>
              <Grid item xs={12} sm={6} data-aos={'fade-up'} align="right">

                      <Typography
                          variant="h5"
                          color="textSecondary"
                          className={classes.tag}

                      >
                      <b>0.9 BNB</b>
                      {' '}
                      <Image
                          src={Bnb}
                          style={{height:'20px', width: '20px'}}
                      />
                      </Typography>
              </Grid>
          </Grid>
      </CardBase>
    </div>
  );
};

About.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default About;
