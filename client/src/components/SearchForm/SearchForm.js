import React  from "react";
import "./SearchForm.css";
import { RadioGroup, Radio } from 'react-mdl'

const SearchForm = props =>
  <form action="#" className="pb">
    <div className="mdl-layout-title">Search By</div>
    <RadioGroup className="margin-right margin-top2" name="options" value="user">
      <Radio value="user" ripple>User</Radio>
      <Radio value="org" ripple>Organization</Radio>
      <Radio value="repos">Repos</Radio>
    </RadioGroup>
    <div className="mdl-layout-title margin-top4">Search Term</div>
    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input className="mdl-textfield__input" type="text" name="beginDate" value={props.beginDate} onChange={props.inputHandler} id="Date1" />
      <label className="mdl-textfield__label show-on-foc" htmlFor="Date">Enter your search term.</label>
    </div>
    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
            type="submit"
            data-upgraded=",MaterialButton,MaterialRipple"
            // disabled={!(props.searchPhrase && props.beginDate && props.endDate)}
            // onClick={props.submitHandler}
    >
            Submit
      <span className="mdl-button__ripple-container">
        <span className="mdl-ripple"></span>
      </span>
    </button>
  </form>

export default SearchForm;