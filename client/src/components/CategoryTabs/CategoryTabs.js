import React  from "react";
import "./CategoryTabs.css";
import { RadioGroup, Radio } from 'react-mdl';

const CategoryTabs = props => {
  return (
    <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
      <div className="mdl-tabs__tab-bar">
        <a data-tab-id="owners" onClick={e => props.setTab(e)} className="mdl-tabs__tab is-active">Owner</a>
        <a data-tab-id="languages" onClick={e => props.setTab(e)} className="mdl-tabs__tab">Language</a>
        <a data-tab-id="categories" onClick={e => props.setTab(e)} className="mdl-tabs__tab">Category</a>
      </div>

      <div className="mdl-tabs__panel is-active">
        <ul>
          <RadioGroup>
            {props.cats && props.cats[props.activeTab].map(e => (
              <div>
                <li value={e} className="mdl-list__item" key={e}>
                  <span value={e} className="mdl-list__item-primary">
                    <Radio onClick={e => props.setSelection(e)} value={e} ripple checked={e === props.activeSelection ? true : false}>
                      {e}
                    </Radio>
                  </span>
                </li>
              </div>
              )
             )}
            {/* <Radio value="users" ripple>Users</Radio>
            <Radio value="orgs" ripple>Organizations</Radio>
            <Radio value="repos">Repos</Radio> */}
          </RadioGroup>
        </ul>
      </div>
    </div>
  );
}


export default CategoryTabs;
