import React from "react"
import Note from "./Note"
import notes from "../notes"
function card(notes){
  return <Note 
    key = {notes.id}
    title = {notes.title}
    content = {notes.content}
  />
}
function First(){
  return<div>
    {notes.map(card)}
  </div>
}
export default First;