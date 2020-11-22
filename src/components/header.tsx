import React from "react"

interface HeaderProps {
  title: string
}

export default (props: HeaderProps) => <h1>{props.title}</h1>
