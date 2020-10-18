import { Container } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import React from "react"

export const Footer = () => {
  return <div style={{textAlign:"center"}}>
    <div style={{ height: "50px" }}></div>
    <div style={{
      marginLeft: "auto",
      marginRight: "auto",
      borderTop: "1px solid #4a4a4a",
      borderBottom: "1px solid #222222",
      width: "70%"
    }}></div>
    <div style={{ height: "50px" }}></div>

    <Typography style={{ padding: "30px" }}>
      Released under the MIT License. Copyright © 2020 Matthieu Garrigues.
  </Typography>
  </div>
}