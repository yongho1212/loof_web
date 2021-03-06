import React from 'react';
import './Notice.css';

import {ListGroup} from 'react-bootstrap';

const Notice = () => {
  return (
    
      <div className="notice-container">
           
          <div className="notice-header">
          공지사항
          </div>

          <ListGroup defaultActiveKey="#link1" >

            <ListGroup.Item action href="#link1" className="list-touch">
              공지사항 #1
            </ListGroup.Item>
            <ListGroup.Item action href="#link1" className="list-touch">
              공지사항 #2
            </ListGroup.Item>
            

          </ListGroup>
          
      </div>
      
    
  );
}

export default Notice;