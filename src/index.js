import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import styles from "styles.sss";


class Sites extends Component {
  render() {
    return (
      <div className={styles.elements}>
        <div className={styles.element}>
          <div className={styles.name}>Element 1</div>
        </div>
        <div className={styles.element}>
          <div className={styles.name}>Element 2</div>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.render(
  <Sites/>,
  document.getElementById('app-root')
);
