import React, {useState} from "react"
import Route from "./components/Route";
import Translate from "./components/Translate";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const ACCORDION_ITEMS = [
  {
    title: 'title1',
    content: 'content1'
  },
  {
    title: 'title2',
    content: 'content2'
  }
]

const DROPDOWN_ITEMS = [
  {
    value: 'value1',
    label: 'label1',
  },
  {
    value: 'value2',
    label: 'label2',
  },
  {
    value: 'value3',
    label: 'label3',
  }
]

const App = () => {
  const [dropdownItem, setDropdownItem] = useState(DROPDOWN_ITEMS[0]);
  return (
    <div>
      <Route path="/">
        <Accordion
          items={ACCORDION_ITEMS}
        />
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown
        label={"Dropdown label"}
        options={DROPDOWN_ITEMS}
        selected={dropdownItem}
        onSelectedChange={setDropdownItem}
        />
      </Route>
      <Route path="/translate">
        <Translate/>
      </Route>
    </div>
  );
};

export default App;
