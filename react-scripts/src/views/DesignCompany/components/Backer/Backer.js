import React from 'react';
import PropTypes from 'prop-types';
import {fade, makeStyles, useTheme} from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar, colors,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import { CardBase } from 'components/organisms';
import { AiFillYoutube } from 'react-icons/ai'

const useStyles = makeStyles(theme => ({
  cardBase: {
    boxShadow: 'none',
    background: theme.palette.alternate.main,
    borderRadius: theme.spacing(1),
    '& .card-base__content': {
      padding: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
      },
    },
  },
  avatar: {
    width: 110,
    height: 110,
    border: `4px solid ${theme.palette.background.paper}`,
    borderRadius: '100%',
    boxShadow: '0 5px 10px 0 rgba(0, 0, 0, 0.1)',
  },
  listItem: {
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  listItemAvatar: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
      marginBottom: theme.spacing(2),
    },
  },
  listItemText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: 0,
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
  },
  textTitle: {
    fontWeight: 900,
    color: 'white',
  },
}));

const Backer = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Our Partners"
        titleProps={{
          className: classes.textTitle,
        }}
        align={isMd ? 'center' : 'left'}
      />
      <Grid container spacing={isMd ? 2 : 1}>
        {data.map((item, index) => (
          <Grid item xs={6} key={index} data-aos="fade-up">
            <CardBase className={classes.cardBase} liftUp withShadow>
              <ListItem disableGutters className={classes.listItem}>
                <ListItemAvatar className={classes.listItemAvatar}>
                  <Avatar {...item.authorPhoto} className={classes.avatar} />
                </ListItemAvatar>
                <a href={item.youtubeLink} target="_blank">
                <ListItemText
                    className={classes.listItemText}
                    primary={item.authorName}
                    secondary={item.title}
                    primaryTypographyProps={{
                      className: classes.title,
                      variant: 'h6',
                      align: isMd ? 'left' : 'center',
                    }}
                    secondaryTypographyProps={{
                      color: 'textPrimary',
                      align: isMd ? 'left' : 'center',
                    }}
                  />
                </a>
              </ListItem>
            </CardBase>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Backer.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Backer;
