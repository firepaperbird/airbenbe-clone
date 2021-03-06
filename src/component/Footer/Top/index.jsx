import React from "react";

import { Row, Col } from "reactstrap";


function TopCol(props) {
  if (props.name && props.items)
    return (
      <section className='_1l3ys1i'>
        <h4 className='_tfslnm'>{props.name}</h4>
        <ul className='_yuolfv'>
          {props.items.map((item) => {
            return (
              <li key={item.id} className='_wmuyow'>
                <a href={item.link} className='_o06542u'>
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  else return <div />;
}

function Top(props) {
  if (props.cols)
    return (
      <Row>
        {props.cols.map((c) => {
          return (
            <Col key={c.id}>
              <TopCol name={c.name} items={c.items} />
            </Col>
          );
        })}
      </Row>
    );
  else return <div />;
}

export default Top;
