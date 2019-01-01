import React, { Component } from 'react';


import '../../../assets/css/classes.css';

import * as u from "../../services/utility.service";

var contact;


var getList = function ($list) {


  var list = $list.map(function (item, key) {

    return <li key={key}>{item}</li>
  })


  return (
    <ul>
        {list}
    </ul>
  )
}


var getclass = function (type, props) {

    if (type == "text") {
        return "relative width " + props.textfont;
    } 
    else if (type == "title1a") {

        return "relative width font-bold " + props.title1font;
    }
    else if (type == "title2a") {

        return "relative width font-bold " + props.title2font;
    }
    else if (type == "title2b") {

        return "relative width padding-v-20 " + props.title2font;
    }

}

var getProjects = function (props) {


    var projects = contact.projects.items.map(function (project, key) {

        return (

            <div key={key} className="relative width margin-v-20">

                <div className={getclass("title2b", props)}>
                  {project.title}
                </div>

                <div className="relative width padding-v-20 font-italic">
                  {project.description}
                </div>

                <div className="relative width padding-v-20">
                  <a href={'http://' + project.href} target="_blank">{project.href}</a>
                </div>

                <div className="relative width padding-v-20">
                  {getList(project.items)}
                </div>

                <div className="relative width60 hcenter height-50 border-bottom"></div>
            
            </div>

        )

    });


    return (
          
          <div className="relative width">
              {projects} 
          </div>

    );
}

class Resume extends Component {

  render() {

    contact = this.props.contact;


    console.log("contact", contact);

    return ( 


      <div className={getclass("text", this.props)}>

        <div className="relative width80 hcenter margin-v-100 border white-back raised">

          <div className="relative width80 hcenter">

            <div className="relative width margin-bottom-50 border-bottom">

              <div className="relative width padding-v-20">
                <div className="relative width80 hcenter">{u.makeTitle(contact.bio, "<br>")}</div>
              </div>

            </div>

            <div className="relative width margin-bottom-50 border-bottom">

              <div className={getclass("title1a", this.props)}>
                {contact.skills.title}
              </div>

              <div className="relative width">
                {getList(contact.skills.items)}
              </div>

            </div>

            <div className="relative width margin-bottom-50 border-bottom">

              <div className={getclass("title2a", this.props)}>
                {contact.projects.title}
              </div>

              <div className="relative width">

                {getProjects(this.props)}

              </div>

            </div>

          </div>

        </div>

      </div>

      
    );
  }
}

export default Resume;