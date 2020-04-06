
const EN = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','DEL'],
['Caps Lock','A','S','D','F','G','H','J','K','L','\;','\'','Enter'],
['Shift','\\','Z','X','C','V','B','N','M','\,','\.','\/','&#8593;','Shift'],
['Ctrl','Win','Alt','Space','Alt','Ctrl','&#8592;','&#8595;','&#8594;']]

const KEYCODE = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']]

const RU = [['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','DEL'],
['Caps Lock','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
['Shift','\\','я','ч','с','м','и','т','ь','б','ю','\/','&#8593;','Shift'],
['Ctrl','Win','Alt','Space','Alt','Ctrl','&#8592;','&#8595;','&#8594;']]

let pressed = new Set();

let lang;

if(localStorage.getItem('En') == true || localStorage.getItem('En') == null){
    lang = EN;
} else {
    lang = RU;
}

window.onload = function() {
    generateElementsBlock();
    generateElementKey(lang);
    keyPressHandler();
    clickKey();
}

const generateElementsBlock = ()=>{
    let section = document.createElement('section');
    let input = document.createElement('textarea');
    input.classList.add('input');
    let div = document.createElement('div');
    div.classList.add('key-wrapper');

    document.body.append(section);
    section.append(input);
    section.append(div);
}

const generateElementKey = (arr) => {
    lang = arr;
    for(let i = 0; i < arr.length; i++){
      let div = document.createElement('div');
      div.classList.add('row');
      for (let j = 0; j < arr[i].length; j++){
          let p = document.createElement('p');
          p.classList.add('key-elem');
          p.setAttribute('data-key', KEYCODE[i][j])
          p.innerHTML = arr[i][j];
          div.append(p);
      }
      let keyWrapper = document.querySelector('.key-wrapper');
      keyWrapper.append(div);
  }
}

const keyPressHandler = () => {
    document.addEventListener('keydown', keyShow);
    changeLanguage('ShiftLeft','ControlLeft');
    document.addEventListener('keyup', (event) => {
        pressed.delete(event.code);
      });
}

const changeLanguage = (...codes) => {
    
        let pressed = new Set();
  
        document.addEventListener('keydown', function(event) {
          pressed.add(event.code);
  
          for (let code of codes) { 
            if (!pressed.has(code)) {
              return;
            }
          }
  
          
          pressed.clear();

          document.querySelector('.key-wrapper').innerHTML = '';

          if(lang === EN){
            generateElementKey(RU);
            saveLang(false)
          } else {
            generateElementKey(EN);
            saveLang(true)
          }
        });
  
        document.addEventListener('keyup', function(event) {
          pressed.delete(event.code);
        });
}

const keyShow = (event) => {
    let input = document.querySelector('textarea');
    let code = event.code;
    let keys = document.querySelectorAll('.key-elem');

    if(event.key.length == 1){
        input.innerHTML += event.key;
        input.focus();
    }

    pressed.add(event.code);

    for(let i = 0; i < keys.length; i++){
        keys[i].classList.remove('active');;
        if(pressed.has(keys[i].getAttribute('data-key'))){
            keys[i].classList.add('active');
        }
    }
} 
 
const clickKey = () => {
    let keys = document.querySelector('.key-wrapper');
    keys.addEventListener('click', clickVirtual)
}
let pressedVirtual = new Set();

const clickVirtual = (event) => {
    let input = document.querySelector('textarea');
    let pos = getCaretPosition (input);
    let keys = document.querySelectorAll('.key-elem'); 

     
    pressedVirtual.add(event.target.getAttribute('data-key'));

let flag = false;

    if(pressedVirtual.has('CapsLock')){
        flag = true;
        event.target.classList.add('active');
        event.target.addEventListener('click', back)
        for(let i = 0; i < keys.length; i++){
            if(keys[i].innerHTML.length == 1){
            keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            } 
        }
    }



    function back(){
    for(let i = 0; i < keys.length; i++){
        if(keys[i].innerHTML.length == 1){
        keys[i].innerHTML = keys[i].innerHTML.toLowerCase();
        } 
    }
flag = false;
    pressedVirtual.clear();
    }


    if(event.target.closest('.key-elem') && (event.target.innerHTML.length == 1)){
        input.innerHTML += event.target.innerHTML; 
        setCaretPosition (input, pos + 1);
        
        for(let i = 0; i < keys.length; i++){
            keys[i].classList.remove('active');
        } 
        event.target.classList.add('active');
       if(!flag){
        back();
    }
    }
    
    if(event.target.getAttribute(['data-key']) == 'Delete'){
        
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos, 1)
        input.innerHTML = inputValue.join('');
        setCaretPosition (input, pos)
        input.focus();
    }
    if(event.target.getAttribute(['data-key']) == 'Backspace'){
         
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos - 1, 1)
        input.innerHTML = inputValue.join('');
        setCaretPosition (input, pos - 1)
        input.focus();
    }

    if(event.target.getAttribute(['data-key']) == 'Tab'){
        input.innerHTML = input.innerHTML + '   ';
        setCaretPosition (input, pos + 3) 
        input.focus();
    }
    
    if(event.target.getAttribute(['data-key']) == 'Enter'){
        //console.log(pos); xonsole.log(input.innerHTML.split('').splice(0, pos))
        let inputValue = input.innerHTML.split('');
        inputValue.splice(pos, 0, '\r\n');
        input.innerHTML = inputValue.join('');
       // console.log(pos, input.innerHTML.split('').splice(1, 0, '\r\n'));
        setCaretPosition (input, input.innerHTML.length) 
        input.focus();
    }

    if (pressedVirtual.has('ShiftLeft') || pressedVirtual.has('ShiftRight')) {
        event.target.classList.add('active')
        for(let i = 0; i < keys.length; i++){
            if(keys[i].innerHTML.length == 1){
            keys[i].innerHTML = keys[i].innerHTML.toUpperCase();
            } 
        }
        

    }

    
 
    function getCaretPosition (elem) {
        var caretPos = 0;
    
        if (document.selection) { // ie
            elem.focus ();
            var range = document.selection.createRange ();
            elem.moveStart ('character', -elem.innerHTML.length);
            caretPos = range.text.length;
        } else if (elem.selectionStart || elem.selectionStart == '0') { // Mozilla
            caretPos = elem.selectionStart;
        }
    
        return caretPos;
    }
    

    function setCaretPosition (elem, caretPos) {
        if (document.selection) { // ie
            elem.focus ();
            var range = document.selection.createRange ();
            range.moveStart ('character', -elem.innerHTML.length);
            range.moveStart ('character', caretPos);
            range.moveEnd ('character', 0);
            range.select ();
        } else if (elem.selectionStart || elem.selectionStart == '0') { // Mozilla
            elem.selectionStart = caretPos;
            elem.selectionEnd = caretPos;
            elem.focus ();
        }
    }
    
}

const saveLang = (bool) => {
    localStorage.setItem('En', bool);
    
}

