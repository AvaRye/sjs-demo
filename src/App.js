import './App.css';
import * as GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet } from '@grapecity/spread-sheets-react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';

function App() {
  let hostStyle = {
    width: '100%',
    height: '600px',
    border: '1px solid darkgray',
  };

  let initSpread = function(spread) {
    let sheet = spread.getActiveSheet();
    sheet.getCell(0, 0).vAlign(GC.Spread.Sheets.VerticalAlign.center).value('Hello SpreadJS!');


    //Setting Values - Text
    sheet.setValue(1, 1, 'Setting Values');
    //Setting Values - Number
    sheet.setValue(2, 1, 'Number');
    sheet.setValue(2, 2, 23);
    sheet.setValue(3, 1, 'Text');
    sheet.setValue(3, 2, 'GrapeCity');
    sheet.setValue(4, 1, 'Datetime');
    //Setting Values - DateTime
    sheet.getCell(4, 2).value(new Date(2020, 10, 7)).formatter('mm-dd-yyyy');

  };


  return (
    <div className='App'>
      <SpreadSheets workbookInitialized={spread => initSpread(spread)} hostStyle={hostStyle}>
        <Worksheet />
      </SpreadSheets>
    </div>
  );
}

export default App;
