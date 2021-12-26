import React from "react";

export default class Project extends React.Component {
    constructor (obj) {
        super();
        this.id = obj.id;
        this.img = obj.img;
        this.category = obj.category; 
    }
}