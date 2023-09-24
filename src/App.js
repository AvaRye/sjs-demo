import './App.css';
import * as GC from '@grapecity/spread-sheets';
import { SpreadSheets, Worksheet } from '@grapecity/spread-sheets-react';
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';

function App() {
  let hostStyle = {
    width: '100%',
    height: '700px',
    border: '1px solid darkgray',
  };

  let initSpread = (spread) => {
    let spreadNS = GC.Spread.Sheets;
    let sheet = spread.getSheet(0);
    // downloaded image files with different name and location from server
    let imagePath = ((window.location.hash || '').indexOf('#') === -1) ? 'root/spread/source/css/images/' : 'css-images-';
    console.log('====ddd===', window.location.hash);
    sheet.suspendPaint();
    spread.options.tabStripVisible = false;
    sheet.options.rowHeaderVisible = false;
    sheet.options.colHeaderVisible = false;

    sheet.addSpan(0, 0, 1, 5);
    sheet.addSpan(0, 5, 1, 4);
    sheet.addSpan(1, 1, 7, 3);
    sheet.addSpan(8, 1, 2, 3);
    sheet.addSpan(10, 1, 5, 1);
    sheet.addSpan(10, 2, 2, 1);
    sheet.addSpan(10, 3, 2, 1);
    sheet.addSpan(14, 2, 2, 1);
    sheet.addSpan(14, 3, 2, 1);
    sheet.addSpan(16, 1, 1, 3);
    sheet.addSpan(17, 1, 1, 3);

    sheet.addSpan(1, 4, 2, 3);
    sheet.addSpan(3, 4, 1, 2);
    sheet.addSpan(3, 6, 1, 2);
    sheet.addSpan(4, 4, 12, 2);
    sheet.addSpan(4, 6, 12, 2);

    sheet.addSpan(7, 8, 2, 1);
    sheet.addSpan(9, 8, 2, 1);

    let colWidths = [24, 218, 91, 73, 115, 187, 226, 120, 104];
    for (let col = 0; col < colWidths.length; col++) {
      sheet.setColumnWidth(col, colWidths[col]);
    }
    let rowHeights = [108, 35, 31, 44, 35, 31, 44, 22, 13, 9, 25, 25, 50, 50, 30, 20, 22];
    for (let row = 0; row < rowHeights.length; row++) {
      sheet.setRowHeight(row, rowHeights[row]);
    }

    sheet.getCell(0, 0).backgroundImage(imagePath + 'Titile_TL.png');
    sheet.getCell(0, 5).backgroundImage(imagePath + 'Titile_TR.png');
    sheet.getCell(1, 1).backgroundImage(imagePath + 'Food.png');
    sheet.getCell(10, 1).backgroundImage(imagePath + 'Calories.png').text('187').wordWrap(true).font('28pt Calibri').hAlign(spreadNS.HorizontalAlign.center);
    sheet.getCell(1, 8).backgroundImage(imagePath + 'Minutes_top.png').text('45').font('14pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.bottom);
    sheet.getCell(2, 8).backgroundImage(imagePath + 'Minutes_bottom.png').text('minutes').font('8pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.top);
    sheet.getCell(4, 8).backgroundImage(imagePath + 'Minutes_top.png').text('15').font('14pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.bottom);
    sheet.getCell(5, 8).backgroundImage(imagePath + 'Minutes_bottom.png').text('minutes').font('8pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.top);
    sheet.getCell(7, 8).backgroundImage(imagePath + 'Servings_top.png').text('3').font('14pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.bottom);
    sheet.getCell(9, 8).backgroundImage(imagePath + 'Servings_bottom.png').text('servings').font('8pt Calibri').hAlign(spreadNS.HorizontalAlign.center).vAlign(spreadNS.VerticalAlign.top);
    sheet.gridline = new spreadNS.LineBorder('Black', spreadNS.LineStyle.empty);

    sheet.getRange(0, 0, 17, 9).backColor('rgb(189,194,178)');
    sheet.getDefaultStyle().vAlign = spreadNS.VerticalAlign.center;
    sheet.getDefaultStyle().foreColor = 'rgb(68, 84, 106)';

    sheet.getCell(8, 1).text('NUTRITION REPORT CARD (amount per serving)')
      .backColor('rgb(116,135,116)').foreColor('white').hAlign(spreadNS.HorizontalAlign.center)
      .font('9pt Calibri');
    sheet.getCell(15, 1).backColor('rgb(247,167,17)');
    sheet.getCell(10, 2).text('10').backColor('white');
    sheet.getCell(12, 2).text('16').backColor('rgb(235, 238, 241)');
    sheet.getCell(13, 2).text('201').backColor('white');
    sheet.getCell(14, 2).text('37').backColor('rgb(235, 238, 241)');
    sheet.getRange(10, 2, 6, 1).hAlign(spreadNS.HorizontalAlign.center).font('lighter 18pt Calibri');
    sheet.getCell(10, 3).text('grams\r\ntotal fat').backColor('white');
    sheet.getCell(12, 3).text('milligrams\r\ncholesterol').backColor('rgb(235, 238, 241)');
    sheet.getCell(13, 3).text('milligrams\r\nsodium').backColor('white');
    sheet.getCell(14, 3).text('grams\r\ncarbs').backColor('rgb(235, 238, 241)');
    sheet.getRange(10, 3, 5, 1).font('10pt Calibri').wordWrap(true);

    sheet.getCell(1, 4).backColor('white').text('Black Beans and Rice')
      .font('bold italic 24pt Calibri')
      .vAlign(spreadNS.VerticalAlign.center)
      .textIndent(2);
    sheet.getCell(1, 7).text('Main Course').backColor('white').foreColor('rgb(33, 115, 70)').font('bold 14pt Calibri');
    sheet.getCell(2, 7).backColor('white');
    sheet.getCell(3, 4).text('INGREDIENTS');
    sheet.getCell(3, 6).text('DIRECTIONS');
    sheet.getRange(3, 4, 1, 3).backColor('rgb(247,167,17)').foreColor('white').textIndent(2).font('bold 9pt Calibri');
    sheet.getCell(4, 4).backColor('white').textIndent(2).font('lighter 9pt Calibri')
      .wordWrap(true).vAlign(spreadNS.VerticalAlign.top)
      .text('\r\nBlack Beans: \r\n14 oz bag dry black beans, rinsed and picked \r\n2 Bay Leaves\r\n½ cup vino seco (Spanish '
        + 'cooking wine) \r\n½ cup olive oil \r\n1 tsp dried oregano \r\n1 tsp cumin \r\n1½ Tbsp \r\narlic powder \r\n1 ½ '
        + 'Tbsp onion powder \r\n1 green pepper \r\n2 Tbsp sugar \r\n1 Tbsp salt \r\nRice: \r\n2 cups dry rice, rinsed \r\n'
        + '3 cups water \r\n1 tsp salt \r\n1 Tbsp vegetable oil');
    sheet.getCell(4, 6).backColor('white').textIndent(1).font('lighter 9pt Calibri')
      .wordWrap(true).vAlign(spreadNS.VerticalAlign.top)
      .text('\r\nBlack Beans: \r\nPlace black beans in a large pot of water and soak overnight. Drain \r\the nwater and place'
        + ' beans in a pressure cooker. Fill the pressure \r\nooker with water an inch above the beans and add 2 bay leaves.'
        + ' (If \r\nou desire beans with thicker consis- tency use less water.) Cover \rwith lid and place on high heat. '
        + 'Once it starts boiling, lower heat and \r\nimmer for 30 minutes or until beans are soft. Before removing lid, \r\n'
        + 'make sure that pressure cooker is depressurized; place in sink under \r\nold water if necessary. Remove bay leaves.'
        + ' \r\nCut the top and bottoms off of the green peppers and remove the \r\nseeds. Cut peppers into 4 pieces. Stir in '
        + 'peppers, oregano, cumin, \r\ngarlic, onion, salt, and slowly bring to a boil uncovered. Once it starts \r\nto boil,'
        + ' reduce to a simmer. Add sugar, olive oil, vino seco and let \r\nsimmer for at least  30 minutes.  Serve over rice.'
        + ' \r\n\r\nRice: \r\nPlace rice, salt and water in a saucepan and bring to a boil. (Add one \r\ncup of water to the amount'
        + ' of rice you are cooking. i.e. 3 cups of \r\nrice/4 cups of water.) Cover and reduce to a simmer for 20 minutes. '
        + '\r\nAdd vegetable oil and mix with spoon.');

    sheet.getCell(3, 8).text('COOK TIME').backColor('rgb(116,135,116)').foreColor('white').hAlign(spreadNS.HorizontalAlign.center);
    sheet.getCell(6, 8).text('YIELD').backColor('rgb(116,135,116)').foreColor('white').hAlign(spreadNS.HorizontalAlign.center);

    sheet.resumePaint();
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
