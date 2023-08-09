import React from 'react';
import { makeTitle } from '../../services/utility.service';

const List = (props) => {
  const { items } = props;
  return (
    <ul>
      {items?.map((item, key) => (
        <li key={key}>{item}</li>
      ))}
    </ul>
  );
};

const getclass = (type, props) => {
  if (type == 'text') {
    return 'relative width ' + props.textfont;
  } else if (type == 'title1a') {
    return 'relative width font-bold ' + props.title1font;
  } else if (type == 'title2a') {
    return 'relative width font-bold ' + props.title2font;
  } else if (type == 'title2b') {
    return 'relative width padding-v-20 ' + props.title2font;
  }
};

const Projects = (props) => {
  const { contact } = props;

  return (
    <div className="relative width">
      {contact?.projects?.items.map((project, key) => {
        return (
          <div key={key} className="relative width margin-v-20">
            <div className={getclass('title2b', props)}>{project.title}</div>

            <div className="relative width padding-v-20 font-italic">
              {project.description}
            </div>

            <div className="relative width padding-v-20">
              <a href={`http://${project.href}`} target="_blank">
                {project.href}
              </a>
            </div>

            <div className="relative width padding-v-20">
              {<List items={project.items} />}
            </div>

            <div className="relative width60 hcenter height-50 border-bottom"></div>
          </div>
        );
      })}
    </div>
  );
};

const Resume = (props) => {
  const { contact } = props;

  console.log('contact', contact);

  return (
    <div className={getclass('text', props)}>
      <div className="relative width">
        <div className="relative width80 hcenter">
          <div className="relative width margin-bottom-50 border-bottom">
            <div className="relative width padding-v-20">
              <div className="relative width80 hcenter">
                {makeTitle(contact.bio, '<br>')}
              </div>
            </div>
          </div>

          <div className="relative width margin-bottom-50 border-bottom">
            <div className={getclass('title1a', props)}>
              {contact.skills.title}
            </div>

            <div className="relative width">
              {<List items={contact.skills.items} />}
            </div>
          </div>

          <div className="relative width margin-bottom-50 border-bottom">
            <div className={getclass('title2a', props)}>
              {contact.projects.title}
            </div>

            <div className="relative width">{<Projects {...props} />}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
