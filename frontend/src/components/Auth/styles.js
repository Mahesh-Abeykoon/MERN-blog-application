import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(6),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4),
    backgroundColor: "#B0CFDE",
    backgroundImage:
      "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7C7nF7qzDqlU_kAykRg3KkiNYNgXnPVOQAQ&usqp=CAU)",
    opacity: 41,
  },

  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(6),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#2B65EC",
    height: "40px",
    width: "330px",
    fontSize: "15px",
    color: "#ffff",
  },
  googleButton: {
    marginBottom: theme.spacing(5),
    backgroundColor: "#1669F2",
    fontSize: "15px",
    color: "#ffff",
  },
}));
