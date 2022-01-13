import './App.css';
import { Column, Table, Cell } from "@blueprintjs/table";


const dollarCellRenderer = () => (
  <Cell>Пока</Cell>
);
const euroCellRenderer = () => (
  <Cell>Привет</Cell>
);
function App() {
  return (
<Table numRows={2}>
    <Column cellRenderer={dollarCellRenderer} />
    <Column cellRenderer={euroCellRenderer}/>
</Table>
  );
}

export default App;
