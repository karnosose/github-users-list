export const styles = theme => ({
  pageTitle: {
    margin: '40px 0',
    textAlign: 'center',
    '@media (max-width:600px)': {
      margin: '20px 0 0'
    }
  },
  loading: {
    display: 'flex',
    margin: '200px auto'
  },
  noData: {
    display: 'flex',
    margin: '200px auto'
  },
  header: {
    display:'flex',
    justifyContent: 'space-between',
    '@media (max-width:600px)': {
      flexDirection: 'column',
    }
  },
  resetUsers: {
    height:35,
    margin: '50px 0',
    '@media (max-width:600px)': {
      margin: 24
    }
  }
})
  
