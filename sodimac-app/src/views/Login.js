import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField  from "@material-ui/core/TextField";
import Fab from '@material-ui/core/Fab';
import {Link} from "react-router-dom";

// Driver login view
const useStyles = makeStyles(theme => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
            width: 200
        }
    }
}));
  
  export default function Login() {
    const classes = useStyles();
  
    return (
      <form className={classes.root} validate autoComplete="on">
        <div>
          <TextField
            required="required"
            placeholder="RUT"
            id="outlined-size-small"
            variant="outlined"
            type="number"
            size="small"
          />
        </div>
        <div>
          <TextField
            id="standard-password-input"
            placeholder="Contraseña"
            type="password"
            variant="outlined"
            size="small"
          />
        </div>
        <div>
        <Link to="/Orders"><Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            className={classes.margin}
          >
            Iniciar Sesión
          </Fab></Link>
        </div>
      </form>
    );
  }