export const styles = theme => ({
  avatar: {
    width: '80%',
    textAlign: 'center',
    margin: 'auto',
    marginTop: 20,
    borderRadius: '50%'
  },
  card: {
    width: '100%',
    margin:10,
    display: 'inline-block',
    textAlign:'center',
    background: '#F6F6F6',
  },
  githubUrl: {
    background: '#2b8093',
    color: '#eef3fcf5',
    fontWeight: 500,
    textDecoration: 'none',
    padding:10,
    borderRadius: 4 ,
    boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
    '&:hover': {
        textDecoration: 'none',
        background: '#275c68'
    }
  },
  login: {
    marginBottom: '1em'
  },
  actions: {
    justifyContent: 'center',
  },
  deleteUser: {
    color: '#e51717',
  },
  editUser: {
    color: '#673AB7',
  }
})
    
  