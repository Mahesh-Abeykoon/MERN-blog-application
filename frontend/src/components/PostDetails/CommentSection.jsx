import React, { useState, useRef } from "react";
import { Typography, TextField, Button } from "@material-ui/core";

import { useDispatch } from "react-redux";

import useStyles from "./styles";

const CommentSection = ({ post }) => {
  console.log(post);
  const classes = useStyles();
  const [comments, setComments] = useState([1, 2, 3, 4]);
  const [comment, setComment] = useState("");

  const handleClick = () => {};
  return (
    <div className={classes.commentOuterContainer}>
      <div className={classes.commentInnerConatiner}>
        {comments?.map((c, i) => (
          <Typography key={i} gutterBottom variant="subtitle1"></Typography>
        ))}
      </div>
      <div style={{ width: "75%" }}>
        <Typography gutterBottom variant="h6">
          Comment here
        </Typography>
        <TextField
          fullWidth
          rows={4}
          variant="outlined"
          label="Comment"
          multiline
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          style={{ marginTop: "10px" }}
          fullWidth
          disabled={!comment.length}
          color="primary"
          variant="contained"
          onClick={handleClick}
        >
          Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;