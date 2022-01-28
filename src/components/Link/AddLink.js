import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddLink.module.css";

const AddLink = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredUrl, setEnteredUrl] = useState("");
  const [enteredIconUrl, setEnteredIconUrl] = useState();

  const links = props.storedLinks

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const urlChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
  };

  const iconUrlChangeHandler = (event) => {
    setEnteredIconUrl(event.target.value);
  };

  const addLinkHandler = (event) => {
    event.preventDefault();
    props.onConfirm();
    console.log("adding", enteredTitle, enteredUrl, enteredIconUrl);

    links.push({
      title: enteredTitle,
      url: enteredUrl,
      picture: enteredIconUrl,
      key: Math.random().toString(),
    });

    localStorage.setItem("links", JSON.stringify(links));
  };

  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={`${classes.modal} ${classes.input}`}>
        <form onSubmit={addLinkHandler}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <label htmlFor="url">URL</label>
          <input
            id="url"
            type="text"
            value={enteredUrl}
            onChange={urlChangeHandler}
          />
          <label htmlFor="iconUrl">Icon URL</label>
          <input
            id="iconUrl"
            type="text"
            value={enteredIconUrl}
            onChange={iconUrlChangeHandler}
          />
          <Button type="submit">Add</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddLink;
