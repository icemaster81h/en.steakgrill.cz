(function(){
  
  if (!'print' in window) {
    return;
  }
  
  var url = new URL(window.location.href);
  if (url.searchParams.get("print") === null) {
    return;
  }
  
  var styles = " \
  * { \
    margin: 0; \
    padding: 0; \
    box-sizing: border-box; \
  } \
  body > div { \
    display: inline-block; \
    float: left; \
    width: 25vw; \
    height: 50vh; \
    background: #ddd; \
    padding: 1.5mm; \
    position: relative; \
    z-index: -1; \
  } \
  div > div { \
    background: white; \
    height: 100%; \
    position: relative; \
  } \
  div > div:before { \
    content: \"\"; \
    display: block; \
    position: absolute; \
    width: 100%; \
    height: calc(100% + 3mm); \
    background: white; \
    top: -1.5mm; \
    z-index: -1; \
  } \
  div > div:after { \
    content: \"\"; \
    display: block; \
    position: absolute; \
    width: calc(100% + 3mm); \
    height: 100%; \
    background: white; \
    left: -1.5mm; \
    top: 0; \
    z-index: -1; \
  } \
  body > div > div > * { \
    position: relative; \
    z-index: 1; \
  } \
  body > div:after { \
    content: \"\"; \
    width: 80%; \
    height: 100%; \
    background: url(\"/files/piktogram_orez_4.png\") no-repeat bottom right; \
    display: block; \
    position: absolute; \
    bottom: 0; \
    right: 0; \
    background-size:  contain; \
  } \
  dt.price, \
  .noprint { \
    display: none; \
  } \
  @media all and (orientation: portrait) and (min-width: 200mm) { \
    body > div { \
      height: 25vh; \
    } \
  } \
  /**********************/ \
  div { \
    font-size: 10pt; \
    font-family: Roboto, sans-serif; \
  } \
  h1, dl { \
    padding: 1em 1rem; \
  } \
  h1 +dl { \
    padding-top: 0; \
  } \
  h1 { \
    font-weight: 400; \
  } \
  dl dt, \
  dl dd { \
    margin: 0; \
  } \
  dl.meal dt { \
    font-size: 12pt; \
    font-weight: 500; \
    margin-bottom: 0.3em; \
  } \
  dl.meal dd.price { \
    display: flex; \
    /* margin-left: auto; */ \
    justify-content: flex-end; \
    font-weight: 500; \
    margin-top: 0.2em; \
    font-size: 12pt; \
  } \
  dl.meal dd.price > span { \
    margin: 0 0.75em; \
  } \
  dl.meal dd.price > span:last-child { \
    margin-right: 0; \
  } \
  dl.meal dd.price > span > span:first-child { \
    display: block; \
    text-align: right; \
    font-weight: normal; \
    font-size: 10pt; \
  } \
  dl.meal dd.price > span > span + span { \
    font-weight: 500; \
  } \
  svg { \
    display: none \
  ";
  var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  function printNabidka () {
      var printWin = window.open('', 'PRINT', 'height=' + y + ',width=' + x);

      printWin.document.write('<html><head><link href="//fonts.googleapis.com/css?family=Roboto:400,500&amp;subset=latin-ext" rel="stylesheet"></head><body>');

      var polevka = document.querySelectorAll("dl.meal[data-type='Polévka'], dl.meal[data-type='Soup']")[0].cloneNode(true);
      var jidlo = document.querySelectorAll("dl.meal[data-type='Jídlo'], dl.meal[data-type='Main meal']")[0].cloneNode(true);
      var wrap = document.createElement('div');
      var div1 = document.createElement('div');
      var div2 = document.createElement('div');
      wrap.appendChild(div1);
      div1.appendChild(div2);
      var h1 = document.createElement('h1');
      h1.innerHTML = nadpis.title;
      div2.appendChild(h1);
      div2.appendChild(polevka);
      div2.appendChild(jidlo);

      for (var i = 0; i < 16; i++) {
        printWin.document.write(wrap.innerHTML);
      }
      printWin.document.write('</body></html>');

      var style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(styles));
      printWin.document.head.appendChild(style);

      printWin.document.close(); // necessary for IE >= 10
      printWin.focus(); // necessary for IE >= 10*/
      
    
      printWin.setTimeout(function () {
        printWin.print();
      }, 300);
    
      //printWin.close();

      return true;
  }

  var button = document.createElement('button');
  var span = document.createElement('span');
  button.appendChild(span);
  button.style = "width: 1em; margin-left: 0.5em; white-space: nowrap; overflow: hidden; border: 0; background: none; cursor: pointer;";
  button.title = button.innerHTML;
  span.innerHTML = 'Vytisknout denní nabídku';
  span.className = 'noprint fas fa-print';
  var nadpis = document.getElementById('denni_nabidka');
  if (!nadpis) {
    nadpis = document.getElementById('daily_offer');
  }
  nadpis.appendChild(button);
  button.addEventListener('click', printNabidka, false);
})()
