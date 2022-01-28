import React, { useState } from "react";
import { FiDelete } from "react-icons/fi";

import styled from "styled-components";

import LinkCard from "../UI/LinkCard";
import AddButton from "../UI/AddButton";
import AddLink from "./AddLink";

const LinksListWrapper = styled.div`
  display: grid;

  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);

  gap: 30px;
`;

const LinksList = ({storedLinks, setStoredLinks}) => {
  const [addNew, setAddNew] = useState();

  const linksAmount = storedLinks.length;

  const columns = linksAmount > 10 ? Math.ceil(Math.sqrt(linksAmount)) : 10;
  const rows = linksAmount > 10 ? Math.floor(Math.sqrt(linksAmount)) : 5;

  const onAddNewClicked = () => {
    setAddNew(true);
  };

  const dismissForm = () => {
    setAddNew(null);
  };

  const deleteLinkHandler = (linkKey) => {
    const changedLinks = storedLinks.filter(link => {return (link.key !== linkKey)});
    localStorage.setItem("links", JSON.stringify(changedLinks));
    setStoredLinks(changedLinks);
  };

  return (
    <div>
      {addNew && <AddLink onConfirm={dismissForm} storedLinks={storedLinks} setStoredLinks={setStoredLinks} />}
      <LinksListWrapper columns={columns} rows={rows}>
        {storedLinks.map((link) => (
          <LinkCard key={link.key}>
            <a
              href={link.url}
              style={{ color: "white", "text-decoration": "none" }}
            >
              <img
                src={link.picture}
                alt={link.title}
                height="100"
                width="100"
              />
            </a>
            <br />
            <div>
              <a
                href={link.url}
                style={{ color: "white", "text-decoration": "none" }}
              >
                {link.title}
              </a>{" "}
              <FiDelete
                size={24}
                style={{ "vertical-align": "middle", cursor: "pointer" }}
                onClick={() => deleteLinkHandler(link.key)}
              />
            </div>
          </LinkCard>
        ))}
        <AddButton onClick={onAddNewClicked} />
      </LinksListWrapper>
    </div>
  );
};

export default LinksList;
